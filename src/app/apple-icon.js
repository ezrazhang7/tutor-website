import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#ff6a57",
          color: "#242424",
          border: "12px solid #000",
          fontFamily: "Arial, sans-serif",
          fontSize: 108,
          fontWeight: 900,
        }}
      >
        Y
      </div>
    ),
    size
  );
}
