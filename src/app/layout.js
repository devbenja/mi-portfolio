import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "benjadev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  );
}
