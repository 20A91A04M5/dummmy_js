
// routes/userRoutes.js
const express = require('express');
const User = require('../models/user');

const usercontoller=require("../contollers/usercontrol")

const router = express.Router();

// Get all users  -- without using contollers
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });

router.get('/',usercontoller.getAll);

// Create a new user
// router.post('/', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// });

router.post('/',usercontoller.createuser)


// Update a user
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedUser = await User.update(req.params.id, req.body);
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update user' });
//   }
// });

router.put('/:id',usercontoller.updateuser)

// Delete a user
// router.delete('/:id', async (req, res) => {
//   try {
//     const message = await User.delete(req.params.id);
//     res.json(message);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// });

router.delete('/:id',usercontoller.deleteuser)

module.exports = router;


