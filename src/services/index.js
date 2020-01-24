const context = require.context('./', true, /\.js$/);
const services = {};

export default function () {
  context.keys().forEach((name) => {
    if (name === './index.js') return;

    const id = name
      .replace('./', '') // Remove leading directory name
      .replace(/\//g, '.') // Replace slashes with dots
      .replace('.js', ''); // Remove file ext

    services[`$${id}`] = context(name).default;
  });

  return services;
}
