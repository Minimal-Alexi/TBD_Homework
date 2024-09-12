const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUserbyID,
    createUser,
    updateUser,
    deleteUser
} = require('../Controller/userController');

//GET /users
router.get('/',getAllUsers);

//GET /users/:userID
router.get('/:userID',getUserbyID);

//POST /users
router.post('/',createUser);

//PUT /users/:userID
router.put('/:userID',updateUser);

//DELETE /users/:userID
router.delete('/:userID',deleteUser);

module.exports = router;