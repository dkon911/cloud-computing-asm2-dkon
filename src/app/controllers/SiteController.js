const Course = require('../models/Course');

class SiteController {
    //[GET] /
    async index(req, res, next) {
        await Course.find({})
        .then(courses => res.render('home'), {
            courses
        })
        .catch(next);


        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController;