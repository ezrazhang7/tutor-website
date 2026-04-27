import { unstable_noStore as noStore } from "next/cache";
import { getSupabaseAdmin } from "./supabase-admin";

function withIndefiniteArticle(value) {
  const trimmed = String(value || "").trim();

  if (!trimmed) {
    return "a student";
  }

  const startsWithVowelSound = /^[aeiou]/i.test(trimmed) || /^(8|11|18)/.test(trimmed);

  return `${startsWithVowelSound ? "an" : "a"} ${trimmed}`;
}

function getDisplayAttribution(row) {
  const displayName = String(row.display_name || "").trim();

  if (displayName) {
    return displayName;
  }

  return `Parent of ${withIndefiniteArticle(row.student_grade)}`;
}

function normalizeTestimonial(row) {
  return {
    id: row.id,
    rating: row.rating,
    quote: String(row.display_text || row.testimonial || "").trim(),
    attribution: getDisplayAttribution(row),
  };
}

export async function getApprovedTestimonials(limit = 6) {
  noStore();

  let supabase;

  try {
    supabase = getSupabaseAdmin();
  } catch {
    return [];
  }

  const { data, error } = await supabase
    .from("testimonial_submissions")
    .select("id, rating, testimonial, student_grade, display_name, display_text, approved_at, created_at")
    .eq("status", "approved")
    .order("approved_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error || !data) {
    return [];
  }

  return data.map(normalizeTestimonial).filter((row) => row.quote);
}
