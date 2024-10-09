"use client";

import { useEffect } from "react";
import Footer from "@/components/shared/Foot";
import Header from "@/components/shared/Header";
import { useWaitForTransactionReceipt, useAccount } from "wagmi";
import { toast } from "sonner";
import { useLogs } from "@/hooks/useLogs";
import ContributeForm from "@/components/shared/ContributeForm";
import { EventsList } from "@/components/shared/EventsList";
import Hero from "@/components/shared/Hero";
import Features from "@/components/shared/Features";
import HowItWorks from "@/components/shared/HowItWorks";

export default function Home() {
  const { isConnected } = useAccount();
  const events = useLogs();
  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt();

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Transaction confirmed successfully!");
    }
  }, [isConfirmed]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="relative flex before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {isConnected ? (
          <ContributeForm />
        ) : (
          <div>
            <Hero />
            <Features />
            <HowItWorks />
          </div>
        )}
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Footer />
      </div>
    </main>
  );
}
