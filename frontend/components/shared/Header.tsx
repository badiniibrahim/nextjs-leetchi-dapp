import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="font-bold text-xl">Leetchi DAPP</div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <ConnectButton label="Connect wallet" />
      </div>
    </div>
  );
}

export default Header;
