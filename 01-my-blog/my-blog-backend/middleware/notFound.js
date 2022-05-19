//if the main route is changed
const notFound = (req, res) => {
  res.status(404).send('Route not found');
};

module.exports = notFound;
