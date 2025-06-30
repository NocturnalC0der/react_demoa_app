import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

// This is like a dataclass in python fastapi. (modules)
interface DataPoint {
    x: number,
    y: number
}

const data: DataPoint[] = [
    {x: 1, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 6},
    {x: 3, y: 2},
    {x: 3, y: 4}
]

function Graph() {
    // JSX - JavaScript XML
    return (
        <div>
            <h2>Sample Graph</h2>

            <ResponsiveContainer width="80%" height="80%">

                <LineChart  data={data}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey='x' />
                    <YAxis dataKey='y' />

                    {/* <Line type='monotone' dataKey='x' /> */}

                    <Line type='monotone' dataKey='y' />


                </LineChart>


            </ResponsiveContainer>

        </div>
    );
};

export default Graph