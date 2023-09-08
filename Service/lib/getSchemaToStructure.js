module.exports = function getSchemaToStructure(schema) {
  let integerCode = '',
    requiredCode = [],
    notRequiredCode = [];
  Object.keys(schema).forEach(key => {
    const current = schema[key]
    if (isKey(current)) {
      integerCode = key + " integer"
      return
    }
    if (isRequire(current)) {
      requiredCode.push(key)
    } else {
      notRequiredCode.push(key)
    }
  })
  console.log(integerCode, requiredCode, notRequiredCode)
}


function isKey(value) {
  return value['isKey']
}

function isRequire(value) {
  return value['required']
}
