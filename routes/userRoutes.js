const router = require('express').Router()
const { User } = require('../models')

//get all users
router.get('/users', async function (req, res) {
  const users = await User.find({}).populate('thoughts')
  res.json(users)
})

//get a user by id
router.get('/users/:id', async function (req, res) {
  const user = await User.findById(req.params.id).populate('thoughts')
  res.json(user)
})

//post a user
router.post('/users', async function (req, res) {
  const user = await User.create(req.body)
  res.json(user)
})

//put one user by id
router.put('/users/:id', async function (req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

//delete a user by id
router.delete('/users/:id', async function (req, res) {
  await User.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

//add a friend
router.post('/user/:userId/friend/:friendId', async function (req, res) {
  const friend = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } })
  const friend2 = await User.findByIdAndUpdate(req.params.friendId, { $addToSet: { friends: req.params.userId } })
  res.sendStatus(200)
})

//delete a friend
router.delete('/user/:userId/friend/:friendId', async function (req, res) {
  const friend = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } })
  const friend2 = await User.findByIdAndUpdate(req.params.friendId, { $pull: { friends: req.params.userId } })
  res.sendStatus(200)
})

module.exports = router