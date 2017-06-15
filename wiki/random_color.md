
https://github.com/davidmerfield/randomColor

Options

You can pass an options object to influence the type of color it produces. The options object accepts the following properties:

hue – Controls the hue of the generated color. You can pass a string representing a color name: red, orange, yellow, green, blue, purple, pink and monochrome are currently supported. If you pass a hexidecimal color string such as #00FFFF, randomColor will extract its hue value and use that to generate colors.

luminosity – Controls the luminosity of the generated color. You can specify a string containing bright, light or dark.

count – An integer which specifies the number of colors to generate.

seed - An integer or string which when passed will cause randomColor to return the same color each time.

format – A string which specifies the format of the generated color. Possible values are rgb, rgba, rgbArray, hsl, hsla, hslArray and hex (default).

alpha – A decimal between 0 and 1. Only relevant when using a format with an alpha channel (rgba and hsla). Defaults to a random value.