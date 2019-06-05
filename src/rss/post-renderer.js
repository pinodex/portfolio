const MarkdownIt = require('markdown-it')
const fs = require('fs')

class PostRenderer {
  constructor () {
    this._md = new MarkdownIt({
      html: true
    })

    this._resolvePath = (path) => path
    this._preprocess = (content) => content
  }

  setPathResolver (resolver) {
    this._resolvePath = resolver
  }

  setPreprocessor (preprocessor) {
    this._preprocess = preprocessor
  }

  render (file) {
    const filePath = this._resolvePath(file)
    let raw = this._getContents(filePath)

    raw = this._preprocess(raw)

    return this._md.render(raw)
  }

  _getContents (file, encoding = 'utf8') {
    return fs.readFileSync(file, encoding)
  }
}

module.exports = PostRenderer
