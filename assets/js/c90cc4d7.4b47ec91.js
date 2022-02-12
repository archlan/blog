"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[447],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],c={slug:"01-post-packages",title:"Fix an issue with ArchLan packages repository signing",authors:"Lanhild",tags:["pacman","howto","gpg"]},s=void 0,p={permalink:"/01-post-packages",editUrl:"https://github.com/archlan/blog/edit/main/blog/2021/12-27-post-archlan-packages.mdx",source:"@site/blog/2021/12-27-post-archlan-packages.mdx",title:"Fix an issue with ArchLan packages repository signing",description:"ArchLan Linux has it's own package repository added to the pacman configuration.",date:"2021-12-27T00:00:00.000Z",formattedDate:"December 27, 2021",tags:[{label:"pacman",permalink:"/tags/pacman"},{label:"howto",permalink:"/tags/howto"},{label:"gpg",permalink:"/tags/gpg"}],readingTime:.725,truncated:!0,authors:[{name:"Lanhild",title:"Developer/Maintainer at ArchLan",url:"https://github.com/Lanhild",twitter:"https://twitter.com/Lanhildy",imageURL:"https://github.com/Lanhild.png",key:"Lanhild"}],frontMatter:{slug:"01-post-packages",title:"Fix an issue with ArchLan packages repository signing",authors:"Lanhild",tags:["pacman","howto","gpg"]},prevItem:{title:"Start systemd services that weren't automatically enabled",permalink:"/02-post-systemd"}},l={authorsImageUrls:[void 0]},u=[],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ArchLan Linux has it's own package repository added to the pacman configuration.\nIf, at some point, you encounter this error while trying to update;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'error: archlan-packages: signature from "Lanhild (ArchLan Linux PGP key, made by @Lanhild.) <archlan@protonmail.com>" is unknown trust\nerror: failed to synchronize all databases (invalid or corrupted database (PGP signature))\n')),(0,o.kt)("p",null,"Follow the steps in this post to fix it."))}m.isMDXComponent=!0}}]);