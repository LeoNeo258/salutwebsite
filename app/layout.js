import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata = {
  title: "Salut! — AI-Powered ERP for Independent Supermarkets",
  description:
    "The all-in-one AI-powered ERP designed specifically for independent supermarkets. Manage POS, inventory, and staff in one simple system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
