const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const {database} = require('./mongodb')

database()

const GraphqlRouter = require('./router')
const app = new Koa()
const router = new Router();
const port = 5000

app.use(bodyParser());

router.use('', GraphqlRouter.routes())

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port);

console.log('server listen port: ' + port)