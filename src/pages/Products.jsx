import Table from "@/components/Table.jsx";
import ItemsPagination from "@/components/ItemsPagination.jsx";

const Products = () => {
  return (
      <div className='flex flex-col space-y-5'>
          <div className="flex flex-col space-y-10">
              <h2 className="text-primary-dark text-[22px] font-semibold">
                  Product list
              </h2>
              <Table type="product"/>
          </div>
          <ItemsPagination />
      </div>
  );
};
export default Products;
