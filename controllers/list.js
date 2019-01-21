const mongoose = require('mongoose') 
const CmccList = mongoose.model('CmccList')
// 获取所有数据
export const getAllList = async (ctx, next) => {
  const Lists = await CmccList.find({lifeStatus:'现网',county:'长清县'}) // 数据查询
  if (Lists.length) {
    ctx.body = {
      success: true,
      list: Lists
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}
// 新增
export const addOne = async (ctx, next) => {
  // 获取请求的数据
  const opts = ctx.request.body
  
  const list = new CmccList(opts)
  const saveList = await list.save() // 保存数据
  console.log(saveList)
  if (saveList) {
    ctx.body = {
      success: true
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}
// 编辑
export const editOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  let error = null
  List.findOne({name: obj.name}, (err, doc) => {
  	if(err) {
  		hasError = true
  		error = err
  	} else {
  		doc.name = obj.name;
  		doc.startpointName = obj.startpointName;
  		doc.lifestatus = obj.lifestatus;
  		doc.save();
  	}
  })
  if (hasError) {
  	ctx.body = {
      success: false
    }
  } else {
  	ctx.body = {
	  success: true
	}
  }
}

// 更新完成状态
export const tickOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  let error = null
  List.findOne({name: obj.name}, (err, doc) => {
  	if(err) {
  		hasError = true
  		error = err
  	} else {
  		doc.checked = obj.checked;
  		doc.save();
  	}
  })
  if (hasError) {
  	ctx.body = {
      success: false,
      id: obj.id
    }
  } else {
  	ctx.body = {
	  success: true,
    id: obj.id
	}
  }
}

// 删除
export const delOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  let msg = null
  List.remove({name: obj.name}, (err, doc) => {
  	if(err) {
  		hasError = true
  		msg = err
  	} else {
  		msg = doc
  	}
  })
  if (hasError) {
  	ctx.body = {
      success: false,
      id: obj.id
    }
  } else {
  	ctx.body = {
  	  success: true,
      id: obj.id
  	}
  }
}