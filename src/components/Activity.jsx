import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartLabel from "@/components/BarChartLabel.jsx";

const Activity = () => {
  // data for later use
  const data = [
    {
      name: "Sat",
      Withdraw: 480,
      Deposit: 240,
    },
    {
      name: "Sun",
      Withdraw: 340,
      Deposit: 120,
    },
    {
      name: "Mon",
      Withdraw: 330,
      Deposit: 260,
    },
    {
      name: "Tue",
      Withdraw: 450,
      Deposit: 380,
    },
    {
      name: "Wed",
      Withdraw: 130,
      Deposit: 230,
    },
    {
      name: "Thu",
      Withdraw: 395,
      Deposit: 235,
    },
    {
      name: "Fri",
      Withdraw: 395,
      Deposit: 320,
    },
  ];
  return (
    <div className="w-full h-full p-8  pl-0 flex-col flex-center justify-between">
      {/*// label for chart*/}
      <div className="flex justify-end space-x-7 w-full">
        <BarChartLabel title="Deposit" />
        <BarChartLabel title="Withdraw" />
      </div>

      <div className="relative w-full left-3 top-4">
        <BarChart width={720} height={226} data={data}>
          {/*horizontal lines*/}
          <CartesianGrid vertical={false} stroke="rgba(243, 243, 245, 1)" />
          {/*horizontal coordinates*/}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 13,
              fill: "rgb(113,142,191)",
              fontWeight: "normal",
            }}
          />
          {/*vertical coordinates */}
          <YAxis
            tickCount={6}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 13,
              fill: "rgb(113,142,191)",
              fontWeight: "normal",
            }}
          />
          {/*tooltip for describing info*/}
          <Tooltip
            cursor={{
              fill: "rgb(240, 240, 240)",
            }}
          />
          {/*bar is showing chart items*/}
          <Bar
            barSize={15}
            dataKey="Withdraw"
            fill="rgba(24,20,243,1)"
            radius={100}
          />
          <Bar
            barSize={15}
            dataKey="Deposit"
            fill="rgba(22,219,204,1)"
            radius={100}
          />
        </BarChart>
      </div>
    </div>
  );
};
export default Activity;
