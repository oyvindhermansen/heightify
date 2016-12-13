var heightify = require('../lib/heightify').default

heightify({
  element: '.lol',
  hasImages: true
})

heightify({
  element: '.thisDoesNotExists',
  hasImages: true
})
