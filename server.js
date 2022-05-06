const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());


const ItemRoutes = require('./routes/item.route');
app.use(ItemRoutes.routes())
    .use(ItemRoutes.allowedMethods());


const CustomerRoutes = require('./routes/customer.route');
app.use(CustomerRoutes.routes())
    .use(CustomerRoutes.allowedMethods());


app.listen(3000, () => {
    console.log('Application is running on port 3000')
})