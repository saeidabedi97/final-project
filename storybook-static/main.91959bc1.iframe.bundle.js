(self.webpackChunkmy_new_website=self.webpackChunkmy_new_website||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/stories/Introduction.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return Introduction_stories}});__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js");var code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d71f1a3ba28d2461481dce689b.svg";var colors=__webpack_require__.p+"static/media/colors.a4bd0486703b41f28ac9ef49d8046942.svg";var comments=__webpack_require__.p+"static/media/comments.a38590896b951b65e7ada9af32d6915d.svg";var direction=__webpack_require__.p+"static/media/direction.b770f9af5f20abac0352e73b4676bba2.svg";var flow=__webpack_require__.p+"static/media/flow.edad2ac1b0bb28e0ce513d5b7a65f8fe.svg";var assets_plugin=__webpack_require__.p+"static/media/plugin.d494b22808806ebe8ff4c5b276819e72.svg";var repo=__webpack_require__.p+"static/media/repo.6d4963229d067828d1326ea3f60f5136.svg";var stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb33e1e5daf57e0cf575f818e65.svg";function Introduction_stories_extends(){return Introduction_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Introduction_stories_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return(0,esm.kt)("wrapper",Introduction_stories_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Example/Introduction",mdxType:"Meta"}),(0,esm.kt)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),(0,esm.kt)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),(0,esm.kt)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,esm.kt)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),(0,esm.kt)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",(0,esm.kt)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",(0,esm.kt)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),(0,esm.kt)("div",{className:"subheading"},"Configure"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},(0,esm.kt)("img",{src:assets_plugin,alt:"plugin"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},(0,esm.kt)("img",{src:stackalt,alt:"Build"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Build configuration"),"How to customize webpack and Babel")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},(0,esm.kt)("img",{src:colors,alt:"colors"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Styling"),"How to load and configure CSS libraries")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},(0,esm.kt)("img",{src:flow,alt:"flow"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Data"),"Providers and mocking for data libraries"))),(0,esm.kt)("div",{className:"subheading"},"Learn"),(0,esm.kt)("div",{className:"link-list"},(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},(0,esm.kt)("img",{src:repo,alt:"repo"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),(0,esm.kt)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},(0,esm.kt)("img",{src:direction,alt:"direction"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"In-depth guides"),"Best practices from leading teams")),(0,esm.kt)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},(0,esm.kt)("img",{src:code_brackets,alt:"code"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"GitHub project"),"View the source and add issues")),(0,esm.kt)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},(0,esm.kt)("img",{src:comments,alt:"comments"}),(0,esm.kt)("span",null,(0,esm.kt)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),(0,esm.kt)("div",{className:"tip-wrapper"},(0,esm.kt)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",(0,esm.kt)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(MDXContent,null))};var Introduction_stories=componentMeta},"./src/stories/BTN.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return BTN_stories}});__webpack_require__("./node_modules/react/index.js");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["primary","backgroundColor","size","label","className"],BTN_Button=function Button(_ref){_ref.primary,_ref.backgroundColor;var size=_ref.size,label=_ref.label,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button","data-size":size},props),{},{className:"button "+className,children:label}))};BTN_Button.defaultProps={backgroundColor:null,size:"medium",onClick:void 0},BTN_Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\BTN.jsx"]={name:"Button",docgenInfo:BTN_Button.__docgenInfo,path:"src\\stories\\BTN.jsx"});var BTN_stories={title:"BTN/buttons/Controls",component:BTN_Button,argTypes:{backgroundColor:{control:"color"}}}},"./src/stories/Select.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectOption2:function(){return SelectOption2},default:function(){return Select_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["backgroundColor","size"],SelectOption=function SelectOption(_ref){_ref.backgroundColor,_ref.size;var props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("select",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"language-selection"},props),{},{children:[(0,jsx_runtime.jsx)("option",{children:"Select langauge..."}),(0,jsx_runtime.jsx)("option",{value:"en",children:"English"}),(0,jsx_runtime.jsx)("option",{value:"hu",children:"Hungarian"}),(0,jsx_runtime.jsx)("option",{value:"es",children:"Spanish"}),(0,jsx_runtime.jsx)("option",{value:"it",children:"Italian"})]}))})};SelectOption.defaultProps={backgroundColor:null,size:"medium",onClick:void 0},SelectOption.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"SelectOption",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:""},onClick:{defaultValue:{value:"undefined",computed:!0},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\Select.jsx"]={name:"SelectOption",docgenInfo:SelectOption.__docgenInfo,path:"src\\stories\\Select.jsx"});var Select_stories={title:"Select/selectOptions/select1",component:SelectOption,argTypes:{backgroundColor:{control:"color"}}},SelectOption2=function Template(args){return(0,jsx_runtime.jsx)("select",(0,objectSpread2.Z)({},args))}.bind({});SelectOption2.args={size:"large",label:"Button",title:"Yes"},SelectOption2.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <select {...args} />"}},SelectOption2.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/BTN.stories.jsx":"./src/stories/BTN.stories.jsx","./stories/Select.stories.jsx":"./src/stories/Select.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":"./src/stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[24],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);