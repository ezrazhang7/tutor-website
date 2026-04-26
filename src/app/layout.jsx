import "./globals.css";

export const metadata = {
  title: "Sandra Matthews Portfolio",
  description: "Neo-brutalist portfolio landing page implementation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
