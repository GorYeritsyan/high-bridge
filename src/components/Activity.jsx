import React from 'react'
import {Bar, BarChart, CartesianAxis, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const Activity = () => {
    const options = {
        scales: {
            x: false
        }
    }
    const data = [
        {
            "name": "Page A",
            "uv": 480,
            "pv": 220
        },
        {
            "name": "Page B",
            "uv": 340,
            "pv": 120,
        },
        {
            "name": "Page C",
            "uv": 330,
            "pv": 260
        },
        {
            "name": "Page D",
            "uv": 490,
            "pv": 380
        },
        {
            "name": "Page E",
            "uv": 130,
            "pv": 230
        },
        {
            "name": "Page F",
            "uv": 395,
            "pv": 235
        },
        {
            "name": "Page G",
            "uv": 395,
            "pv": 320
        }
    ]

    // add full ui and logic next time
    return(

        <div className='w-full h-full flex-center'>
            <BarChart width={667} height={226} data={data}>
                {/*<CartesianGrid strokeDasharray="10 3" />*/}
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" axisLine={false} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar barSize={15} dataKey="pv" fill="rgba(24,20,243,1)" />
                <Bar barSize={15} dataKey="uv" fill="rgba(22,219,204,1)" />
            </BarChart>
        </div>
    );
}
export default Activity
