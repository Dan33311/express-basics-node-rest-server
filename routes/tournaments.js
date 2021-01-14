const express = require('express');
const router = express.Router();
const tournament_controllers = require('../controllers/tournaments_controller');


router.get('/tournament', tournament_controllers.get_tournament)

router.post('/tournament', tournament_controllers.post_tournament)

router.put('/tournament/:id', tournament_controllers.put_tournament)

router.delete('/tournament', tournament_controllers.delete_tournament)



module.exports = router;