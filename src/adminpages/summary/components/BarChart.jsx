import { Colors } from "chart.js";
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container text-secondary">
      <h5 style={{ textAlign: "center" }}>จำนวนคำสั่งชื้อ 7 วันล่าสุด</h5>
      <Bar
        data={chartData}
        style={{ Colors: "#000", backgroundColor: "000" }}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
      />
    </div>
  );
};
