import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tareas",
    description: "CRUD de tareas",
    icons: {
        icon: [{ url: "/next.svg", href: "/next.svg" }],
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
