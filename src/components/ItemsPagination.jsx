// pagination for orders and products list pages
import { useMemo, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { cn } from "@/lib/utils.js";

// total pages need to be fetched
let totalPages = 4;

// current pagination page
let page = 1;

const ItemsPagination = () => {
  // **** Pagination logic start **** //

    // *** pagination portion *** //
  const [portionNumber, setPortionNumber] = useState(1);

  //*** pagination length setting ***//
    // *** shows how much items need to be display ***//
  const paginationLength = 10;

  // *** left pagination number depending on current portion *** //
  const paginationStart = (portionNumber - 1) * paginationLength + 1;

  // *** right pagination number depending on current portion *** //
  const paginationEnd = portionNumber * paginationLength;
  // **** Pagination logic end **** //

    // initial array for pagination items
  let paginationItems = [];

  // pagination items array length of total pages
 const newPaginationItems = useMemo(() => {
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(i);
      console.log(i);
    }
    return paginationItems;
  }, []);

  return (
      <div className='flex items-center justify-end'>

          <div className="flex-center">
              {/*pagination previous button*/}
              {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className='group h-10 flex-center text-pagination-color text-[15px] font-medium hover:bg-pagination-color hover:text-white rounded-[10px] pr-4 pl-2'>
                  <GrFormPrevious className='group-hover:text-white text-2xl'/>
                  Previous</button>}
              {/*pagination numbers depending on settings*/}
              {newPaginationItems
                  .filter((item) => item >= paginationStart && item <= paginationEnd)
                  .map((item) => (
                      <button
                          className={cn(
                              "w-10 h-10 border-none outline-none flex-center text-[15px] font-medium bg-transparent rounded-[10px] hover:bg-pagination-color hover:text-white",
                              page === item
                                  ? "bg-pagination-color text-white"
                                  : "text-pagination-color bg-transparent",
                          )}
                          key={item}
                      >
                          {item}
                      </button>
                  ))}
              {/*pagination next button*/}
              {(totalPages / paginationLength) !== portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} className='group h-10 flex-center text-pagination-color text-[15px] font-medium hover:bg-pagination-color hover:text-white rounded-[10px] pr-2 pl-4'>
                  Next
                  <GrFormNext className='group-hover:text-white text-2xl' />
              </button>}
          </div>
      </div>
  );
};
export default ItemsPagination;
