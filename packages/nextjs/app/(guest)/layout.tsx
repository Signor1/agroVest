import React from "react";
import { ScaffoldEthApp } from "../../components/ScaffoldEthAppWithProviders";

export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ScaffoldEthApp>
            {children}
        </ScaffoldEthApp>
    );
}
