import React from 'react'

// data for table content
const dashboardTableData = [
    {id: '01.', name: 'Trivago', price: 520, quantity: 100},
    {id: '02.', name: 'Canon', price: 480, quantity: 50},
    {id: '03.', name: 'Uber Food', price: 350, quantity: 100},
    {id: '04.', name: 'Nokia', price: 940, quantity: 30},
    {id: '05.', name: 'Tiktok', price: 670, quantity: 100},
]

const DashboardTable = () => {
    return (
        <div className='flex-center w-full px-[25px] py-[15px] pr-20'>
            <table className='table-auto w-full relative left-6'>

                {/*table header*/}
                <thead className='*:text-base *:text-[rgb(113,142,191)] *:font-medium'>
                <tr className='border-b border-b-[rgb(244,245,247)]'>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </tr>
                </thead>

                {/*table content*/}
                <tbody className='*:text-base *:text-[rgb(35,35,35)] *:h-9   font-normal'>
                {dashboardTableData.map(product => (
                    // each product in the table
                    <tr key={product.id}>
                        <td className='w-[140px]'>{product.id}</td>
                        <td className='w-[220px]'>{product.name}</td>
                        <td className='w-[180px]'>{`$${product.price}`}</td>
                        <td className='font-medium text-[rgb(22,219,170)]'>{product.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default DashboardTable
