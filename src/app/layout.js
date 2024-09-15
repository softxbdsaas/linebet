import { Roboto } from "next/font/google";
import "./globals.css";
// Import Roboto font
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "Line bet",
  description: "Online line bet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
