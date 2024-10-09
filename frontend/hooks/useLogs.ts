import { useState, useEffect } from "react";
import { contractAddress } from "@/constants";
import { parseAbiItem } from "viem";
import { Contributor } from "@/types";
import { usePublicClient } from "wagmi";

export function useLogs() {
  const [events, setEvents] = useState<Contributor[]>([]);
  const client = usePublicClient();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logs = await client?.getLogs({
          address: contractAddress,
          event: parseAbiItem(
            "event Contribute(address indexed contributor, uint256 amount)"
          ),
          fromBlock: 0n,
          toBlock: "latest",
        });

        if (logs) {
          const contributors = logs.map((log) => ({
            contributor: log.args.contributor as string,
            amount: (log.args.amount as bigint).toString(),
          }));
          setEvents(contributors);
          console.log({ contributors });
        }
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, [client]);

  return events;
}
