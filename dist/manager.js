!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=2)}([function(t,e,a){var n=a(5);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(3).default)("73a9b298",n,!0,{})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var a=[],n={},i=0;i<e.length;i++){var o=e[i],s=o[0],r=o[1],c=o[2],d=o[3],w={id:t+":"+i,css:r,media:c,sourceMap:d};n[s]?n[s].parts.push(w):a.push(n[s]={id:s,parts:[w]})}return a}},function(t,e,a){"use strict";a.r(e);var n={name:"team_A",props:{sectionCtrl:Object},data:()=>({columnWidth:{width:"calc(25% - 30px)"}}),computed:{section(){return this.sectionCtrl.get()}},created(){this.initData()},methods:{initData(){let t=!1;for(this.section.data=this.section.data||{},this.section.data.teamBio=this.section.data.teamBio||[],this.section.data.rowCards=this.section.data.rowCards||[];this.section.data.rowCards.length<3;){let e=[];for(let t=0;t<this.section.data.rowCards.length+1;t++)e.push(this.getNewCard());this.section.data.rowCards.push(e),t=!0}this.section.data.background||(this.section.data.background=wwLib.wwObject.getDefault({type:"ww-image",data:{url:"http://cdn.wewebapp.io/public/images/weweb-wp.png"}})),this.section.data.teamBio||(this.section.data.teamBio=wwLib.wwObject.getDefault({type:"ww-text",data:{}}),t=!0),this.section.data.teamBioBackground||(this.section.data.teamBioBackground=wwLib.wwObject.getDefault({type:"ww-color",data:{backgroundColor:"white"}}),t=!0),_.isEmpty(this.section.data.topWwObjs)&&(this.section.data.topWwObjs=[],t=!0),_.isEmpty(this.section.data.bottomWwObjs)&&(this.section.data.bottomWwObjs=[],t=!0),t&&this.sectionCtrl.update(this.section)},add(t,e){t.splice(e.index,0,e.wwObject),this.sectionCtrl.update(this.section)},remove(t,e){t.length>1&&(t.splice(e.index,1),this.sectionCtrl.update(this.section))},getNewCard(){let t={background:wwLib.wwObject.getDefault({type:"ww-color",data:{backgroundColor:"white"}}),banner:wwLib.wwObject.getDefault({type:"ww-image",data:{url:"https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/o9rN8jgKrQoNXjHa1My8WLo48AqmE3yE.png"}}),title:wwLib.wwObject.getDefault({type:"ww-text",data:{text:{fr_FR:"Mon titre",en_GB:"my Title"}}}),teamPics:[],teamNames:[],uniqueId:wwLib.wwUtils.getUniqueId()};return t.teamPics.push(wwLib.wwObject.getDefault({type:"ww-image",data:{url:"https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/9dPzHjdfwZGN541N7RXvNZK6N59O9VZJ.png"}})),t.teamNames.push(wwLib.wwObject.getDefault({type:"ww-text",data:{text:{fr_FR:"Nom",en_GB:"Name"}}})),t},getNewTeamPic:()=>wwLib.wwObject.getDefault({type:"ww-image",data:{url:"https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/9dPzHjdfwZGN541N7RXvNZK6N59O9VZJ.png"}}),addCard(t,e){console.log("list:",t[0]),t.splice(e,0,t[0]),this.sectionCtrl.update(this.section)},addCardBefore(t,e){e>0?(t.splice(e-1,0,this.getNewCard()),this.sectionCtrl.update(this.section)):(t.splice(e,0,this.getNewCard()),this.sectionCtrl.update(this.section))},addCardAfter(t,e){t.splice(e+1,0,this.getNewCard()),this.sectionCtrl.update(this.section)},removeCard(t,e){t.length>1&&(t.splice(e,1),this.sectionCtrl.update(this.section))},addPicToTeam(t,e){t.splice(e,0,t[0]),this.sectionCtrl.update(this.section)}}};a(6);var i=function(t,e,a,n,i,o,s,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var w=d.render;d.render=function(t,e){return c.call(e),w(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:d}}(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team_A"},[a("wwSectionEditMenu",{attrs:{sectionCtrl:t.sectionCtrl}}),t._v(" "),a("wwObject",{staticClass:"background",attrs:{"ww-object":t.section.data.background,"ww-category":"background"}}),t._v(" "),a("div",{staticClass:"top-ww-objs"},[a("wwLayoutColumn",{staticClass:"top-ww-obj",attrs:{tag:"div","ww-default":"ww-text","ww-list":t.section.data.topWwObjs},on:{"ww-add":function(e){t.add(t.section.data.topWwObjs,e)},"ww-remove":function(e){t.remove(t.section.data.topWwObjs,e)}}},t._l(t.section.data.topWwObjs,function(t){return a("wwObject",{key:t.uniqueId,attrs:{"ww-object":t}})}))],1),t._v(" "),a("div",{staticClass:"card-container"},[a("div",{staticClass:"container-center"},t._l(t.section.data.rowCards[0],function(e,n){return a("div",{key:e.uniqueId,staticClass:"card"},["CONTENT"==t.sectionCtrl.getEditMode()?a("wwContextMenu",{staticClass:"button",attrs:{tag:"div"},on:{"ww-add":function(e){t.addCard(t.section.data.rowCards[0],n)},"ww-remove":function(e){t.removeCard(t.section.data.rowCards[0],n)}}},[a("div",{staticClass:"wwi wwi-config"})]):t._e(),t._v(" "),a("wwObject",{staticClass:"card-background",attrs:{tag:"div","ww-object":e.background,"ww-category":"background","ww-default-object-type":"ww-color"}}),t._v(" "),a("div",{staticClass:"card-banner"},[a("wwObject",{staticClass:"background",attrs:{tag:"div","ww-object":e.banner,"ww-default":"ww-image"}}),t._v(" "),a("wwObject",{staticClass:"title-banner",attrs:{tag:"div","ww-object":e.title,"ww-default":"ww-text"}})],1),t._v(" "),a("div",{staticClass:"team-pic-container",attrs:{"ww-list":e.teamPics}},t._l(e.teamPics,function(n,i){return a("wwObject",{key:i,staticClass:"team-pic",attrs:{tag:"div","ww-object":n},on:{"ww-add":function(a){t.addPicToTeam(e.teamPics,i)},"ww-remove":function(a){t.remove(e.teamPics,i)}}})})),t._v(" "),a("wwLayoutColumn",{staticClass:"team-names",attrs:{tag:"div","ww-default":"ww-text","ww-list":e.teamNames},on:{"ww-add":function(a){t.add(e.teamNames,a)},"ww-remove":function(a){t.remove(e.teamNames,a)}}},t._l(e.teamNames,function(t,e){return a("wwObject",{key:e,staticClass:"member-names",attrs:{tag:"div","ww-object":t}})}))],1)})),t._v(" "),a("div",{staticClass:"container-center"},t._l(t.section.data.rowCards[1],function(e,n){return a("div",{key:e.uniqueId,staticClass:"card"},["CONTENT"==t.sectionCtrl.getEditMode()?a("wwContextMenu",{staticClass:"button",attrs:{tag:"div"},on:{"ww-add":function(e){t.addCard(t.section.data.rowCards[1],n)},"ww-remove":function(e){t.removeCard(t.section.data.rowCards[1],n)}}},[a("div",{staticClass:"wwi wwi-config"})]):t._e(),t._v(" "),a("wwObject",{staticClass:"card-background",attrs:{tag:"div","ww-object":e.background,"ww-category":"background","ww-default-object-type":"ww-color"}}),t._v(" "),a("div",{staticClass:"card-banner"},[a("wwObject",{staticClass:"background",attrs:{tag:"div","ww-object":e.banner,"ww-default":"ww-image"}}),t._v(" "),a("wwObject",{staticClass:"title-banner",attrs:{tag:"div","ww-object":e.title,"ww-default":"ww-text"}})],1),t._v(" "),a("div",{staticClass:"team-pic-container",attrs:{"ww-list":e.teamPics}},t._l(e.teamPics,function(n,i){return a("wwObject",{key:i,staticClass:"team-pic",attrs:{tag:"div","ww-object":n},on:{"ww-add":function(a){t.addPicToTeam(e.teamPics,i)},"ww-remove":function(a){t.remove(e.teamPics,i)}}})})),t._v(" "),a("wwLayoutColumn",{staticClass:"team-names",attrs:{tag:"div","ww-default":"ww-text","ww-list":e.teamNames},on:{"ww-add":function(a){t.add(e.teamNames,a)},"ww-remove":function(a){t.remove(e.teamNames,a)}}},t._l(e.teamNames,function(t,e){return a("wwObject",{key:e,staticClass:"member-names",attrs:{tag:"div","ww-object":t}})}))],1)})),t._v(" "),a("div",{staticClass:"container-center"},t._l(t.section.data.rowCards[2],function(e,n){return a("div",{key:e.uniqueId,staticClass:"card"},["CONTENT"==t.sectionCtrl.getEditMode()?a("wwContextMenu",{staticClass:"button",attrs:{tag:"div"},on:{"ww-add":function(e){t.addCard(t.section.data.rowCards[2],n)},"ww-remove":function(e){t.removeCard(t.section.data.rowCards[2],n)}}},[a("div",{staticClass:"wwi wwi-config"})]):t._e(),t._v(" "),a("wwObject",{staticClass:"card-background",attrs:{tag:"div","ww-object":e.background,"ww-category":"background","ww-default-object-type":"ww-color"}}),t._v(" "),a("div",{staticClass:"card-banner"},[a("wwObject",{staticClass:"background",attrs:{tag:"div","ww-object":e.banner,"ww-default":"ww-image"}}),t._v(" "),a("wwObject",{staticClass:"title-banner",attrs:{tag:"div","ww-object":e.title,"ww-default":"ww-text"}})],1),t._v(" "),a("div",{staticClass:"team-pic-container",attrs:{"ww-list":e.teamPics}},t._l(e.teamPics,function(n,i){return a("wwObject",{key:i,staticClass:"team-pic",attrs:{tag:"div","ww-object":n},on:{"ww-add":function(a){t.addPicToTeam(e.teamPics,i)},"ww-remove":function(a){t.remove(e.teamPics,i)}}})})),t._v(" "),a("wwLayoutColumn",{staticClass:"team-names",attrs:{tag:"div","ww-default":"ww-text","ww-list":e.teamNames},on:{"ww-add":function(a){t.add(e.teamNames,a)},"ww-remove":function(a){t.remove(e.teamNames,a)}}},t._l(e.teamNames,function(t,e){return a("wwObject",{key:e,staticClass:"member-names",attrs:{tag:"div","ww-object":t}})}))],1)})),t._v(" "),a("div",{staticClass:"section-bio"},[a("wwObject",{staticClass:"team-bio-background",attrs:{tag:"div","ww-object":t.section.data.teamBioBackground,"ww-category":"background","ww-default-object-type":"ww-color"}}),t._v(" "),a("wwLayoutColumn",{attrs:{tag:"div","ww-default":"ww-text","ww-list":t.section.data.teamBio},on:{"ww-add":function(e){t.add(t.section.data.teamBio,e)},"ww-remove":function(e){t.remove(t.section.data.teamBio,e)}}},t._l(t.section.data.teamBio,function(t,e){return a("wwObject",{key:e,attrs:{"ww-object":t}})}))],1)]),t._v(" "),a("div",{staticClass:"bottom-ww-objs"},[a("wwLayoutColumn",{staticClass:"top-ww-obj",attrs:{tag:"div","ww-default":"ww-text","ww-list":t.section.data.bottomWwObjs},on:{"ww-add":function(e){t.add(t.section.data.bottomWwObjs,e)},"ww-remove":function(e){t.remove(t.section.data.bottomWwObjs,e)}}},t._l(t.section.data.bottomWwObjs,function(t){return a("wwObject",{key:t.uniqueId,attrs:{"ww-object":t}})}))],1)],1)},[],!1,null,"55e20a2b",null).exports;const o=function(){return!!window.vm&&(window.vm.addComponent("team_A",i),!0)};if(!o()){const t=setInterval(function(){o()&&clearInterval(t)},10)}},function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return p});var n=a(1),i=a.n(n),o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,d=0,w=!1,l=function(){},b=null,u="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,a,n){w=a,b=n||{};var o=i()(t,e);return f(o),function(e){for(var a=[],n=0;n<o.length;n++){var r=o[n];(c=s[r.id]).refs--,a.push(c)}e?f(o=i()(t,e)):o=[];for(n=0;n<a.length;n++){var c;if(0===(c=a[n]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete s[c.id]}}}}function f(t){for(var e=0;e<t.length;e++){var a=t[e],n=s[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(g(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var o=[];for(i=0;i<a.parts.length;i++)o.push(g(a.parts[i]));s[a.id]={id:a.id,refs:1,parts:o}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,a,n=document.querySelector("style["+u+'~="'+t.id+'"]');if(n){if(w)return l;n.parentNode.removeChild(n)}if(m){var i=d++;n=c||(c=v()),e=C.bind(null,n,i,!1),a=C.bind(null,n,i,!0)}else n=v(),e=function(t,e){var a=e.css,n=e.media,i=e.sourceMap;n&&t.setAttribute("media",n);b.ssrId&&t.setAttribute(u,e.id);i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var x,h=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function C(t,e,a,n){var i=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=function(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var i=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[a].concat(o).concat([i]).join("\n")}var s;return[a].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}},function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.team_A[data-v-55e20a2b]{position:relative\n}\n.team_A .header-banner-logo[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:50px\n}\n.team_A .background[data-v-55e20a2b]{position:absolute;top:0;left:0;height:100%;width:100%\n}\n.team_A .member-names[data-v-55e20a2b]{margin-top:10px\n}\n.team_A .team-names[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.team_A .card-container[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.team_A .card-background[data-v-55e20a2b]{pointer-events:all;position:absolute;height:100%;width:100%;top:0;left:0\n}\n.team_A .card-banner[data-v-55e20a2b]{position:relative;width:100%;height:30%;overflow:hidden\n}\n.team_A .curb_your_expectation[data-v-55e20a2b]{border-bottom-left-radius:50%;border-bottom-right-radius:50%\n}\n.team_A .title-banner[data-v-55e20a2b]{margin-top:10px\n}\n.team_A .card[data-v-55e20a2b]{position:relative;width:100%;margin:30px 15px;min-height:50px;border-radius:7px\n}\n.team_A .card .content[data-v-55e20a2b]{position:relative\n}\n.team_A .section-bio[data-v-55e20a2b]{position:relative;width:100%;min-height:60px;margin-top:100px\n}\n.team_A .team-bio-background[data-v-55e20a2b]{position:absolute;pointer-events:all;bottom:0;left:0;height:100%;width:100%\n}\n.team_A .container-center[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;min-height:350px\n}\n.top-ww-objs[data-v-55e20a2b],.bottom-ww-objs[data-v-55e20a2b]{position:relative\n}\n.team_A .team-pic-continer[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row\n}\n.team_A .team-pic[data-v-55e20a2b]{width:35%;height:35%;border-radius:50%;margin:5px\n}\n.team_A .button[data-v-55e20a2b]{position:absolute;top:0;left:0;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:35px;height:35px;background-color:orange;border-radius:50%;color:white;z-index:2;-webkit-box-shadow:0 0 5px -1px black;box-shadow:0 0 5px -1px black;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px\n}\n.team_A .member-names[data-v-55e20a2b]{margin-top:10px\n}\n.team_A .card[data-v-55e20a2b]{position:relative;width:100%;min-height:50px;border-radius:7px\n}\n.team_A .team-pic-container[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.team_A .container-center[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;min-height:350px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n@media (min-width: 768px){\n.team_A .card[data-v-55e20a2b]{position:relative;width:33%;margin:30px;min-height:50px;border-radius:7px\n}\n.team_A .team-pic-container[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.team_A .container-center[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;min-height:350px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row\n}\n}\n@media (min-width: 992px){\n.team_A .card[data-v-55e20a2b]{position:relative;width:30%;margin:30px;min-height:50px;border-radius:7px\n}\n.team_A .team-pic-container[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.team_A .container-center[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:80%;min-height:350px\n}\n}\n@media (min-width: 1400px){\n.team_A .card[data-v-55e20a2b]{position:relative;width:25%;margin:30px;min-height:50px;border-radius:7px\n}\n.team_A .team-pic-container[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.team_A .container-center[data-v-55e20a2b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:50%;min-height:350px\n}\n}\n",""])},function(t,e,a){"use strict";var n=a(0);a.n(n).a}]);