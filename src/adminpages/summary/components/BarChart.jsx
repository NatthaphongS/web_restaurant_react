import { Bar, Chart } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container text-secondary">
      <Bar
        data={chartData}
        style={{
          backgroundColor: "#272727",
          borderRadius: "10px",
          padding: "10px",
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "จำนวนคำสั่งชื้อ 7 วันล่าสุด",
              color: "#FF5A36",
              font: {
                size: "35",
              },
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
              ticks: {
                color: "#fff",
              },
            },
            y: {
              stacked: true,
              ticks: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </div>
  );
};
