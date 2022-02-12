"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[411],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=r,h=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7912:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={slug:"01-post-packages",title:"Fix an issue with ArchLan packages repository signing",authors:"Lanhild",tags:["pacman","howto","gpg"]},c=void 0,l={permalink:"/blog/01-post-packages",editUrl:"https://github.com/archlan/blog/edit/main/blog/2021/12-27-post-archlan-packages.mdx",source:"@site/blog/2021/12-27-post-archlan-packages.mdx",title:"Fix an issue with ArchLan packages repository signing",description:"ArchLan Linux has it's own package repository added to the pacman configuration.",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"pacman",permalink:"/blog/tags/pacman"},{label:"howto",permalink:"/blog/tags/howto"},{label:"gpg",permalink:"/blog/tags/gpg"}],readingTime:.725,truncated:!0,authors:[{name:"Lanhild",title:"Developer/Maintainer at ArchLan",url:"https://github.com/Lanhild",twitter:"https://twitter.com/Lanhildy",imageURL:"https://github.com/Lanhild.png",key:"Lanhild"}],frontMatter:{slug:"01-post-packages",title:"Fix an issue with ArchLan packages repository signing",authors:"Lanhild",tags:["pacman","howto","gpg"]},prevItem:{title:"Start systemd services that weren't automatically enabled",permalink:"/blog/02-post-systemd"}},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ArchLan Linux has it's own package repository added to the pacman configuration.\nIf, at some point, you encounter this error while trying to update;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'error: archlan-packages: signature from "Lanhild (ArchLan Linux PGP key, made by @Lanhild.) <archlan@protonmail.com>" is unknown trust\nerror: failed to synchronize all databases (invalid or corrupted database (PGP signature))\n')),(0,o.kt)("p",null,"Follow the steps in this post to fix it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The first step is to import the ArchLan Linux gpg key from the keyserver to your machine:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman-key --recv-keys 5F765E0E531F5B53\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"By precaution, verify the fingerprint of the key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman-key --finger 5F765E0E531F5B53\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The last step is to locally sign the key:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman-key --lsign-key 5F765E0E531F5B53\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once all these steps have been accomplished, you should be able to successfully update and install packages from the ArchLan repository."))))}g.isMDXComponent=!0}}]);