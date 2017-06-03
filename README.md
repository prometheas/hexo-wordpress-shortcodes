# hexo-wordpress-shortcodes
A WordPress-style shortcode rendering mechanism for Hexo sites


## Installation and Usage

Install the plugin to your Hexo site:

```sh
$ npm install --save hexo-wordpress-shortcodes
```

In case Hexo isn't configured to detect and load all plugins, add this to your project's `_config.yml` file:

```yaml
plugins:
  - hexo-wordpress-shortcodes
```

You'll need to then define some shortcode implementations.  You might add the following, for example, into a one of your theme's `scripts` files:

```javascript
const parser = require('hexo-wordpress-shortdcodes');

parser.add('upper', (atts, content) => (content.toUpperCase()));
parser.add('lower', (atts, content) => (content.toLowerCase()));
```


## Shortcodes?!

Those of you familiar with Hexo may well wonder why on earth I've bothered to implement WordPress-style shortcodes to Hexo, when Hexo's native solution to this sort of thing is [tag plugins](https://hexo.io/docs/tag-plugins.html).

The biggest reason is that I came to Hexo from WordPress, and I'd already had a bunch of posts written with shortcodes; it was way less effort to create this plugin and implement my shortcodes than it would have been to go back and comb through my posts to update them.

And, since I'm unlikely to be the only fellow on the planet in such a situation, I figured I'd simply make this plugin and share it.

