(this["webpackJsonplive-chat"]=this["webpackJsonplive-chat"]||[]).push([[0],{33:function(e,t,n){e.exports=n(83)},43:function(e,t,n){},44:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},62:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(7),s=n(5),u=n(23),p=Object(s.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIMPLE_ACTION":return{result:t.payload};default:return e}}});n(43);var f=n(32),h=n(24),d=n(25),m=n(30),v=n(26),g=n(31),_=(n(44),{client_id:"9ae38b3d1903fa6cd9915cab44ba1448",server_url:"https://us-central1-livechat-experiments.cloudfunctions.net/restApi",test_API_URL:"https://api.livechatinc.com/v3.1/agent/action",account_url:"https://accounts.livechatinc.com/"}),b=n(27),E=n.n(b),A=_.test_API_URL,O=function(e,t,n,c){return E()({method:e,url:A+t,headers:{Authorization:"Bearer "+n,DateInterval:1,"X-API-Version":"2",Agent:c}}).catch((function(e){console.error(e)}))},j={fetchAgents:function(e){return O("GET","/agents",e)},get_archives:function(e){return O("GET","/get_archives",e)},fetchChattingTime:function(e,t){return O("GET","/chatting",t,e)}},y=(n(62),n(9)),k=function(e){function t(){var e,n;Object(h.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(a)))).simpleAction=function(){n.props.simpleAction()},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return j.get_archives(this.props.accessToken).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("button",{onClick:this.simpleAction},"Test redux action"),r.a.createElement("pre",null,JSON.stringify(this.props)),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component),T=Object(l.b)((function(e){return Object(f.a)({},e)}),(function(e){return{simpleAction:function(){return e((function(e){e({type:"SIMPLE_ACTION",payload:"result_of_simple_action"})}))}}}))(k),I=n(28),w=n.n(I),N=function(e){var t=e.marginTop;return r.a.createElement("div",{style:{display:"grid",justifyItems:"center",marginTop:t}},r.a.createElement(w.a,{type:"Oval",color:"rgb(67, 132, 245)"}))},x=n(29);n(82);i.a.render(r.a.createElement(l.a,{store:Object(s.d)(p,Object(s.a)(u.a))},r.a.createElement((function(){var e=function(e){var t=e.client_id,n=e.account_url,r=Object(a.useState)(null),o=Object(c.a)(r,2),i=o[0],l=o[1];return y.a.init({authorize:!1}),Object(a.useEffect)((function(){x.a.init({client_id:t,onIdentityFetched:function(e,c){c&&c.access_token?l(c.access_token):window.location.href="".concat(n,"?response_type=token&client_id=").concat(t,"&redirect_uri=").concat(window.location.href)}})})),[i]}(_),t=Object(c.a)(e,1)[0];return t?r.a.createElement(a.Fragment,null,r.a.createElement(T,{accessToken:t})):r.a.createElement(N,{marginTop:"calc(100% - 50px)"})}),null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9bd294ab.chunk.js.map