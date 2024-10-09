"use client";

import React, { FC } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useAccount } from "wagmi";
import { formatEther } from "viem";

const chartData = [
  { browser: "chrome", visitors: 75, fill: "var(--color-chrome)" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type Props = {
  end: string;
  goal: string;
  totalCollected: string;
};

const CustomChart: FC<Props> = ({ end, goal, totalCollected }) => {
  const { address, isConnected } = useAccount();

  const totalVisitors = (
    (parseFloat(totalCollected) / parseFloat(goal)) *
    100
  ).toFixed(2);

  return (
    <Card className="flex flex-col rounded-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle>Contribute state</CardTitle>
        <CardDescription>{`End date : ${end}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors} %
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Collected
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by{" "}
          {((parseFloat(totalCollected) / parseFloat(goal)) * 100).toFixed(2)} %
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {Number(formatEther(BigInt(totalCollected))).toFixed(2)} ETH /{" "}
          {Number(formatEther(BigInt(goal))).toFixed(2)} ETH
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomChart;
