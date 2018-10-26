# xterm.js/ansi-escape-sequences bundle

By [Allison Parrish](http://www.decontextualize.com/)

This is just a quick project to bundle
[xterm.js](https://github.com/xtermjs/xterm.js) (a JavaScript terminal
emulator) and
[ansi-escape-sequences](https://www.npmjs.com/package/ansi-escape-sequences) (a
library of ANSI escape sequences) for standalone web usage with
[browserify](http://browserify.org/).  (Both of these packages are distributed
as npm only, which is why it was necessary to do this.)

The idea is to make it easy to do quick in-browser experiments with ANSI
control sequences (obviating the need to use node in a terminal emulator). Two
examples are included in this repository, or you can see the bundled libraries
in use on the [p5js web editor](https://editor.p5js.org/):

* [Basic example](https://editor.p5js.org/allison.parrish/full/B1i3UZ2s7)
* [Implementation of 10
  PRINT](https://editor.p5js.org/allison.parrish/full/rJg_Mfnjm) ([more
  information on 10 PRINT](http://10print.org/))
* [Stars](https://editor.p5js.org/allison.parrish/full/HySfSfhsX)
* [Homage to bpNichol](https://editor.p5js.org/allison.parrish/full/H1RvYz3jm)

## Usage

Download the [pre-built bundle](xterm-ansi-bundle.js) and the [xterm.js CSS file](xterm.css) and include in your HTML like so:

    <link rel="stylesheet" href="xterm.css" />
    <script src="xterm-ansi-bundle.js"></script>

The bundle creates two global variables on `window`:

* `xterm`, the `xterm.js` module
* `ansi`, the `ansi-escape-sequences` module

The [`fit` addon](https://xtermjs.org/docs/api/addons/fit/) for `xterm.js` is
also included, which resizes the shape and geometry of the terminal window to
fit the containing HTML element. Typical usage might look like this:

    <script>
      let term = new xterm.Terminal({fontFamily: "Courier", fontSize: 24});
      term.open(document.getElementById('terminal'));
      term.fit();
      window.addEventListener('resize', function() {
        term.fit();
      });

      term.write(ansi.styles(['red', 'bold']));
      term.write("hello!");
    </script>

This will create a Terminal object using Courier as the font, attach it to a
DOM element with ID `terminal`, fit the terminal emulator to the size of the
DOM element, then write `hello!` in bright red colors.

See [the xterm.js Terminal
documentation](https://xtermjs.org/docs/api/terminal/classes/terminal/) for
more information about the methods and properties of the Terminal object, and
the [`ansi-escape-sequences`
documentation](https://github.com/75lb/ansi-escape-sequences) for more
information on the methods and properties of the `ansi` module. For the most
part, you'll just be using:

* `term.write()`: write a string (potentially with ANSI escapes) to the
    terminal
* `term.cols` and `term.rows`: the number of columns and rows in the
    terminal, respectively
* `ansi.cursor.position(row, col)`: move the cursor to position (`row`,
    `col`) (starts with 1, not 0)
* `ansi.format(s, styleArray)`: return ANSI codes to set string `s` to the
    ANSI styles defined in `styleArray`; `ansi.format("cheese", ["yellow",
    "bold", "bg-blue"])` returns the ANSI codes to print `cheese` in yellow
    on a blue background (see [the full list of supported
    styles](https://github.com/75lb/ansi-escape-sequences#ansistyle--enum))

## Build

To build your own copy, clone this repository, run `npm install`, and then `npm
run build` to build the bundle.

## License

    Copyright 2018 Allison Parrish

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

