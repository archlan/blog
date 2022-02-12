"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[794],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8623:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},Highlight:function(){return h},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={slug:"01-beta-release",title:"The first beta release of ArchLan is now out!",authors:"Lanhild",tags:["release","iso","beta"]},s=void 0,c={permalink:"/blog/01-beta-release",editUrl:"https://github.com/archlan/blog/edit/main/blog/2022/01-05-first-beta.mdx",source:"@site/blog/2022/01-05-first-beta.mdx",title:"The first beta release of ArchLan is now out!",description:"<span",date:"2022-01-05T00:00:00.000Z",formattedDate:"January 5, 2022",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"iso",permalink:"/blog/tags/iso"},{label:"beta",permalink:"/blog/tags/beta"}],readingTime:1.405,truncated:!0,authors:[{name:"Lanhild",title:"Developer/Maintainer at ArchLan",url:"https://github.com/Lanhild",twitter:"https://twitter.com/Lanhildy",imageURL:"https://github.com/Lanhild.png",key:"Lanhild"}],frontMatter:{slug:"01-beta-release",title:"The first beta release of ArchLan is now out!",authors:"Lanhild",tags:["release","iso","beta"]},prevItem:{title:"Lightdm doesn't start on the live ISO",permalink:"/blog/03-post-lightdm-iso"},nextItem:{title:"Start systemd services that weren't automatically enabled",permalink:"/blog/02-post-systemd"}},p={authorsImageUrls:[void 0]},u=[{value:"Release notes:",id:"release-notes",children:[],level:2},{value:"Latest release:",id:"latest-release",children:[],level:2},{value:"Verify the authenticity of the ISO",id:"verify-the-authenticity-of-the-iso",children:[],level:2}],h=function(e){var t=e.children,a=e.color;return(0,i.kt)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#b924ff",padding:"0.2rem"}},t)},m={toc:u,Highlight:h};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first release of ArchLan is now out!\nTo check it out or install it on your machine, head to ",(0,i.kt)("a",{parentName:"p",href:"https://archlan.github.io/install.html"},"ArchLan:Download"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure to know that this release ",(0,i.kt)(h,{mdxType:"Highlight"},"does not")," have a GUI installer yet")),(0,i.kt)("p",null,"Read this post for more information about this release:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Keep in mind that this release is a ",(0,i.kt)("strong",{parentName:"p"},"beta")," and I am actively developing ",(0,i.kt)(h,{mdxType:"Highlight"},"ArchLan"),", which means that you might encounter bugs or unexpected errors while using it.\nThe next versions of ArchLan will be even better and I will make sure to\nlisten to users suggestion in order to make ArchLan better!"))),(0,i.kt)("h2",{id:"release-notes"},"Release notes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"January 2022 (First Release)"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created from the ",(0,i.kt)("inlineCode",{parentName:"li"},"releng")," archiso profile, to keep it minimalist"),(0,i.kt)("li",{parentName:"ul"},"Basic i3-gaps and i3blocks config, as I am reworking the ArchLan package repository"),(0,i.kt)("li",{parentName:"ul"},"Branding official wallpapers and window manager configs"),(0,i.kt)("li",{parentName:"ul"},"ArchLan lightdm configuration"),(0,i.kt)("li",{parentName:"ul"},"My own zsh configuration"),(0,i.kt)("li",{parentName:"ul"},"More...")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This beta release provides a perfectly usable environment aimed at any type of user. The next versions will be improved over time.")),(0,i.kt)("h2",{id:"latest-release"},"Latest release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ISO")),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archlan/releases/download/v22.01/archlan-2022.01.05-x86_64.iso"},"archlan-2022.01.05-x86_64.iso")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SIG")),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archlan/releases/download/v22.01/archlan-2022.01.05-x86_64.iso.sig"},"archlan-2022.01.05-x86_64.iso.sig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"SHA")),": ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archlan/releases/download/v22.01/archlan-2022.01.05-x86_64.iso.sha256sum"},"archlan-2022.01.05-x86_64.iso.sha256sum")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"0e3ab75c9a85c9cd3d44d690e3e6cc797892d28190d53f2e42887ffaac195200"))),(0,i.kt)("h2",{id:"verify-the-authenticity-of-the-iso"},"Verify the authenticity of the ISO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)(h,{mdxType:"Highlight"},(0,i.kt)("inlineCode",{parentName:"li"},"ISO")),", ",(0,i.kt)(h,{mdxType:"Highlight"},(0,i.kt)("inlineCode",{parentName:"li"},"GPG signature"))," and the ",(0,i.kt)(h,{mdxType:"Highlight"},(0,i.kt)("inlineCode",{parentName:"li"},"sha256sum"))," files"),(0,i.kt)("li",{parentName:"ul"},"Ensure that all the files you have downloaded are present in the same directory as the ISO"),(0,i.kt)("li",{parentName:"ul"},"Verify the key on the keyserver:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --recv-keys 5F765E0E531F5B53\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Verify the iso signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --verify archlan-2022.01.05-x86_64.iso.sig\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then verify the ",(0,i.kt)("inlineCode",{parentName:"li"},"sha256sum"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sha256sum -c archlan-2022.01.05-x86_64.iso.sha256sum\n")))}d.isMDXComponent=!0}}]);