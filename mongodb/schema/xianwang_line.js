const mongoose = require('mongoose') 

const Schema = mongoose.Schema

const ListSchema = new Schema({
  name:String,
  startpointName:String,
  endpointName:String,
  lifeStatus:String,
  city:String,
  county:String,
  lonlatStart:String,
  lonlatEnd:String,
  resourcename:String
})

// xianwang_line.pre('save', function (next) {// 每次保存之前都插入更新时间，创建时插入创建时间
//   if (this.isNew) {
//     this.meta.createdAt = this.meta.updatedAt = Date.now()
//   } else {
//     this.meta.updatedAt = Date.now()
//   }
//   next()
// })
mongoose.model('CmccList', ListSchema,'xianwang_line')