const Hexo = require('hexo');
const expect = require('chai').expect;

const plugin = require('../index');

const sampleText = 'This is a test post [bold]with[/bold] a shortcode.';

describe('index', () => {
  describe('#bindToHexo()', () => {
    it('should add one new `before_post_render` filter', () => {
      const hexo = new Hexo();

      function getNumberOfPostRenderFilters() {
        return (hexo.extend.filter.list().before_post_render || []).length;
      }

      const numInitialFilters = getNumberOfPostRenderFilters();

      plugin.bindToHexo(hexo);
      expect(getNumberOfPostRenderFilters()).to.eql(numInitialFilters + 1);
    });
  });

  describe('filtering', () => {
    function execFilter(hexo, text) {
      const data = { content: text };
      return hexo.extend.filter.execSync('before_post_render', data);
    }

    it('should apply defined shortcodes', () => {
      const hexo = new Hexo();

      expect(execFilter(hexo, sampleText).content).to.match(/\[bold\]with\[\/bold\] /);

      plugin.bindToHexo(hexo);
      plugin.add('bold', (atts, content) => (`<b>${content}</b>`));
      expect(execFilter(hexo, sampleText).content).to.match(/<b>with<\/b>/);
    });
  });
});
