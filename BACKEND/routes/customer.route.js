const Router = require('@koa/router');
const {addCustomer, getCustomer} = require('../api/customer.api');

const router = new Router({
    prefix: '/customer'
});

router.post('/', ctx => {
    let post = ctx.request.body;
    post = addCustomer(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getCustomer(id);
});


module.exports = router;