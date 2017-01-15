var heightify = require('../lib/index').default

heightify({
  element: document.querySelectorAll('.test'),
  hasImages: true,
  destroyOnSize: 500
})
