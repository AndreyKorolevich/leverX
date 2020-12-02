const sortAndDividedArray = (arr) => {
  const sortRequest = arr.sort((a, b) => new Date(b.created) - new Date(a.created));
  const dividedRequestByYear = [];
  let created;
  let order = 0;
  sortRequest.forEach((e, i) => {
    const year = new Date(e.created).getFullYear();
    if (i === 0) {
      created = year;
      dividedRequestByYear.push([e]);
    } else if (year === created) {
      dividedRequestByYear[order].push(e);
    } else if (year !== created) {
      dividedRequestByYear.push([e]);
      created = year;
      order++;
    }
  });

  return dividedRequestByYear.map((e) => e.reverse());
};

export default sortAndDividedArray;
