(this.webpackJsonpreactit=this.webpackJsonpreactit||[]).push([[3],{698:function(t,e,s){t.exports={descriptionBlock:"Profileinfo_descriptionBlock__2xPg3"}},699:function(t,e,s){t.exports={postsblock:"MyPosts_postsblock__459TZ",posts:"MyPosts_posts__3NPOj"}},700:function(t,e,s){t.exports={item:"Post_item__3IzjM"}},702:function(t,e,s){"use strict";s.r(e);var o=s(6),c=s(35),n=s(36),i=s(38),a=s(37),r=s(2),u=s(0),j=s.n(u),p=s(163),l=s(155),d=s(241),b=s(152),O=s(83),f=s(699),h=s.n(f),x=s(700),m=s.n(x),g=function(t){return Object(r.jsxs)("div",{className:m.a.item,children:[Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/50/ee/c4/50eec4082bceec8547dba21ddfc45326.jpg",alt:"LogoImage"}),t.message,Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"like"})," ",t.likecounts]})]})},v=j.a.memo((function(t){var e=t.posts.map((function(t){return Object(r.jsx)(g,{message:t.message,likecounts:t.likecounts})}));return Object(r.jsxs)("div",{className:h.a.postsblock,children:[Object(r.jsx)("h3",{children:"My posts"}),Object(r.jsx)(S,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(r.jsx)("div",{className:h.a.posts,children:e})]})})),P=Object(b.a)(10),k=Object(O.a)("textarea"),S=Object(d.a)({form:"Posts_AddPostForm"})((function(t){return Object(r.jsxs)("form",{onSubmit:t.handleSubmit,children:["  ",Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{component:k,name:"newPostText",placeholder:"Enter some post",validate:[b.b,P]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add Post"})})]})})),_=v,y=s(20),w=Object(y.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}}))(_),I=s(109),T=s(698),A=s.n(T),M=s(165),N=(j.a.Component,s(112)),B=function(t){var e=Object(u.useState)(!1),s=Object(N.a)(e,2),o=s[0],c=s[1],n=Object(u.useState)(t.status),i=Object(N.a)(n,2),a=i[0],j=i[1];Object(u.useEffect)((function(){j(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[!o&&Object(r.jsx)("div",{children:Object(r.jsxs)("span",{onDoubleClick:function(){c(!0)},children:[t.status||"==="," yo"]})}),o&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},C=function(t){return t.profile?Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:A.a.descriptionBlock,children:[Object(r.jsx)("img",{src:t.profile.photos.large}),Object(r.jsx)(B,{status:t.status,updateStatus:t.updateStatus})]})}):Object(r.jsx)(I.a,{})},D=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(r.jsx)(w,{})]})},E=s(11),F=s(251),J=s(12),L=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.loguserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(D,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})):Object(r.jsx)(E.a,{to:"/Login"})}}]),s}(j.a.Component);e.default=Object(J.d)(Object(y.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,loguserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.e}),E.f,F.a)(L)}}]);
//# sourceMappingURL=3.ce22706d.chunk.js.map