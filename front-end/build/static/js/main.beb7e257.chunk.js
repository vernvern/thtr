(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},53:function(e,a,t){e.exports=t(81)},66:function(e,a,t){},68:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(43),c=t.n(s),l=t(89),o=t(90),i=t(88),m=t(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=t(9),u=t(10),p=t(12),h=t(11),b=t(13),g=t(70),E=t(82),v=(t(66),t(26)),f=t.n(v),w=function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header"},r.a.createElement("img",{src:f.a,className:"Home-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/Home.js")," and save to reload.test"),r.a.createElement("a",{className:"Home-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),a}(n.Component),N=t(6),k=t(27),C=t(16),j=t.n(C);function O(){var e=Object(k.a)(["\n  mutation register($nickName: String, $email: String, $password: String, $description: String){\n    registerUser(email:$email, password: $password, nickName: $nickName, description: $description){\n      user{\n        email\n      }\n      code,\n      msg\n    }\n  }\n"]);return O=function(){return e},e}var y=j()(O()),x=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={nickName:"",email:"",password1:"",password2:"",code:""},t.nickNameChange=t.nickNameChange.bind(Object(N.a)(Object(N.a)(t))),t.emailChange=t.emailChange.bind(Object(N.a)(Object(N.a)(t))),t.password1Change=t.password1Change.bind(Object(N.a)(Object(N.a)(t))),t.password2Change=t.password2Change.bind(Object(N.a)(Object(N.a)(t))),t.descriptionChange=t.descriptionChange.bind(Object(N.a)(Object(N.a)(t))),t.setCode=t.setCode.bind(Object(N.a)(Object(N.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"nickNameChange",value:function(e){this.setState({nickName:e.target.value})}},{key:"emailChange",value:function(e){this.setState({email:e.target.value})}},{key:"password1Change",value:function(e){this.setState({password1:e.target.value})}},{key:"password2Change",value:function(e){this.setState({password2:e.target.value})}},{key:"descriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"setCode",value:function(e){this.setState({code:e})}},{key:"render",value:function(){var e=this,a="";switch(this.state.code){case"2001":a="\u4e24\u4e2a\u5bc6\u7801\u4e0d\u4e00\u81f4";break;case"2002":a="\u8bf7\u586b\u5199\u6635\u79f0";break;case"2003":a="\u8bf7\u586b\u5199\u90ae\u7bb1";break;case"2004":a="\u8bf7\u586b\u5199\u5bc6\u7801";break;case"2005":a="\u8bf7\u518d\u6b21\u586b\u5199\u5bc6\u7801";break;case"2006":a="\u7f51\u7edc\u9519\u8bef";break;case"1001":a="\u8d26\u53f7\u5df2\u5b58\u5728";break;default:a=""}return r.a.createElement(m.Mutation,{mutation:y,onCompleted:function(a){console.info(a),"0"===a.registerUser.code&&e.props.history.push("/login"),e.setCode(a.registerUser.code)}},function(t,n){n.data;return r.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),e.state.nickName)if(e.state.email)if(e.state.password1)if(e.state.password2)if(e.state.password1!==e.state.password2)e.setState({code:"2001"});else if(e.state.description){var n={email:e.state.email,password:e.state.password1,nickName:e.state.nickName,description:e.state.description};t({variables:n})}else e.setState({code:"2006"});else e.setState({code:"2005"});else e.setState({code:"2004"});else e.setState({code:"2003"});else e.setState({code:"2002"})}},r.a.createElement("div",{className:"row flex-center"},r.a.createElement("div",{className:"sm-10 col"},r.a.createElement("h3",null," \u6ce8\u518c\uff5e "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nickName"},"\u6635\u79f0"),r.a.createElement("input",{type:"text",placeholder:"balabala~",id:"nickName",value:e.state.nickName,onChange:e.nickNameChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"\u90ae\u7bb1(\u8d26\u53f7)"),r.a.createElement("input",{type:"text",placeholder:"*****@**.com",id:"email",value:e.state.email,onChange:e.emailChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password1"},"\u5bc6\u7801"),r.a.createElement("input",{type:"password",placeholder:"\ud83d\ude48",id:"password1",value:e.state.password1,onChange:e.password1Change})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password2"},"\u518d\u6b21\u5bc6\u7801"),r.a.createElement("input",{type:"password",placeholder:"(\u2729_\u2729)",id:"password2",value:e.state.password2,onChange:e.password2Change})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u7b7e\u540d"),r.a.createElement("textarea",{placeholder:"\u5fc5\u586b!",valu:e.state.description,onChange:e.descriptionChange})),r.a.createElement("button",{type:"submit"},"\u6ce8\u518c"),r.a.createElement("p",{className:"text-danger"},a))))})}}]),a}(n.Component),S=t(86),$=function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=[r.a.createElement("h4",null,r.a.createElement(S.a,{to:"/home"}," Too Hard Too Remeber ! "))].map(function(e,a){return r.a.createElement("li",{key:a},e)}),a=[r.a.createElement(S.a,{to:"/page/add"}," \xa0+\xa0 "),r.a.createElement(S.a,{to:"/about"}," \u6211\u7684 ")].map(function(e,a){return r.a.createElement("li",{key:a},e)});return r.a.createElement("nav",{className:"border fixed split-nav"},r.a.createElement("div",{className:"nav-brand"},r.a.createElement("ul",{className:"inline"}," ",e," ")),r.a.createElement("div",{className:"collapsible"},r.a.createElement("input",{id:"collapsible2",type:"checkbox",name:"collapsible2"}),r.a.createElement("button",null,r.a.createElement("label",{htmlFor:"collapsible2"},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("ul",{className:"inline"}," ",a," "))))}}]),a}(n.Component),F=(t(68),function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row site"},r.a.createElement("div",{className:"sm-12 md-12 col"},r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"row"}," ",r.a.createElement($,null)," "),r.a.createElement("div",{className:"row"}," ",r.a.createElement("br",null)," "),r.a.createElement("div",{className:"Main row"},r.a.createElement("div",{className:"md-10 col"}),r.a.createElement("div",{className:"md-10 col"},r.a.createElement(g.a,{exact:!0,path:"/register",component:x}),r.a.createElement(g.a,{exact:!0,path:"/home",render:function(e){return localStorage.getItem("access_token")?r.a.createElement(w,null):r.a.createElement(E.a,{to:"/login"})}}))))))}}]),a}(n.Component)),H=t(31),q=t.n(H),D=t(49),T=t(87);function _(){var e=Object(k.a)(["\n  query dsa($email: String, $password: String){\n    login(email: $email, password: $password){\n      accessToken,\n      code,\n      msg\n    }\n  }\n"]);return _=function(){return e},e}var A=j()(_()),I=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).setCode=function(e){return t.setState(function(){return{code:e}})},t.state={email:"",password:"",code:""},t.emailChange=t.emailChange.bind(Object(N.a)(Object(N.a)(t))),t.passwordChange=t.passwordChange.bind(Object(N.a)(Object(N.a)(t))),t.setCode=t.setCode.bind(Object(N.a)(Object(N.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"emailChange",value:function(e){this.setState({email:e.target.value})}},{key:"passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this;if("0"===this.state.code)return r.a.createElement(T.a,{to:"/home"});var a="";switch(this.state.code){case"1002":a="\u8d26\u53f7\u4e0d\u5b58\u5728";break;case"1003":a="\u5bc6\u7801\u9519\u8bef";break;case"2001":a="\u8bf7\u586b\u5199\u8d26\u53f7";break;case"2002":a="\u8bf7\u586b\u5199\u5bc6\u7801";break;default:a=""}return r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"row flex-center"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"sm-12 col"},r.a.createElement("img",{src:f.a,alt:"logo"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"sm-12 col"},r.a.createElement("p",{style:{textAlign:"center"}}," Sign in to thtr "))),r.a.createElement("div",{className:"row flex-space child-borders"},r.a.createElement("div",{className:"sm-12 md-12 col padding-left-large"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"\u8d26\u53f7"),r.a.createElement("input",{type:"text",className:"border border-primary",placeholder:"\u90ae\u7bb1 | \u8d26\u53f7",id:"email",value:this.state.email,onChange:this.emailChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"\u5bc6\u7801"),r.a.createElement("input",{type:"text",className:"border border-primary",placeholder:"\ud83d\ude48",id:"password",value:this.state.password,onChange:this.passwordChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(m.ApolloConsumer,null,function(a){return r.a.createElement("button",{type:"submit",className:"btn-block",onClick:Object(D.a)(q.a.mark(function t(){var n,r;return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.email){t.next=4;break}e.setCode("2001"),t.next=14;break;case 4:if(e.state.password){t.next=8;break}e.setCode("2002"),t.next=14;break;case 8:return t.next=10,a.query({query:A,variables:{email:e.state.email,password:e.state.password}});case 10:n=t.sent,"0"===(r=n.data).login.code&&localStorage.setItem("access_token",r.login.accessToken),e.setCode(r.login.code);case 14:case"end":return t.stop()}},t,this)}))},"\u767b\u5f55")}),r.a.createElement("p",{className:"text-danger"},a)))),r.a.createElement("div",{className:"row flex-space child-borders"},r.a.createElement("div",{className:"sm-12 col padding-smal"},r.a.createElement("p",null,"\u6ca1\u6709thtr\u8d26\u53f7\uff1f",r.a.createElement(S.a,{to:"/register",style:{color:"#0066CC",textDecorationColor:"#ffffff",textDecorationLine:"underline",textDecorationStyle:"solid"}},"\u6ce8\u518c\u4e00\u4e2a")))))))}}]),a}(n.Component),R=new(t(51).a)({uri:"http://192.168.56.235/graphql/graphiql"}),U="pushState"in window.history;c.a.render(r.a.createElement(function(){return r.a.createElement(m.ApolloProvider,{client:R},r.a.createElement(l.a,{forceRefresh:!U},r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/login",render:function(e){return r.a.createElement(I,null)}}),r.a.createElement(i.a,{path:"/",component:F}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.beb7e257.chunk.js.map