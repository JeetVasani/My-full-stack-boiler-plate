import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Automation App",
  description: "User-protected app",
};
export default function RootLayout({ }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-black">
        
        <Navbar />

        <main className="flex-1">
          
        </main>

        <Footer />

      </body>
    </html>
  );
}
