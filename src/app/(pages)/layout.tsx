"use client";
import { Header } from "@/components/molecules";
import { Footer } from "@/components/templates";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactLenis root>
			<main>
				<Header />
				{children}
				<Footer />
			</main>
		</ReactLenis>
	);
};

export default Layout;
