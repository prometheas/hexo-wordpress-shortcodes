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

You'll need to then define some shortcode implementations.  The plugin expects to find a map of shortcode implementations at `hexo.locals.get('shortcodes')`, in which the keys are the shortcode names and their values are callbacks that process the declared shortcode.

Say, for example, you create a file `themes/my_theme>/shortcodes.js` in which you declare two shortcodes `to_upper` and `to_lower` as follows:

```javascript
hexo.locals.set('shortcodes', {
  to_upper: (atts, content) => {
    (atts, content) => (content.toUpperCase()));
  },
  to_lower: (atts, content) => {
    (atts, content) => (content.toLowerCase()));
  }
});
```

With this in place, a post with content:

```text
[to_uper]some text to capitalize[to_upper]

[to_lower]Other Text to Lowercase[/to_lower]
```

Would render:

```text
SOME TEXT TO CAPITALIZE

other text to lowercase
```


## Shortcodes?!

Those of you familiar with Hexo may well wonder why on earth I've bothered to implement WordPress-style shortcodes to Hexo, when Hexo's native solution to this sort of thing is [tag plugins](https://hexo.io/docs/tag-plugins.html).

The biggest reason is that I came to Hexo from WordPress, and I'd already had a bunch of posts written with shortcodes; it was way less effort to create this plugin and implement my shortcodes than it would have been to go back and comb through my posts to update them.

And, since I'm unlikely to be the only fellow on the planet in such a situation, I figured I'd simply make this plugin and share it.

