const router = require('express').Router();
// const User = require('../models/User');
// const Post = require('../models/Post');
// const Comment = require('../models/Comment');
const { Post, Comment, User } = require('../models')

router.get("/", async (req, res) => {
    console.log("You hit the home route")
    try {
        const postData = await Post.findAll({
            include: [User],
        })

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', { posts })
    } catch (err) {
        console.log()
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findbyPk(req.params.id, {
            include: [
                User, {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        if (postData) {
            const post = postData.get({ plain: true });

            res.render('single-post', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }

    res.render('login');
});

router.get('signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('signup');
});

module.exports = router;