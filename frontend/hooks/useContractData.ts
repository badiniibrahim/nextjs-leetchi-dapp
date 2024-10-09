import { useReadContract } from "wagmi";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "@/constants";

export function useContractData() {
  const [end, setEnd] = useState<string>("");

  // Use the useReadContract hook to fetch data
  const { data: endData } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "end",
  }) as any;

  useEffect(() => {
    if (endData) {
      let newDate = new Date(parseInt(endData) * 1000);
      let day = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      let date: string = day + "/" + month + "/" + year;
      setEnd(date);
    }
  }, [endData]);

  return end;
}
