import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import customerRouter from "./route/customers.route.js";
import tradersRoute from "./route/traders.route.js";
import traderRouter from "./route/traders.route.js";
import itemsRouter from "./route/items.route.js";

const app = new Koa();
app.use(bodyParser());

app.use(customerRouter.routes())
    .use(customerRouter.allowedMethods());

app.use(traderRouter.routes())
    .use(traderRouter.allowedMethods());

app.use(itemsRouter.routes())
    .use(itemsRouter.allowedMethods());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = '<h3>Not found</h3>';
    ctx.status = 404;
});

app.listen(3000, () => {
    console.log('Application running on port 3000');
});