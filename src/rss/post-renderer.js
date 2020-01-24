const MarkdownIt = require('markdown-it');
const fs = require('fs');

class PostRenderer {
  constructor() {
    this.md = new MarkdownIt({
      html: true,
    });

    this.resolvePath = path => path;
    this.preprocess = content => content;
    this.defaultEncoding = 'utf8';
  }

  setPathResolver(resolver) {
    this.resolvePath = resolver;
  }

  setPreprocessor(preprocessor) {
    this.preprocess = preprocessor;
  }

  render(file) {
    const filePath = this.resolvePath(file);
    let raw = this.getContents(filePath);

    raw = this.preprocess(raw);

    return this.md.render(raw);
  }

  getContents(file, encoding) {
    return fs.readFileSync(file, encoding || this.defaultEncoding);
  }
}

module.exports = PostRenderer;
