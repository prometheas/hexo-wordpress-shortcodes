/* eslint no-param-reassign: 0 */

const shortcodes = require('meta-shortcodes');

const parser = shortcodes();

/**
 * Registers the shortcode filter to the specified Hexo instance.
 *
 * @param {Hexo} hexo
 */
parser.bindToHexo = (hexo) => {
  const shortcodeHandlers = hexo.locals.get('shortcodes') || {};

  Object.keys(shortcodeHandlers).forEach((name) => {
    const callable = shortcodeHandlers[name];
    parser.add(name, callable);
  });

  hexo.extend.filter.register('before_post_render', (data) => {
    data.content = parser.parse(data.content);
    return data;
  });
};

if (typeof hexo !== 'undefined') {
  parser.bindToHexo(hexo);
}

module.exports = parser;
