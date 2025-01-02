(this["webpackJsonpnasreen-portfolio"]=this["webpackJsonpnasreen-portfolio"]||[]).push([[0],{20:function(e,s,t){},23:function(e,s,t){},34:function(e,s,t){},44:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(12),n=t.n(a),i=(t(20),t(9)),r=t(13),l=t.n(r),d=(t(23),t(14)),o=t(5),j=t.n(o),h=t(1);class b extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,c=this.props.data.description;return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsx)(d.a,{type:"circle",bg:!0}),Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:t})}),Object(h.jsx)(j.a,{bottom:!0,duration:1200,children:Object(h.jsxs)("h3",{children:[c,"."]})}),Object(h.jsx)("hr",{}),Object(h.jsx)(j.a,{bottom:!0,duration:2e3,children:Object(h.jsxs)("ul",{className:"social",children:[Object(h.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(h.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(h.jsxs)("a",{href:s,className:"button btn github-btn",children:[Object(h.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}var m=b;class x extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsxs)("ul",{className:"copyright",children:[Object(h.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(h.jsxs)("li",{children:["Design by"," ",Object(h.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}var O=x;t(34);var p=()=>Object(h.jsxs)("button",{onClick:()=>{const e=document.createElement("a");e.href="/nasreenPortfolio/Nasreen Akhter Developer.pdf",e.download="nasreen-cv.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},className:"download-button",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(h.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(h.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Resume"]});class u extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email;this.props.data.resumedownload;return Object(h.jsx)("section",{id:"about",children:Object(h.jsx)(j.a,{duration:1e3,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:t}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[c,Object(h.jsx)("br",{}),a," ",n,", ",i]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:r}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:l})]})]}),Object(h.jsxs)("div",{className:"about-section",children:[Object(h.jsx)("h2",{children:"Nasreen Resume"}),Object(h.jsx)("p",{}),Object(h.jsx)(p,{})]})]})]})]})})})}}var v=u;class f extends c.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((e=>{const s=this.getRandomColor(),t="bar-expand "+e.name.toLowerCase(),c=e.level;return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:c,backgroundColor:s},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}var N=f;class g extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,n=this.props.data.phone,i=this.props.data.contactmessage;return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)(o.Fade,{bottom:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch."})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:i})})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(o.Slide,{left:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"eight columns",children:[Object(h.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"submit",children:"Submit"}),Object(h.jsx)("span",{id:"image-loader",children:Object(h.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(h.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(h.jsxs)("div",{id:"message-success",children:[Object(h.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(h.jsx)("br",{})]})]})}),Object(h.jsx)(o.Slide,{right:!0,duration:1e3,children:Object(h.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(h.jsxs)("div",{className:"widget widget_contact",children:[Object(h.jsx)("h4",{children:"Address and Phone"}),Object(h.jsxs)("p",{className:"address",children:[e,Object(h.jsx)("br",{}),s," ",Object(h.jsx)("br",{}),t,", ",c," ",a,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:n})]})]}),Object(h.jsxs)("div",{className:"widget widget_tweets",children:[Object(h.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(h.jsxs)("ul",{id:"twitter",children:[Object(h.jsxs)("li",{children:[Object(h.jsxs)("span",{children:["My role is as a Frontend Developer(React). Me & team are taking over a project from another dev team and there are a lot of things to learn and be aware of. Overload of information. Not only Frontend stuff but also Backend and architecture. It\u2019s an important project and I have a big role in it, where there are big expectations.",Object(h.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(h.jsx)("b",{children:Object(h.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(h.jsx)("li",{children:Object(h.jsxs)("span",{children:["I am learning a lot but I feel like it\u2019s still far from what\u2019s going be expected of me. My team and my manager have been as supportive as it gets and I don\u2019t want to let them down. I don\u2019t know exactly what I\u2019m trying to achieve with this post.",Object(h.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]})})]})]})]})})]})]})}}var w=g,y=t(15),C=t.n(y);let k=0;class D extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.projects.map((function(e){let s="images/portfolio/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsxs)("div",{className:"item-wrap",children:[Object(h.jsx)(C.a,{alt:e.title,src:s}),Object(h.jsx)("div",{style:{textAlign:"center"},children:e.title}),Object(h.jsx)("div",{style:{textAlign:"center",marginTop:"10px"},children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("button",{children:"More Details"})})})]})},k++)}));return Object(h.jsx)("section",{id:"portfolio",children:Object(h.jsx)(j.a,{left:!0,duration:1e3,distance:"40px",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works."}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}var I=D;class S extends c.Component{constructor(e){super(e),this.state={foo:"bar",resumeData:{}},i.a.initialize("UA-110570651-1"),i.a.pageview(window.location.pathname)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{data:this.state.resumeData.main}),Object(h.jsx)(v,{data:this.state.resumeData.main}),Object(h.jsx)(N,{data:this.state.resumeData.resume}),Object(h.jsx)(I,{data:this.state.resumeData.portfolio}),Object(h.jsx)(w,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.main})]})}}var F=S;var M=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:n,getTTFB:i}=s;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(h.jsx)(F,{}),document.getElementById("root")),M()}},[[44,1,2]]]);
//# sourceMappingURL=main.3bbf1b5b.chunk.js.map