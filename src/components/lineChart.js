import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../api/fetchProduct";

const LineChart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.products);
  const [data, setData] = useState();
  useEffect(() => {
    if (window !== undefined) {
      dispatch(fetchProduct());
    }
  }, [window]);

  useEffect(() => {
    if (productData) {
      setData(productData.products);
      console.log(productData.products, "datattatat");
    }
  }, [productData]);

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: 'Monthly Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: ["January", "February", "March", "April", "May"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
