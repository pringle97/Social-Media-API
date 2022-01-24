const router = require('express').Router()
const { Thought, User } = require('../models')

//get all thoughts
router.get('/thought', async function (req, res)
//get one thought by id
router.get('/thought/:id', async function (req, res)
//post new thought with id to associated user
router.get('/thought', async function (req, res)
//put to update thought by id
router.get('/thought/:id', async function (req, res)
//delete a thought
router.get('/thought/:id', async function (req, res)
//post a reaction stored in thought's reaction array
router.get('/reaction', async function (req, res)
//delete to remove reaction by reactionid
router.get('/reaction/:id', async function (req, res)

module.exports = router