const router = require('express').Router();
const {
    addThought,
    getAllThoughts,
    getThoguhtsById,
    updateThought,
    deleteThought,
    createReaction,
    deletereaction
} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts);

// /api/comments/<userID>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoguhtsById)



router.route('/:thoughtId')
    .put(updateThought)
    .delete(deleteThought);



// /api/thoughts/<userId>/<thoughtId>/<reactions>
router.route('/:thoughtId/reactions/:reactionId?')
    .delete(deletereaction)
    .post(createReaction);

module.exports = router;