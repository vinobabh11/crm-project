export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const CalculatePrice = (prices, percentages) => {
  if (prices?.length !== percentages?.length) {
    throw new Error("Prices and percentages arrays must have the same length");
  }

  return prices?.map((price, index) => {
    const discount = (price * percentages[index]) / 100;
    const disPrice = price - discount;
    return disPrice.toFixed(2);
  });
};
