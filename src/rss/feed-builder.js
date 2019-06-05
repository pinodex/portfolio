const Feed = require('feed').Feed

class FeedBuilder {
  /**
   * Constructs FeedBuilder
   * @param {Object} config
   * @param {PostRenderer} renderer
   *
   * config properties:
   * - title
   * - description
   * - link
   * - image
   * - favicon
   * - author.name
   * - author.email
   * - author.link
   */
  constructor (config = {}, renderer) {
    this._config = config
    this._renderer = renderer

    this._init()
  }

  _init () {
    this._feed = new Feed({
      title: this._config.title,
      description: this._config.description,
      id: this._config.link,
      link: this._config.link,
      language: 'en',
      image: this._config.image,
      favicon: this._config.favicon,
      copyright: `Copyright 2019, ${this._config.title}`,
      updated: new Date(),
      feedLinks: {
        json: this._config.json,
        atom: this._config.atom,
        rss: this._config.rss,
      },
      author: this._config.author
    })
  }

  _makeItemUrl (prefix, url) {
    return this._config.link + prefix + url
  }

  addItem (item, slugPrefix = '/') {
    const url = this._makeItemUrl(slugPrefix, item.slug)

    this._feed.addItem({
      id: url,
      link: url,
      title: item.name,
      description: item.description,
      content: this._renderer.render(slugPrefix + item.slug + '.md'),
      image: this._makeItemUrl('', item.thumbnail),
      author: this._config.author,
      date: new Date()
    })
  }

  addItems (items, slugPrefix = '/') {
    items.forEach(item => this.addItem(item, slugPrefix))
  }

  rss () {
    return this._feed.rss2()
  }

  atom () {
    return this._feed.atom1()
  }

  json () {
    return this._feed.json1()
  }
}

module.exports = FeedBuilder
