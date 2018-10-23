let ansi = require('ansi-escape-sequences');
let xterm = require('xterm');
let xterm_fit = require('xterm/lib/addons/fit/fit');

xterm.Terminal.applyAddon(xterm_fit);
window.ansi = ansi;
window.xterm = xterm;

