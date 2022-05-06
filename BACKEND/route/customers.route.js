import Router from '@koa/router';
import {getAllCustomers, saveCustomer, updateCustomerWish, updateCustomerCart} from "../api/customers.api.js";

const customerRouter = new Router({
    prefix:'/customers'
});

customerRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = saveCustomer(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

customerRouter.get('/', (ctx) => {
    ctx.body = getAllCustomers();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

customerRouter.put('/wish/:id', (ctx) => {
    ctx.body = updateCustomerWish(ctx.params.id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

customerRouter.put('/cart/:id', (ctx) => {
    ctx.body = updateCustomerCart(ctx.params.id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

export default customerRouter;