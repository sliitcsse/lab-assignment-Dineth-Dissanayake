import Router from '@koa/router';
import {addItems, getAll, getAllItems, updateItem, updatePromotion} from "../api/items.api.js";

const itemsRouter = new Router({
    prefix:'/items'
});

itemsRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = addItems(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

itemsRouter.get('/:id', (ctx) => {
    ctx.body = getAllItems(ctx.params.id);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.put('/:id', (ctx) => {
    ctx.body = updateItem(ctx.params.id, ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

itemsRouter.get('/', (ctx) => {
    ctx.body = getAll();
    ctx.set('Content-Type', 'application/json');
    ctx.status = 200;
});

itemsRouter.put('/promo', (ctx) => {
    ctx.body = updatePromotion(ctx.request.body);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
})

export default itemsRouter;