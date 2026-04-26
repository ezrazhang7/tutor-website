import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          border: "3px solid #000",
          fontFamily: "Arial, sans-serif",
          fontSize: 18,
          fontWeight: 900,
        }}
      >
        Y
      </div>
    ),
    size
  );
}
