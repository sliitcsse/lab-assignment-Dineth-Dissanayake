const Router = require('@koa/router');
const {addItem, getItem, getItems} = require('../api/items.api');

const router = new Router({
    prefix: '/items'
});

router.get('/', ctx => {
    ctx.body = getItems();
});

router.post('/', ctx => {
    let post = ctx.request.body;
    post = addItem(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getItem(id);
});


module.exports = router;