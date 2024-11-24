const express = require('express');
const app = express();
const { User } = require('./database');
const authenticate = require('./auth');
const jwt = require('jsonwebtoken');

app.use(express.json());

// Create user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(('link unavailable'));
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send(user);
  } catch (err) {
    res.status(404).send(err);
  }
});

// Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(('link unavailable'), req.body, { new: true });
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndRemove(('link unavailable'));
    res.send({ message: 'User deleted' });
  } catch (err) {
    res.status(404).send(err);
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(401).send('Invalid credentials');
    const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
    res.send({ token });
  } catch (err) {
    res.status(401).send('Invalid credentials');
  }
});

// Validate permissions
app.post('/api/validate-permissions', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.json({ permissions: user.permissions });
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


