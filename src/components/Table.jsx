const tableData = [
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan 12.30 ',
        amount: 2500,
    },
    {
        description: 'Spotify Subscription',
        orderId: '#12548796',
        type: 'Shopping',
        userId: '0003203',
        date: '28 Jan,  12.30AM ',
        amount: 2500,
    },

]

const Table = () => {
    return (
        <div className='w-full h-[737px]'>
            <table className='w-full h-full rounded-custom bg-white'>
                <thead className='text-[rgb(113,142,191)] text-base font-medium'>
                <tr>
                    <td>Description</td>
                    <td>Order ID</td>
                    <td>Type</td>
                    <td>User ID</td>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody className='text-[rgb(35,35,35)] text-base font-normal '>
                {tableData.map(item => (
                    <tr>
                        <td>{item.description}</td>
                        <td>{item.orderId}</td>
                        <td>{item.type}</td>
                        <td>{item.userId}</td>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                        <td><button className='flex items-center border border-[rgb(18,50,136)] bg-white text-[rgb(18,50,136)] rounded-full text-[15px] font-normal w-[100px]
                        px-4 h-9 hover:bg-[rgb(18,50,136)] hover:text-white transition duration-100'>View</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table
