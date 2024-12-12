import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardContent from "../components/DashboardContent.jsx";
import TotalInfo from "../components/TotalInfo.jsx";
import { imageBaseUrl } from "../components/Sidebar.jsx";
import DashboardTable from "@/components/DashboardTable.jsx";
import RecentOrders from "@/components/RecentOrders.jsx";
import Statistics from "@/components/Statistics.jsx";
import Activity from "@/components/Activity.jsx";

const Dashboard = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div className="pb-[160px]">
      <div className=" grid grid-cols-[2fr_1fr] grid-rows-[282px_367px] gap-x-[25px] gap-y-6">
        <DashboardContent
          title="Most selling products"
          content={<DashboardTable />}
        />
        <DashboardContent title="Recent Orders" content={<RecentOrders />} />
        <DashboardContent title="Weekly Activity" content={<Activity />} />
        <DashboardContent title="Expense Statistics" content={<Statistics />} />
      </div>
      <div className="flex items-center justify-between space-x-[30px] mt-[69px] h-[120px] *:h-full *:bg-white *:rounded-custom *:py-[25px] *:pl-[41px] *:pr-[25px]  *:w-full">
        <TotalInfo
          title="Products"
          image={imageBaseUrl + "/product-icon.svg"}
          amount={"2,300,300"}
        />
        <TotalInfo
          title="Orders"
          image={imageBaseUrl + "/orders-icon.svg"}
          amount={"3,000"}
        />
        <TotalInfo
          title="Revenue"
          image={imageBaseUrl + "/revenue-icon.svg"}
          amount={"$3,460"}
        />
        <TotalInfo
          title="Total Saving"
          image={imageBaseUrl + "/savings-icon.svg"}
          amount={"$7,920"}
        />
      </div>
    </div>
  );
};
export default Dashboard;
