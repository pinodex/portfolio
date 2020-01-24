const fs = require('fs');
const root = require('app-root-path');
const config = require('../config');

const FeedBuilder = require('./feed-builder');
const PostRenderer = require('./post-renderer');

const projects = require('../../data/projects/index.json');
const labs = require('../../data/labs/index.json');

const renderer = new PostRenderer();

renderer.setPathResolver(rawPath => `${root}/data${rawPath}`);

renderer.setPreprocessor(content => content.replace(/MockupMedia/mg, 'video')
  .replace(/Browser|PreloadedImage|Screen/mg, 'img')
  .replace(/<carousel(.*)>|<slide>/mg, '<div>')
  .replace(/<\/carousel>|<\/slide>/mg, '</div>')
  .replace(/<video[^]src="(.*)"[^>]*>/, '<video src="$1">')
  .replace(/(\/assets[\w~,;\-./?%&+#=]*)/mg, `${config.site.url}$1`));

const builder = new FeedBuilder({
  title: config.site.title,
  description: config.site.description,
  link: config.site.url,
  image: `${config.site.url}/assets/img/og-image.jpg`,
  favicon: `${config.site.url}/assets/favicon.ico`,
  json: `${config.site.url}/feed/index.json`,
  atom: `${config.site.url}/feed/atom.xml`,
  rss: `${config.site.url}/feed/rss.xml`,
  author: config.feed.author,
}, renderer);

builder.addItems(projects, '/projects/');
builder.addItems(labs, '/labs/');

const targetPath = `${root}/public/feed`;

fs.writeFileSync(`${targetPath}/rss.xml`, builder.rss());
fs.writeFileSync(`${targetPath}/atom.xml`, builder.atom());
fs.writeFileSync(`${targetPath}/index.json`, builder.json());
