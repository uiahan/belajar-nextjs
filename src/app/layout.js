import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
