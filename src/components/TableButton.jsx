const TableButton = ({ type }) => {
  return (
    <button className="flex items-center border border-[rgb(18,50,136)] bg-white text-[rgb(18,50,136)] rounded-full text-[15px] font-normal w-[100px] px-4 h-9 hover:bg-[rgb(18,50,136)] hover:text-white transition duration-100">
      {type === "order" ? "View" : "Edit"}
    </button>
  );
};
export default TableButton;
