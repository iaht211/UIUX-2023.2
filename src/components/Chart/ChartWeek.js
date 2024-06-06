// import React from "react";
// import { Pie } from "react-chartjs-2";
// import "chart.js/auto";

// const ChartWeek = ({ chartData }) => {
//     return (
//         <div className="chart-container">
//             <h2 style={{ textAlign: "center" }}>Thống kê tuần này</h2>
//             <Pie
//                 data={chartData}
//                 options={{
//                     plugins: {
//                     }
//                 }}
//             />
//         </div>
//     );
// };

// export default ChartWeek;

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const ChartWeek = ({ chartData }) => {
    const [dimensions, setDimensions] = useState({ width: 700, height: 500 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width < 768) { // mobile
                setDimensions({ width: width * 1, height: height * 0.5 });
            } else { // web
                setDimensions({ width: width *0.3, height: 500 });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call once to set initial dimensions

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="chart-container" style={{ 
            width: dimensions.width, 
            height: dimensions.height, 
            border: '1px solid #A8A8A8', 
            borderRadius: '5px', 
            backgroundColor: '#F4F8FD' 
        }}>
            <h2 style={{ textAlign: "center" }}>Thống kê tuần này</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            //text: 'Thống kê tuần này'
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                        }
                    }
                }}
            />
        </div>
    );
};

export default ChartWeek;
