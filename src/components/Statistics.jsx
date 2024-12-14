import { Cell, Pie, PieChart } from "recharts";

// all implementation later
const Statistics = () => {
  const data = [
    { name: "Entertainment", value: 30, fill: "rgba(52, 60, 106, 1)" },
    { name: "Investment", value: 20, fill: "rgba(250, 0, 255, 1)" },
    { name: "Others", value: 35, fill: "rgba(24, 20, 243, 1)" },
    { name: "Bill Expense", value: 15, fill: "rgba(252, 121, 0, 1)" },
  ];

  return (
    <div className="flex-center w-full">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={135}
          startAngle={40}
          endAngle={400}
          labelLine={false}
        />
      </PieChart>
    </div>
  );
};
export default Statistics;
