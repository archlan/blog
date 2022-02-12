"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[798],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],i={slug:"02-post-systemd",title:"Start systemd services that weren't automatically enabled",authors:"Lanhild",tags:["systemd","howto","services"]},l=void 0,c={permalink:"/blog/02-post-systemd",editUrl:"https://github.com/archlan/blog/edit/main/blog/2022/01-05-post-archlan-systemd.mdx",source:"@site/blog/2022/01-05-post-archlan-systemd.mdx",title:"Start systemd services that weren't automatically enabled",description:"During the ArchLan ISO building, the file runbeforesquashfs.sh executes operations in the last steps of the ISO building process.",date:"2022-01-05T00:00:00.000Z",formattedDate:"January 5, 2022",tags:[{label:"systemd",permalink:"/blog/tags/systemd"},{label:"howto",permalink:"/blog/tags/howto"},{label:"services",permalink:"/blog/tags/services"}],readingTime:.55,truncated:!0,authors:[{name:"Lanhild",title:"Developer/Maintainer at ArchLan",url:"https://github.com/Lanhild",twitter:"https://twitter.com/Lanhildy",imageURL:"https://github.com/Lanhild.png",key:"Lanhild"}],frontMatter:{slug:"02-post-systemd",title:"Start systemd services that weren't automatically enabled",authors:"Lanhild",tags:["systemd","howto","services"]},prevItem:{title:"The first beta release of ArchLan is now out!",permalink:"/blog/01-beta-release"},nextItem:{title:"Fix an issue with ArchLan packages repository signing",permalink:"/blog/01-post-packages"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During the ArchLan ISO building, the file ",(0,a.kt)("inlineCode",{parentName:"p"},"run_before_squashfs.sh")," executes operations in the last steps of the ISO building process.\nSome of these operations might not succesfully work. If you encounter issues, follow the steps in this post to solve them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ nmcli\nError: NetworkManager is not running.\n")),(0,a.kt)("p",null,"Follow the steps in this post to fix it."))}f.isMDXComponent=!0}}]);