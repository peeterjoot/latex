/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/config/default.js
 *
 *  This configuration file is loaded when you load MathJax
 *  via <script src="MathJax.js?config=default"></script>
 *
 *  Use it to customize the MathJax settings.  See comments below.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2015 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/*
 *  This file lists most, but not all, of the options that can be set for
 *  MathJax and its various components.  Some additional options are
 *  available, however, and are listed in the various links at:
 *  
 *  http://www.mathjax.org/resources/docs/?configuration.html#configuration-options-by-component
 *
 *  You can add these to the configuration object below if you 
 *  want to change them from their default values.
 */

MathJax.Hub.Config({

  //
  //  A comma-separated list of configuration files to load
  //  when MathJax starts up.  E.g., to define local macros, etc.
  //  The default directory is the MathJax/config directory.
  //  
  //  Example:    config: ["local/local.js"],
  //  Example:    config: ["local/local.js","MMLtoHTML.js"],
  //
  config: [],
  
  //
  //  A comma-separated list of CSS stylesheet files to be loaded
  //  when MathJax starts up.  The default directory is the
  //  MathJax/config directory.
  // 
  //  Example:    styleSheets: ["MathJax.css"],
  //
  styleSheets: [],
  
  //
  //  Styles to be defined dynamically at startup time.
  //  
  //  Example:
  //      styles: {
  //        ".MathJax_Preview": {
  //          color: "#888"
  //        }
  //      },
  //
  styles: {},
  
  //
  //  A comma-separated list of input and output jax to initialize at startup.
  //  Their main code is loaded only when they are actually used, so it is not
  //  inefficient to include jax that may not actually be used on the page.  These
  //  are found in the MathJax/jax directory.  The choices include
  //  
  //      input/TeX
  //      input/MathML
  //      input/AsciiMath
  //      
  //      output/HTML-CSS
  //      output/NativeMML
  //      output/SVG
  // 
  //   If you change the input jax, you may need to include the appropriate
  //   preprocessor in the extensions array below.
  //  
  jax: ["input/TeX", "output/HTML-CSS"],
  
  //
  //  A comma-separated list of extensions to load at startup.  The default
  //  directory is MathJax/extensions.
  //  
  //  Example:    extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js"],
  //  
  //  You may wish to include "mml2jax.js" if you are using "input/MathML" in the
  //  jax array above, and "asciimath2jax.js" if you using "input/AsciiMath".
  //  Include "jsmath2jax.js" if you are converting from using jsMath to MathJax.
  //
  extensions: ["tex2jax.js"],
  
  //
  //  Patterns to remove from before and after math script tags.  If you are not
  //  using one of the preprocessors (e.g., tex2jax), you need to insert something
  //  extra into your HTML file in order to avoid a bug in Internet Explorer.  IE
  //  removes spaces from the DOM that it thinks are redundent, and since a SCRIPT
  //  tag usually doesn't add content to the page, if there is a space before and after
  //  a MathJax SCRIPT tag, IE will remove the first space.  When MathJax inserts
  //  the typeset mathematics, this means there will be no space before it and the
  //  preceeding text.  In order to avoid this, you should include some "guard characters"
  //  before or after the math SCRIPT tag; define the patterns you want to use below.
  //  Note that these are used as regular expressions, so you will need to quote
  //  special characters.  Furthermore, since they are javascript strings, you must
  //  quote javascript special characters as well.  So to obtain a backslash, you must
  //  use \\ (doubled for javascript).  For example, "\\[" is the pattern \[ in the
  //  regular expression.  That means that if you want an actual backslash in your
  //  guard characters, you need to use "\\\\" in order to get \\ in the regular
  //  expression, and \ in the actual text.  If both preJax and postJax are defined,
  //  both must be present in order to be  removed.
  //
  //  See also the preRemoveClass comments below.
  //  
  //  Example:
  //      preJax: "\\\\\\\\",  // makes a double backslash the preJax text
  //    or
  //      preJax:  "\\[\\[", // jax scripts must be enclosed in double brackets
  //      postJax: "\\]\\]",
  //
  preJax: null,
  postJax: null,
  
  //
  //  The CSS class for a math preview to be removed preceeding a MathJax
  //  SCRIPT tag.  If the tag just before the MathJax SCRIPT tag is of this
  //  class, its contents are removed when MathJax processes the SCRIPT
  //  tag.  This allows you to include a math preview in a form that will
  //  be displayed prior to MathJax performing its typesetting.  It also
  //  avoids the Internet Explorer space-removal bug, and can be used in
  //  place of preJax and postJax if that is more convenient.
  //  
  //  For example
  //  
  //      <span class="MathJax_Preview">[math]</span><script type="math/tex">...</script>
  //
  //  would display "[math]" in place of the math until MathJax is able to typeset it.
  //
  preRemoveClass: "MathJax_Preview",
  
  //
  //  This value controls whether the "Processing Math: nn%" message are displayed
  //  in the lower left-hand corner.  Set to "false" to prevent those messages (though
  //  file loading and other messages will still be shown).
  //
  showProcessingMessages: true,
  
  //
  //  This value controls the verbosity of the messages in the lower left-hand corner.
  //  Set it to "none" to eliminate all messages, or set it to "simple" to show
  //  "Loading..." and "Processing..." rather than showing the full file name and the
  //  percentage of the mathematics processed.
  //
  messageStyle: "normal",
  
  //
  //  These two parameters control the alignment and shifting of displayed equations.
  //  The first can be "left", "center", or "right", and determines the alignment of
  //  displayed equations.  When the alignment is not "center", the second determines
  //  an indentation from the left or right side for the displayed equations.  When
  //  the alignment is "center", the indent allows you to shift the center to the right
  //  or left (negative is left).
  //  
  displayAlign: "center",
  displayIndent: "0",
  
  //
  //  Normally MathJax will perform its starup commands (loading of
  //  configuration, styles, jax, and so on) as soon as it can.  If you
  //  expect to be doing additional configuration on the page, however, you
  //  may want to have it wait until the page's onload hander is called.  If so,
  //  set this to "onload".
  //
  delayStartupUntil: "none",

  //
  //  Normally MathJax will typeset the mathematics on the page as soon as
  //  the page is loaded.  If you want to delay that process, in which case
  //  you will need to call MathJax.Hub.Typeset() yourself by hand, set
  //  this value to true.
  //
  skipStartupTypeset: false,
  
  //
  //  A list of element ID's that are the ones to process for mathematics
  //  when any of the Hub typesetting calls (Typeset, Process, Update, etc)
  //  are called with no element specified.  This lets you restrict the
  //  processing to particular containers rather than scanning the entire
  //  document for mathematics.  If none are supplied, the entire document
  //  is processed.
  //
  elements: [],

  //
  //  Since typesetting usually changes the vertical dimensions of the
  //  page, if the URL contains an anchor position you may no longer be
  //  positioned at the correct position on the page, so MathJax can
  //  reposition to that location after it completes its initial
  //  typesetting of the page.  This value controls whether MathJax will
  //  reposition the browser to the #hash location from the page URL after
  //  typesetting for the page.
  //  
  positionToHash: true,
  
  //
  //  These control whether to attach the MathJax contextual menu to the
  //  expressions typeset by MathJax.  Since the code for handling
  //  MathPlayer in Internet Explorer is somewhat delicate, it is
  //  controlled separately via (showMathMenuMSIE).  The latter is now
  //  deprecated in favor of the MathJax contextual menu settings for
  //  MathPlayer.
  //  
  //  These values used to be listed in the separate output jax, but
  //  have been moved to this more central location since they are shared
  //  by all output jax.
  //
  showMathMenu: true,
  showMathMenuMSIE: true,


  //
  //  The default settings for the MathJax contextual menu (overridden by
  //  the MathJax cookie when users change the menu settings).
  //  
  menuSettings: {
    zoom: "None",        //  when to do MathZoom
    CTRL: false,         //    require CTRL for MathZoom?
    ALT: false,          //    require Alt or Option?
    CMD: false,          //    require CMD?
    Shift: false,        //    require Shift?
    discoverable: false, //  make math menu discoverable on hover?
    zscale: "200%",      //  the scaling factor for MathZoom
    renderer: null,      //  set when Jax are loaded
    font: "Auto",        //  what font HTML-CSS should use
    context: "MathJax",  //  or "Browser" for pass-through to browser menu
    locale: null,        //  the language to use for messages
    mpContext: false,    //  true means pass menu events to MathPlayer in IE
    mpMouse: false,      //  true means pass mouse events to MathPlayer in IE
    texHints: true,      //  include class names for TeXAtom elements
    FastPreview: null,   //  use PreviewHTML output as preview?
    assistiveMML: null,  //  include hidden MathML for screen readers?
    inTabOrder: true,    //  set to true if math elements should be included in the tabindex
    semantics: false     //  add semantics tag with original form in MathML output
  },
  
  //
  //  The message and style for when there is a processing error handling 
  //  the mathematics (something has gone wrong with the input or output
  //  jax that prevents it from operating properly).
  //
  errorSettings: {
    message: ["[",["MathProcessingError","Math Processing Error"],"]"],
    style: {color: "#CC0000", "font-style":"italic"}  // style for message
  },

  
  //============================================================================
  //
  //  These parameters control the tex2jax preprocessor (when you have included
  //  "tex2jax.js" in the extensions list above).
  //
  tex2jax: {

    //
    //  The delimiters that surround in-line math expressions.  The first in each
    //  pair is the initial delimiter and the second is the terminal delimiter.
    //  Comment out any that you don't want, but be sure there is no extra
    //  comma at the end of the last item in the list -- some browsers won't
    //  be able to handle that.
    //
    inlineMath: [
//    ['$','$'],      // uncomment this for standard TeX math delimiters
      ['\\(','\\)']
    ],

    //
    //  The delimiters that surround displayed math expressions.  The first in each
    //  pair is the initial delimiter and the second is the terminal delimiter.
    //  Comment out any that you don't want, but be sure there is no extra
    //  comma at the end of the last item in the list -- some browsers won't
    //  be able to handle that.
    //
    displayMath: [
      ['$$','$$'],
      ['\\[','\\]']
    ],

    //
    //  This value determines whether tex2jax requires braces to be
    //  balanced within math delimiters (which allows for nested dollar
    //  signs).  Set to false to get pre-v2.0 compatibility.  When true,
    //  
    //      $y = x^2 \hbox{ when $x > 2$}$.
    //  
    //  will be properly handled as a single expression.  When false, it
    //  would be interpreted as two searpate expressions, each with 
    //  improperly balanced braces.
    // 
    balanceBraces: true,
    
    //
    //  This array lists the names of the tags whose contents should not be
    //  processed by tex2jax (other than to look for ignore/process classes
    //  as listed below).  You can add to (or remove from) this list to prevent
    //  MathJax from processing mathematics in specific contexts.
    //
    skipTags: ["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],

    //
    //  This is the class name used to mark elements whose contents should
    //  not be processed by tex2jax (other than to look for the
    //  processClass pattern below).  Note that this is a regular
    //  expression, and so you need to be sure to quote any regexp special
    //  characters.  The pattern is automatically preceeded by '(^| )(' and
    //  followed by ')( |$)', so your pattern will have to match full words
    //  in the class name.  Assigning an element this class name will
    //  prevent `tex2jax` from processing its contents.
    //
    ignoreClass: "tex2jax_ignore",

    //
    //  This is the class name used to mark elements whose contents SHOULD
    //  be processed by tex2jax.  This is used to turn on processing within
    //  tags that have been marked as ignored or skipped above.  Note that
    //  this is a regular expression, and so you need to be sure to quote
    //  any regexp special characters.  The pattern is automatically
    //  preceeded by '(^| )(' and followed by ')( |$)', so your pattern
    //  will have to match full words in the class name.  Use this to
    //  restart processing within an element that has been marked as
    //  ignored above.
    //
    processClass: "tex2jax_process",
    
    //
    //  Set to "true" to allow \$ to produce a dollar without starting in-line
    //  math mode.  If you uncomment the ['$','$'] line above, you should change
    //  this to true so that you can insert plain dollar signs into your documents
    //
    processEscapes: false,

    //
    //  Controls whether tex2jax processes LaTeX environments outside of math
    //  mode.  Set to "false" to prevent processing of environments except within
    //  math mode.
    //
    processEnvironments: true,

    //
    //  Controls whether tex2jax processes \ref{...} commands outside
    //  of math mode.  Set to "false" to prevent processing of \ref
    //  except within math mode.
    //  
    processRefs: true,

    //
    //  Controls whether tex2jax inserts MathJax_Preview spans to make a
    //  preview available, and what preview to use, when it locates in-line
    //  and display mathetics on the page.  The default is "TeX", which
    //  means use the TeX code as the preview (until it is processed by
    //  MathJax).  Set to "none" to prevent the previews from being
    //  inserted (the math will simply disappear until it is typeset).  Set
    //  to an array containing the description of an HTML snippet in order
    //  to use the same preview for all equations on the page (e.g., you
    //  could have it say "[math]" or load an image).
    //  
    //  E.g.,     preview: ["[math]"],
    //  or        preview: [["img",{src: "http://myserver.com/images/mypic.jpg"}]]
    //  
    preview: "TeX"
    
  },
  
  //============================================================================
  //
  //  These parameters control the asciimath2jax preprocessor (when you have included
  //  "asciimath2jax.js" in the extensions list above).
  //
  asciimath2jax: {

    //
    //  The delimiters that surround asciimath expressions.  The first in each
    //  pair is the initial delimiter and the second is the terminal delimiter.
    //
    delimiters: [
      ['`','`']
    ],

    //
    //  This array lists the names of the tags whose contents should not be
    //  processed by asciimath2jax (other than to look for ignore/process classes
    //  as listed below).  You can add to (or remove from) this list to prevent
    //  MathJax from processing mathematics in specific contexts.
    //
    skipTags: ["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],

    //
    //  This is the class name used to mark elements whose contents should
    //  not be processed by asciimath2jax (other than to look for the
    //  processClass pattern below).  Note that this is a regular
    //  expression, and so you need to be sure to quote any regexp special
    //  characters.  The pattern is automatically preceeded by '(^| )(' and
    //  followed by ')( |$)', so your pattern will have to match full words
    //  in the class name.  Assigning an element this class name will
    //  prevent `asciimath2jax` from processing its contents.
    //
    ignoreClass: "asciimath2jax_ignore",

    //
    //  This is the class name used to mark elements whose contents SHOULD
    //  be processed by asciimath2jax.  This is used to turn on processing
    //  within tags that have been marked as ignored or skipped above.
    //  Note that this is a regular expression, and so you need to be sure
    //  to quote any regexp special characters.  The pattern is
    //  automatically preceeded by '(^| )(' and followed by ')( |$)', so
    //  your pattern will have to match full words in the class name.  Use
    //  this to restart processing within an element that has been marked
    //  as ignored above.
    //
    processClass: "asciimath2jax_process",
    
    //  Controls whether asciimath2jax inserts MathJax_Preview spans to make a
    //  preview available, and what preview to use, when it locates in-line
    //  and display mathetics on the page.  The default is "AsciiMath", which
    //  means use the AsciiMath code as the preview (until it is processed by
    //  MathJax).  Set to "none" to prevent the previews from being
    //  inserted (the math will simply disappear until it is typeset).  Set
    //  to an array containing the description of an HTML snippet in order
    //  to use the same preview for all equations on the page (e.g., you
    //  could have it say "[math]" or load an image).
    //  
    //  E.g.,     preview: ["[math]"],
    //  or        preview: [["img",{src: "http://myserver.com/images/mypic.jpg"}]]
    //  
    preview: "AsciiMath"
    
  },
  
  //============================================================================
  //
  //  These parameters control the mml2jax preprocessor (when you have included
  //  "mml2jax.js" in the extensions list above).
  //
  mml2jax: {
    
    //
    //  Controls whether mml2jax inserts MathJax_Preview spans to make a
    //  preview available, and what preview to use, when it locates
    //  mathematics on the page.  The default is "mathml" which means use
    //  the <math> tag as the preview (until it is processed by MathJax).
    //  Set to "alttext", to use the  <math> tag's alttext attribute as the
    //  preview, if the tag has one.  Set to "none" to
    //  prevent the previews from being inserted (the math will simply
    //  disappear until it is typeset). Set to "altimg" to use an image
    //  described by the altimg* attributes of the <math> element.
    //  Set to an array containing the
    //  description of an HTML snippet in order to use the same preview for
    //  all equations on the page (e.g., you could have it say "[math]" or
    //  load an image).
    //  
    //  E.g.,     preview: ["[math]"],
    //  or        preview: [["img",{src: "http://myserver.com/images/mypic.jpg"}]]
    //  
    preview: "mathml"
    
  },
  
  //============================================================================
  //
  //  These parameters control the jsMath2jax preprocessor (when you have included
  //  "jsMath2jax.js" in the extensions list above).
  //
  jsMath2jax: {
    
    //
    //  Controls whether jsMath2jax inserts MathJax_Preview spans to make a
    //  preview available, and what preview to use, when it locates
    //  mathematics on the page.  The default is "TeX", which means use the
    //  TeX code as the preview (until it is processed by MathJax).  Set to
    //  "none" to prevent the previews from being inserted (the math will
    //  simply disappear until it is typeset).  Set to an array containing
    //  the description of an HTML snippet in order to use the same preview
    //  for all equations on the page (e.g., you could have it say "[math]"
    //  or load an image).
    //  
    //  E.g.,     preview: ["[math]"],
    //  or        preview: [["img",{src: "http://myserver.com/images/mypic.jpg"}]]
    //  
    preview: "TeX"
    
  },

  //============================================================================
  //
  //  These parameters control the TeX input jax.
  //
  TeX: {

    //
    //  This specifies the side on which \tag{} macros will place the tags.
    //  Set to "left" to place on the left-hand side.
    //
    TagSide: "right",
    
    //
    //  This is the amound of indentation (from right or left) for the tags.
    //
    TagIndent: "0.8em",
    
    //
    //  This is the width to use for the multline environment
    //
    MultLineWidth: "85%",
    
    //
    //  List of macros to define.  These are of the form
    //      name: value
    //  where 'value' is the replacement text for the macro \name.
    //  The 'value' can also be [value,n] where 'value' is the replacement
    //  text and 'n' is the number of parameters for the macro.
    //  Note that backslashes must be doubled in the replacement string.
    //  
    //  E.g.,
    //  
    //      Macros: {
    //        RR: '{\\bf R}',
    //        bold: ['{\\bf #1}', 1]
    //      }
    //
    Macros: {
ifrac: ['{#1}/{#2}', 2],
Real: ['{\\textrm{Re}}', 0],
lr: ['{\\left(#1\\right)}', 1],
biglr: ['{\\Bigl(#1\\Bigr)}', 1],
Biglr: ['{\\Biggl(#1\\Biggr)}', 1],
setlr: ['{\\left\\{#1\\right\\}}', 1],
evalbar: ['{{\\left.{#1}\\right\\vert}_{#2}}', 2],
evalrange: ['{{\\left.{#1}\\right\\vert}_{#2}^{#3}}', 3],
evalnobar: ['{{#1}_{#2}}', 2],
Ba: ['{\\mathbf{a}}', 0],
Bb: ['{\\mathbf{b}}', 0],
Bc: ['{\\mathbf{c}}', 0],
Bd: ['{\\mathbf{d}}', 0],
Be: ['{\\mathbf{e}}', 0],
Bf: ['{\\mathbf{f}}', 0],
Bg: ['{\\mathbf{g}}', 0],
Bh: ['{\\mathbf{h}}', 0],
Bi: ['{\\mathbf{i}}', 0],
Bj: ['{\\mathbf{j}}', 0],
Bk: ['{\\mathbf{k}}', 0],
Bl: ['{\\mathbf{l}}', 0],
Bm: ['{\\mathbf{m}}', 0],
Bn: ['{\\mathbf{n}}', 0],
Bo: ['{\\mathbf{o}}', 0],
Bp: ['{\\mathbf{p}}', 0],
Bq: ['{\\mathbf{q}}', 0],
Br: ['{\\mathbf{r}}', 0],
Bs: ['{\\mathbf{s}}', 0],
Bt: ['{\\mathbf{t}}', 0],
Bu: ['{\\mathbf{u}}', 0],
Bv: ['{\\mathbf{v}}', 0],
Bw: ['{\\mathbf{w}}', 0],
Bx: ['{\\mathbf{x}}', 0],
By: ['{\\mathbf{y}}', 0],
Bz: ['{\\mathbf{z}}', 0],
BA: ['{\\mathbf{A}}', 0],
BB: ['{\\mathbf{B}}', 0],
BC: ['{\\mathbf{C}}', 0],
BD: ['{\\mathbf{D}}', 0],
BE: ['{\\mathbf{E}}', 0],
BF: ['{\\mathbf{F}}', 0],
BG: ['{\\mathbf{G}}', 0],
BH: ['{\\mathbf{H}}', 0],
BI: ['{\\mathbf{I}}', 0],
BJ: ['{\\mathbf{J}}', 0],
BK: ['{\\mathbf{K}}', 0],
BL: ['{\\mathbf{L}}', 0],
BM: ['{\\mathbf{M}}', 0],
BN: ['{\\mathbf{N}}', 0],
BO: ['{\\mathbf{O}}', 0],
BP: ['{\\mathbf{P}}', 0],
BQ: ['{\\mathbf{Q}}', 0],
BR: ['{\\mathbf{R}}', 0],
BS: ['{\\mathbf{S}}', 0],
BT: ['{\\mathbf{T}}', 0],
BU: ['{\\mathbf{U}}', 0],
BV: ['{\\mathbf{V}}', 0],
BW: ['{\\mathbf{W}}', 0],
BX: ['{\\mathbf{X}}', 0],
BY: ['{\\mathbf{Y}}', 0],
BZ: ['{\\mathbf{Z}}', 0],
Bzero: ['{\\mathbf{0}}', 0],
Btheta: ['{\\boldsymbol{\\theta}}', 0],
BEta: ['{\\boldsymbol{\\eta}}', 0],
BXI: ['{\\boldsymbol{\\xi}}', 0],
Btau: ['{\\boldsymbol{\\tau}}', 0],
Bomega: ['{\\boldsymbol{\\omega}}', 0],
Hcap: ['{\\hat{\\BH}}', 0],
Ecap: ['{\\hat{\\BE}}', 0],
acap: ['{\\hat{\\Ba}}', 0],
bcap: ['{\\hat{\\Bb}}', 0],
ccap: ['{\\hat{\\Bc}}', 0],
dcap: ['{\\hat{\\Bd}}', 0],
ecap: ['{\\hat{\\Be}}', 0],
fcap: ['{\\hat{\\Bf}}', 0],
gcap: ['{\\hat{\\Bg}}', 0],
hcap: ['{\\hat{\\Bh}}', 0],
icap: ['{\\hat{\\Bi}}', 0],
jCap: ['{\\hat{\\Bj}}', 0],
kcap: ['{\\hat{\\Bk}}', 0],
lcap: ['{\\hat{\\Bl}}', 0],
mcap: ['{\\hat{\\Bm}}', 0],
ncap: ['{\\hat{\\Bn}}', 0],
ocap: ['{\\hat{\\Bo}}', 0],
pcap: ['{\\hat{\\Bp}}', 0],
qcap: ['{\\hat{\\Bq}}', 0],
rcap: ['{\\hat{\\Br}}', 0],
scap: ['{\\hat{\\Bs}}', 0],
tcap: ['{\\hat{\\Bt}}', 0],
ucap: ['{\\hat{\\Bu}}', 0],
vcap: ['{\\hat{\\Bv}}', 0],
wcap: ['{\\hat{\\Bw}}', 0],
xcap: ['{\\hat{\\Bx}}', 0],
ycap: ['{\\hat{\\By}}', 0],
zcap: ['{\\hat{\\Bz}}', 0],
thetacap: ['{\\hat{\\Btheta}}', 0],
taucap: ['{\\hat{\\Btau}}', 0],
rhocap: ['{\\hat{\\Brho}}', 0],
Vcap: ['{\\hat{\\BV}}', 0],
Bcap: ['{\\hat{\\BB}}', 0],
Fcap: ['{\\hat{\\BF}}', 0],
Rcap: ['{\\hat{\\BR}}', 0],
Gcap: ['{\\hat{\\BG}}', 0],
txtA: ['{\\textrm{A}}', 0],
txtB: ['{\\textrm{B}}', 0],
txtC: ['{\\textrm{C}}', 0],
txtD: ['{\\textrm{D}}', 0],
txtE: ['{\\textrm{E}}', 0],
txtF: ['{\\textrm{F}}', 0],
txtG: ['{\\textrm{G}}', 0],
txtH: ['{\\textrm{H}}', 0],
txtI: ['{\\textrm{I}}', 0],
txtJ: ['{\\textrm{J}}', 0],
txtK: ['{\\textrm{K}}', 0],
txtL: ['{\\textrm{L}}', 0],
txtM: ['{\\textrm{M}}', 0],
txtN: ['{\\textrm{N}}', 0],
txtO: ['{\\textrm{O}}', 0],
txtP: ['{\\textrm{P}}', 0],
txtQ: ['{\\textrm{Q}}', 0],
txtR: ['{\\textrm{R}}', 0],
txtS: ['{\\textrm{S}}', 0],
txtT: ['{\\textrm{T}}', 0],
txtU: ['{\\textrm{U}}', 0],
txtV: ['{\\textrm{V}}', 0],
txtW: ['{\\textrm{W}}', 0],
txtX: ['{\\textrm{X}}', 0],
txtY: ['{\\textrm{Y}}', 0],
txtZ: ['{\\textrm{Z}}', 0],
txta: ['{\\textrm{a}}', 0],
txtb: ['{\\textrm{b}}', 0],
txtc: ['{\\textrm{c}}', 0],
txtd: ['{\\textrm{d}}', 0],
txte: ['{\\textrm{e}}', 0],
txtf: ['{\\textrm{f}}', 0],
txtg: ['{\\textrm{g}}', 0],
txth: ['{\\textrm{h}}', 0],
txti: ['{\\textrm{i}}', 0],
txtj: ['{\\textrm{j}}', 0],
txtk: ['{\\textrm{k}}', 0],
txtl: ['{\\textrm{l}}', 0],
txtm: ['{\\textrm{m}}', 0],
txtn: ['{\\textrm{n}}', 0],
txto: ['{\\textrm{o}}', 0],
txtp: ['{\\textrm{p}}', 0],
txtq: ['{\\textrm{q}}', 0],
txtr: ['{\\textrm{r}}', 0],
txts: ['{\\textrm{s}}', 0],
txtt: ['{\\textrm{t}}', 0],
txtu: ['{\\textrm{u}}', 0],
txtv: ['{\\textrm{v}}', 0],
txtw: ['{\\textrm{w}}', 0],
txtx: ['{\\textrm{x}}', 0],
txty: ['{\\textrm{y}}', 0],
txtz: ['{\\textrm{z}}', 0],
PauliI: ['{\begin{bmatrix} 1 & 0 \\ 0 & 1 \\ \end{bmatrix}}', 0],
PauliX: ['{\begin{bmatrix} 0 & 1 \\ 1 & 0 \\ \end{bmatrix}}', 0],
PauliY: ['{\begin{bmatrix} 0 & -i \\ i & 0 \\ \end{bmatrix}}', 0],
PauliZ: ['{\begin{bmatrix} 1 & 0 \\ 0 & -1 \\ \end{bmatrix}}', 0],
inv: ['{\\frac{1}{#1}}', 1],
cross: ['{\\times}', 0],
abs: ['{\\lvert{#1}\\rvert}', 1],
norm: ['{\\lVert{#1}\\rVert}', 1],
innerprod: ['{\\langle{#1}, {#2}\\rangle}', 2],
dotprod: ['{{#1} \\cdot {#2}}', 2],
Abs: ['{{\\left\\lvert{#1}\\right\\rvert}}', 1],
Norm: ['{\\left\\lVert{#1}\\right\\rVert}', 1],
spacegrad: ['{\\boldsymbol{\\nabla}}', 0],
boldpartial: ['{\\boldsymbol{\\partial}}', 0],
grad: ['{\\nabla}', 0],
LL: ['{\\mathcal{L}}', 0],
rboldpartial: ['{{\\stackrel{ \\rightarrow }{\\boldpartial}}}', 0],
lboldpartial: ['{{\\stackrel{ \\leftarrow }{\\boldpartial}}}', 0],
ddt: ['{\\frac{d{#1}}{dt}}', 1],
ddtau: ['{\\frac{d{#1}}{d\\tau}}', 1],
dds: ['{\\frac{d{#1}}{ds}}', 1],
ddx: ['{\\frac{d{#1}}{dx}}', 1],
ddrho: ['{\\frac{d{#1}}{d\\rho}}', 1],
ddz: ['{\\frac{d{#1}}{dz}}', 1],
PD: ['{\\frac{\\partial {#2}}{\\partial {#1}}}', 2],
PDi: ['{{\\partial {#2}}/{\\partial {#1}}}', 2],
PDsq: ['{\\frac{\\partial^2 {#2}}{(\\partial {#1})^2}}', 2],
conj: ['{{*}}', 0],
gpgrade: [' {{\\left\\langle{{#1}}\\right\\rangle}_{#2}}', 2],
gpgradezero: [' {\\gpgrade{#1}{}}', 1],
gpgradeone: [' {\\gpgrade{#1}{1}}', 1],
gpgradetwo: [' {\\gpgrade{#1}{2}}', 1],
gpgradethree: [' {\\gpgrade{#1}{3}}', 1],
gpgradefour: [' {\\gpgrade{#1}{4}}', 1],
adot: ['{{\\dot{a}}}', 0],
bdot: ['{{\\dot{b}}}', 0],
edot: ['{{\\dot{e}}}', 0],
fdot: ['{{\\dot{f}}}', 0],
gdot: ['{{\\dot{g}}}', 0],
hdot: ['{{\\dot{h}}}', 0],
idot: ['{{\\dot{i}}}', 0],
jdot: ['{{\\dot{j}}}', 0],
kdot: ['{{\\dot{k}}}', 0],
ldot: ['{{\\dot{l}}}', 0],
mdot: ['{{\\dot{m}}}', 0],
ndot: ['{{\\dot{n}}}', 0],
pdot: ['{{\\dot{p}}}', 0],
qdot: ['{{\\dot{q}}}', 0],
rdot: ['{{\\dot{r}}}', 0],
sdot: ['{{\\dot{s}}}', 0],
tdot: ['{{\\dot{t}}}', 0],
udot: ['{{\\dot{u}}}', 0],
vdot: ['{{\\dot{v}}}', 0],
wdot: ['{{\\dot{w}}}', 0],
xdot: ['{{\\dot{x}}}', 0],
ydot: ['{{\\dot{y}}}', 0],
zdot: ['{{\\dot{z}}}', 0],
addot: ['{{\\ddot{a}}}', 0],
bddot: ['{{\\ddot{b}}}', 0],
cddot: ['{{\\ddot{c}}}', 0],
eddot: ['{{\\ddot{e}}}', 0],
fddot: ['{{\\ddot{f}}}', 0],
gddot: ['{{\\ddot{g}}}', 0],
hddot: ['{{\\ddot{h}}}', 0],
iddot: ['{{\\ddot{i}}}', 0],
jddot: ['{{\\ddot{j}}}', 0],
kddot: ['{{\\ddot{k}}}', 0],
lddot: ['{{\\ddot{l}}}', 0],
mddot: ['{{\\ddot{m}}}', 0],
nddot: ['{{\\ddot{n}}}', 0],
oddot: ['{{\\ddot{o}}}', 0],
pddot: ['{{\\ddot{p}}}', 0],
qddot: ['{{\\ddot{q}}}', 0],
rddot: ['{{\\ddot{r}}}', 0],
sddot: ['{{\\ddot{s}}}', 0],
tddot: ['{{\\ddot{t}}}', 0],
uddot: ['{{\\ddot{u}}}', 0],
vddot: ['{{\\ddot{v}}}', 0],
wddot: ['{{\\ddot{w}}}', 0],
xddot: ['{{\\ddot{x}}}', 0],
yddot: ['{{\\ddot{y}}}', 0],
zddot: ['{{\\ddot{z}}}', 0],
Deltadot: ['{{\\dot{\\Delta}}}', 0],
Gammadot: ['{{\\dot{\\Gamma}}}', 0],
Lambdadot: ['{{\\dot{\\Lambda}}}', 0],
Omegadot: ['{{\\dot{\\Omega}}}', 0],
Phidot: ['{{\\dot{\\Phi}}}', 0],
Pidot: ['{{\\dot{\\Pi}}}', 0],
Psidot: ['{{\\dot{\\Psi}}}', 0],
Sigmadot: ['{{\\dot{\\Sigma}}}', 0],
Thetadot: ['{{\\dot{\\Theta}}}', 0],
Upsilondot: ['{{\\dot{\\Upsilon}}}', 0],
Xidot: ['{{\\dot{\\Xi}}}', 0],
alphadot: ['{{\\dot{\\alpha}}}', 0],
betadot: ['{{\\dot{\\beta}}}', 0],
chidot: ['{{\\dot{\\chi}}}', 0],
deltadot: ['{{\\dot{\\delta}}}', 0],
epsilondot: ['{{\\dot{\\epsilon}}}', 0],
etadot: ['{{\\dot{\\eta}}}', 0],
gammadot: ['{{\\dot{\\gamma}}}', 0],
kappadot: ['{{\\dot{\\kappa}}}', 0],
lambdadot: ['{{\\dot{\\lambda}}}', 0],
mudot: ['{{\\dot{\\mu}}}', 0],
nudot: ['{{\\dot{\\nu}}}', 0],
omegadot: ['{{\\dot{\\omega}}}', 0],
phidot: ['{{\\dot{\\phi}}}', 0],
pidot: ['{{\\dot{\\pi}}}', 0],
psidot: ['{{\\dot{\\psi}}}', 0],
rhodot: ['{{\\dot{\\rho}}}', 0],
sigmadot: ['{{\\dot{\\sigma}}}', 0],
taudot: ['{{\\dot{\\tau}}}', 0],
thetadot: ['{{\\dot{\\theta}}}', 0],
upsilondot: ['{{\\dot{\\upsilon}}}', 0],
varepsilondot: ['{{\\dot{\\varepsilon}}}', 0],
varphidot: ['{{\\dot{\\varphi}}}', 0],
varpidot: ['{{\\dot{\\varpi}}}', 0],
varrhodot: ['{{\\dot{\\varrho}}}', 0],
varsigmadot: ['{{\\dot{\\varsigma}}}', 0],
varthetadot: ['{{\\dot{\\vartheta}}}', 0],
xidot: ['{{\\dot{\\xi}}}', 0],
zetadot: ['{{\\dot{\\zeta}}}', 0],
Deltaddot: ['{{\\ddot{\\Delta}}}', 0],
Gammaddot: ['{{\\ddot{\\Gamma}}}', 0],
Lambdaddot: ['{{\\ddot{\\Lambda}}}', 0],
Omegaddot: ['{{\\ddot{\\Omega}}}', 0],
Phiddot: ['{{\\ddot{\\Phi}}}', 0],
Piddot: ['{{\\ddot{\\Pi}}}', 0],
Psiddot: ['{{\\ddot{\\Psi}}}', 0],
Sigmaddot: ['{{\\ddot{\\Sigma}}}', 0],
Thetaddot: ['{{\\ddot{\\Theta}}}', 0],
Upsilonddot: ['{{\\ddot{\\Upsilon}}}', 0],
Xiddot: ['{{\\ddot{\\Xi}}}', 0],
alphaddot: ['{{\\ddot{\\alpha}}}', 0],
betaddot: ['{{\\ddot{\\beta}}}', 0],
chiddot: ['{{\\ddot{\\chi}}}', 0],
deltaddot: ['{{\\ddot{\\delta}}}', 0],
epsilonddot: ['{{\\ddot{\\epsilon}}}', 0],
etaddot: ['{{\\ddot{\\eta}}}', 0],
gammaddot: ['{{\\ddot{\\gamma}}}', 0],
kappaddot: ['{{\\ddot{\\kappa}}}', 0],
lambdaddot: ['{{\\ddot{\\lambda}}}', 0],
muddot: ['{{\\ddot{\\mu}}}', 0],
nuddot: ['{{\\ddot{\\nu}}}', 0],
omegaddot: ['{{\\ddot{\\omega}}}', 0],
phiddot: ['{{\\ddot{\\phi}}}', 0],
piddot: ['{{\\ddot{\\pi}}}', 0],
psiddot: ['{{\\ddot{\\psi}}}', 0],
rhoddot: ['{{\\ddot{\\rho}}}', 0],
sigmaddot: ['{{\\ddot{\\sigma}}}', 0],
tauddot: ['{{\\ddot{\\tau}}}', 0],
thetaddot: ['{{\\ddot{\\theta}}}', 0],
upsilonddot: ['{{\\ddot{\\upsilon}}}', 0],
varepsilonddot: ['{{\\ddot{\\varepsilon}}}', 0],
varphiddot: ['{{\\ddot{\\varphi}}}', 0],
varpiddot: ['{{\\ddot{\\varpi}}}', 0],
varrhoddot: ['{{\\ddot{\\varrho}}}', 0],
varsigmaddot: ['{{\\ddot{\\varsigma}}}', 0],
varthetaddot: ['{{\\ddot{\\vartheta}}}', 0],
xiddot: ['{{\\ddot{\\xi}}}', 0],
zetaddot: ['{{\\ddot{\\zeta}}}', 0],
BDelta: ['{\\boldsymbol{\\Delta}}', 0],
BGamma: ['{\\boldsymbol{\\Gamma}}', 0],
BLambda: ['{\\boldsymbol{\\Lambda}}', 0],
BOmega: ['{\\boldsymbol{\\Omega}}', 0],
BPhi: ['{\\boldsymbol{\\Phi}}', 0],
BPi: ['{\\boldsymbol{\\Pi}}', 0],
BPsi: ['{\\boldsymbol{\\Psi}}', 0],
BSigma: ['{\\boldsymbol{\\Sigma}}', 0],
BTheta: ['{\\boldsymbol{\\Theta}}', 0],
BUpsilon: ['{\\boldsymbol{\\Upsilon}}', 0],
BXi: ['{\\boldsymbol{\\Xi}}', 0],
Balpha: ['{\\boldsymbol{\\alpha}}', 0],
Bbeta: ['{\\boldsymbol{\\beta}}', 0],
Bchi: ['{\\boldsymbol{\\chi}}', 0],
Bdelta: ['{\\boldsymbol{\\delta}}', 0],
Bepsilon: ['{\\boldsymbol{\\epsilon}}', 0],
Beta: ['{\\boldsymbol{\\eta}}', 0],
Bgamma: ['{\\boldsymbol{\\gamma}}', 0],
Bkappa: ['{\\boldsymbol{\\kappa}}', 0],
Blambda: ['{\\boldsymbol{\\lambda}}', 0],
Bmu: ['{\\boldsymbol{\\mu}}', 0],
Bnu: ['{\\boldsymbol{\\nu}}', 0],
Bphi: ['{\\boldsymbol{\\phi}}', 0],
Bpi: ['{\\boldsymbol{\\pi}}', 0],
Bpsi: ['{\\boldsymbol{\\psi}}', 0],
Brho: ['{\\boldsymbol{\\rho}}', 0],
Bsigma: ['{\\boldsymbol{\\sigma}}', 0],
Bupsilon: ['{\\boldsymbol{\\upsilon}}', 0],
Bvarepsilon: ['{\\boldsymbol{\\varepsilon}}', 0],
Bvarphi: ['{\\boldsymbol{\\varphi}}', 0],
Bvarpi: ['{\\boldsymbol{\\varpi}}', 0],
Bvarrho: ['{\\boldsymbol{\\varrho}}', 0],
Bvarsigma: ['{\\boldsymbol{\\varsigma}}', 0],
Bvartheta: ['{\\boldsymbol{\\vartheta}}', 0],
Bxi: ['{\\boldsymbol{\\xi}}', 0],
Bzeta: ['{\\boldsymbol{\\zeta}}', 0],
symmetric: ['{{\\left\\{{#1},{#2}\\right\\}}}', 2],
antisymmetric: ['{\\left[{#1},{#2}\\right]}', 2],
dimensions: ['{\\left[#1\\right]}', 1],
PDSq: ['{\\frac{\\partial^2 {#2}}{\\partial {#1}^2}}', 2],
laplacian: ['{\\nabla^2}', 0],
Dsq: [' {\\frac {\\partial^2 {#1}} {\\partial {#2}^2}}', 2],
dtheta: ['{\\frac{d {#1}}{d \\theta}}', 1],
dt: ['{\\frac{d {#1}}{dt}}', 1],
T: ['{{\\text{T}}}', 0],
HH: ['{\\boldsymbol{\\mathcal{H}}}', 0],
Hbar: ['{\\,\\hbar}', 0],
trace: ['{\\tr{#1}}', 1],
ahat: ['{\\hat{a}}', 0],
bhat: ['{\\hat{b}}', 0],
xhat: ['{\\hat{x}}', 0],
phihat: ['{\\hat{\\phi}}', 0],
psihat: ['{\\hat{\\psi}}', 0],
alphacap: ['{\\hat{\\boldsymbol{\\alpha}}}', 0],
phicap: ['{\\hat{\\boldsymbol{\\phi}}}', 0],
psicap: ['{\\hat{\\boldsymbol{\\psi}}}', 0],
barb: ['{\\overbar{b}}', 0],
barz: ['{\\overbar{z}}', 0],
barq: ['{\\overbar{q}}', 0],
barA: ['{\\overbar{A}}', 0],
barh: ['{\\overbar{h}}', 0],
barmu: ['{\\overbar{\\mu}}', 0],
reverse: ['{\\tilde{{#1}}}', 1],
expectation: ['{\\left\\langle{#1}\\right\\rangle}', 1],
rgrad: ['{{\\stackrel{ \\rightarrow }{\\grad}}}', 0],
lgrad: ['{{\\stackrel{ \\leftarrow }{\\grad}}}', 0],
lrgrad: ['{{\\stackrel{ \\leftrightarrow }{\\grad}}}', 0],
rpartial: ['{{\\stackrel{ \\rightarrow }{\\partial}}}', 0],
lpartial: ['{{\\stackrel{ \\leftarrow }{\\partial}}}', 0],
lrpartial: ['{{\\stackrel{ \\leftrightarrow }{\\partial}}}', 0],
rspacegrad: ['{{\\stackrel{ \\rightarrow }{\\spacegrad}}}', 0],
lspacegrad: ['{{\\stackrel{ \\leftarrow }{\\spacegrad}}}', 0],
lrspacegrad: ['{{\\stackrel{ \\leftrightarrow }{\\spacegrad}}}', 0],
braket: ['{\\left\\langle{#1} \\vert {#2}\\right\\rangle}', 2],
bra: ['{\\left\\langle {#1} \\right\\rvert}', 1],
ketbra: ['{\\ket{#1}\\bra{#2}}', 2],
ket: ['{\\left\\lvert {#1} \\right\\rangle}', 1],
questionEquals: ['{\\stackrel{?}{=}}', 0],
pslash: ['{\\cancel{p}}', 0],
aslash: ['{\\cancel{a}}', 0],
bslash: ['{\\cancel{b}}', 0],
Dslash: ['{\\cancel{D}}', 0],
Aslash: ['{\\cancel{A}}', 0],
partialslash: ['{\\cancel{\\partial}}', 0],
curl: ['{\\grad \\times}', 0],
delsquared: ['{\\nabla^2}', 0],
hatk: ['{\\hat{k}}', 0],
hatp: ['{\\hat{p}}', 0],
hatx: ['{\\hat{x}}', 0],
hatA: ['{\\hat{A}}', 0],
hatB: ['{\\hat{B}}', 0],
hatC: ['{\\hat{C}}', 0],
hatD: ['{\\hat{D}}', 0],
hatE: ['{\\hat{E}}', 0],
hatF: ['{\\hat{F}}', 0],
hatG: ['{\\hat{G}}', 0],
hatH: ['{\\hat{H}}', 0],
hatI: ['{\\hat{I}}', 0],
hatJ: ['{\\hat{J}}', 0],
hatK: ['{\\hat{K}}', 0],
hatL: ['{\\hat{L}}', 0],
hatM: ['{\\hat{M}}', 0],
hatN: ['{\\hat{N}}', 0],
hatO: ['{\\hat{O}}', 0],
hatP: ['{\\hat{P}}', 0],
hatQ: ['{\\hat{Q}}', 0],
hatR: ['{\\hat{R}}', 0],
hatS: ['{\\hat{S}}', 0],
hatT: ['{\\hat{T}}', 0],
hatU: ['{\\hat{U}}', 0],
hatV: ['{\\hat{V}}', 0],
hatW: ['{\\hat{W}}', 0],
hatX: ['{\\hat{X}}', 0],
hatY: ['{\\hat{Y}}', 0],
hatZ: ['{\\hat{Z}}', 0],
Rdot: ['{\\dot{R}}', 0],
ddotphi: ['{\\ddot{\\phi}}', 0],
ddotpsi: ['{\\ddot{\\psi}}', 0],
ddottheta: ['{\\ddot{\\theta}}', 0],
dotOmega: ['{\\dot{\\Omega}}', 0],
dotalpha: ['{\\dot{\\alpha}}', 0],
dotomega: ['{\\dot{\\omega}}', 0],
dotphi: ['{\\dot{\\phi}}', 0],
dotpsi: ['{\\dot{\\psi}}', 0],
dottheta: ['{\\dot{\\theta}}', 0],
dbar: ['{\\text{\\dj}}', 0],
kB: ['{k_{\\mathrm{B}}}', 0],
angstrom: ['{\\text{\\AA}}', 0],
qedmarker: ['{\\qquad\\square}', 0]
    },
    
    //
    //  Equation numbering parameters.
    //  
    equationNumbers: {
      autoNumber: "all",  // "AMS" for standard AMS environment numbering,
                           //  or "all" to number all displayed equations
//    formatNumber: function (n) {return n},                // format for equation number n
//    formatTag:    function (n) {return '('+n+')'},        // format for \tag and \eqref
//    formatID:     function (n) {return 'mjx-eqn-'+String(n).replace(/[:'"<>&]/g,"")},
//                                                          // element ID to use for reference
//    formatURL:    function (id) {return '#'+escape(id)},  // URL to use for references
      useLabelIds: true    // make element ID's use \label name rather than equation number
    },

    //
    //  Controls the TeX/noErrors extension
    //
    noErrors: {
      disabled: false,               // set to true to return to original error messages
      multiLine: true,               // false to not include original line breaks
      inlineDelimiters: ["",""],     // or use ["$","$"] or ["\\(","\\)"] to put back delimiters
      style: {
        "font-size":   "90%",
        "text-align":  "left",
        "color":       "black",
        "padding":     "1px 3px",
        "border":      "1px solid"
      }
    },

    //
    //  Controls the TeX/noUndefined extension
    //
    noUndefined: {
      disabled: false,      // set to true to return to original error messages
      attributes: {         // attributes to set for the undefined control sequence
        mathcolor: "red"
      }
    },
  
    //
    //  Controls the TeX/unicode extension
    unicode: {
      fonts: "STIXGeneral,'Arial Unicode MS'"  // the default font list for unknown characters
    }
    
  },

  //============================================================================
  //
  //  These parameters control the AsciiMath input jax.
  //
  AsciiMath: {
    //
    //  Determines whether the unicode positions for phi and varphi are
    //  to be swapped or not.  (Unicode originally had these reversed, and
    //  many fonts have them reversed as well.)  When set to true, phi
    //  and varphi will correspond to the LaTeX macros of the same name.
    //
    fixphi: true,
    
    //
    //  Determines whether the MathML should be marked so that the HTML-CSS
    //  and SVG output jax will use MathML spacing rules rather than TeX
    //  spacing rules.  Since AsciiMath was designed for MathML output, the
    //  MathML rules are used by default.
    //
    useMathMLspacing: true,
    
    //
    //  Determines whether limits are placed above and below operators,
    //  or next to them.  (AsciiMath doesn't have separate in-line and
    //  display modes like TeX and MathML do, so this is the only control
    //  you have over its output)
    //
    displaystyle: true,
    
    //
    //  The character to use for decimal places when scanning for a number.
    //  If you change it to ",", beware of things like "(1,2)" which would need
    //  to be changed to "(1, 2)" to be parsed correctly.
    // 
    decimal: "."
  },
  
  //============================================================================
  //
  //  These parameters control the MathML input jax.
  //
  MathML: {
    //
    //  This specifies whether to use TeX spacing or MathML spacing when the
    //  HTML-CSS output jax is used.
    //
    useMathMLspacing: false
  },
  
  //============================================================================
  //
  //  These parameters control the HTML-CSS output jax.
  //
  "HTML-CSS": {
    
    //
    //  This controls the global scaling of mathematics as compared to the 
    //  surrounding text.  Values between 100 and 133 are usually good choices.
    //
    scale: 100,
    
    //
    //  Don't allow the matching of math text to surrounding text to use a scaling
    //  factor smaller than this.
    //
    minScaleAdjust: 50,
    
    //
    //  This is a list of the fonts to look for on a user's computer in
    //  preference to using MathJax's web-based fonts.  These must
    //  correspond to directories available in the  jax/output/HTML-CSS/fonts
    //  directory, where MathJax stores data about the characters available
    //  in the fonts.  Set this to ["TeX"], for example, to prevent the
    //  use of the STIX fonts, or set it to an empty list, [], if
    //  you want to force MathJax to use web-based or image fonts.
    //
    availableFonts: ["STIX","TeX"],
    
    //
    //  This is the preferred font to use when more than one of those
    //  listed above is available.
    //
    preferredFont: "TeX",
    
    //
    //  This is the web-based font to use when none of the fonts listed
    //  above are available on the user's computer.  Note that currently
    //  only the TeX font is available in a web-based form.  Set this to
    //  
    //      webFont: null,
    //
    //  if you want to prevent the use of web-based fonts.
    //
    webFont: "TeX",
    
    //
    //  This is the font to use for image fallback mode (when none of the
    //  fonts listed above are available and the browser doesn't support
    //  web-fonts via the @font-face CSS directive).  Note that currently
    //  only the TeX font is available as an image font.  Set this to
    //
    //      imageFont: null,
    //  
    //  if you want to prevent the use of image fonts (e.g., you have not
    //  installed the image fonts on your server).  In this case, only
    //  browsers that support web-based fonts will be able to view your pages
    //  without having the fonts installed on the client computer.  The browsers
    //  that support web-based fonts include: IE6 and later, Chrome, Safari3.1
    //  and above, Firefox3.5 and later, and Opera10 and later.  Note that
    //  Firefox3.0 is NOT on this list, so without image fonts, FF3.0 users
    //  will be required to to download and install either the STIX fonts or the
    //  MathJax TeX fonts.
    //
    imageFont: "TeX",
    
    //
    //  This is the font-family CSS value used for characters that are not
    //  in the selected font (e.g., for web-based fonts, this is where to
    //  look for characters not included in the MathJax_* fonts).  IE will
    //  stop looking after the first font that exists on the system (even
    //  if it doesn't contain the needed character), so order these carefully.
    //  
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",

    //
    //  This setting controls whether <mtext> elements will be typeset
    //  using the math fonts or the font of the surrounding text.  When
    //  false, the mathvariant="normal" font will be used; when true, 
    //  the font will be inherited from the surrounding paragraph.
    //  
    mtextFontInherit: false,

    //
    //  These values control how "chunky" the display of mathematical
    //  expressions will be.
    //  
    //  EqnChunk is the number of equations that will be typeset before
    //  they appear on screen.  Larger values make for less visual flicker
    //  as the equations are drawn, but also mean longer delays before the
    //  reader sees anything.
    //  
    //  EqChunkFactor is the factor by which the EqnChunk will grow after each
    //  chunk is displayed.
    //  
    //  EqChunkDelay is the time (in milliseconds) to delay between chunks
    //  (to allow the browser to respond to other user interaction).
    //  
    //  Set EqnChunk to 1, EqnChunkFactor to 1, and EqnChunkDelay to 10 to get
    //  the behavior from MathJax v1.1 and below.
    //
    EqnChunk: 50,
    EqnChunkFactor: 1.5,
    EqnChunkDelay: 100,

    //
    //  This option indicates whether MathJax should try to correct the
    //  x-height of equations to match the size of the surrounding text.
    //
    matchFontHeight: true,

    //
    //  When true, MathJax will not measure the widths or heights of the
    //  subexpressions as it creates its output, but instead will rely on
    //  its internal calculautions based on teh bounding boxes of the
    //  characters it uses, and will only take measurements when it
    //  absolutely has to.  Since measurements cause display reflows, they
    //  slows down MathJax considerably, so without them MathJax runs
    //  faster, but can produce slightly less accurate character placements,
    //  especially in width fractions or roots.
    //
    noReflows: true,

    
    //
    //  These settings control automatic line breaking.  It is off by
    //  default, so only explicit line breaks are performed (via
    //  linebreak="newline" attributes on <mo> and <mspace> elements).  To
    //  perform automatic line breaking on line expressions, set
    //  'automatic' to 'true' below.  The line breaks will be applied via a
    //  penalty-based heuristic, which does well, but isn't perfect.  You
    //  might need to use linebreak="goodbreak" or linebreak="badbreak" by
    //  hand in order to get better effects.  It is also possible to modify
    //  the penalty values; contact the MathJax user's forum for details.
    //  
    linebreaks: {
      
      //
      //  This controls the automatic breaking of expressions:
      //    when false, only process linebreak="newline",
      //    when true, line breaks are inserted automatically in long expressions.
      //
      automatic: false,

      //
      //  This controls how wide the lines of mathematics can be
      //  
      //  Use an explicit width like "30em" for a fixed width.
      //  Use "container" to compute the size from the containing element.
      //  Use "nn% container" for a portion of the container.
      //  Use "nn%" for a portion of the window size.
      //  
      //  The container-based widths may be slower, and may not produce the
      //  expected results if the layout width changes due to the removal
      //  of previews or inclusion of mathematics during typesetting.
      //  
      width: "container"
    },

    //
    //  This allows you to define or modify the styles used to display
    //  various math elements created by MathJax.
    //  
    //  Example:
    //      styles: {
    //        ".MathJax .merror": {
    //          color:   "#CC0000",
    //          border:  "1px solid #CC0000"
    //        }
    //      }
    //
    styles: {},
    
    //
    //  Configuration for <maction> tooltips
    //    (see also the #MathJax_Tooltip CSS in MathJax/jax/output/HTML-CSS/config.js,
    //     which can be overriden using the styles values above).
    //
    tooltip: {
      delayPost: 600,          // milliseconds delay before tooltip is posted after mouseover
      delayClear: 600,         // milliseconds delay before tooltip is cleared after mouseout
      offsetX: 10, offsetY: 5  // pixels to offset tooltip from mouse position
    }
  },
  
  //============================================================================
  //
  //  These parameters control the NativeMML output jax.
  //
  NativeMML: {

    //
    //  This controls the global scaling of mathematics as compared to the 
    //  surrounding text.  Values between 100 and 133 are usually good choices.
    //
    scale: 100,

    //
    //  Don't allow the matching of math text to surrounding text to use a scaling
    //  factor smaller than this.
    //
    minScaleAdjust: 50,
    
    //  This option indicates whether MathJax should try to correct the
    //  x-height of equations to match the size of the surrounding text.
    matchFontHeight: true,

    //
    //  This allows you to define or modify the styles used to display
    //  various math elements created by MathJax.
    //  
    //  Example:
    //      styles: {
    //        ".MathJax_MathML": {
    //          color: "red"         //    MathML is in red
    //        }
    //      }
    //
    styles: {}
  },
  
  //============================================================================
  //
  //  These parameters control the SVG output jax.
  //
  "SVG": {
    
    //
    //  This controls the global scaling of mathematics as compared to the 
    //  surrounding text.  Values between 100 and 133 are usually good choices.
    //
    scale: 100,
    
    //
    //  Don't allow the matching of math text to surrounding text to use a scaling
    //  factor smaller than this.
    //
    minScaleAdjust: 50,
    
    //
    //  This specifies the font to use for SVG output (currently the only
    //  one available)
    //
    font: "TeX",
    
    //
    //  This is the stroke width to use for all character paths (1em = 1000
    //  units).  This is a cheap way of getting slightly lighter or darker
    //  characters
    //
    blacker: 10,
    
    //
    //  This is the font-family CSS value used for characters that are not
    //  in the selected font.  IE will stop looking after the first font
    //  that exists on the system (even if it doesn't contain the needed
    //  character), so order these carefully.
    //  
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",

    //
    //  This setting controls whether <mtext> elements will be typeset
    //  using the math fonts or the font of the surrounding text.  When
    //  false, the mathvariant="normal" font will be used; when true, 
    //  the font will be inherited from the surrounding paragraph.
    //  
    mtextFontInherit: false,

    //
    //  This controls whether the MathML structure is retained and CSS
    //  classes are added to mark the original MathML elements (as in the
    //  HTML-CSS output).  By default, the SVG output jax removes unneeded
    //  nesting in order to produce a more efficient markup, but if you
    //  want to use CSS to style the elements as if they were MathML, you
    //  might need to set this to true.
    //  
    addMMLclasses: false,

    //
    //  These values control how "chunky" the display of mathematical
    //  expressions will be.
    //  
    //  EqnChunk is the number of equations that will be typeset before
    //  they appear on screen.  Larger values make for less visual flicker
    //  as the equations are drawn, but also mean longer delays before the
    //  reader sees anything.
    //  
    //  EqChunkFactor is the factor by which the EqnChunk will grow after each
    //  chunk is displayed.
    //  
    //  EqChunkDelay is the time (in milliseconds) to delay between chunks
    //  (to allow the browser to respond to other user interaction).
    //  
    //  Set EqnChunk to 1, EqnChunkFactor to 1, and EwnChunkDelay to 10 to get
    //  the behavior from MathJax v1.1 and below.
    //
    EqnChunk: 50,
    EqnChunkFactor: 1.5,
    EqnChunkDelay: 100,

    //  This option indicates whether MathJax should try to correct the
    //  x-height of equations to match the size of the surrounding text.
    matchFontHeight: true,

    //
    //  These settings control automatic line breaking.  It is off by
    //  default, so only explicit line breaks are performed (via
    //  linebreak="newline" attributes on <mo> and <mspace> elements).  To
    //  perform automatic line breaking on line expressions, set
    //  'automatic' to 'true' below.  The line breaks will be applied via a
    //  penalty-based heuristic, which does well, but isn't perfect.  You
    //  might need to use linebreak="goodbreak" or linebreak="badbreak" by
    //  hand in order to get better effects.  It is also possible to modify
    //  the penalty values; contact the MathJax user's forum for details.
    //  
    linebreaks: {
      
      //
      //  This controls the automatic breaking of expressions:
      //    when false, only process linebreak="newline",
      //    when true, line breaks are inserted automatically in long expressions.
      //
      automatic: false,

      //
      //  This controls how wide the lines of mathematics can be
      //  
      //  Use an explicit width like "30em" for a fixed width.
      //  Use "container" to compute the size from the containing element.
      //  Use "nn% container" for a portion of the container.
      //  Use "nn%" for a portion of the window size.
      //  
      //  The container-based widths may be slower, and may not produce the
      //  expected results if the layout width changes due to the removal
      //  of previews or inclusion of mathematics during typesetting.
      //  
      width: "container"
    },

    //
    //  These are the styles used for merror elements in SVG output.  Note
    //  that only a limited number of style attributes are supported by
    //  SVG, but you can at least change the colors and borders.
    //  
    //
    merrorStyle: {
      fontSize:"90%", color:"#C00", background:"#FF8",
      border: "1px solid #C00", padding:"3px"
    },

    //
    //  This allows you to define or modify the styles used to display
    //  various math elements created by MathJax.
    //  
    //  Example:
    //      styles: {
    //        ".MathJax .merror": {
    //          color:   "#CC0000",
    //          border:  "1px solid #CC0000"
    //        }
    //      }
    //
    styles: {},
    
    //
    //  Configuration for <maction> tooltips
    //    (see also the #MathJax_Tooltip CSS in MathJax/jax/output/SVG/config.js,
    //     which can be overriden using the styles values above).
    //
    tooltip: {
      delayPost: 600,          // milliseconds delay before tooltip is posted after mouseover
      delayClear: 600,         // milliseconds delay before tooltip is cleared after mouseout
      offsetX: 10, offsetY: 5  // pixels to offset tooltip from mouse position
    }
  },
  
  //============================================================================
  //
  //  These parameters control the contextual menus that are available on the 
  //  mathematics within the page (provided the showMathMenu value is true above).
  //
  MathMenu: {
    //
    //  This is the hover delay for the display of submenus in the
    //  contextual menu.  When the mouse is still over a submenu label for
    //  this long, the menu will appear.  (The menu also will appear if you
    //  click on the label.)  It is in milliseconds.
    //  
    delay: 150,
    
    //
    //  This is the URL for the MathJax Help menu item.
    //
    helpURL: "http://www.mathjax.org/help-v2/user/",

    //
    //  These control whether the "Math Renderer", "MathPlayer", "Font
    //  Preferences", "Contextual Menu", and "Discoverable" menu items will
    //  be displayed or not.
    //
    showRenderer: true,
    showMathPlayer: true,
    showFontMenu: false,
    showContext:  false,
    showDiscoverable: false,
    
    //
    // These are the settings for the Annotation menu. If the <math> root has
    // a <semantics> child that contains one of the following annotation
    // formats, the source will be available via the "Show Math As" menu.
    // Each format has a list of possible encodings.
    //
    semanticsAnnotations: {
      "TeX": ["TeX", "LaTeX", "application/x-tex"],
      "StarMath": ["StarMath 5.0"],
      "Maple": ["Maple"],
      "ContentMathML": ["MathML-Content", "application/mathml-content+xml"],
      "OpenMath": ["OpenMath"]
    },

    //
    //  These are the settings for the Show Source window.  The initial
    //  width and height will be reset after the source is shown in an
    //  attempt to make the window fit the output better.
    //
    windowSettings: {
      status: "no", toolbar: "no", locationbar: "no", menubar: "no",
      directories: "no", personalbar: "no", resizable: "yes", scrollbars: "yes",
      width: 100, height: 50
    },
    
    //
    //  This allows you to change the CSS that controls the menu
    //  appearance.  See the extensions/MathMenu.js file for details
    //  of the default settings.
    //
    styles: {}
    
  },
  
  //============================================================================
  //
  //  These parameters control the contextual menus that are available on the 
  //  mathematics within the page (provided the showMathMenu value is true above).
  //
  MathEvents: {
    //
    //  This is the time required for the mouse to be held still over a
    //  typeset equation in order for it to count as a hover (used when the
    //  zoom trigger is "Hover").  It is in milliseconds.
    //  
    hover: 500
  },

  //============================================================================
  //
  //  These parameters control the MMLorHTML configuration file.
  //  NOTE:  if you add MMLorHTML.js to the config array above,
  //  you must REMOVE the output jax from the jax array.
  //
  MMLorHTML: {
    //
    //  The output jax that is to be preferred when both are possible
    //  (set to "MML" for native MathML, "HTML" for MathJax's HTML-CSS output jax).
    //
    prefer: {
      MSIE:    "MML",
      Firefox: "HTML",
      Opera:   "HTML",
      Safari:  "HTML",
      Chrome:  "HTML",
      other:   "HTML"
    }
  }
});

MathJax.Ajax.loadComplete("[MathJax]/config/default.js");
