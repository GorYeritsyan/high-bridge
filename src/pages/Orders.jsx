import React from "react";
import Table from "@/components/Table.jsx";
import ItemsPagination from "@/components/ItemsPagination.jsx";

const Orders = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-10">
        <h2 className="text-primary-dark text-[22px] font-semibold">
          Order list
        </h2>
        <Table type="order" />
      </div>
      <ItemsPagination />
    </div>
  );
};
export default Orders;
