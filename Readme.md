
# Noticon

  Favicon notifications inspired by original [tinycon](https://github.com/tommoor/tinycon). Styled
  with CSS!

  ![js pie favicons](http://f.cl.ly/items/2O1Q2i063O1V1Y010V1c/Screen%20Shot%202012-09-20%20at%203.45.31%20PM.png)

## Installation

    $ component install component/noticon

## Styling

  Noticon utilizes [component/style](https://github.com/component/style)
  to enable CSS styling for Canvas rasters. For example the default
  style is:

```css
.noticon {
  color: white;
  background: #ED372A;
}
```

## API

### new Noticon([selector])

  Initialize a new `Noticon` with optional CSS `selector` used
  for styling, this defaults to ".noticon".

### Noticon#update(n)

  Update the number to `n`, this will automatically
  draw the bubble and replace the favicon.

# License

  MIT

