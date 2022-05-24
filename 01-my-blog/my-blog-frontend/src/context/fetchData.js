//note that async funtion will retrun a promise
const fetchdata = async (url) => {
  const response = await fetch(url);
  const articles = await response.json();
  return articles;
};

export default fetchdata;
