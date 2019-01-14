module.exports = {
  name: {
    when: 'isNotTest',
    type: 'string',
    required: true,
    message: 'Project name'
  },
  author: {
    when: 'isNotTest',
    type: 'string',
    message: 'Author'
  }
}
