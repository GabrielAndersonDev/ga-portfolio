import "../ui/globals.css";

export const metadata = {
  title: "Gabriel A. Portfolio",
  description: "Gabriel Anderson's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
