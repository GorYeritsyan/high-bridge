import React from "react";
import { recentOrders } from "@/data.js";
import RecentOrder from "@/components/RecentOrder.jsx";

const RecentOrders = () => {
  return (
    <div className="flex justify-between items-start p-6 w-full flex-col">
      {recentOrders.map((recentOrder) => (
        <RecentOrder
          title={recentOrder.title}
          key={recentOrder.id}
          orderDate={recentOrder.orderDate}
          orderAmount={recentOrder.orderAmount}
          image={recentOrder.image}
        />
      ))}
    </div>
  );
};
export default RecentOrders;
