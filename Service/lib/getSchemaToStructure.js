const typeMapper = {
  'string': 'TEXT',
  'boolean': 'BLOB',
  'number': 'INTEGER',
  'double': 'NUMERIC'
}

module.exports = function getSchemaToStructure(schema) {
  let integerCode = '',
    requiredCode = [],
    notRequiredCode = [];
  Object.keys(schema).forEach(key => {
    const current = schema[key]
    if (isKey(current)) {
      integerCode = key
      return
    }
    if (isRequire(current)) {
      requiredCode.push(key)
    } else {
      notRequiredCode.push(key)
    }
  })
  if (integerCode === '') throw '缺少主键标识'
  return `${integerCode} INTEGER PRIMARY KEY AUTOINCREMENT,${requiredCode.map(item => item + ` ${schema[item].type && typeMapper[schema[item].type]} NOT NULL`).toString()},${notRequiredCode.map(item=>item+` ${schema[item].type && typeMapper[schema[item].type]} `).toString()}`
}


function isKey(value) {
  return value['isKey']
}

function isRequire(value) {
  return value['required']
}