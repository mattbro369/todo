(()=>{var n={735:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(537),r=t.n(o),A=t(645),i=t.n(A)()(r());i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}]);const a=i},570:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(537),r=t.n(o),A=t(645),i=t.n(A)()(r());i.push([n.id,".add-task-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border: 0;\n  /* box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6); */\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);\n  border-radius: 14px;\n  min-height: 175px;\n  width: 690px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n/* #add-task-prompt-header {\n  background-color: blue;\n}\n\n#add-task-prompt-form {\n  background-color: pink;\n}\n\n#add-task-prompt-submit {\n  background-color: yellow;\n} */\n\n#add-task-prompt-header,\n#add-task-prompt-form,\n#add-task-prompt-submit {\n  display: flex;\n  align-items: center;\n}\n\n.add-form-label {\n  width: 100%;\n}\n\n.add-form-input {\n  width: 99.6%;\n  font-family: inherit;\n}\n\ninput[id='title'] {\n  height: 3em;\n}\n\ntextarea {\n  resize: none;\n  height: 5em;\n}\n\n#add-task-prompt-form {\n  margin: 5px 0;\n}\n\n#add-task-prompt-submit {\n  height: 2em;\n}\n","",{version:3,sources:["webpack://./src/add-task-prompt.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,sBAAsB;EACtB,SAAS;EACT,iDAAiD;EACjD,0CAA0C;EAC1C,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;;;;;;;;;;GAUG;;AAEH;;;EAGE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb",sourcesContent:[".add-task-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  border: 0;\n  /* box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6); */\n  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);\n  border-radius: 14px;\n  min-height: 175px;\n  width: 690px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n/* #add-task-prompt-header {\n  background-color: blue;\n}\n\n#add-task-prompt-form {\n  background-color: pink;\n}\n\n#add-task-prompt-submit {\n  background-color: yellow;\n} */\n\n#add-task-prompt-header,\n#add-task-prompt-form,\n#add-task-prompt-submit {\n  display: flex;\n  align-items: center;\n}\n\n.add-form-label {\n  width: 100%;\n}\n\n.add-form-input {\n  width: 99.6%;\n  font-family: inherit;\n}\n\ninput[id='title'] {\n  height: 3em;\n}\n\ntextarea {\n  resize: none;\n  height: 5em;\n}\n\n#add-task-prompt-form {\n  margin: 5px 0;\n}\n\n#add-task-prompt-submit {\n  height: 2em;\n}\n"],sourceRoot:""}]);const a=i},401:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(537),r=t.n(o),A=t(645),i=t.n(A)()(r());i.push([n.id,"/* Sidenav */\n\n/* The side navigation menu */\n#sidenav {\n  padding-top: 22px;\n  width: 0; /* 0 width - change this with JavaScript */\n  background-color: #e3e7e89e;\n  overflow-x: hidden; /* Disable horizontal scroll */\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  box-shadow: 3px 0 5px -2px #888;\n}\n\n/* The navigation menu links */\n#sidenav a {\n  padding: 8px 8px 8px 32px;\n  width: max-content;\n  color: var(--text-color-main-black);\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  display: block;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.projects-wrapper {\n  display: flex;\n}\n\n#dropdown-icon {\n  padding: 8px;\n  transform: rotate(-90deg);\n  transition: 0.5s;\n}\n\n#dropdown-icon:hover {\n  cursor: pointer;\n}\n\n#sidenav a:hover {\n  color: var(--text-color-hover-black);\n}\n","",{version:3,sources:["webpack://./src/sidenav.css"],names:[],mappings:"AAAA,YAAY;;AAEZ,6BAA6B;AAC7B;EACE,iBAAiB;EACjB,QAAQ,EAAE,0CAA0C;EACpD,2BAA2B;EAC3B,kBAAkB,EAAE,8BAA8B;EAClD,gBAAgB,EAAE,yDAAyD;EAC3E,+BAA+B;AACjC;;AAEA,8BAA8B;AAC9B;EACE,yBAAyB;EACzB,kBAAkB;EAClB,mCAAmC;EACnC,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC",sourcesContent:["/* Sidenav */\n\n/* The side navigation menu */\n#sidenav {\n  padding-top: 22px;\n  width: 0; /* 0 width - change this with JavaScript */\n  background-color: #e3e7e89e;\n  overflow-x: hidden; /* Disable horizontal scroll */\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  box-shadow: 3px 0 5px -2px #888;\n}\n\n/* The navigation menu links */\n#sidenav a {\n  padding: 8px 8px 8px 32px;\n  width: max-content;\n  color: var(--text-color-main-black);\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  display: block;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.projects-wrapper {\n  display: flex;\n}\n\n#dropdown-icon {\n  padding: 8px;\n  transform: rotate(-90deg);\n  transition: 0.5s;\n}\n\n#dropdown-icon:hover {\n  cursor: pointer;\n}\n\n#sidenav a:hover {\n  color: var(--text-color-hover-black);\n}\n"],sourceRoot:""}]);const a=i},28:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(537),r=t.n(o),A=t(645),i=t.n(A)()(r());i.push([n.id,":root {\n  --main-color-purple: #8a2be2;\n  --main-color-purple-off: rgb(169, 77, 255);\n  --text-color-main-black: color: #202020;\n  --text-color-hover-black: #0000009d;\n  --text-color-light-grey: rgba(0, 0, 0, 0.44);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  margin: 0;\n}\n\n#main-page-wrapper {\n  display: flex;\n  width: 100%;\n  font-family: 'Open Sans', sans-serif;\n  color: var(--text-color-main-black);\n}\n\n#navbar {\n  padding: 0 10px;\n  background-color: var(--main-color-purple);\n  height: 9vh;\n  display: flex;\n  align-items: center;\n}\n\n.navbar-left {\n  display: flex;\n  gap: 10px;\n}\n\n.menu-icon-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.navbar-left,\n.navbar-center,\n.navbar-right {\n  flex: 1;\n}\n\n.navbar-icon {\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.navbar-icon:hover {\n  background-color: var(--main-color-purple-off);\n}\n.navbar-center {\n  display: flex;\n  justify-content: center;\n  font-family: 'Fjalla One', sans-serif;\n  color: #fff;\n}\n\n.navbar-center h1 {\n  margin: 0.67em 0;\n}\n\n.logo {\n  height: 68px;\n}\n\n/* Content */\n\n#main-content-wrapper {\n  height: 86vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.5s;\n  width: 100%;\n  padding: 20px;\n  position: relative;\n}\n\n#heading-wrapper {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 9px;\n}\n\n#main-heading {\n  font-size: 1.7em;\n  font-weight: 600;\n}\n\n#date-header {\n  font-size: 1.1em;\n  font-weight: 600;\n  color: var(--text-color-light-grey);\n}\n\n#content-wrapper {\n  flex: 1;\n}\n\n/* Add task button */\n#add-task-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  font-size: 17px;\n  width: 116px;\n  height: 35px;\n  background-color: var(--main-color-purple);\n  border: 1px solid var(--text-color-light-grey);\n  border-radius: 17px;\n  box-shadow: none;\n  margin: 1em;\n  padding: 0 9px;\n}\n\n#add-task-button > img {\n  border-radius: 50%;\n}\n\n#add-task-button > div {\n  font-weight: 600;\n}\n\n#add-task-button:hover {\n  cursor: pointer;\n  background-color: var(--main-color-purple-off);\n  transition: 0.3s;\n}\n\n/* No task - Sloth image */\n\n#no-task-wrapper {\n  display: flex;\n  align-items: center;\n  margin-top: 10%;\n  flex-direction: column;\n}\n\n#sloth-image {\n  height: 265px;\n}\n\n#no-task-text {\n  font-family: 'Indie Flower', cursive;\n  font-size: 25px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,0CAA0C;EAC1C,uCAAuC;EACvC,mCAAmC;EACnC,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;EACX,oCAAoC;EACpC,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,0CAA0C;EAC1C,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,8CAA8C;AAChD;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,qCAAqC;EACrC,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA,YAAY;;AAEZ;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,OAAO;AACT;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,0CAA0C;EAC1C,8CAA8C;EAC9C,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,8CAA8C;EAC9C,gBAAgB;AAClB;;AAEA,0BAA0B;;AAE1B;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA,gIAAgI;AAChI;EACE;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;AACF",sourcesContent:[":root {\n  --main-color-purple: #8a2be2;\n  --main-color-purple-off: rgb(169, 77, 255);\n  --text-color-main-black: color: #202020;\n  --text-color-hover-black: #0000009d;\n  --text-color-light-grey: rgba(0, 0, 0, 0.44);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  margin: 0;\n}\n\n#main-page-wrapper {\n  display: flex;\n  width: 100%;\n  font-family: 'Open Sans', sans-serif;\n  color: var(--text-color-main-black);\n}\n\n#navbar {\n  padding: 0 10px;\n  background-color: var(--main-color-purple);\n  height: 9vh;\n  display: flex;\n  align-items: center;\n}\n\n.navbar-left {\n  display: flex;\n  gap: 10px;\n}\n\n.menu-icon-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.navbar-left,\n.navbar-center,\n.navbar-right {\n  flex: 1;\n}\n\n.navbar-icon {\n  border: none;\n  cursor: pointer;\n  border-radius: 6px;\n}\n\n.navbar-icon:hover {\n  background-color: var(--main-color-purple-off);\n}\n.navbar-center {\n  display: flex;\n  justify-content: center;\n  font-family: 'Fjalla One', sans-serif;\n  color: #fff;\n}\n\n.navbar-center h1 {\n  margin: 0.67em 0;\n}\n\n.logo {\n  height: 68px;\n}\n\n/* Content */\n\n#main-content-wrapper {\n  height: 86vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.5s;\n  width: 100%;\n  padding: 20px;\n  position: relative;\n}\n\n#heading-wrapper {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-bottom: 9px;\n}\n\n#main-heading {\n  font-size: 1.7em;\n  font-weight: 600;\n}\n\n#date-header {\n  font-size: 1.1em;\n  font-weight: 600;\n  color: var(--text-color-light-grey);\n}\n\n#content-wrapper {\n  flex: 1;\n}\n\n/* Add task button */\n#add-task-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  font-size: 17px;\n  width: 116px;\n  height: 35px;\n  background-color: var(--main-color-purple);\n  border: 1px solid var(--text-color-light-grey);\n  border-radius: 17px;\n  box-shadow: none;\n  margin: 1em;\n  padding: 0 9px;\n}\n\n#add-task-button > img {\n  border-radius: 50%;\n}\n\n#add-task-button > div {\n  font-weight: 600;\n}\n\n#add-task-button:hover {\n  cursor: pointer;\n  background-color: var(--main-color-purple-off);\n  transition: 0.3s;\n}\n\n/* No task - Sloth image */\n\n#no-task-wrapper {\n  display: flex;\n  align-items: center;\n  margin-top: 10%;\n  flex-direction: column;\n}\n\n#sloth-image {\n  height: 265px;\n}\n\n#no-task-text {\n  font-family: 'Indie Flower', cursive;\n  font-size: 25px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n"],sourceRoot:""}]);const a=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&i[c[0]]||(void 0!==A&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=A),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(r," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],d=o.base?s[0]+o.base:s[0],c=A[d]||0,l="".concat(d," ").concat(c);A[d]=c+1;var E=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==E)e[E].references++,e[E].updater(p);else{var m=r(p,o);o.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var A=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=t(A[i]);e[a].references--}for(var s=o(n,r),d=0;d<A.length;d++){var c=t(A[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}A=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},148:(n,e,t)=>{var o={"./add.svg":18,"./close-icon.png":508,"./dropdown-icon.svg":718,"./home-icon.png":885,"./menu-icon.png":522,"./sloth.png":788,"./tick-logo.svg":443};function r(n){var e=A(n);return t(e)}function A(n){if(!t.o(o,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return o[n]}r.keys=function(){return Object.keys(o)},r.resolve=A,n.exports=r,r.id=148},18:(n,e,t)=>{"use strict";n.exports=t.p+"add.svg"},508:(n,e,t)=>{"use strict";n.exports=t.p+"close-icon.png"},718:(n,e,t)=>{"use strict";n.exports=t.p+"dropdown-icon.svg"},885:(n,e,t)=>{"use strict";n.exports=t.p+"home-icon.png"},522:(n,e,t)=>{"use strict";n.exports=t.p+"menu-icon.png"},788:(n,e,t)=>{"use strict";n.exports=t.p+"sloth.png"},443:(n,e,t)=>{"use strict";n.exports=t.p+"tick-logo.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var A=e[o]={id:o,exports:{}};return n[o](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o={};(()=>{"use strict";t.d(o,{Fh:()=>R,lo:()=>j,Et:()=>O,RK:()=>T});var n=t(379),e=t.n(n),r=t(795),A=t.n(r),i=t(569),a=t.n(i),s=t(565),d=t.n(s),c=t(216),l=t.n(c),E=t(589),p=t.n(E),m=t(735),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=A(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var u=t(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var C=t(401),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=l(),e()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;const b=function(n){const e=document.createElement("div");e.classList.add("add-task-wrapper"),document.createElement("button");const t=[void 0,void 0,void 0],o=["add-task-prompt-header","add-task-prompt-form","add-task-prompt-submit"];for(let n=0;n<t.length;n++)t[n]=document.createElement("div"),t[n].id=o[n],e.appendChild(t[n]);n.appendChild(e);const r=document.createElement("form");e.appendChild(r);const A="title",i="description",a="date",s="priority",d="submit",c="text",l="date",E="submit",p="submit-button",m="priority-dropdown",h="add-form-label",u="add-form-input",f="Title...",C="Description...";for(let n=0;n<5;n++){let e,t=document.createElement("label"),r=document.createElement("input"),g=document.createElement("textarea"),b=document.createElement("select");switch(n){case 0:t.setAttribute("for",`${A}`),t.classList.add(h),r.type=c,r.name=A,r.id=A,r.classList.add(u),r.placeholder=f,e=document.getElementById(o[0]);break;case 1:t.setAttribute("for",`${i}`),t.classList.add(h),g.id=i,g.classList.add(u),g.placeholder=C,e=document.getElementById(o[1]);break;case 2:t.setAttribute("for",`${a}`),r.type=l,r.name=a,r.id=a,e=document.getElementById(o[2]);break;case 3:t.setAttribute("for",`${s}`),b.name=s,b.id=m,e=document.getElementById(o[2]);break;case 4:t.setAttribute("for",`${d}`),r.type=E,r.value="Add",r.id=p,e=document.getElementById(o[2])}1===n?t.appendChild(g):t.appendChild(r),e.appendChild(t)}};var B=t(18),v=t(788);const x=function(){const n=function(){if("home"===j)return;let n=document.createElement("h1");n.textContent="Home",n.id="main-heading",O.appendChild(n);let e=document.createElement("h1");e.id="date-header";let t=new Date;e.textContent=t.toDateString(),O.appendChild(e)},e=function(n){let e=document.createElement("button"),r=document.createElement("img"),A=document.createElement("div");r.src=B,r.id="add-task-icon",A.textContent="Add task",e.id="add-task-button",e.appendChild(r),e.appendChild(A),n.appendChild(e),e.addEventListener("click",(()=>{t(),o(),b(R)}))},t=function(){document.getElementById("add-task-button").remove()},o=function(){let n=document.getElementById("no-task-wrapper");void 0!==n&&n.remove()};return{home:function(){n(),e(R),j="home"},renderHomeHeading:n,renderAddTaskButton:e,removeAddTaskButton:t,renderNoTaskPage:function(n){let e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("img"),r=document.createElement("p");e.id="no-task-wrapper",t.id="sloth-image-wrapper",o.id="sloth-image",o.src=v,t.appendChild(o),e.appendChild(t),r.id="no-task-text",r.textContent="Hooray! You've got nothing to do!",e.appendChild(r),n.appendChild(e),console.log("Finished")},clear:function(n){for(;n.firstChild;)n.removeChild(n.firstChild)}}}();var y=t(570),w={};w.styleTagTransform=p(),w.setAttributes=d(),w.insert=a().bind(null,"head"),w.domAPI=A(),w.insertStyleElement=l(),e()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const k=document.getElementById("sidenav"),z=Array.from(document.getElementsByClassName("sidenav-item"));let S=!1;z.forEach((n=>{n.addEventListener("click",(()=>{z.indexOf(n)===z.length-1&&(console.log(S),S=!1===S,console.log(S),M.dropdownProjects()),console.log(n.textContent)}))}));const M={open:function(){k.style.width="250px",M.isSideNavOpen=!0},close:function(){console.log("closed"),k.style.transition="0.5s",k.style.width="0",T.style.marginLeft="0",M.isSideNavOpen=!1},dropdownProjects:function(){document.getElementById("dropdown-icon").style.transform=!0===S?"rotate(0deg)":"rotate(-90deg)",console.log("worked")},isSideNavOpen:!1},I={};var F;(F=t(148)).keys().forEach((n=>I[n]=F(n))),document.getElementById("menu-icon").src=I["./menu-icon.png"],document.getElementById("home-icon").src=I["./home-icon.png"],document.getElementById("tick-logo").src=I["./tick-logo.svg"],document.getElementById("dropdown-icon").src=I["./dropdown-icon.svg"];const T=document.getElementById("main-content-wrapper"),R=document.getElementById("content-wrapper"),O=document.getElementById("heading-wrapper");let j;x.home();const Z=Array.from(document.getElementsByClassName("navbar-icon"));Z.forEach((n=>{n.addEventListener("click",(()=>{n===Z[0]&&!1===M.isSideNavOpen?(M.open(),console.log(M.isSideNavOpen)):M.close(),n===Z[1]&&(x.clear(R),x.home())}))}));const Y=[];console.log(Y.length),Y.length<1&&x.renderNoTaskPage(R)})()})();
//# sourceMappingURL=bundle.js.map