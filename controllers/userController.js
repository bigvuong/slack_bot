// Controller to handle user-related API requests

exports.getUsers = (req, res) => {
  // Sample data, replace with DB query logic
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  // Add logic to save the user (e.g., in a database)
  const newUser = { id: Date.now(), name };
  res.status(201).json(newUser);
};
