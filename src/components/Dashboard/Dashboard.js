import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='lg:grid lg:gap-y-20 lg:grid-cols-2 md:flex md:flex-col'>
            <div>
                <h1 className='text-sky-400/100 font-bold'>Month wise Sell</h1>
                <LineChart className='mx-auto w-5/6 h-5/6'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 50,
                        bottom: 50
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <div>
                <h1 className='text-sky-400/100 font-bold'>Investment vs Revenue</h1>
                <AreaChart className='mx-auto'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 50,
                        bottom: 50
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
            <div>
                <h1 className='text-sky-400/100 font-bold'>Investment vs Revenue</h1>
                <BarChart className='mx-auto'
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 50,
                        bottom: 50
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <h1 className='text-sky-400/100 font-bold'>Investment vs Revenue</h1>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <PieChart className='mx-auto'
                    width={400}
                    height={400}
                    data={data}
                    margin={{
                        top: 0,
                        bottom: 0
                    }}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={90} outerRadius={110} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;