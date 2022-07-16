const createJob = (req, res) => {
  res.send('register user');
};

const deleteJob = (req, res) => {
  res.send('delete user');
};

const getAllJobs = (req, res) => {
  res.send('get All Jobs');
};

const updateJob = (req, res) => {
  res.send('updateJob');
};

const showStats = (req, res) => {
  res.send('showStats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
