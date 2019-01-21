const {GraphQLSchema,GraphQLObjectType} = require('graphql')

const {info,infos} = require('./info')

let schema =  new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Queries',
      fields: {
        infos,
        info
      }
    })
})

export default schema