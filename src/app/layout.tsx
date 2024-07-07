import "./globals.css";

export const metadata = {
  title: "Spotify",
  description: "Ouça músicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-300">{children}</body>
    </html>
  );
}
