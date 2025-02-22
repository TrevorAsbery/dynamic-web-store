import Nav from "../../components/Nav";
import Cart from "../../components/Cart";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Cart />
        {children}
      </body>
    </html>
  );
}
