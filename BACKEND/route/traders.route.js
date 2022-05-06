import Router from '@koa/router';
import {saveTrader} from "../api/traders.api.js";

const traderRouter = new Router({
    prefix:'/traders'
});

traderRouter.post('/', (ctx) => {
    const data = ctx.request.body;
    ctx.body = saveTrader(data);
    ctx.set('Content-Type', 'application/json');
    ctx.status = 201;
});

export default traderRouter;