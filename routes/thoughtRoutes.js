const router = require('express').Router()
const { Thought, User, Reaction } = require('../models')

//get all thoughts
router.get('/thought', async function (req, res){
  const thoughts = await Thought.find({}).populate('user reactions')
  res.json(thoughts)
})

//get one thought by id
router.get('/thought/:id', async function (req, res) {
  const thought = await Thought.findById(req.params.id).populate('user reactions')
  res.json(thought)
})

//post new thought with id to associated user
router.post('/thought', async function (req, res) {
  const thought = await Thought.create(req.body)
  await User.findByIdAndUpdate(req.body.user, {
    $push: { thoughts: thought._id }
  })
  res.json(thought)
})

//put to update thought by id
router.put('/thought/:id', async function (req, res) {
  await Thought.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

//delete a thought
router.delete('/thought/:id', async function (req, res) {
  await Thought.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

//post a reaction stored in thought's reaction array
router.post('/reaction', async function (req, res) {
  const reaction = await Reaction.create(req.body)
  await Thought.findByIdAndUpdate(req.body.thought, {
    $push: { reactions: reaction._id }
  })
  res.json(reaction)
})

//delete to remove reaction by reactionid
router.delete('/reaction/:id', async function (req, res) {
  await Reaction.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router