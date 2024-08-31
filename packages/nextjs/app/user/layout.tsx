"use client";

import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../components/shared/DashboardSidebar";
import DashboardHeader from "../../components/shared/DashboardHeader";
import DashboardFooter from "../../components/shared/DashboardFooter";
import { useRouter } from "next/navigation";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const { isConnected } = useWeb3ModalAccount();
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" bg-lightgreen/[20%]">
      {/* Page Wrapper Start  */}
      <div className="flex h-screen gap-1.5 overflow-hidden">
        {/* Sidebar Start */}
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Sidebar End  */}

        {/* Content Area Start  */}
        <div className="relative flex min-h-screen flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
          <section>
            {/*  Header Start */}
            <DashboardHeader
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            {/*  Header End */}

            {/*  Main Content Start */}
            <main>
              <div className="mx-auto max-w-screen-2xl pt-4 pb-6 md:pt-4 md:pb-10 2xl:p-10">
                <section className="w-full px-4 md:px-3">{children}</section>
              </div>
            </main>
          </section>
          {/*  Main Content End  */}
          <DashboardFooter />
        </div>
        {/*  Content Area End  */}
      </div>
      {/*  Page Wrapper End  */}
    </div>
  );
}
