const users = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  job: `Developer${index + 1}`,
}));

export default users;
