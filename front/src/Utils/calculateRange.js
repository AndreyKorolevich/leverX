const calculateRange = (startDate, endDate) => {
  const result = endDate - startDate;
  return Math.round((result / (60 * 60 * 24 * 1000)) + 1);
};

export default calculateRange;
