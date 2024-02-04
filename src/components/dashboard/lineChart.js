import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../api/fetchProduct";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CalculatePrice, options } from "../../common";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.product.status);
  const productData = useSelector((state) => state.product.products);
  const [data, setData] = useState();
  useEffect(() => {
    if (window !== undefined) {
      dispatch(fetchProduct());
    }
  }, [window && window !== undefined]);

  useEffect(() => {
    if (status === "succeeded") {
      setData(productData.products);
    }
  }, [status]);

  const labels = data && data?.map((key) => key?.title);
  const price = data && data?.map((key) => key?.price);
  const discountPercentage = data && data?.map((key) => key?.discountPercentage)
  const actualPrice = CalculatePrice(price, discountPercentage);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Product Price",
        data: price,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Discounted Price",
        data: actualPrice,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
