var heightify = require('../lib/core/heightify').default

heightify({
  element: document.querySelectorAll('.test'),
  hasImages: true,
  destroyOnSize: 500
})
