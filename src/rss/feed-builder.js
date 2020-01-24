const { Feed } = require('feed');

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
  constructor(config = {}, renderer) {
    this.config = config;
    this.renderer = renderer;

    this.init();
  }

  init() {
    this.feed = new Feed({
      title: this.config.title,
      description: this.config.description,
      id: this.config.link,
      link: this.config.link,
      language: 'en',
      image: this.config.image,
      favicon: this.config.favicon,
      copyright: `Copyright 2019, ${this.config.title}`,
      updated: new Date(),
      feedLinks: {
        json: this.config.json,
        atom: this.config.atom,
        rss: this.config.rss,
      },
      author: this.config.author,
    });
  }

  makeItemUrl(prefix, url) {
    return this.config.link + prefix + url;
  }

  addItem(item, slugPrefix = '/') {
    const url = this.makeItemUrl(slugPrefix, item.slug);

    this.feed.addItem({
      id: url,
      link: url,
      title: item.name,
      description: item.description,
      content: this.renderer.render(`${slugPrefix + item.slug}.md`),
      image: this.makeItemUrl('', item.thumbnail),
      author: this.config.author,
      date: new Date(),
    });
  }

  addItems(items, slugPrefix = '/') {
    items.forEach(item => this.addItem(item, slugPrefix));
  }

  rss() {
    return this.feed.rss2();
  }

  atom() {
    return this.feed.atom1();
  }

  json() {
    return this.feed.json1();
  }
}

module.exports = FeedBuilder;
