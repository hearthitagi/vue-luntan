const { expressjwt } = require('express-jwt')
const signkey = 'adafD_asjdhk^%213&jkasasdh)&*981jkasd123`~qwdeqe';

const jwt = expressjwt({ secret: signkey, algorithms: ['HS256'] }).unless({
    path:
        [
            '/login',
            '/postList',
            /^\/postDetail\/.*/,
            '/topicList',
            '/registry',
            '/commentList',
            /^\/public\/.*/
        ]
})

module.exports = { jwt };