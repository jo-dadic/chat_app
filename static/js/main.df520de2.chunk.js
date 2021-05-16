(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{22:function(e,t,n){e.exports={Login:"Login_Login__100A1",control:"Login_control__3ag6b"}},27:function(e,t,n){e.exports={Signup:"SignUp_Signup__1QuUH",control:"SignUp_control__3qyM8"}},28:function(e,t,n){e.exports={Chat:"Chat_Chat__3GOAi",Messages:"Chat_Messages__2-AWG",MsgForm:"Chat_MsgForm__1Hj3X",Submit:"Chat_Submit__1X8jZ"}},31:function(e,t,n){e.exports={MessageSent:"Message_MessageSent__3v5rH",MessageReceived:"Message_MessageReceived__3WscF",Msg:"Message_Msg__r-20h"}},35:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__18k3T",title:"Toolbar_title__1wT8y"}},43:function(e,t,n){e.exports={Loader:"Spinner_Loader__22w71",load4:"Spinner_load4__38bvI"}},45:function(e,t,n){e.exports={Home:"Home_Home__yKqVL"}},47:function(e,t,n){e.exports={Modal:"Modal_Modal__29hHn"}},48:function(e,t,n){e.exports={ProgressBar:"ProgressBar_ProgressBar__1AxDz"}},49:function(e,t,n){e.exports={UploadPhoto:"UploadPhoto_UploadPhoto__2amTG"}},50:function(e,t,n){e.exports={App:"App_App__3ZNXV"}},71:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=n(11),o=n(9),l=n(26),j=(n(57),n(74),n(73),l.a.initializeApp({apiKey:"AIzaSyDQVwe9BZ_E8P_aqXIKDjNpJhXui9YxTPU",authDomain:"chat-app-3aa82.firebaseapp.com",databaseURL:"https://chat-app-3aa82-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"chat-app-3aa82",storageBucket:"chat-app-3aa82.appspot.com",messagingSenderId:"229450650232",appId:"1:229450650232:web:84823e05648f6fa592938d"})),u="xB3QSxC7WthkNWFesEf285heBzi1",d=l.a.storage(),b=l.a.firestore(),p=l.a.firestore.FieldValue.serverTimestamp(),h=j,O=n(2),m=c.a.createContext(),x=function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h.auth().onAuthStateChanged(r)}),[]),Object(O.jsx)(m.Provider,{value:{currentUser:c},children:e.children})},f=n(17),g=n(6),v=n(30),_=n(35),y=n.n(_),w=function(){var e=Object(a.useContext)(m).currentUser,t=Object(g.f)();return Object(O.jsxs)("div",{className:y.a.Toolbar,children:[Object(O.jsx)("div",{className:y.a.title,children:Object(O.jsxs)(i.b,{to:"/",children:[Object(O.jsx)("i",{className:"fab fa-rocketchat",style:{fontSize:36}}),Object(O.jsx)("h1",{children:" Chat App"})]})}),e&&Object(O.jsx)("button",{onClick:function(){h.auth().signOut(),t.push("/login")},children:"Sign Out"}),!e&&null]})},N=n(43),S=n.n(N),C=function(){return Object(O.jsx)("div",{className:S.a.Loader,children:"Loading..."})},A=n(14),E=n.n(A),M=n(20),P=n(23),U=Object(P.b)({name:"signup",initialState:{name:"",error:null},reducers:{saveName:function(e,t){e.name=t.payload},setError:function(e,t){e.error=t.payload}}}),L=U.actions,k=U.reducer,F=n(27),I=n.n(F),T=Object(g.g)((function(e){var t=e.history,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(f.b)(),j=Object(f.c)((function(e){return e.signup.name}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:I.a.Signup,children:[Object(O.jsx)("h2",{children:"Please Sign Up to proceed."}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0);var n=e.target.elements,a=n.email,c=n.password;l(function(e,t,n,a){return function(){var c=Object(M.a)(E.a.mark((function c(r){return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,h.auth().createUserWithEmailAndPassword(e.value,t.value).then((function(e){e.user.updateProfile({displayName:a})})).then(n.push("/")).catch((function(e){h.auth().signOut(),r(L.setError(e)),n.push("/signup")}));case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(a,c,t,j)),s(!1)},autoComplete:"off",children:[Object(O.jsx)("div",{className:I.a.control,children:Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{name:"name",type:"text",placeholder:"Chose a name",onChange:function(e){l(L.saveName(e.target.value))},autoComplete:"off",required:!0})]})}),Object(O.jsx)("div",{className:I.a.control,children:Object(O.jsxs)("label",{children:["Email",Object(O.jsx)("input",{name:"email",type:"email",placeholder:"Enter your email",required:!0})]})}),Object(O.jsx)("div",{className:I.a.control,children:Object(O.jsxs)("label",{children:["Password",Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Enter password",required:!0})]})}),Object(O.jsx)("button",{type:"submit",children:"Sign Up"}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["Already have an account? ",Object(O.jsx)(i.b,{to:"/login",children:"Log in"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:Object(O.jsx)(i.b,{to:"/admin",children:"Log in as Admin."})})})]})]}),r&&Object(O.jsx)(C,{})]})})),B=Object(P.b)({name:"login",initialState:{error:null,isAdmin:null},reducers:{setError:function(e,t){e.error=t.payload},setAdmin:function(e){e.isAdmin=u}}}),H=B.actions,D=B.reducer,W=n(22),q=n.n(W),R=Object(g.g)((function(e){var t=e.history,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(f.b)(),j=Object(f.c)((function(e){return e.login.error}));return Object(a.useContext)(m).currentUser?Object(O.jsx)(g.a,{to:"/"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:q.a.Login,children:[Object(O.jsx)("h2",{children:"Please Log In to proceed."}),j&&Object(O.jsxs)("p",{style:{color:"red"},children:["Opss... ",j," Please, sign up."]}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0);var n=e.target.elements,a=n.email,c=n.password;l(function(e,t,n){return function(){var a=Object(M.a)(E.a.mark((function a(c){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.auth().signInWithEmailAndPassword(e.value,t.value);case 3:n.push("/"),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),c(H.setError(a.t0.message));case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()}(a,c,t)),s(!1)},children:[Object(O.jsxs)("div",{className:q.a.control,children:[Object(O.jsx)("label",{htmlFor:"email",children:"E-mail:"}),Object(O.jsx)("input",{id:"email",type:"email",placeholder:"Enter Email",required:!0})]}),Object(O.jsxs)("div",{className:q.a.control,children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("input",{id:"password",type:"password",placeholder:"Enter Password",required:!0})]}),Object(O.jsx)("button",{type:"submit",children:"Log In"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["Don't have an account? Feel free to"," ",Object(O.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:Object(O.jsx)(i.b,{to:"/admin",children:"Log in as Admin."})})})]}),r&&Object(O.jsx)(C,{})]})})),z=Object(g.g)((function(e){var t=e.history,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],s=c[1],l=Object(f.b)(),j=Object(f.c)((function(e){return e.login.error})),d=Object(f.c)((function(e){return e.login.isAdmin}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:q.a.Login,children:[Object(O.jsx)("h2",{children:"Hello Admin, log in to proceed."}),j&&Object(O.jsx)("p",{style:{color:"red"},children:j}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0);var n=e.target.elements,a=n.email,c=n.password;l(function(e,t,n){return function(){var a=Object(M.a)(E.a.mark((function a(c){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.auth().signInWithEmailAndPassword(e.value,t.value).then((function(e){var t=e.user;t.uid===u?t.updateProfile({displayName:"Admin"}).then(c(H.setAdmin())).then(n.push("/")):c(H.setError("You are not an admin. Please sign up or log in."))}));case 3:a.next=8;break;case 5:a.prev=5,a.t0=a.catch(0),c(H.setError(a.t0.message));case 8:case"end":return a.stop()}}),a,null,[[0,5]])})));return function(e){return a.apply(this,arguments)}}()}(a,c,t)),s(!1),console.log(d)},children:[Object(O.jsx)("div",{className:q.a.control}),Object(O.jsx)("div",{className:q.a.control,children:Object(O.jsxs)("label",{children:["Email",Object(O.jsx)("input",{name:"email",type:"email",placeholder:"Enter email"})]})}),Object(O.jsx)("div",{className:q.a.control,children:Object(O.jsxs)("label",{children:["Password",Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Enter password"})]})}),Object(O.jsx)("button",{type:"submit",children:"Log In"}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["You're not an Admin? ",Object(O.jsx)(i.b,{to:"/login",children:"Log in"})," as User."]})})]})]}),r&&Object(O.jsx)(C,{})]})})),V=n(45),X=n.n(V),G=function(){var e=Object(a.useContext)(m).currentUser;return Object(O.jsxs)("div",{className:X.a.Home,children:[Object(O.jsxs)("h1",{children:["Welcome to my chat app, ",e.displayName]}),Object(O.jsx)("h2",{children:"Choose a room:"}),Object(O.jsxs)(i.b,{to:"/chat",children:[Object(O.jsx)("button",{children:"Chat"}),Object(O.jsx)("button",{disabled:!0,style:{cursor:"not-allowed"},children:"Netflix"}),Object(O.jsx)("button",{disabled:!0,style:{cursor:"not-allowed"},children:"Hiking"}),Object(O.jsx)("p",{style:{color:"red"},children:"Unfortunately, rooms are unavailable at the moment."})]})]})},J=n(46),K=n(47),Q=n.n(K),Y=function(e){return Object(O.jsx)(O.Fragment,{children:e.showModal?Object(O.jsx)("div",{className:Q.a.Modal,children:e.children}):null})},Z=n(31),$=n.n(Z),ee=function(e){var t=Object(a.useContext)(m).currentUser,n=e.message,c=n.text,r=n.uid,s=n.nickname,i=n.url,l=Object(a.useState)(!1),j=Object(o.a)(l,2),u=j[0],d=j[1],b=r===t.uid?$.a.MessageSent:$.a.MessageReceived,p=null;return i&&(p=Object(O.jsx)("img",{src:i,alt:"new-img",style:{maxWidth:"500px",maxHeight:"70vh"},onClick:function(){d((function(e){return!e}))}})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"".concat(b),children:[Object(O.jsxs)("h4",{children:[s," says:"]}),Object(O.jsxs)("div",{className:$.a.Msg,children:[Object(O.jsx)("p",{children:c}),p]})]}),Object(O.jsx)(Y,{showModal:u,children:p})]})},te=function(e){var t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(a.useState)(null),h=Object(o.a)(u,2),O=h[0],x=h[1],f=Object(a.useContext)(m).currentUser;return Object(a.useEffect)((function(){var t=d.ref(e.name),n=b.collection("messages"),a=f.displayName,c=f.uid;t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){j(e)}),Object(M.a)(E.a.mark((function e(){var r,s,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:r=e.sent,s=p,i=a,n.add({url:r,createdAt:s,nickname:i,uid:c}),x(r);case 7:case"end":return e.stop()}}),e)}))))}),[e,f]),{progress:c,url:O,error:l}},ne=n(48),ae=n.n(ne),ce=function(e){var t=e.file,n=e.setFile,c=te(t),r=c.url,s=c.progress;return Object(a.useEffect)((function(){r&&n(null)}),[r,n]),Object(O.jsx)("div",{className:ae.a.ProgressBar,style:{width:s+"%"}})},re=n(49),se=n.n(re),ie=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(o.a)(r,2),i=s[0],l=s[1],j=["image/png","image/jpeg"];return Object(O.jsxs)("form",{className:se.a.UploadPhoto,children:[Object(O.jsxs)("label",{htmlFor:"file",children:[Object(O.jsx)("i",{className:"fas fa-upload"}),"Send a photo",Object(O.jsx)("input",{type:"file",id:"file",onChange:function(e){var t=e.target.files[0];t&&j.includes(t.type)?(c(t),l("")):(c(null),l("Please select an image file (png or jpeg)"))}})]}),Object(O.jsxs)("div",{className:"output",children:[i&&Object(O.jsx)("div",{className:"error",children:i}),n&&Object(O.jsx)("div",{children:n.name}),n&&Object(O.jsx)(ce,{file:n,setFile:c})]})]})},oe=n(28),le=n.n(oe),je=(n(70),function(){var e=Object(a.useContext)(m).currentUser,t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useRef)(null),i=function(){var t=Object(M.a)(E.a.mark((function t(n){var a,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.uid,s=e.displayName,t.next=4,l.add({text:c,createdAt:p,uid:a,nickname:s});case 4:r("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=b.collection("messages"),j=l.orderBy("createdAt").limitToLast(25),u=Object(J.a)(j,{idField:"id"}),d=Object(o.a)(u,1)[0];return Object(a.useEffect)((function(){s.current.scrollIntoView({behaviour:"smooth"})}),[d]),Object(a.useEffect)((function(){e&&v.NotificationManager.info(e.displayName+" has just joined in!")}),[e]),Object(O.jsxs)("div",{className:le.a.Chat,children:[Object(O.jsxs)("div",{className:le.a.Messages,children:[d&&d.map((function(e){return Object(O.jsx)(ee,{message:e},e.id)})),Object(O.jsx)("div",{ref:s})]}),Object(O.jsx)("div",{className:le.a.MsgForm,children:Object(O.jsxs)("form",{onSubmit:i,children:[Object(O.jsx)("input",{type:"text",value:c,onChange:function(e){r(e.target.value)},name:"new-message",placeholder:"Say something",autoComplete:"off"}),Object(O.jsx)("button",{className:le.a.Submit,type:"submit",children:"Send"})]})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)(ie,{})]})]})}),ue=n(32),de=n(51),be=function(e){var t=e.component,n=Object(de.a)(e,["component"]),c=Object(a.useContext)(m).currentUser;return Object(O.jsx)(g.b,Object(ue.a)(Object(ue.a)({},n),{},{render:function(e){return c?Object(O.jsx)(t,Object(ue.a)({},e)):Object(O.jsx)(g.a,{to:"/login"})}}))},pe=n(50),he=n.n(pe),Oe=function(){return Object(O.jsxs)("div",{className:he.a.App,children:[Object(O.jsx)(v.NotificationContainer,{}),Object(O.jsx)(w,{}),Object(O.jsx)(be,{exact:!0,path:"/",component:G}),Object(O.jsx)(g.b,{exact:!0,path:"/signup",component:T}),Object(O.jsx)(g.b,{exact:!0,path:"/login",component:R}),Object(O.jsx)(g.b,{exact:!0,path:"/admin",component:z}),Object(O.jsx)(be,{exact:!0,path:"/chat",component:je})]})},me=Object(P.b)({name:"room",initialState:{room:""},reducers:{changeRoom:function(e,t){e.room=t.payload}}}),xe=(me.action,me.reducer),fe=Object(P.a)({reducer:{signup:k,login:D,rooms:xe}});s.a.render(Object(O.jsx)(i.a,{children:Object(O.jsx)(f.a,{store:fe,children:Object(O.jsx)(x,{children:Object(O.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.df520de2.chunk.js.map