// import React from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const ChartMonth = ({ chartData }) => {
//     return (
//         <div className="chart-container" style={{ width: '583px', height: '444.4px', border: '1px solid #A8A8A8', borderRadius: '5px', backgroundColor: '#F4F8FD' }}>
//             <h2 style={{ textAlign: "center" }}>Thống kê KPI theo tháng</h2>
//             <Bar
//                 data={chartData}
//                 options={{
//                     plugins: {
//                         title: {
//                             display: true,
//                         },
//                         legend: {
//                             display: true,
//                             position: 'bottom'
//                         }
//                     },
//                     scales: {
//                         x: {
//                             stacked: false,
//                             type: 'category',
//                             labels: chartData.labels,
//                             title: {
//                                 display: true,
//                                 text: 'Projects'
//                             }
//                         },
//                         y: {
//                             stacked: false,
//                             title: {
//                                 display: true,
//                                 text: 'KPI Value'
//                             }
//                         }
//                     }
//                 }}
//             />
//             <div className="chart-legend">
//                 <div className="legend-item">
//                     <span className="legend-color" style={{ backgroundColor: '#4A3AFF' }}></span>
//                 </div>
//                 <div className="legend-item">
//                     <span className="legend-color" style={{ backgroundColor: '#93AAFD' }}></span>
//                 </div>
//                 <div className="legend-item">
//                     <span className="legend-color" style={{ backgroundColor: '#FFD700' }}></span>
//                 </div>
//                 <div className="legend-item">
//                     <span className="legend-color" style={{ backgroundColor: '#FF4500' }}></span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChartMonth;

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ChartMonth = ({ chartData }) => {
    const [dimensions, setDimensions] = useState({ width: 583, height: 444.4 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width < 768) { // mobile
                setDimensions({ width: width * 1, height: height * 0.3 });
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
            <h2 style={{ textAlign: "center" }}>Thống kê KPI theo tháng</h2>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            stacked: false,
                            type: 'category',
                            labels: chartData.labels,
                            title: {
                                display: true,
                                text: 'Projects'
                            }
                        },
                        y: {
                            stacked: false,
                            title: {
                                display: true,
                                text: 'KPI Values'
                            }
                        }
                    }
                }}
            />
            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#4A3AFF' }}></span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#93AAFD' }}></span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#FFD700' }}></span>
                </div>
                <div className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: '#FF4500' }}></span>
                </div>
            </div>
        </div>
    );
};

export default ChartMonth;
