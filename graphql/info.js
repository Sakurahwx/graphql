const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
} = require('graphql')

const mongoose = require('mongoose')
const CmccList = mongoose.model('CmccList') 

// let objType = new GraphQLObjectType({
//     name:'values',
//     fields:{
//         holeNum: {
//           type: GraphQLString
//         },
//         childHoleNum: {
//           type: GraphQLString
//         },
//         belongPipeset:{
//           type:GraphQLString
//         },
//         belongPipeset:{
//           type:GraphQLString
//         },
//         pipeLength:{
//           type:GraphQLString  
//         }   
//       }
// })

export let InfoType = new GraphQLObjectType({
    name:'CmccList',
    fields:{
        name: {
            type:GraphQLString
        },
        lifeStatus:{
            type:GraphQLString
        },
        startpointName: {
            type:GraphQLString
        },
        endpointName:{
            type:GraphQLString
        },
        city:{
            type:GraphQLString
        },
        county:{
            type:GraphQLString
        },
        lonlatStart:{
            type:GraphQLString
        },
        lonlatEnd:{
            type:GraphQLString
        },
        resourcename:{
            type:GraphQLString
        }
    }
})

//批量查询
export const infos = {
    type:new GraphQLList(InfoType),
    args:{},
    resolve (root,params,options){
        return CmccList.find({}).exec()
    }
}

//根据生命周期查询
export const info = {
    type:InfoType,
    args:{
        lifeStatus:{
            name: 'lifeStatus',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve (root,params,options){
        return CmccList.find({lifeStatus:params.lifeStatus}).exec()
    }
}