import template from 'templates/rest'

export default () => template({
  source: __DEV__ ? '/api/faq' : '/db/faq.json'
})
