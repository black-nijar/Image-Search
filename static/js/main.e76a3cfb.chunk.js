(this.webpackJsonpudemy=this.webpackJsonpudemy||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(34),a(13)),s=a.n(l),u=a(25),o=a(5),m=a(6),h=a(8),p=a(7),d=a(9),f=(a(36),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleInput=function(e){e.preventDefault(),a.props.onSubmit(e.target.value)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:this.handleInput},r.a.createElement("div",{className:"image-form"},r.a.createElement("label",{htmlFor:"search-image"},"Search your favourite pics"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search images",onChange:this.handleInput}))))}}]),t}(n.Component)),b=a(26),g=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID d94ed5ad7975ca4ae3e69e6722b825e1f8f506a06f0aed04fce35a89355077d8"}}),v=a(11),y=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.images,t=e.length?e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:"images"},r.a.createElement("img",{className:"img-fluid img-thumbnail",alt:e.alt_description,key:e.id,src:e.urls.regular})))})):r.a.createElement("div",{className:"no-image",style:{width:"450px",margin:"auto"}},"Use different key words...");return r.a.createElement("div",null,r.a.createElement("div",{className:"image-list"},t))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("search/photos",{params:{query:t}});case 2:n=e.sent,a.props.addImage(n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.handleSubmit("positive")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{marginTop:"10px"}},r.a.createElement("h2",{className:"welcome"},"Welcome"),r.a.createElement(f,{onSubmit:this.handleSubmit}),r.a.createElement("br",null),r.a.createElement("h2",{className:"thumbnail-gallery"},"Thumbnail Gallery - ",this.props.images.length),r.a.createElement("hr",{className:"mt-2 mb-5"}),r.a.createElement("br",null),r.a.createElement(y,{images:this.props.images}))}}]),t}(n.Component),j=Object(v.b)((function(e){return{images:e.data}}),(function(e){return{addImage:function(t){e(function(e){return function(t){t({type:"IMAGE",images:e})}}(t))}}}))(E),O=a(3),N=a(28),k={},w=Object(O.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IMAGE":return t.images;default:return e}}}),I=Object(O.d)(w,Object(O.a)(N.a));i.a.render(r.a.createElement(v.a,{store:I},r.a.createElement(j,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e76a3cfb.chunk.js.map