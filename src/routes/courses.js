const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);//get Create form
router.post('/store', courseController.store);

router.delete('/:id', courseController.destroy);//delete
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update); // update
router.get('/:slug', courseController.show);
router.get('/', courseController.show);

module.exports = router;
