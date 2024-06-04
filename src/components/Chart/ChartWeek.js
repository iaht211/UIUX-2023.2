import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const ChartWeek = ({ chartData }) => {
    return (
        <div className="chart-week">
            <h2 style={{ textAlign: "center" }}>Thống kê tuần này</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                    }
                }}
            />
        </div>
    );
};

export default ChartWeek;
