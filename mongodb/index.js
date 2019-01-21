const mongoose = require('mongoose') 

require('./schema/xianwang_line')

export const database = () => {
  mongoose.set('debug', true)

  mongoose.connect('mongodb://112.35.60.89:30000/cmcc',{ useNewUrlParser: true })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect('mongodb://112.35.60.89:30000/cmcc',{ useNewUrlParser: true })
  })
  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', '连接成功')
  })
}