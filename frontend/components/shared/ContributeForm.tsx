import { useEffect, useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import CustomChart from "@/components/shared/Donut";
import { parseEther } from "viem";
import { toast } from "sonner";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
} from "wagmi";
import { abi, contractAddress } from "@/constants";
import { useContractData } from "@/hooks/useContractData";

const ContributeForm = () => {
  const [amount, setAmount] = useState<string>("");
  const { data: hash, writeContract, isPending } = useWriteContract();
  const end = useContractData();

  const result = useReadContract({
    abi,
    address: contractAddress,
    functionName: "totalCollected",
  });

  const goalResult = useReadContract({
    abi,
    address: contractAddress,
    functionName: "goal",
  });

  const handleDonate = async () => {
    try {
      let money = parseEther(amount);
      writeContract({
        address: contractAddress,
        abi,
        functionName: "contribut",
        value: money,
      });
    } catch (e) {
      toast.error("An error occurred");
    }
  };

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed) {
      result.refetch();
      toast.success("Transaction confirmed successfully!");
    }
  }, [isConfirmed, result]);

  return (
    <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
      <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#808191]">
        Contribute
      </p>
      <div className="flex flex-row justify-between gap-9">
        <div className="mt-[30px]">
          <input
            type="number"
            placeholder="ETH 0.1"
            step="0.01"
            className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
              Back it because you believe in it.
            </h4>
            <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>

          <CustomButton
            btnType="button"
            title={isPending ? "Confirming..." : "Contribute"}
            styles="w-full bg-[#8c6dfd]"
            handleClick={handleDonate}
            disabled={isPending}
          />
        </div>

        {(result.data || goalResult.data) !== undefined && (
          <CustomChart
            end={end!}
            goal={String(goalResult.data)}
            totalCollected={String(result.data)}
          />
        )}
      </div>
    </div>
  );
};

export default ContributeForm;
