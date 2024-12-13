import { tableData, ordersTableHeader, productsTableHeader } from "../data";
import TableButton from "@/components/TableButton.jsx";
import Amount from "@/components/Amount.jsx";

const Table = ({ type }) => {
  return (
    <div className="w-full h-[737px] px-[30px] py-4 bg-white rounded-custom relative right-4">
      <table className="table h-full w-full ">
        <thead className="text-[rgb(113,142,191)] text-base font-medium border-b border-[rgb(230,239,245)]">
          <tr>
            {type === "order"
              ? ordersTableHeader.map((header) => (
                  <td className="pb-2" key={header}>
                    {header}
                  </td>
                ))
              : productsTableHeader.map((header) => (
                  <td className="pb-2" key={header}>
                    {header}
                  </td>
                ))}
          </tr>
        </thead>
        <tbody className="text-[rgb(35,35,35)] text-base font-normal">
          {tableData.map((item, index) => (
            <tr
              className="*:py-4 border-t border-[rgb(242,244,247)]"
              key={index}
            >
              <td className="w-[230px]">{item.description}</td>
              <td className="w-[155px]">{item.orderId}</td>
              <td className="w-[126px]">{item.type}</td>
              <td className="w-[135px]">{item.userId}</td>
              <td className="w-[200px]">{item.date}</td>
              <td className="w-[110px]">
                <Amount amount={item.amount} />
              </td>
              <td className="w-[20px]">
                <TableButton type={type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
