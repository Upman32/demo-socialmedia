(this.webpackJsonpreactit=this.webpackJsonpreactit||[]).push([[0],{109:function(e,t,n){"use strict";var r=n(2),s=(n(0),n(244)),a=n.n(s);t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:a.a.lds_hourglass})})}},152:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));n(0);var r=function(e){if(!e)return"Field is needed"},s=function(e){return function(t){if(t.length>e)return"Too much boi. Not more then ".concat(e)}}},157:function(e,t,n){e.exports={header:"Header_header__PxsM5",loginBlock:"Header_loginBlock__3TmjO"}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return O}));var r=n(9),s=n.n(r),a=n(15),c=n(71),i=n(6),o=n(17),u="ADD_POST",l="SET_PROFILE_USER",j="SET_STATUS",d={posts:[{id:1,message:"hohohohoho",likecounts:453},{id:2,message:"jaajajajajajja",likecounts:332},{id:3,message:"jaajajajajajja",likecounts:151},{id:4,message:"jaajajajajajja",likecounts:263},{id:5,message:"jaajajajajajja",likecounts:53}],profile:null,status:" "},b=function(e){return{type:"ADD_POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},h=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n({type:"SET_PROFILE_USER",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likecounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(110),s=(n(45),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5bd3fbce-427e-4214-8a7a-6d6740c2fa49"}})),a={getUsers:function(e,t){return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))},getProfile:function(e){return console.warn("old method. Use profileAPi"),i.getProfile(e)}},c={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberme:n})},logout:function(){return s.delete("auth/login")}},i={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status/",{status:e})}}},21:function(e,t,n){e.exports={Nav:"Nav_Nav__3z9_e",item:"Nav_item__3w-3u",activeLink:"Nav_activeLink__1mp4f",active:"Nav_active__1ya0Z"}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(71),s=n(6),a="ADD_MES",c={messages:[{id:1,message:"LOL"},{id:2,message:"keku"},{id:3,message:"Coco Kaine"},{id:4,message:"SebastiAAAAAN"},{id:5,message:"HOW MANY SHRIMPS FLAMING CAN eat"},{id:6,message:"one thousand million dolars"}],dialogues:[{id:1,name:"Kirill"},{id:2,name:"Kirill"},{id:3,name:"Vanya"},{id:4,name:"Denis"},{id:5,name:"Shafi"},{id:6,name:"Alex"}]},i=function(e){return{type:"ADD_MES",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},244:function(e,t,n){e.exports={lds_hourglass:"preloader_lds_hourglass__2u072"}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(6),s=n(35),a=n(36),c=n(38),i=n(37),o=n(2),u=n(0),l=n.n(u),j=n(20),d=n(11),b=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(c.a)(u,t);var n=Object(i.a)(u);function u(){return Object(s.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(r.a)({},this.props)):Object(o.jsx)(d.a,{to:"/login"})}}]),u}(l.a.Component);return Object(j.b)(b)(t)}},279:function(e,t,n){},285:function(e,t,n){},45:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return C})),n.d(t,"f",(function(){return N}));var r=n(9),s=n.n(r),a=n(15),c=n(71),i=n(6),o=n(17),u="FOLLOW",l="UNFOLLOW",j="SET_USERS",d="SET_CURRENT_PAGE",b="SET_TOTAL_COUNT",f="TOGGLE_IS_FETCHING",h="TOGGLE_IS_PROCESSING",p={users:[],pageSize:5,totalUserCount:0,currentPage:5,isFetching:!0,processing:[]},O=function(e,t,n,r){e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},g=function(e){return{type:u,userID:e}},m=function(e){return{type:l,userID:e}},v=function(e){return{type:d,currentPage:e}},x=function(e){return{type:f,isFetching:e}},_=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(e)),n.next=4,o.c.getUsers(e,t);case 4:a=n.sent,r(x(!1)),r((c=a.items,{type:j,users:c})),r((s=a.totalCount,{type:b,totalCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},y=function(){var e=Object(a.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_(!0,n)),e.next=3,o.c.follow(n);case 3:0==e.sent.data.resultCode&&t(g(n)),t(_(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),C=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.c.follow.bind(o.c),y(n,r,g,e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o.c.unfollow.bind(o.c),y(n,r,m,e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:O(e.users,t.userID,"id",{followed:!0})});case l:return Object(i.a)(Object(i.a)({},e),{},{users:O(e.users,t.userId,"id",{followed:!1})});case j:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case d:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUserCount:t.totalCount});case f:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching?[].concat(Object(c.a)(e.processing),[t.userId]):e.processing.filter((function(e){return e!=t.userId}))});default:return e}}},596:function(e,t,n){},597:function(e,t,n){},598:function(e,t,n){},696:function(e,t,n){"use strict";n.r(t);var r=n(2),s=(n(279),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,701)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))}),a=n(0),c=n.n(a),i=n(31),o=n.n(i),u=n(35),l=n(36),j=n(38),d=n(37),b=n(20),f=n(26),h=n(11),p=n(12),O=(n(285),n(109)),g=n(6),m=n(157),v=n.n(m),x=function(e){return Object(r.jsxs)("header",{className:v.a.header,children:[Object(r.jsx)("img",{src:"https://thicc.mywaifulist.moe/waifus/357/970e775e3ad5b3f5873550891e69252465dcde5b246bb474f2503bb3ece602b0_thumb.jpeg"}),Object(r.jsx)("div",{className:v.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(f.b,{to:"/login",children:"Login"})})]})},_=(n(110),n(9)),w=n.n(_),y=n(15),C=n(61),N=n(17),S="auth/SET_USER_DATA",k={userId:null,email:null,login:null,isAuth:!1},P=function(e,t,n,r){return{type:S,data:{userId:e,email:t,login:n,isAuth:r}}},A=function(e){return function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r,s,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,c=r.email,t(P(s,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(g.a)(Object(g.a)({},e),t.data);default:return e}},L=(n(305),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(x,Object(g.a)({},this.props))}}]),n}(c.a.Component)),E=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){N.a.logout().then((function(t){0===t.data.resultCode&&(e(A()),e(P(null,null,null,!1)))}))}}})(L),U=(n(596),function(e){return Object(r.jsx)("div",{ClassName:!0,children:"Music"})}),F=n(21),I=n.n(F),z=function(){return Object(r.jsxs)("nav",{className:I.a.Nav,children:[Object(r.jsx)("div",{className:I.a.item,children:Object(r.jsx)(f.b,{to:"/profile",activeClassName:I.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(I.a.item," ").concat(I.a.active),children:Object(r.jsx)(f.b,{to:"/dialogues",activeClassName:I.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:I.a.item,children:Object(r.jsx)(f.b,{to:"/News",activeClassName:I.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:I.a.item,children:Object(r.jsx)(f.b,{to:"/Users",activeClassName:I.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:I.a.item,children:Object(r.jsx)(f.b,{to:"/Music",activeClassName:I.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:I.a.item,children:Object(r.jsx)(f.b,{to:"/Settings",activeClassName:I.a.activeLink,children:"Settings"})})]})},q=(n(597),n(598),function(e){return Object(r.jsx)("div",{ClassName:!0,children:"Settings"})}),M="SET_INITIALIZED",D={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},G=n(45),B=n(115),X=n(113),H=n(112),K=n(247),W=n.n(K),V=n(72),J=n.n(V),Y=function(e){for(var t=e.totalUserCount,n=e.pageSize,s=e.currentPage,c=e.onPostChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],j=1;j<=u;j++)l.push(j);var d=Math.ceil(u/o),b=Object(a.useState)(1),f=Object(H.a)(b,2),h=f[0],p=f[1],O=(h-1)*o+1,g=h*o;return Object(r.jsxs)("div",{className:J.a.paginator,children:[h>1&&Object(r.jsx)("button",{onClick:function(){p(h-1)},children:"PREV"}),l.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(r.jsx)("span",{className:W()(Object(X.a)({},J.a.selectedPage,s===e),J.a.pageNumber),onClick:function(t){c(e)},children:e})})),d>h&&Object(r.jsx)("button",{onClick:function(){p(h+1)},children:"NEXT"})]})},Z=n.p+"static/media/Kyoooy.4eca9194.jpg",Q=function(e){var t=e.user,n=e.processing,s=e.unfollow,a=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Z,className:J.a.userPhoto})})}),Object(r.jsx)("div",{children:t.follow?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.city"}),Object(r.jsx)("div",{children:"user.location.country"})]})]})]})},$=function(e){var t=e.currentPage,n=e.users,s=e.totalUserCount,a=e.pageSize,c=e.onPostChanged,i=Object(B.a)(e,["currentPage","users","totalUserCount","pageSize","onPostChanged"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,{currentPage:t,onPostChanged:c,totalUserCount:s,pageSize:a}),n.map((function(e){return Object(r.jsx)(Q,{user:e,processing:i.processing,follow:i.follow,unfollow:i.unfollow},e.id)}))]})},ee=(n(251),n(248)),te=function(e){return e.usersPage.users},ne=(Object(ee.a)(te,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),re=function(e){return e.usersPage.totalUserCount},se=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.processing},ie=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPostChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(O.a,{}):null,Object(r.jsx)($,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPostChanged:this.onPostChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching,processing:this.props.processing})]})}}]),n}(c.a.Component),oe=Object(p.d)(Object(b.b)((function(e){return{users:te(e),pageSize:ne(e),totalUserCount:re(e),currentPage:se(e),isFetching:ae(e),processing:ce(e)}}),{follow:G.b,unfollow:G.f,setCurrentPage:G.d,toggleisProcessing:G.e,getUsers:G.c}))(ie),ue=n(241),le=n(83),je=n(152),de=n(88),be=n.n(de),fe=Object(le.a)("input"),he=Object(ue.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(le.b)("Email","email",[je.b],fe),Object(le.b)("Password","password",[je.b],fe,{type:"password"}),Object(le.b)(null,"rememberme",[],fe,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:be.a.formsummaryerror,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),pe=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(y.a)(w.a.mark((function r(s){var a,c;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,N.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(A()):(c=a.data.messages.length>0?a.data.messages[0]:"someerror",s(Object(C.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(h.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"LOGIN"}),Object(r.jsx)(he,{onSubmit:function(t){e.login(t.email,t.password,t.rememberme)}})]})})),Oe=n(240),ge=n(163),me=n(250),ve=n(242),xe=Object(p.c)({messagesPage:Oe.b,profilePage:ge.b,usersPage:G.a,auth:T,form:ve.a,app:R}),_e=Object(p.e)(xe,Object(p.a)(me.a));window.store=_e;var we=_e;function ye(e){return Object(r.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var Ce=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(r.jsx)(ye,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(r.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(c.a.Component),Ne=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(l.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();Se(n)||n[e]||(n[e]=this.state.XisNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,XisNext:!this.state.XisNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],a=Se(s.squares),c=n.map((function(e,n){var s=n?"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0445\u043e\u0434\u0443 #"+n:"\u041a \u043d\u0430\u0447\u0430\u043b\u0443 \u0438\u0433\u0440\u044b";return Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(){return t.jumpTo(n)},children:s})},n)}));return e=a?"\u0412\u044b\u0438\u0433\u0440\u0430\u043b"+a:"Next player"+(this.state.XisNext?"X":"O"),Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsx)(Ce,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{children:e}),Object(r.jsx)("ol",{children:c})]})]})}}]),n}(c.a.Component);function Se(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(H.a)(t[n],3),s=r[0],a=r[1],c=r[2];if(e[s]&&e[s]===e[a]&&e[s]===e[c])return e[s]}return null}var ke=c.a.lazy((function(){return n.e(4).then(n.bind(null,703))})),Pe=c.a.lazy((function(){return n.e(3).then(n.bind(null,702))})),Ae=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)(f.a,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(E,{}),Object(r.jsx)(z,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/Dialogues",render:function(){return Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading"}),children:[Object(r.jsx)(ke,{})," "]})}}),Object(r.jsx)(h.b,{path:"/Profile/:userId?",render:function(){return Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading"}),children:[Object(r.jsx)(Pe,{})," "]})}}),Object(r.jsx)(h.b,{path:"/Users",render:function(){return Object(r.jsx)(oe,{})}}),Object(r.jsx)(h.b,{path:"/Login",render:function(){return Object(r.jsx)(pe,{})}}),Object(r.jsx)(h.b,{path:"/News",render:function(){return Object(r.jsx)(Ne,{})}}),Object(r.jsx)(h.b,{path:"/Music",component:U}),Object(r.jsx)(h.b,{path:"/Settings",component:q})]})]})}):Object(r.jsx)(O.a,{})}}]),n}(c.a.Component),Te=Object(p.d)(Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:M})}))}},getauthUserData:A}))(Ae),Le=function(e){return Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b.a,{store:we,children:Object(r.jsx)(Te,{})})})};o.a.render(Object(r.jsx)(Le,{}),document.getElementById("root")),s()},72:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2LEWg",selectedPage:"users_selectedPage__y4VA9","lds-facebook":"users_lds-facebook__2mqpf",paginator:"users_paginator__26q9v",pageNumber:"users_pageNumber__tRudM"}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(6),s=n(115),a=n(2),c=(n(0),n(88)),i=n.n(c),o=n(155),u=function(e){return function(t){var n=t.input,c=t.meta,o=c.touched,u=c.error,l=Object(s.a)(t,["input","meta"]),j=o&&u;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(j?i.a.error:""),children:[Object(a.jsx)("div",{children:Object(a.jsx)(e,Object(r.a)(Object(r.a)({},n),l))}),j&&Object(a.jsxs)("span",{children:[" ",u," "]})]})}},l=function(e,t,n,s){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:s},c)),i]})}},88:function(e,t,n){e.exports={formControl:"Form_Control_formControl__2EM0H",error:"Form_Control_error__36AyR",formsummaryerror:"Form_Control_formsummaryerror__y9gBv"}}},[[696,1,2]]]);
//# sourceMappingURL=main.b11b80dd.chunk.js.map