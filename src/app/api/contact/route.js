const SCRIPT_URL =
  process.env.CONTACT_SCRIPT_URL || process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL || "";

export async function POST(request) {
  if (!SCRIPT_URL) {
    return Response.json(
      {
        ok: false,
        error: "Contact form endpoint is not configured yet.",
      },
      { status: 500 }
    );
  }

  let bodyText = "";

  try {
    bodyText = await request.text();
  } catch {
    return Response.json(
      {
        ok: false,
        error: "Invalid request body.",
      },
      { status: 400 }
    );
  }

  try {
    const upstreamResponse = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: bodyText,
      cache: "no-store",
      redirect: "follow",
    });

    const upstreamText = await upstreamResponse.text();
    let payload = null;

    try {
      payload = JSON.parse(upstreamText);
    } catch {
      payload = {
        ok: false,
        error: "Upstream contact endpoint returned a non-JSON response.",
      };
    }

    return Response.json(payload, {
      status: upstreamResponse.ok && payload?.ok ? 200 : 502,
    });
  } catch {
    return Response.json(
      {
        ok: false,
        error: "Unable to reach the contact form endpoint.",
      },
      { status: 502 }
    );
  }
}
