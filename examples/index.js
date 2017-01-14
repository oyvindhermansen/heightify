var heightify = require('../lib/heightify').default

heightify({
  element: document.querySelectorAll('.test'),
  hasImages: true,
  destroyOnSize: 500
})
