"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[886],{3774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),c=a(3723),l=a(1082),r=function(e){var t=e.data;return n.createElement("div",{className:"blog-box-item"},n.createElement("div",{className:"blog-img"},n.createElement(l.Link,{to:"#","data-toggle":"modal","data-target":"#blog-model-1"},n.createElement("figure",{className:"mb-0"},n.createElement(c.S,{src:"../../images/blog-img-1.png",alt:"blog-img",className:"img-fluid",__imageData:a(6811)})))),n.createElement("div",{className:"blog-content"},n.createElement("div",{className:"blog-auteher-title"},n.createElement("span",null,"Tác giả mê crypto"),n.createElement("span",{className:"float-lg-right"},t.frontmatter.date)),n.createElement(l.Link,{to:"/guide/"+t.frontmatter.tag+"/"+t.frontmatter.slug},n.createElement("h4",null,t.frontmatter.title)),n.createElement("p",null,t.excerpt),n.createElement(l.Link,{to:"#","data-toggle":"modal","data-target":"#blog-model-1"},"Read More")))},i=function(e){var t=e.data;return n.createElement("div",{className:"blog-box wow fadeInUp"},n.createElement("div",{className:"row"},t&&t.map((function(e){return n.createElement("div",{key:e.node.id,className:"col-lg-4"},n.createElement(r,{data:e.node}))}))))},o=function(e){var t=e.title,a=e.description,c=e.listPost;return n.createElement("div",{className:"blog-inner-con position-relative"},n.createElement("div",{className:"generic-title text-center"},n.createElement("h6",null,t),n.createElement("h2",{className:"mb-0"},a)),n.createElement("div",{className:"blog-box wow fadeInUp"},n.createElement("div",{className:"row"},n.createElement(i,{data:c}))))}},9357:function(e,t,a){var n=a(7294),c=a(1082);function l(e){var t,a,l=e.description,r=e.title,i=e.children,o=(0,c.useStaticQuery)("63159454").site,m=l||o.siteMetadata.description,s=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,s?r+" | "+s:r),n.createElement("meta",{name:"description",content:m}),n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:m}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=o.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:r}),n.createElement("meta",{name:"twitter:description",content:m}),i)}l.defaultProps={description:""},t.Z=l},7928:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),c=a(3774),l=a(8590),r=a(9357),i="Dapps - ứng dụng phi tập trung",o=function(){return n.createElement(r.Z,{title:i})};t.default=function(e){var t=e.data.listPostByTag.edges.filter((function(e){return!!e.node.frontmatter.date}));return console.log("🚀 ~ file: index.jsx:16 ~ Posts",t),n.createElement(l.Z,null,n.createElement(r.Z,{title:i}),n.createElement("section",{className:"w-100 float-left blog-con padding-top padding-bottom position-relative",id:"blog"},n.createElement("div",{className:"container"},n.createElement(c.Z,{title:"Góc chia sẻ",description:i,listPost:t}))))}},6811:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f6a159c58ee50eb0d2326ec1f3c8ba87/961c2/blog-img-1.png","srcSet":"/static/f6a159c58ee50eb0d2326ec1f3c8ba87/503ec/blog-img-1.png 88w,\\n/static/f6a159c58ee50eb0d2326ec1f3c8ba87/dc90d/blog-img-1.png 175w,\\n/static/f6a159c58ee50eb0d2326ec1f3c8ba87/961c2/blog-img-1.png 350w","sizes":"(min-width: 350px) 350px, 100vw"},"sources":[{"srcSet":"/static/f6a159c58ee50eb0d2326ec1f3c8ba87/79918/blog-img-1.webp 88w,\\n/static/f6a159c58ee50eb0d2326ec1f3c8ba87/48048/blog-img-1.webp 175w,\\n/static/f6a159c58ee50eb0d2326ec1f3c8ba87/9e12e/blog-img-1.webp 350w","type":"image/webp","sizes":"(min-width: 350px) 350px, 100vw"}]},"width":350,"height":249}')}}]);
//# sourceMappingURL=component---src-pages-guide-dapps-index-jsx-a0b46c0f0190de3d05fc.js.map