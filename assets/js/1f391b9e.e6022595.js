"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85],{6255:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(7294),t=n(6010),i=n(6022),s=n(4137),c=n(4996),m=n(4672),r=n(6782),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.metadata,d=n.title,v=n.description,u=n.permalink,N=n.frontMatter,f=N.wrapperClassName,g=N.hide_table_of_contents;return l.createElement(i.Z,{title:d,description:v,permalink:u,wrapperClassName:null!=f?f:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!g&&"col--8")},l.createElement(s.Zo,{components:c.Z},l.createElement(a,null))),!g&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(m.Z,{toc:a.toc,minHeadingLevel:N.toc_min_heading_level,maxHeadingLevel:N.toc_max_heading_level})))))}},4672:function(e,a,n){n.d(a,{Z:function(){return u}});var l=n(7462),t=n(3366),i=n(7294),s=n(6010),c=n(6782),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function o(e){var a=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,N=e.minHeadingLevel,f=e.maxHeadingLevel,g=(0,t.Z)(e,m),k=(0,c.LU)(),C=null!=N?N:k.tableOfContents.minHeadingLevel,_=null!=f?f:k.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,c.Si)(h),i.createElement(r,(0,l.Z)({toc:p,className:s,linkClassName:d},g))}var d="tableOfContents_cNA8",v=["className"];var u=function(e){var a=e.className,n=(0,t.Z)(e,v);return i.createElement("div",{className:(0,s.Z)(d,"thin-scrollbar",a)},i.createElement(o,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);