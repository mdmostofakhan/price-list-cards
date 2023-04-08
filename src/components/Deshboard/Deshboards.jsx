import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
     Legend, ResponsiveContainer } from 'recharts';

const Deshboards = () => {
    
 const marksArray = [
    {
        id: 1,
        name: "Student 1",
        physics: 75,
        chemistry: 85,
        math: 90
    },
    {
        id: 2,
        name: "Student 2",
        physics:65,
        chemistry: 85,
        math: 80
    },
    {
        id: 1,
        name: "Student 1",
        physics: 95,
        chemistry: 80,
        math: 70
    },
    {
        id: 3,
        name: "Student 3",
        physics: 85,
        chemistry: 65,
        math: 90
    },
    {
        id: 4,
        name: "Student 4",
        physics: 85,
        chemistry: 70,
        math: 65
    },
    {
        id: 5,
        name: "Student 5",
        physics: 90,
        chemistry: 80,
        math: 85
    },
    {
        id: 6,
        name: "Student 6",
        physics: 65,
        chemistry: 70,
        math: 90
    },
    {
        id: 7,
        name: "Student 7",
        physics: 90,
        chemistry: 75,
        math: 80
    },
    {
        id: 8,
        name: "Student 8",
        physics: 80,
        chemistry: 70,
        math: 65
    },
    {
        id: 9,
        name: "Student 9",
        physics: 65,
        chemistry: 80,
        math: 70
    },
    {
        id: 10,
        name: "Student 10",
        physics: 85,
        chemistry: 90,
        math: 70
    },
    {
        id: 11,
        name: "Student 11",
        physics: 75,
        chemistry:65,
        math: 85
    },
    {
        id: 12,
        name: "Student 12",
        physics: 80,
        chemistry: 85,
        math: 90
    }
 ];

    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={marksArray} >

                <Line dataKey="physics"></Line>
                <Line stroke="#82ca9d" dataKey="chemistry"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Deshboards;