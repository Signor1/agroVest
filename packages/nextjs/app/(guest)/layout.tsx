"use client"

import React, { useEffect } from "react";
import { ScaffoldEthApp } from "../../components/ScaffoldEthAppWithProviders";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter();

    const { isConnected } = useWeb3ModalAccount()
  useEffect(() => {
    if (isConnected) {
      router.push("/user");
    }
  }, [isConnected]);
  return <ScaffoldEthApp>{children}</ScaffoldEthApp>;
}
