const {graphqlKoa,graphiqlKoa} = require('graphql-server-koa')
const {addOne, getAllList, editOne, tickOne, delOne} = require('../controllers/list')
const router = require('koa-router')()
const schema = require('../graphql/schema')

router.post('/addOne', addOne)
      .post('/editOne', editOne)
      .post('/tickOne', tickOne)
      .post('/delOne', delOne)
      .get('/getAllList', getAllList)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })

router.post('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next) // 使用schema
      })
      .get('/graphql', async (ctx, next) => {
        await graphqlKoa({schema: schema})(ctx, next) // 使用schema
      })
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next) // 重定向到graphiql路由
      })


module.exports = router