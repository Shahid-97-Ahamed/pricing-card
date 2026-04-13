import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const result =[
  {
    "name": "Alice",
    "physics": 88,
    "chemistry": 91,
    "math": 95
  },
  {
    "name": "Bob",
    "physics": 76,
    "chemistry": 69,
    "math": 80
  },
  {
    "name": "Charlie",
    "physics": 90,
    "chemistry": 85,
    "math": 87
  }
]

const Recharts = () => {

    return (
        <div>
            <LineChart width={750} height={650} data={result}>
                <Line dataKey={"physics"}>
                    <XAxis dataKey={"physics"}>

                    </XAxis>
                    <YAxis></YAxis>
                </Line>
                <Line dataKey={"chemistry"}>
                     <XAxis dataKey={"physics"}>
                    </XAxis>
                    <YAxis></YAxis>
                </Line>
                <Line dataKey={"math"}>
                     <XAxis dataKey={"physics"}>
                    </XAxis>
                    <YAxis></YAxis>
                </Line>
                {/* <Line dataKey={"Chemistry"} stroke='pink'>
                </Line>
                <Line dataKey={"Math"} stroke='green'>
                </Line> */}
            </LineChart>
        </div>
    );
};

export default Recharts;