import { ToastContainer } from "react-toastify";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import MobileMenu from "@/components/shared/mobileMenus/MobileMenu";
import MobileFooter from "@/components/shared/footers/MobileFooter";
import MobileAccountSidebar from "@/components/shared/sidebars/accountLeftSidebar/MobileAccountSidebar";
import NextAuthSessionProvider from "@/components/auth/NextAuthSessionProvider";
import ChattingBox from "@/components/chattingsBox/ChattingBox";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Mybet27",
  description: "Online line betting website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ReduxProvider>
          <NextAuthSessionProvider>
            {children}
            {/* Modal root for portals */}
            <div id="modal-root-content" />
            <ToastContainer />
            <MobileMenu />
            <MobileFooter />
            <MobileAccountSidebar />
            <ChattingBox />
          </NextAuthSessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
