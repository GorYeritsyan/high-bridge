// label for displaying chart items
const BarChartLabel = ({ title, color }) => {
  return (
    <div className="flex-center space-x-[10px]">
      <div className={`w-[15px] h-[15px] bg-[${color}] rounded-full`}></div>
      <span className="text-[rgb(113,142,191)] text-[15px] font-normal">
        {title}
      </span>
    </div>
  );
};
export default BarChartLabel;
