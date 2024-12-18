import {cn} from '../lib/utils'

// label for displaying chart items
const BarChartLabel = ({ title }) => {
  return (
    <div className="flex-center space-x-[10px]">
      <div className={cn('w-[15px] h-[15px] rounded-full', title === 'Deposit' ? 'bg-[rgb(22,219,204)]' : 'bg-[rgb(255,130,172)]')}></div>
      <span className="text-[rgb(113,142,191)] text-[15px] font-normal">
        {title}
      </span>
    </div>
  );
};
export default BarChartLabel;
