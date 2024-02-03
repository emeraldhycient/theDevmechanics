import type { Metadata } from "next";
import "./styles/globals.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Devmechanics",
  description: "We build custom software to meet your unique needs, driving Efficiency & Organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className={`bg-black text-white [&_p]:w-full [&_p]:text-center text-center w-full sticky top-0 left-0 py-3 text-xs`}>
          <p>A custom notification goes here ✨</p>
        </section>

        {children}
      </body>
    </html>
  );
}
