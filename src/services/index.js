let context = require.context('./', true, /\.js$/),
    services = {}

export default function (app) {
  context.keys().forEach(name => {
    if (name === './index.js') return

    let id = name
      .replace('./', '') // Remove leading directory name
      .replace(/\//g, '.') // Replace slashes with dots
      .replace('.js', '') // Remove file ext

    services[`$${id}`] = context(name).default
  });

  return services
}
