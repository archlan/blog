"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[107],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={slug:"03-post-lightdm-iso",title:"Lightdm doesn't start on the live ISO",authors:"Lanhild",tags:["systemd","howto","services","iso"]},l=void 0,c={permalink:"/03-post-lightdm-iso",editUrl:"https://github.com/archlan/blog/edit/main/blog/2022/01-09-post-lightdm-iso.mdx",source:"@site/blog/2022/01-09-post-lightdm-iso.mdx",title:"Lightdm doesn't start on the live ISO",description:"When booting in the ArchLan live environment, it is possible that the lightdm display manager didn't start automatically. If it's your case, just run this command:",date:"2022-01-09T00:00:00.000Z",formattedDate:"January 9, 2022",tags:[{label:"systemd",permalink:"/tags/systemd"},{label:"howto",permalink:"/tags/howto"},{label:"services",permalink:"/tags/services"},{label:"iso",permalink:"/tags/iso"}],readingTime:.25,truncated:!1,authors:[{name:"Lanhild",title:"Developer/Maintainer at ArchLan",url:"https://github.com/Lanhild",twitter:"https://twitter.com/Lanhildy",imageURL:"https://github.com/Lanhild.png",key:"Lanhild"}],frontMatter:{slug:"03-post-lightdm-iso",title:"Lightdm doesn't start on the live ISO",authors:"Lanhild",tags:["systemd","howto","services","iso"]},prevItem:{title:"An improved beta v0.2 is now out!",permalink:"/02-beta-release"},nextItem:{title:"The first beta release of ArchLan is now out!",permalink:"/01-beta-release"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When booting in the ArchLan live environment, it is possible that the lightdm display manager didn't start automatically. If it's your case, just run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# The password for the liveuser is "archlan"\n$ sudo systemctl start lightdm.service\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This issue will be fixed in the next releases.")))}h.isMDXComponent=!0}}]);