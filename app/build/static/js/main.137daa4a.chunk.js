(this["webpackJsonpvideo-streaming-demo"]=this["webpackJsonpvideo-streaming-demo"]||[]).push([[0],{111:function(e,a,t){e.exports=t(170)},116:function(e,a,t){},170:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t.n(r),s=t(95),o=t.n(s),l=(t(116),t(15)),c=t(16),i=t(18),m=t(17),d=t(99),u=t(6),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).onLogoutBtnClick=function(e){window.confirm("Are you sure to logout?")?document.getElementById("#nav-logout-btn").setAttribute("style","display:none"):e.preventDefault()},e}return Object(c.a)(t,[{key:"render",value:function(){return this.props.loggedIn?n.a.createElement("a",{id:"nav-logout-btn",href:"/login",className:"btn btn-warning text-white my-2 my-sm-0",onClick:this.onLogoutBtnClick},"Logout"):n.a.createElement("div",null)}}]),t}(r.Component),g=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-light bg-light"},n.a.createElement("a",{id:"title",className:"navbar-brand"},"Video Streaming Services Demo"),n.a.createElement("form",{className:"form-inline"},n.a.createElement("a",{id:"nav-signup-btn",href:"/signup",className:"btn bg-info my-2 my-sm-0 text-white"},"Sign Up"),n.a.createElement("a",{id:"nav-login-btn",href:"/login",className:"btn btn-success  my-2 my-sm-0"},"Login"),n.a.createElement(p,{loggedIn:this.props.isLoggedIn})))}}]),t}(r.Component),v=t(33),h=t(35),E=t.n(h),f=t(23),w=t(50);var b=function(e){return e.formerrors&&e.formerrors.cognito?n.a.createElement("div",{className:"text-danger"},e.formerrors.cognito.message):n.a.createElement("div",null)};var N=function(e,a){var t=!1,r=!0,n=!0;if(a.hasOwnProperty("username")&&""===a.username&&(a.errorMsg.username="Please provide username",t=!0),a.hasOwnProperty("email")&&""===a.email&&(a.errorMsg.email="Please provide email",t=!0),a.hasOwnProperty("password")&&""===a.password)a.errorMsg.password="Please provide password",t=!0;else{var s=new RegExp("[A-Z]+"),o=new RegExp("[a-z]+"),l=new RegExp("[0-9]+");a.password.length<8?(document.getElementById("password").setCustomValidity("Password not long enough"),a.errorMsg.password="Password requires minimum 8 characters",r=!1):s.test(a.password)&&o.test(a.password)?l.test(a.password)?document.getElementById("password").setCustomValidity(""):(document.getElementById("password").setCustomValidity("Password must contain number"),a.errorMsg.password="Password must contains number",r=!1):(document.getElementById("password").setCustomValidity("Password should contain uppercase and lowercase character"),a.errorMsg.password="Password requires at least one uppercase or lowercase character",r=!1)}return a.hasOwnProperty("password")&&a.hasOwnProperty("confirmPassword")&&(a.password===a.confirmPassword?""!==a.confirmPassword&&r?document.getElementById("confirmPassword").setCustomValidity(""):(t=!0,n=!1,document.getElementById("confirmPassword").setCustomValidity("Invalid password")):(document.getElementById("confirmPassword").setCustomValidity("Password not same"),a.errorMsg.confirmPassword="Must be the same with the above password",n=!1)),"signup"===a.form?{blankField:t,passwordmatch:n,validPassword:r}:{blankField:t}},y=t(104),O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={form:"login",username:"",password:"",errorMsg:{username:"",password:""},errors:{cognito:null,blankfield:!1}},e.clearErrorState=function(){document.getElementById("username").setCustomValidity(""),document.getElementById("password").setCustomValidity(""),e.setState({errors:{cognito:null,blankfield:!1}})},e.handleSubmit=function(){var a=Object(w.a)(E.a.mark((function a(t){var r,n,s,o;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),e.clearErrorState(),(r=N(t,e.state))&&e.setState({errors:Object(f.a)(Object(f.a)({},e.state.errors),r)}),n=e.state.username,s=e.state.password,a.prev=5,a.next=8,y.a.signIn(n,s);case 8:o=a.sent,e.props.login(o.username),e.props.history.push({pathname:"/home",state:{username:o.username}}),console.log(o),a.next=20;break;case 14:a.prev=14,a.t0=a.catch(5),null,a.t0.message?a.t0:{message:a.t0},e.setState({errors:Object(f.a)(Object(f.a)({},e.state.errors),{},{cognito:a.t0})}),"Incorrect username or password."==a.t0.message&&(document.getElementById("username").setCustomValidity("Incorrect username or password"),document.getElementById("password").setCustomValidity("Incorrect username or password"));case 20:case"end":return a.stop()}}),a,null,[[5,14]])})));return function(e){return a.apply(this,arguments)}}(),e.onInputChange=function(a){e.setState(Object(v.a)({},a.target.id,a.target.value))},e}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-10 content-col"},n.a.createElement("h1",null,"Login"),n.a.createElement(b,{formerrors:this.state.errors}),n.a.createElement("div",{id:"content-area",className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{id:"form",className:"needs-validation",onSubmit:this.handleSubmit,noValidate:!0},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-person",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})))),n.a.createElement("input",{type:"text",id:"username",className:"form-control",placeholder:"Username or Email",onChange:this.onInputChange,required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.username))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-key",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}),n.a.createElement("path",{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})))),n.a.createElement("input",{type:"password",id:"password",className:"form-control",placeholder:"Password",onChange:this.onInputChange,required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.password))),n.a.createElement("div",{className:"form-group"},n.a.createElement("a",{id:"forgot-password",href:"#"}," Forgot password?")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{id:"login-btn",type:"submit",className:"btn btn-success"},"Login")))))),n.a.createElement("div",{className:"col-md-2"})))}}]),t}(r.Component),I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={form:"signup",username:"",email:"",password:"",confirmPassword:"",errorMsg:{username:"",email:"",password:"",confirmPassword:""},errors:{cognito:null,blankfield:!1,validPassword:!1,passwordmatch:!1}},e.clearErrorState=function(){document.getElementById("username").setCustomValidity(""),e.setState({errors:{cognito:null,blankfield:!1,validPassword:!1,passwordmatch:!1}})},e.handleSubmit=function(){var a=Object(w.a)(E.a.mark((function a(t){var r,n,s,o,l,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),e.clearErrorState(),!(r=N(t,e.state))){a.next=7;break}return a.next=6,e.setState({errors:Object(f.a)(Object(f.a)({},e.state.errors),r)});case 6:!e.state.errors.blankfield&&e.state.errors.validPassword&&e.state.errors.passwordmatch||console.log("ERR");case 7:return n=e.state,s=n.username,o=n.email,l=n.password,a.prev=8,a.next=11,y.a.signUp({username:s,password:l,attributes:{email:o}});case 11:c=a.sent,console.log(c),e.props.history.push("/welcome"),a.next=24;break;case 16:a.prev=16,a.t0=a.catch(8),a.t0.message="User already exists",null,a.t0.message?a.t0:{message:a.t0},e.setState({errors:Object(f.a)(Object(f.a)({},e.state.errors),{},{cognito:a.t0})}),console.log(a.t0),"User already exists"==a.t0.message&&document.getElementById("username").setCustomValidity("User already exists");case 24:case"end":return a.stop()}}),a,null,[[8,16]])})));return function(e){return a.apply(this,arguments)}}(),e.onInputChange=function(a){e.setState(Object(v.a)({},a.target.id,a.target.value))},e}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-10 content-col"},n.a.createElement("h1",null,"Sign Up"),n.a.createElement(b,{formerrors:this.state.errors}),n.a.createElement("div",{id:"content-area",className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("form",{id:"form",className:"needs-validation",onSubmit:this.handleSubmit,noValidate:!0},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-person",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})))),n.a.createElement("input",{type:"text",id:"username",className:"form-control",placeholder:"Username",onChange:this.onInputChange,required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.username))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-envelope",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})))),n.a.createElement("input",{type:"text",id:"email",className:"form-control",placeholder:"Email",onChange:this.onInputChange,required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.email))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-key",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}),n.a.createElement("path",{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})))),n.a.createElement("input",{type:"password",id:"password",className:"form-control","data-html":"true",placeholder:"Password (Hover to see constraints)",onChange:this.onInputChange,"data-toggle":"tooltip",title:"Password constraints:<br />\r 1) Minimum of 8 characters<br />\r 2) At least one uppercase and lowercase character<br />\r 3) Must contains number",required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.password))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group mb-2"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},n.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-key",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"}),n.a.createElement("path",{d:"M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})))),n.a.createElement("input",{type:"password",id:"confirmPassword",className:"form-control",placeholder:"Confirm password",onChange:this.onInputChange,required:!0}),n.a.createElement("div",{className:"valid-feedback"}),n.a.createElement("div",{className:"invalid-feedback"},this.state.errorMsg.confirmPassword))),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{id:"signin-btn",type:"submit",className:"btn btn-success"},"Sign up")))))),n.a.createElement("div",{className:"col-md-2"})))}}]),t}(r.Component);function C(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-10 content-col"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h1",null,"Welcome!"),n.a.createElement("br",null),n.a.createElement("p",null,"You have successfully registered a new account."),n.a.createElement("p",null,"We've sent a confirmation link to your email. Please verify your account and then you are ready to login :)"))),n.a.createElement("div",{className:"col-md-2"})))}var x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={username:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){void 0==this.props.location.state?(alert("Invalid attempt. Login is required to view the request content."),this.props.history.push("/login")):this.setState({username:this.props.location.state.username})}},{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-2"}),n.a.createElement("div",{className:"col-md-10 content-col"},n.a.createElement("section",null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h1",null,"Demo video"),n.a.createElement("br",null),n.a.createElement("a",{id:"sample-video",href:"#video-content","data-toggle":"collapse"},"UniSA Sample Video"),n.a.createElement("div",{className:"collapse",id:"video-content"},n.a.createElement("br",null),n.a.createElement("video",{controls:!0,name:"media"},n.a.createElement("source",{src:"http://d2uajlq4cxu81a.cloudfront.net/",type:"video/mp4"})))))),n.a.createElement("div",{className:"col-md-2"})))}}]),t}(r.Component),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).login=function(e){r.setState({loggedInUser:e,isLoggedIn:!0})},r.state={loggedInUser:"",isLoggedIn:!1},r}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.location.href.includes("/home")&&this.setState({isLoggedIn:!0})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(d.a,null,n.a.createElement(r.Fragment,null,n.a.createElement(g,{isLoggedIn:this.state.isLoggedIn}),n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/",render:function(a){return n.a.createElement(O,Object.assign({},a,{login:e.login}))}}),n.a.createElement(u.a,{exact:!0,path:"/login",render:function(a){return n.a.createElement(O,Object.assign({},a,{login:e.login}))}}),n.a.createElement(u.a,{exact:!0,path:"/signup",component:I}),n.a.createElement(u.a,{exact:!0,path:"/welcome",component:C}),n.a.createElement(u.a,{exact:!0,path:"/home",component:x})))))}}]),t}(r.Component),P=t(48),j=t(60);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.default.configure({Auth:{mandatorySignId:!0,region:j.cognito.REGION,userPoolId:j.cognito.USER_POOL_ID,userPoolWebClientId:j.cognito.APP_CLIENT_ID}}),o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e){e.exports=JSON.parse('{"cognito":{"REGION":"ap-southeast-2","USER_POOL_ID":"ap-southeast-2_VzOb5Rt5z","APP_CLIENT_ID":"2gts6kfs8adu20dmqgs79d5lm5"}}')}},[[111,1,2]]]);
//# sourceMappingURL=main.137daa4a.chunk.js.map