"use client";
import { Header } from "@/components/molecules";
import { Footer } from "@/components/templates";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";
import { Toaster } from "react-hot-toast";
import {
	useQuery,
	useMutation,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactLenis root>
				<main>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</main>
			</ReactLenis>
		</QueryClientProvider>
	);
};

export default Layout;
