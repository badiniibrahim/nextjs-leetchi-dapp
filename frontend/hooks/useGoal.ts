import { useReadContract } from "wagmi";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "@/constants";

export function useGoal() {
  const [goal, setGoal] = useState<string>("");

  const { data: g } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "goal",
  }) as any;

  useEffect(() => {
    if (g) {
      setGoal(g);
    }
  }, [g]);

  return { goal, setGoal };
}
