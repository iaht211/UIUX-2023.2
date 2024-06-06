// import React from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto"; // Ensure the correct Chart.js version is used

// const ChartYear = () => {
//     const chartData = {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//             {
//                 label: "Đã hoàn thành",
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 fill: false,
//                 backgroundColor: "rgba(74, 58, 255, 1)",
//                 borderColor: "rgba(74, 58, 255, 1)",
//                 tension: 0.1
//             },
//             {
//                 label: "Chưa hoàn thành",
//                 data: [30, 25, 20, 15, 10, 5, 0],
//                 fill: false,
//                 backgroundColor: "rgba(200, 147, 253, 1)",
//                 borderColor: " rgba(200, 147, 253, 1)",
//                 tension: 0.1
//             },
//             {
//                 label: "Đã quá hạn",
//                 data: [10, 15, 20, 25, 30, 35, 40],
//                 fill: false,
//                 backgroundColor: "rgba(198, 210, 253, 1)",
//                 borderColor: "rgba(198, 210, 253, 1)",
//                 tension: 0.1
//             }
//         ]
//     };

//     const options = {
//         plugins: {
//             title: {
//                 display: true,
//             },
//             legend: {
//                 display: true,
//                 position: 'bottom',
//             }
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Months'
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Users'
//                 }
//             }
//         }
//     };

//     return (
//         <div className="chart-container" style={{ width: '700px', height: "500px" }}>
//             <h2 style={{ textAlign: "center" }}>Thống kê năm 2024</h2>
//             <Line data={chartData} options={options} />
//         </div>
//     );
// };

// export default ChartYear;

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Ensure the correct Chart.js version is used

const ChartYear = () => {
    const [dimensions, setDimensions] = useState({ width: 700, height: 500 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width < 768) { // mobile
                setDimensions({ width: width * 1, height: height * 0.4 });
            } else { // web
                setDimensions({ width: width * 0.615, height: 520 });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call once to set initial dimensions

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Đã hoàn thành",
                data: [50, 40, 80, 62, 41, 70, 25],
                fill: false,
                backgroundColor: "rgba(74, 58, 255, 1)",
                borderColor: "rgba(74, 58, 255, 1)",
                tension: 0.1
            },
            {
                label: "Chưa hoàn thành",
                data: [30, 60, 40, 15, 70, 30, 55],
                fill: false,
                backgroundColor: "rgba(200, 147, 253, 1)",
                borderColor: " rgba(200, 147, 253, 1)",
                tension: 0.1
            },
            {
                label: "Quá hạn",
                data: [10, 15, 0, 25, 30, 5, 0],
                fill: false,
                backgroundColor: "rgba(198, 210, 253, 1)",
                borderColor: "rgba(198, 210, 253, 1)",
                tension: 0.1
            }
        ]
    };

    const options = {
        plugins: {
            title: {
                display: true,
            },
            legend: {
                display: true,
                position: 'bottom',
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'KPI Values'
                }
            }
        }
    };

    return (
        <div className="chart-container" style={{ 
            width: dimensions.width, 
            height: dimensions.height, 
            border: '1px solid #A8A8A8', 
            borderRadius: '5px', 
            backgroundColor: '#F4F8FD' 
        }}>
            <h2 style={{ textAlign: "center" }}>Thống kê năm 2024</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default ChartYear;
