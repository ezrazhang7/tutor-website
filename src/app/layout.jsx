import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Yaxin Zhang Tutoring Website",
  description: "Middle/High School Math, English, Science Tutoring Services in Arlington, MA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
