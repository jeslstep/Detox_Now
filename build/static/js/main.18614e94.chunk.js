(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(e,t,a){e.exports=a(698)},45:function(e,t,a){e.exports=a.p+"static/media/dtnow_skline_mobile.d0543a34.svg"},691:function(e,t,a){},693:function(e,t,a){},696:function(e,t,a){},698:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),s=a.n(o),c=a(51),l=a(10),i=a(271),u=(a(362),Object(c.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch((arguments.length>1?arguments[1]:void 0).type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";case"SET_TO_REGISTER_DETOX_MODE":return"detoxregister";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BED_COUNT":return t.payload;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETOX_INFO":return t.payload;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_All_DETOX_INFO":return t.payload;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DETOX_LAT_LNG":return t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("in currentLocationReducer",t.payload),t.type){case"SET_CURRENT_LOCATION":return t.payload;default:return e}},f=Object(c.c)({errors:u,loginMode:d,user:p,currentBedCountById:m,detoxInfo:h,allDetoxInfo:g,detoxLatLng:E,currentLocation:b}),O=a(9),v=a.n(O),y=a(6),_=a(42),x=a.n(_),w=v.a.mark(C),j=v.a.mark(N),I=v.a.mark(T);function C(e){var t;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(y.c)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,x.a.post("api/user/login",e.payload,t);case 6:return a.next=8,Object(y.c)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(y.c)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(y.c)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}},w,this,[[0,10]])}function N(e){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,x.a.post("api/user/logout",t);case 4:return e.next=6,Object(y.c)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}},j,this,[[0,8]])}function T(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)("LOGIN",C);case 2:return e.next=4,Object(y.d)("LOGOUT",N);case 4:case"end":return e.stop()}},I,this)}var F=T,L=v.a.mark(S),k=v.a.mark(R);function S(e){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.c)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,x.a.post("api/user/register",e.payload);case 5:return t.next=7,Object(y.c)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(y.c)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(y.c)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}},L,this,[[0,11]])}function R(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)("REGISTER",S);case 2:case"end":return e.stop()}},k,this)}var D=R,A=v.a.mark(M),G=v.a.mark(P);function M(){var e,t;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,x.a.get("api/user",e);case 4:return t=a.sent,a.next=7,Object(y.c)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}},A,this,[[0,9]])}function P(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)("FETCH_USER",M);case 2:case"end":return e.stop()}},G,this)}var B=P,U=v.a.mark(Y),z=v.a.mark($),W=v.a.mark(J),X=v.a.mark(Z),H=v.a.mark(K),q=v.a.mark(Q);function Y(e){var t,a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("in increaseSaga",e.payload),t=e.payload,n.prev=2,n.next=5,Object(y.b)(x.a.put,"/detox/increase/".concat(t),{currentBedCount:e.payload});case 5:return a=n.sent,n.next=8,Object(y.c)({type:"SET_BED_COUNT",payload:a.data});case 8:return n.next=10,Object(y.c)({type:"GET_DETOX_INFO_BY_ID",payload:e.payload});case 10:return n.next=12,Object(y.c)({type:"GET_DETOX_INFO"});case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),console.log("error with detox increase put request",n.t0);case 17:case"end":return n.stop()}},U,this,[[2,14]])}function $(e){var t,a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("in decreaseSaga",e.payload),t=e.payload,n.prev=2,n.next=5,Object(y.b)(x.a.put,"/detox/decrease/".concat(t),{currentBedCount:e.payload});case 5:return a=n.sent,n.next=8,Object(y.c)({type:"SET_BED_COUNT",payload:a.data});case 8:return n.next=10,Object(y.c)({type:"GET_DETOX_INFO_BY_ID",payload:e.payload});case 10:return n.next=12,Object(y.c)({type:"GET_DETOX_INFO"});case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),console.log("error with decrease put request",n.t0);case 17:case"end":return n.stop()}},z,this,[[2,14]])}function J(e){var t,a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("in getDetoxInfoSaga",e.payload),t=e.payload,n.prev=2,n.next=5,Object(y.b)(x.a.get,"/detox/detoxinfo/".concat(t),{currentBedCount:e.payload});case 5:return a=n.sent,n.next=8,Object(y.c)({type:"SET_DETOX_INFO",payload:a.data});case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log("error with get request",n.t0);case 13:case"end":return n.stop()}},W,this,[[2,10]])}function Z(e){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in getDetoxInfoSaga"),e.prev=1,e.next=4,Object(y.b)(x.a.get,"/detox/detoxinfo");case 4:return t=e.sent,e.next=7,Object(y.c)({type:"SET_All_DETOX_INFO",payload:t.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error with get request",e.t0);case 12:case"end":return e.stop()}},X,this,[[1,9]])}function K(e){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in getDetoxWithLowestBedCountSaga"),e.prev=1,e.next=4,Object(y.b)(x.a.get,"/detox/mincurrentbeds");case 4:return t=e.sent,e.next=7,Object(y.c)({type:"SET_DETOX_LAT_LNG",payload:t.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error with get request",e.t0);case 12:case"end":return e.stop()}},H,this,[[1,9]])}function Q(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)("INCREASE",Y);case 2:return e.next=4,Object(y.d)("DECREASE",$);case 4:return e.next=6,Object(y.d)("GET_DETOX_INFO_BY_ID",J);case 6:return e.next=8,Object(y.d)("GET_DETOX_INFO",Z);case 8:return e.next=10,Object(y.d)("GET_DETOX_WITH_LOWEST_BED_COUNT",K);case 10:case"end":return e.stop()}},q,this)}var V=Q,ee=v.a.mark(te);function te(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([F(),D(),B(),V()]);case 2:case"end":return e.stop()}},ee,this)}var ae=a(12),ne=a(11),re=a(14),oe=a(13),se=a(15),ce=a(700),le=a(703),ie=a(701),ue=a(702),de=a(272),pe=a(49),me=a(47),he=a(699),ge=a(45),Ee=a.n(ge),be=a(39),fe=a(28),Oe=a.n(fe),ve=a(24),ye=a.n(ve),_e={textAlign:"center"},xe=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement(ye.a,{htmlFor:"username"}),r.a.createElement(Oe.a,{id:"standard-name",style:_e,label:"Username",variant:"outlined",className:e.textField,value:this.props.username,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("username"),margin:"normal"}))),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"password"}),r.a.createElement(Oe.a,{id:"standard-password-input",label:"Password",className:e.textField,type:"password",variant:"outlined",value:this.props.password,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("password"),margin:"normal"})))}}]),t}(r.a.Component),we=Object(be.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},cssLabel:{color:"white",textAlign:"center"},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.primary.main," !important")}},cssFocused:{},notchedOutline:{borderWidth:"1px",borderColor:"white !important"}}})(xe),je={root:{color:"#ffffff",backgroundColor:"#16233c",margin:8,width:300},root2:{color:"#aab1c0",backgroundColor:"#373d4b",margin:8,width:300}},Ie=function(e){return r.a.createElement(he.a,Object.assign({to:"/registration"},e))},Ce=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",clearance_level:0},a.getDetoxWithMostBedsAvailable=function(e){a.props.dispatch({type:"GET_DETOX_WITH_LOWEST_BED_COUNT"}),a.getGeoLocation()},a.getGeoLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){console.log("in getGeoLoaction","lat: ",e.coords.latitude,"lng:",e.coords.longitude),a.props.dispatch({type:"SET_CURRENT_LOCATION",payload:{lat:e.coords.latitude,lng:e.coords.longitude}}),console.log("found current location","lat:",e.coords.latitude,"lng:",e.coords.longitude)}):(console.log("Location services not supported by your browser"),a.getGeoLocation())},a.login=function(e){e.preventDefault(),a.state.username&&a.state.password?a.props.dispatch({type:"LOGIN",payload:{username:a.state.username,password:a.state.password}}):a.props.dispatch({type:"LOGIN_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(pe.a)({},e,t.target.value))}},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.getDetoxWithMostBedsAvailable()}},{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b",className:"detoxlogo",height:"auto",width:"300",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},this.props.errors.loginMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.loginMessage),r.a.createElement("h1",{className:"whitetext"},"Login"),r.a.createElement(we,{handleInputChangeFor:this.handleInputChangeFor,state:this.state}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(me.a,{size:"large",style:je.root,onClick:this.login},"Login")),r.a.createElement("div",null,r.a.createElement(me.a,{size:"large",style:je.root2,component:Ie},"Register"))))}}]),t}(n.Component),Ne=Object(l.b)(function(e){return{errors:e.errors,user:e.user}})(Ce),Te=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"username"}),r.a.createElement(Oe.a,{id:"standard-name",label:"Username",variant:"outlined",className:e.textField,value:this.props.username,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("username"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"number"}),r.a.createElement(Oe.a,{id:"standard-password-input",label:"Phone Number",className:e.textField,type:"phone number",variant:"outlined",value:this.props.password,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("number"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"password"}),r.a.createElement(Oe.a,{id:"standard-password-input",label:"Password",className:e.textField,type:"password",variant:"outlined",value:this.props.password,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("password"),margin:"normal"})))}}]),t}(r.a.Component),Fe=Object(be.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},cssLabel:{color:"white",textAlign:"center"},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.primary.main," !important")}},cssFocused:{},notchedOutline:{borderWidth:"1px",borderColor:"white !important"}}})(Te),Le={root:{color:"#ffffff",backgroundColor:"#16233c",margin:8,width:300}},ke=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",clearance_level:1,number:0},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password&&a.state.number?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password,clearance_level:a.state.clearance_level,number:a.state.number}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(pe.a)({},e,t.target.value))}},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.user!==e.user&&this.props.history.push("/home")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b",className:"detoxlogo",height:"auto",width:"300",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("h1",{className:"whitetext"},"Register"),r.a.createElement(Fe,{handleInputChangeFor:this.handleInputChangeFor,state:this.state}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(me.a,{size:"large",style:Le.root,onClick:this.registerUser},"Register and Continue"))))}}]),t}(n.Component),Se=Object(l.b)(function(e){return{errors:e.errors,user:e.user}})(ke),Re=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"username"}),r.a.createElement(Oe.a,{id:"standard-name",label:"Username",variant:"outlined",className:e.textField,value:this.props.username,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("username"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"password"}),r.a.createElement(Oe.a,{id:"standard-password-input",label:"Password",className:e.textField,type:"password",variant:"outlined",value:this.props.password,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("password"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"detox_center_name"}),r.a.createElement(Oe.a,{id:"standard-detox_center_name-input",label:"Name of Detox Center",className:e.textField,type:"detox_center_name",variant:"outlined",value:this.props.detox_center_name,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("detox_center_name"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"address"}),r.a.createElement(Oe.a,{id:"standard-address-input",label:"Address",className:e.textField,type:"address",variant:"outlined",value:this.props.address,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("address"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"city"}),r.a.createElement(Oe.a,{id:"standard-city-input",label:"City",className:e.textField,type:"city",variant:"outlined",value:this.props.city,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("city"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"state"}),r.a.createElement(Oe.a,{id:"standard-state-input",label:"State",className:e.textField,type:"state",variant:"outlined",value:this.props.state.state,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("state"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"zip"}),r.a.createElement(Oe.a,{id:"standard-zip-input",label:"Zip",className:e.textField,type:"zip",variant:"outlined",value:this.props.zip,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("zip"),margin:"normal"})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"total_bed_count"}),r.a.createElement(Oe.a,{id:"standard-total_bed_count-input",label:"Total Bed Count",className:e.textField,type:"total_bed_count",variant:"outlined",value:this.props.total_bed_count,InputLabelProps:{classes:{root:e.cssLabel,focused:e.cssFocused}},InputProps:{classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},onChange:this.props.handleInputChangeFor("total_bed_count"),margin:"normal"})))}}]),t}(r.a.Component),De=Object(be.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200},cssLabel:{color:"white",textAlign:"center"},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"".concat(e.palette.primary.main," !important")}},cssFocused:{},notchedOutline:{borderWidth:"1px",borderColor:"white !important"}}})(Re),Ae={root:{color:"#ffffff",backgroundColor:"#16233c",margin:8,width:300}},Ge=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",clearance_level:2,detox_center_name:"",address:"",city:"",state:"",zip:0,total_bed_count:0},a.registerUser=function(e){e.preventDefault(),a.state.username&&a.state.password&&a.state.detox_center_name&&a.state.address&&a.state.city&&a.state.state&&a.state.zip&&a.state.total_bed_count?a.props.dispatch({type:"REGISTER",payload:{username:a.state.username,password:a.state.password,clearance_level:a.state.clearance_level,detox_center_name:a.state.detox_center_name,address:a.state.address,city:a.state.city,state:a.state.state,zip:a.state.zip,total_bed_count:a.state.total_bed_count}}):a.props.dispatch({type:"REGISTRATION_INPUT_ERROR"})},a.handleInputChangeFor=function(e){return function(t){a.setState(Object(pe.a)({},e,t.target.value))}},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b",className:"detoxlogo",height:"auto",width:"300",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},this.props.errors.registrationMessage&&r.a.createElement("h2",{className:"alert",role:"alert"},this.props.errors.registrationMessage),r.a.createElement("h1",{className:"whitetext"},"Register"),r.a.createElement(De,{handleInputChangeFor:this.handleInputChangeFor,state:this.state}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(me.a,{size:"large",style:Ae.root,onClick:this.registerUser},"Register and Continue"))))}}]),t}(n.Component),Me=Object(l.b)(function(e){return{errors:e.errors,user:e.user}})(Ge),Pe=a(82),Be=a(56),Ue=a.n(Be),ze=a(21),We=a.n(ze),Xe=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).getAllDetoxInfo=function(e){a.props.dispatch({type:"GET_DETOX_INFO"})},a.state={detox_center_name:"",isOpen:!1,activeMarker:null,detox_id:0},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.getAllDetoxInfo()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Pe.GoogleMap,{defaultZoom:10,center:{lat:44.975918,lng:-93.273079}},r.a.createElement("div",null,this.props.reduxState.allDetoxInfo.map(function(t){return r.a.createElement("div",{key:t.detox_id},r.a.createElement(Pe.Marker,{position:{lat:Number(t.lat),lng:Number(t.lng)},onClick:function(){return e.setState({isOpen:!e.state.isOpen,activeMarker:t.detox_id,detox_id:t.detox_id,detox_center_name:t.detox_center_name,destination:{lat:t.lat,lng:t.lng}})}},e.state.activeMarker===t.detox_id&&r.a.createElement(Pe.InfoWindow,null,r.a.createElement(Ue.a,{className:"infoWindow",key:t.detox_id},r.a.createElement("center",null,r.a.createElement("h3",null,t.detox_center_name),r.a.createElement("h4",null,"Beds Available:"),r.a.createElement("h3",null,Number(t.total_bed_count)-Number(t.current_bed_count)),r.a.createElement("div",null,r.a.createElement(We.a,{size:"small",variant:"contained",color:"primary",href:"http://www.google.com/maps/place/"+t.lat+","+t.lng},"Open in Google Maps")))))))}))))}}]),t}(n.Component),He=Object(l.b)(function(e){return{reduxState:e}})(Object(Pe.withScriptjs)(Object(Pe.withGoogleMap)(Xe))),qe="AIzaSyAO0APIwTGpe4qXDwhFRYDxfeRTJ6oPNAk",Ye={root:{color:"#ffffff",backgroundColor:"#16233c",margin:8,width:300}},$e=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).getDetoxWithMostBedsAvailable=function(e){a.props.dispatch({type:"GET_DETOX_WITH_LOWEST_BED_COUNT"})},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.getDetoxWithMostBedsAvailable()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},r.a.createElement("center",null,r.a.createElement(me.a,{size:"large",style:Ye.root,href:"http://www.google.com/maps/place/"+this.props.reduxState.detoxLatLng.lat+","+this.props.reduxState.detoxLatLng.lng},"Get a Bed"))))}}]),t}(n.Component),Je=Object(l.b)(function(e){return{reduxState:e}})($e),Ze=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(He,{className:"mapBorder",googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(qe,"&v=3.exp&libraries=geometry,drawing,places"),loadingElement:r.a.createElement("div",{style:{height:"50%",width:"100%"}}),containerElement:r.a.createElement("div",{id:"map",style:{position:"absolute",height:"100%",width:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}}),location:{lat:44.975918,lng:-93.273079}}),r.a.createElement("footer",null,r.a.createElement(Je,null)))}}]),t}(n.Component),Ke=Object(l.b)(function(e){return{reduxState:e}})(Ze),Qe=function(e){return r.a.createElement(he.a,Object.assign({to:"/alldetoxcentersmap"},e))},Ve=function(e){return r.a.createElement(he.a,Object.assign({to:"/registration"},e))},et=function(e){return r.a.createElement(he.a,Object.assign({to:"/login"},e))},tt={root:{color:"#ffffff",backgroundColor:"#16233c",width:140,margin:8},root1:{color:"#ffffff",backgroundColor:"#ce0019",margin:8,width:300},root2:{color:"#aab1c0",backgroundColor:"#373d4b",margin:8,width:300}},at=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b",className:"detoxlogo",height:"auto",width:"300",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},r.a.createElement("section",null,r.a.createElement("section",null,r.a.createElement("center",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mission"},r.a.createElement("p",null,"It is difficult to find available beds at detox centers and the location of person calling or messaging for help getting to a detox center.DetoxNow helps ameliorate these problems."))))),r.a.createElement("section",null,r.a.createElement("center",null,r.a.createElement("div",{className:"container"},r.a.createElement(We.a,{className:"alignLeft",size:"large",style:tt.root,component:et},"Login"),r.a.createElement(We.a,{className:"alignRight",size:"large",style:tt.root,component:Ve},"Register"))),r.a.createElement("div",null,r.a.createElement(We.a,{size:"large",fullWidth:!0,style:tt.root1,component:Qe},"Continue As Guest")),r.a.createElement("div",null,r.a.createElement(We.a,{size:"large",fullWidth:!0,style:tt.root2,component:et},"Provider Login"))))))}}]),t}(n.Component),nt=(Object(l.b)(function(e){return{reduxState:e}})(at),Object(l.b)(function(e){return{user:e.user,loginMode:e.loginMode}})(function(e){var t,a=e.component,n=e.component2,o=e.user,s=e.loginMode,c=Object(de.a)(e,["component","component2","user","loginMode"]);return t=o.id&&1===o.clearance_level?a:o.id&&2===o.clearance_level?n:""===s?at:"login"===s?Ne:"register"===s?Se:"detoxregister"===s?Me:Ne,r.a.createElement(ue.a,Object.assign({},c,{component:t}))})),rt=Object(l.b)()(function(e){return r.a.createElement(We.a,{size:"medium",variant:"contained",color:"primary",className:e.className,onClick:function(){return e.dispatch({type:"LOGOUT"})}},"Log Out")}),ot=(a(691),Object(l.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",{className:"nav"},e.user.id&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(rt,{className:"nav-right"})),r.a.createElement("div",{className:"center"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center"},"Welcome, ",e.user.username,"!")))))})),st=a(270),ct=a(66),lt=(a(693),a(174)),it=a.n(lt);it.a.setApiKey(qe);var ut=function(e){function t(e){var a;return Object(ae.a)(this,t),(a=Object(re.a)(this,Object(oe.a)(t).call(this,e))).getGeoLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){console.log("lat: ",e.coords.latitude,"lng:",e.coords.longitude),it.a.fromLatLng(e.coords.latitude,e.coords.longitude).then(function(e){var t=e.results[0].formatted_address;console.log(t),a.setState({message:{body:"From: ".concat(a.props.user.username,", ").concat(a.props.user.number,"\n                                             I need help getting to a detox center, can you come get me here: ").concat(t)}})},function(e){console.error(e)})}):alert("Location services not supported by your browser")},a.state={message:{to:"",body:"Your current location will appear here"},submitting:!1,error:!1},a.onHandleChange=a.onHandleChange.bind(Object(ct.a)(Object(ct.a)(a))),a.onSubmit=a.onSubmit.bind(Object(ct.a)(Object(ct.a)(a))),a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.getGeoLocation()}}]),Object(ne.a)(t,[{key:"onHandleChange",value:function(e){var t=e.target.getAttribute("name");this.setState({message:Object(st.a)({},this.state.message,Object(pe.a)({},t,e.target.value))})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitting:!0}),fetch("/api/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.message)}).then(function(e){return e.json()}).then(function(e){e.success?(t.setState({error:!1,submitting:!1,message:{to:"",body:""}}),alert("Message Sent")):t.setState({error:!0,submitting:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{align:"center"},r.a.createElement(Ue.a,{className:"card4"},r.a.createElement("form",{onSubmit:this.onSubmit,className:this.state.error?"error sms-form":"sms-form"},r.a.createElement("div",{className:"sms-form div"},r.a.createElement(ye.a,{className:"sms-form label",htmlFor:"to"},"To:"),r.a.createElement(Oe.a,{className:"sms-form label",type:"tel",name:"to",id:"to",value:this.state.message.to,onChange:this.onHandleChange})),r.a.createElement("div",null,r.a.createElement(ye.a,{htmlFor:"body"},"Body:"),r.a.createElement(Oe.a,{disabled:!0,id:"outlined-multiline-static",multiline:!0,rows:"9",value:this.state.message.body,name:"body",onChange:this.onHandleChange})),r.a.createElement(We.a,{variant:"raised",color:"primary",className:"sms-form button",type:"submit",disabled:this.state.submitting},"Send Message")))))}}]),t}(n.Component),dt=Object(l.b)(function(e){return{user:e.user}})(ut),pt=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement(ot,null),r.a.createElement(dt,null))}}]),t}(n.Component),mt=Object(l.b)(function(e){return{reduxState:e}})(pt),ht=a(119),gt=a.n(ht),Et=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).getDetoxInfo=function(e){a.props.dispatch({type:"GET_DETOX_INFO_BY_ID",payload:a.props.reduxState.user.id})},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.getDetoxInfo()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{align:"center"},r.a.createElement(ot,null),r.a.createElement(Ue.a,{id:"card"},this.props.reduxState.detoxInfo.map(function(e){return r.a.createElement("div",{key:e.detox_id},r.a.createElement("h1",{className:"center2"},e.detox_center_name))}),r.a.createElement(gt.a,null,r.a.createElement("table",{align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Max Bed Count"),r.a.createElement("th",null,"Current Bed Count"))),this.props.reduxState.detoxInfo.map(function(e){return r.a.createElement("tbody",{key:e.id,align:"center"},r.a.createElement("tr",null,r.a.createElement("td",null,e.total_bed_count),r.a.createElement("td",null,e.current_bed_count)))}))),r.a.createElement("div",{className:"detoxCenterBtn"},r.a.createElement(me.b,null,r.a.createElement(We.a,{size:"large",variant:"contained",color:"primary",type:"button",onClick:function(){e.props.dispatch({type:"INCREASE",payload:e.props.reduxState.user.id}),e.getDetoxInfo()}},"Increase"),r.a.createElement(We.a,{size:"large",variant:"contained",color:"primary",type:"button",onClick:function(){e.props.dispatch({type:"DECREASE",payload:e.props.reduxState.user.id}),e.getDetoxInfo()}},"Decrease")))))}}]),t}(n.Component),bt=Object(l.b)(function(e){return{reduxState:e}})(Et),ft=(a(696),{root:{color:"#ffffff",backgroundColor:"#16233c",margin:8,width:300}}),Ot=function(e){return r.a.createElement(he.a,Object.assign({to:"/registeruser"},e))},vt=function(e){return r.a.createElement(he.a,Object.assign({to:"/registerdetox"},e))},yt=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"App-header"},r.a.createElement("center",null,r.a.createElement("div",null,r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/detox-now.appspot.com/o/dtnow-red.png?alt=media&token=5c6c5842-1e82-478d-98ae-4b156d42442b",className:"detoxlogo",height:"auto",width:"300",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("img",{src:Ee.a,alt:"city outline"}))),r.a.createElement("section",{className:"grayBackground"},r.a.createElement("h1",{className:"whitetext"},"Register As"),r.a.createElement("center",null,r.a.createElement(We.a,{size:"large",style:ft.root,component:Ot,onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_MODE"})}},"Register as a User"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mission"},r.a.createElement("p",null,"When you register, you'll be able to send a meassage containing your phone number and exact location for ease of contact and pickup"))),r.a.createElement("br",null),r.a.createElement(We.a,{size:"large",style:ft.root,component:vt,onClick:function(){e.props.dispatch({type:"SET_TO_REGISTER_DETOX_MODE"})}},"Register as a Detox Center"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"mission"},r.a.createElement("p",null,"When you register, you'll be able to update bed counts allowing for patients to find the detox center with the most beds available"))))))}}]),t}(n.Component),_t=Object(l.b)(function(e){return{errors:e.errors}})(yt),xt=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(re.a)(this,(e=Object(oe.a)(t)).call.apply(e,[this].concat(r)))).getDetoxWithMostBedsAvailable=function(e){a.props.dispatch({type:"GET_DETOX_WITH_LOWEST_BED_COUNT"}),a.getGeoLocation()},a.getGeoLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){console.log("in getGeoLoaction","lat: ",e.coords.latitude,"lng:",e.coords.longitude),a.props.dispatch({type:"SET_CURRENT_LOCATION",payload:{lat:e.coords.latitude,lng:e.coords.longitude}}),console.log("found current location","lat:",e.coords.latitude,"lng:",e.coords.longitude)}):(console.log("Location services not supported by your browser"),a.getGeoLocation())},a}return Object(se.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"}),this.getDetoxWithMostBedsAvailable()}},{key:"render",value:function(){return r.a.createElement(ce.a,null,r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(ie.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(ue.a,{exact:!0,path:"/landingpage",component:at}),r.a.createElement(ue.a,{exact:!0,path:"/alldetoxcentersmap",component:Ke}),r.a.createElement(ue.a,{exact:!0,path:"/login",component:Ne}),r.a.createElement(ue.a,{exact:!0,path:"/registration",component:_t}),r.a.createElement(ue.a,{exact:!0,path:"/registeruser",component:Se}),r.a.createElement(ue.a,{exact:!0,path:"/registerdetox",component:Me}),r.a.createElement(nt,{exact:!0,path:"/home",component:mt,component2:bt}),r.a.createElement(nt,{exact:!0,path:"/smsform",component:dt}),r.a.createElement(ue.a,{render:function(){return r.a.createElement("h1",null,"404")}}))))}}]),t}(n.Component),wt=Object(l.b)()(xt),jt=Object(i.a)(),It=[jt],Ct=Object(c.d)(f,c.a.apply(void 0,It));jt.run(te),s.a.render(r.a.createElement(l.a,{store:Ct},r.a.createElement(wt,null)),document.getElementById("react-root"))}},[[353,2,1]]]);
//# sourceMappingURL=main.18614e94.chunk.js.map