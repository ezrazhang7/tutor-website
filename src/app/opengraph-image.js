import { ImageResponse } from "next/og";

export const alt = "Yaxin Zhang Tutoring in Arlington, MA";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px",
          background: "linear-gradient(135deg, #f7a51a 0%, #ffbe45 50%, #ffd56a 100%)",
          color: "#242424",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "18px 30px",
            border: "6px solid #000",
            borderRadius: "999px",
            background: "#ff6a57",
            fontSize: 34,
            fontWeight: 800,
          }}
        >
          Arlington, MA + Online
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860 }}>
          <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 0.95 }}>
            Yaxin Zhang Tutoring
          </div>
          <div style={{ fontSize: 36, lineHeight: 1.25 }}>
            SAT prep, math, academic writing, AP coursework, college essays, and music lessons.
          </div>
        </div>
      </div>
    ),
    size
  );
}
