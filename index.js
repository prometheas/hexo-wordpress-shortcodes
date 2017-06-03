/* eslint no-param-reassign: 0 */

const shortcodes = require('meta-shortcodes');

const parser = shortcodes();

/**
 * Registers the shortcode filter to the specified Hexo instance.
 *
 * @param {Hexo} hexo
 */
parser.bindToHexo = (hexo) => {
  hexo.extend.filter.register('before_post_render', (data) => {
    data.content = parser.parse(data.content);
    return data;
  });
};

if (typeof global.hexo !== 'undefined') {
  parser.bindToHexo(global.hexo);
}

module.exports = parser;
