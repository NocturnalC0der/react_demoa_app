// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// const data = [
//     { x: 1, y: 1 },
//     { x: 2, y: 3 },
//     { x: 4, y: 6 },
//     { x: 5, y: 2 },
//     { x: 6, y: 4 }
// ];

// function Graph() {
//     return (
//         <div>
//             <h2>Sample Graph</h2>
//             <ResponsiveContainer width="80%" height="80%">
//                 <LineChart data={data}>
//                     <XAxis dataKey='x' />
//                     <YAxis dataKey='y' />
//                     <Line type='monotone' dataKey='y' />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// }

function number() {
    let n = Math.random();
    return n 
}

// export default Graph;
export default number;