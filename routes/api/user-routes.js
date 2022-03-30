const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addfriend,
    deletefriend
} = require('../../controllers/user-controller');

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//friends /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addfriend)
    .delete(deletefriend);

module.exports = router;