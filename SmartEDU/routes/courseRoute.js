const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse);//http://localhost:3000/courses :POST
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);//http://localhost:3000/courses/{:slug} 

module.exports = router;