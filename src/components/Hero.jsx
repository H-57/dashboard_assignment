import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell,ResponsiveContainer } from 'recharts';
import {FaArrowUp} from "react-icons/fa6"
// Sample data for the charts
const lineData = [
  {  value: 3 },
  {  value: 5 },
  {  value: 0 },
  { value: 4 },
  { value:  1},
  {  value: 0 },
  {  value: 4 },
  {  value:  1},
  // Add more data points as needed
];

const barData = [
    {   blue: 800 },
    {  blue: 500 },
    {  blue: 900 },
    {  blue: 200 },
    {  blue: 100 },
    {  blue: 600 },
    
  // Add more data points as needed
];

const barGraphData=[
   { name: 'jan', 2021: 300 ,2022: 400},
   { name: 'feb', 2021: 500 ,2022: 200},
   { name: 'mar', 2021: 600 ,2022: 300},
   { name: 'apr', 2021: 700 ,2022: 400},
   { name: 'may', 2021: 800 ,2022: 500},
   { name: 'jun', 2021: 900 ,2022: 600},
]
const pieData = [
  { name: 'jan', value: 300 },
  { name: 'jan', value: 300 },
  { name: 'Group B', value: 200 },

];


const colorPalette = [ '#ff7777','#00f0c7','#694bdb' ];

const Hero = () => (
  <div className="m-10 grid grid-cols-1 gap-5">
    <section className="grid grid-cols-3 gap-6">
      <div className="bg-[#00f0c7] flex p-5 rounded-md col-span-2">
        <div className="w-[50%]">
          <h1 className="text-xl font-bold mb-4">Welcome to your dashboard!</h1>
          <p className="text-gray-600 text-sm">Try our new Admin Dashboard Template, build with Iva Art-Design components. Customize it to your needs and release to production!</p>
        </div>
        <div className="w-[40%]">
          <img className="object-cover w-full h-full" src="https://shorturl57.vercel.app/DWkLm_Gh" alt="" />
        </div>
      </div>
      <div className="bg-white shadow-md rounded flex flex-col flex-wrap item-center p-2">
        <h2 className="text-xl font-bold mb-4">Chart Title</h2>
        <div>
  <ResponsiveContainer width="100%" height={150}>
    <BarChart data={barData}>
      <Tooltip />
      <Bar dataKey="blue" fill="#694bdb" />
    </BarChart>
  </ResponsiveContainer>
</div>
      </div>
    </section>

    <section className="grid grid-cols-3 gap-6">
      <span className="bg-white shadow-md rounded p-5 flex justify-between items-center relative">
        <div className="flex flex-col">
          <p>CHART TITLE</p>
          <span className="text-2xl font-semibold">2,456</span>
          <span className="flex items-center text-sm mt-5 absolute bottom-1">
            <FaArrowUp className="text-green-600 text-xl" />
            1.10% Since yesterday
          </span>
        </div>
        <div className="w-[50%]">
          <ResponsiveContainer width="100%" height={100}>
          <LineChart  data={lineData}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="tomato" dot={false} strokeWidth={2} />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </span>
      <span className="bg-white shadow-md rounded p-5 flex justify-between items-center relative">
        <div className="flex flex-col">
          <p>CHART TITLE</p>
          <span className="text-2xl font-semibold">2,456</span>
          <span className="flex items-center text-sm mt-5 absolute bottom-1">
            <FaArrowUp className="text-green-600 text-xl" />
            1.10% Since yesterday
          </span>
        </div>
        <div className="w-[50%]">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart  data={lineData}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="orange" dot={false} strokeWidth={2} />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </span>
      <span className="bg-white shadow-md rounded p-5 flex justify-between items-center relative">
        <div className="flex flex-col">
          <p>CHART TITLE</p>
          <span className="text-2xl font-semibold">2,456</span>
          <span className="flex items-center text-sm mt-5 absolute bottom-1">
            <FaArrowUp className="text-green-600 text-xl" />
            1.10% Since yesterday
          </span>
        </div>
        <div className="w-[50%]">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart  data={lineData}>
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="teal" dot={false} strokeWidth={2} />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </span>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 col-span-2 shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">CHART TITLE</h2>
        <ResponsiveContainer width="100%" height={300}>

      
        <BarChart  data={barGraphData}>
          
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
        
          <Bar dataKey="2021" fill="#694bdb" />
          <Bar dataKey="2022" fill="#00f0c7" />
        </BarChart>
        </ResponsiveContainer>
        
      </div>
      <div className="bg-white p-4 col-span-1 shadow-md rounded relative">
        <h2 className="text-xl font-bold mb-4">Chart Title</h2>
        <span className="flex items-center text-sm mt-5 absolute right-5 top-1">
            <FaArrowUp className="text-green-600 text-xl" />
            1.10% Since yesterday
          </span>

 <ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={pieData.map((entry, index) => ({
        ...entry,
        fill: colorPalette[index % colorPalette.length],
      }))}
      dataKey="value"
      cx="50%"
      cy="50%"
      innerRadius={70}
      outerRadius={100}
      label
    />
    <Tooltip />

  </PieChart>
</ResponsiveContainer>
      </div>
    </section>
  </div>
);
export default Hero;