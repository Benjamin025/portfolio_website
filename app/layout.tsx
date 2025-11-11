// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = {
  title: "Karanja Benjamin | Portfolio",
  description: "GIS Specialist & Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="pt-20">{children}</main>{" "}
        {/* Add padding for fixed navbar */}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
