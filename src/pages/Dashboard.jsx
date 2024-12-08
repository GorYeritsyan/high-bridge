import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }

  return <div>Dashboard</div>;
};
export default Dashboard;
