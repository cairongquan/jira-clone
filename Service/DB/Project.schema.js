module.exports = {
  id: {
    isKey: true
  },
  project_name: {
    type: 'string',
    required: true
  },
  project_introduction: {
    type: 'string',
    required: true
  },
  project_cover: {
    type: 'string',
    required: true
  },
  git: {
    type: 'string',
  },
  project_category: {
    type: 'string'
  },
}
