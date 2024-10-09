import { useReadContract } from "wagmi";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "@/constants";

export function useTotalCollected() {
  const [totalCollected, setTotalColleted] = useState<string>("");

  const { data: total } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "totalCollected",
  }) as any;

  useEffect(() => {
    if (total) {
      setTotalColleted(total);
      console.log({ total });
    }
  }, [total]);

  return { totalCollected, setTotalColleted };
}
