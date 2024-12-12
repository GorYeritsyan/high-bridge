import React from "react";
import Table from "@/components/Table.jsx";

const Orders = () => {
  return (
      <div className='flex flex-col '>
        <h2 className='text-primary-dark text-[22px] font-semibold'>Order list</h2>
        <Table />
      </div>
  );
};
export default Orders;
