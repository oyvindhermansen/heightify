import heightify from './core/heightify'

const env = process.env.NODE_ENV

function noop() {}

if (env !== 'production' && noop.name !== 'noop') {
  console.warn(
    `You are currently running minified ` +
    `heightify outside NODE_ENV='production'.`
  )
}

export default heightify
