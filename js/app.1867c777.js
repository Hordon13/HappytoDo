(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/HappytoDo/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},2558:function(t,e,r){},"307c":function(t,e,r){t.exports=r.p+"img/happytodo.a3a6b06f.png"},"4fbd":function(t,e,r){"use strict";var n=r("a7a9"),o=r.n(n);o.a},"509c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],a={name:"app"},s=a,c=(r("034f"),r("2877")),u=Object(c["a"])(s,o,i,!1,null,null,null),d=u.exports,l=r("2f62"),p=(r("96cf"),r("3b8d")),m=r("d225"),f=r("b0b4"),g=new(function(){function t(){Object(m["a"])(this,t)}return Object(f["a"])(t,[{key:"get",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e,r){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}()),h={todoList:[],todoUnderEdit:null,todoBeforeEdit:null},v={getTodoList:function(t){return t.todoList},getTodoUnderEdit:function(t){return t.todoUnderEdit},isEditing:function(t){return null!==t.todoUnderEdit}},b={fetchTodoList:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var r,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.rootState,o=n.auth.loggedUser.id,t.next=4,g.get("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication/".concat(o,"/todos?sortBy=id&order=desc"));case 4:i=t.sent,r("setTodoList",i);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),postTodo:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o=e.rootState,i=o.auth.loggedUser.id,t.next=4,g.post("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication/".concat(i,"/todos"),r);case 4:a=t.sent,n("addTodo",a);case 6:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),deleteTodo:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o=e.rootState,i=o.auth.loggedUser.id,t.next=4,g.delete("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication/".concat(i,"/todos/").concat(r));case 4:n("removeTodo",r);case 5:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),putTodo:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o=e.rootState,i=o.auth.loggedUser.id,t.next=4,g.put("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication/".concat(i,"/todos/").concat(r.id),r);case 4:a=t.sent,n("updateTodo",a);case 6:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),beginEdit:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,o=e.rootState,i=o.auth.loggedUser.id,null===h.todoUnderEdit){t.next=7;break}return t.next=5,g.put("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication/".concat(i,"/todos/").concat(h.todoUnderEdit.id),h.todoUnderEdit);case 5:a=t.sent,n("updateTodo",a);case 7:n("startEdit",r);case 8:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),cancelEdit:function(t){var e=t.commit;e("stopEdit")}},w={setTodoList:function(t,e){return t.todoList=e},addTodo:function(t,e){t.todoList.unshift(e)},removeTodo:function(t,e){return t.todoList=t.todoList.filter((function(t){return t.id!==e}))},updateTodo:function(t,e){t.todoList.map((function(r){return r.id===t.todoUnderEdit.id?e:r})),t.todoUnderEdit=null},startEdit:function(t,e){t.todoUnderEdit=e,t.todoBeforeEdit=Object.assign({},e)},stopEdit:function(t){t.todoUnderEdit.title=t.todoBeforeEdit.title,t.todoUnderEdit.dueAt=t.todoBeforeEdit.dueAt,t.todoBeforeEdit=null,t.todoUnderEdit=null}},y={state:h,getters:v,actions:b,mutations:w},E={userList:[],loggedUser:JSON.parse(localStorage.getItem("user")),isLoggedIn:!!localStorage.getItem("user"),regError:!1,logError:!1},O={getUser:function(t){return t.loggedUser},getIsLoggedIn:function(t){return t.isLoggedIn},getRegError:function(t){return t.regError},getLogError:function(t){return t.logError}},U={fetchUsers:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,g.get("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication");case 3:n=t.sent,r("setUsers",n);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),postUser:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,r){var n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=e.commit,E.regError=!1,o=0;o<E.userList.length;o++)E.userList[o].email===r.email&&(E.regError=!0);if(E.regError){t.next=8;break}return t.next=6,g.post("https://5d9b28bc686ed000144d1d38.mockapi.io/api/authentication",r);case 6:i=t.sent,n("registerUser",i);case 8:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),authUser:function(t,e){var r=t.commit;r("loginUser",e)},exitUser:function(t){var e=t.commit;e("logoutUser")}},x={setUsers:function(t,e){return t.userList=e},registerUser:function(t,e){t.userList.push(e)},loginUser:function(t,e){t.isLoggedIn=!1,t.logError=!1;for(var r=0;r<t.userList.length;r++)t.userList[r].email===e.email&&t.userList[r].password===e.password&&(t.loggedUser=Object.assign({},t.userList[r]),t.isLoggedIn=!0,localStorage.setItem("user",JSON.stringify(t.userList[r])));t.isLoggedIn||(t.logError=!0)},logoutUser:function(t){t.loggedUser=null,localStorage.removeItem("user"),t.isLoggedIn=!1,t.regError=!1,t.logError=!1}},T={state:E,getters:O,actions:U,mutations:x};n["a"].use(l["a"]);var _=new l["a"].Store({modules:{todos:y,auth:T}}),j=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-page-container"},[r("the-header",{attrs:{"router-text":"login","router-link":"login"}}),r("todo-list",{ref:"todoList"}),r("todo-editor",{on:{"scroll:todoList":function(e){return t.scrollToBottom()}}}),r("div",{attrs:{id:"smiley-animation",onclick:"window.open('https://github.com/Hordon13/HappytoDo');"}})],1)},L=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-header-container"},[n("header",[n("router-link",{attrs:{to:"/",tag:"div"}},[n("img",{attrs:{src:r("307c"),alt:"happy to do logo"}})]),n("div",{staticClass:"login-wrapper"},[t.getIsLoggedIn?n("h1",[t._v("Hi, "+t._s(t.getUser.username)+"!")]):t._e(),t.getIsLoggedIn?n("router-link",{attrs:{to:"/",tag:"button"},nativeOn:{click:function(e){return t.exitUser(e)}}},[t._v("log out")]):n("router-link",{attrs:{to:t.routerLink,tag:"button"}},[t._v(t._s(t.routerText))])],1)],1)])},P=[],I={name:"TheHeader",props:{routerText:String,routerLink:String},methods:Object(l["b"])(["exitUser"]),computed:Object(l["c"])(["getIsLoggedIn","getUser"])},D=I,S=(r("c031"),Object(c["a"])(D,C,P,!1,null,"63a5ca95",null)),R=S.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todo-list-container"},[r("div",{ref:"todoList",staticClass:"todo-table"},[r("table",[t._m(0),t._m(1),r("tbody",t._l(t.getTodoList,(function(e){return r("tr",{key:e.id,class:{done:e.isCompleted},on:{dblclick:function(r){return t.markComplete(e)}}},[r("td",[r("input",{attrs:{type:"checkbox",title:"mark as done"},domProps:{checked:e.isCompleted},on:{change:function(r){return t.markComplete(e)}}})]),r("td",{class:{highlight:!e.isCompleted}},[t._v(" "+t._s(e.title))]),r("td",[t._v(" "+t._s(t._f("formatDate")(e.createdAt)))]),r("td",{class:{dueToday:t.isDueToday(e.dueAt)&&!e.isCompleted}},[t._v(" "+t._s(e.dueAt))]),r("td",[r("button",{attrs:{id:"editBtn",title:"edit this todo"},on:{click:function(r){return t.beginEdit(e)}}},[r("i",{staticClass:"fas fa-pen"})]),r("button",{attrs:{id:"delBtn",title:"delete this todo"},on:{click:function(r){return t.deleteTodo(e.id)}}},[r("i",{staticClass:"fas fa-trash"})])])])})),0)])])])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("colgroup",[r("col",{attrs:{id:"col1"}}),r("col",{attrs:{id:"col2"}}),r("col",{attrs:{id:"col3"}}),r("col",{attrs:{id:"col4"}}),r("col",{attrs:{id:"col5"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Done")]),r("th",[t._v("Title")]),r("th",[t._v("Created")]),r("th",[t._v("Due Date")]),r("th",[t._v("Actions")])])])}],N=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(r,!0).forEach((function(e){Object(N["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M={name:"TodoList",methods:B({},Object(l["b"])(["fetchTodoList","deleteTodo","putTodo","beginEdit"]),{markComplete:function(t){t.isCompleted=!t.isCompleted,this.putTodo(t)},isDueToday:function(t){return new Date(t)<=new Date},scrollToTop:function(){var t=this.$refs.todoList;t.scrollTop=0}}),filters:{formatDate:function(t){return new Date(t).toLocaleDateString("hu-HU")}},computed:Object(l["c"])(["getTodoList"]),created:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchTodoList();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},Y=M,J=(r("7818"),Object(c["a"])(Y,A,$,!1,null,"ca7e83d4",null)),q=J.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"todo-editor-container"},[t.isEditing?r("form",{staticClass:"form-wrapper",on:{submit:function(e){return e.preventDefault(),t.updateTodo(e)}}},[r("h3",[t._v("Edit This Todo")]),r("div",{staticClass:"input-wrapper",class:{hasErr:t.editError&&t.emptyTitleEdit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.getTodoUnderEdit.title,expression:"getTodoUnderEdit.title"}],attrs:{type:"text",placeholder:"Edit the todo here..."},domProps:{value:t.getTodoUnderEdit.title},on:{input:function(e){e.target.composing||t.$set(t.getTodoUnderEdit,"title",e.target.value)}}}),r("div",{staticClass:"datePicker"},[r("date-time-picker",{attrs:{format:"YYYY. MM. DD.",formatted:"l",color:"#50c1f2","only-date":"","auto-close":"","no-button":"","no-label":"",overlay:"","no-value-to-custom-elem":""},model:{value:t.getTodoUnderEdit.dueAt,callback:function(e){t.$set(t.getTodoUnderEdit,"dueAt",e)},expression:"getTodoUnderEdit.dueAt"}},[r("button",{attrs:{type:"button"}},[r("i",{staticClass:"far fa-calendar-check"}),t._v("\n            "+t._s("Someday"===t.getTodoUnderEdit.dueAt?"Someday":t.getTodoUnderEdit.dueAt)+"\n          ")])])],1)]),r("div",{staticClass:"button-wrapper"},[r("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("save")]),r("button",{staticClass:"cancel",attrs:{type:"reset"},on:{click:function(e){return e.preventDefault(),t.cancelEdit(e)}}},[t._v("cancel")])])]):r("form",{staticClass:"form-wrapper",on:{submit:function(e){return e.preventDefault(),t.submitTodo(e)}}},[r("h3",[t._v("Add a New Todo")]),r("div",{staticClass:"input-wrapper",class:{hasErr:t.submitError&&t.emptyTitleAdd}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItem.title,expression:"todoItem.title"}],attrs:{type:"text",placeholder:"What to do?"},domProps:{value:t.todoItem.title},on:{input:function(e){e.target.composing||t.$set(t.todoItem,"title",e.target.value)}}}),r("div",{staticClass:"datePicker"},[r("date-time-picker",{attrs:{format:"YYYY. MM. DD.",formatted:"l",color:"#50c1f2","min-date":t.today,"only-date":"","auto-close":"","no-button":"","no-label":"",overlay:"","no-value-to-custom-elem":""},model:{value:t.todoItem.dueAt,callback:function(e){t.$set(t.todoItem,"dueAt",e)},expression:"todoItem.dueAt"}},[r("button",{attrs:{type:"button"}},[r("i",{staticClass:"far fa-calendar-check"}),t._v("\n            "+t._s(""===t.todoItem.dueAt?"Due Date":t.todoItem.dueAt)+"\n          ")])])],1)]),t._m(0)])])},G=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"button-wrapper"},[r("button",{staticClass:"submit",attrs:{type:"submit"}},[t._v("add")]),r("button",{staticClass:"cancel",attrs:{type:"reset"}},[t._v("reset")])])}],W=r("e30a"),z=r.n(W);r("b40d");function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(r,!0).forEach((function(e){Object(N["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var V={name:"TodoEditor",components:{DateTimePicker:z.a},data:function(){return{todoItem:{title:"",dueAt:""},today:(new Date).toISOString().substring(0,10),submitError:!1,editError:!1}},methods:Q({},Object(l["b"])(["postTodo","putTodo","cancelEdit"]),{submitTodo:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.todoItem.title){t.next=13;break}return e=new Date,r=!1,""===this.todoItem.dueAt&&(this.todoItem.dueAt="Someday"),n=Q({},this.todoItem,{createdAt:e,isCompleted:r}),t.next=7,this.postTodo(n);case 7:this.$emit("scroll:todoList"),this.submitError=!1,this.todoItem.title="",this.todoItem.dueAt="",t.next=14;break;case 13:this.submitError=!0;case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateTodo:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.getTodoUnderEdit.title){t.next=6;break}return t.next=3,this.putTodo(this.getTodoUnderEdit);case 3:this.editError=!1,t.next=7;break;case 6:this.editError=!0;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),computed:Q({},Object(l["c"])(["isEditing","getTodoUnderEdit"]),{emptyTitleAdd:function(){return""===this.todoItem.title},emptyTitleEdit:function(){return""===this.getTodoUnderEdit.title}})},X=V,Z=(r("4fbd"),Object(c["a"])(X,F,G,!1,null,"62514da6",null)),tt=Z.exports,et={name:"MainPage",components:{TheHeader:R,TodoList:q,TodoEditor:tt},methods:{scrollToBottom:function(){this.$refs.todoList.scrollToTop()}},computed:Object(l["c"])(["getIsLoggedIn"])},rt=et,nt=(r("696f"),Object(c["a"])(rt,k,L,!1,null,"145779e4",null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-page-container"},[r("the-header",{attrs:{"router-text":"back","router-link":"/"}}),r("div",{staticClass:"main-login-wrapper",class:{"right-panel-active":t.isSignUp}},[r("div",{staticClass:"form-container sign-up-container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[t._m(0),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"Nickname",maxlength:"12",required:""},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"Password",minlength:"8",required:""},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}})]),t.getRegError?r("span",{staticClass:"form-error"},[t._v("This email is already in use")]):t._e(),r("button",{attrs:{type:"submit"}},[t._v("Sign Up")])])]),r("div",{staticClass:"form-container sign-in-container"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t._m(1),r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.existingUser.email,expression:"existingUser.email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.existingUser.email},on:{input:function(e){e.target.composing||t.$set(t.existingUser,"email",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.existingUser.password,expression:"existingUser.password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.existingUser.password},on:{input:function(e){e.target.composing||t.$set(t.existingUser,"password",e.target.value)}}})]),t.getLogError?r("span",{staticClass:"form-error"},[t._v("Incorrect email or password")]):t._e(),r("button",{attrs:{type:"submit"}},[t._v("Sign In")])])]),r("div",{staticClass:"overlay-container"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"overlay-panel overlay-left"},[r("h3",[t._v("Do you have an account already?")]),r("p",[t._v("That's awesome! Let's login in, then...")]),r("button",{staticClass:"ghost",on:{click:function(e){t.isSignUp=!1}}},[t._v("Sign In")])]),r("div",{staticClass:"overlay-panel overlay-right"},[r("h3",[t._v("Don't have an account yet?")]),r("p",[t._v("No worries, you can create one within a minute.")]),r("button",{staticClass:"ghost",on:{click:function(e){t.isSignUp=!0}}},[t._v("Sign Up")])])])])]),r("span",{staticClass:"warning"},[t._v("❗️This is an unsecured form. Do NOT use real information!")])],1)},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-wrapper"},[r("h3",[t._v("Create Account")]),r("span",[t._v("you won't forget anything ever again")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-wrapper"},[r("h3",[t._v("Sign in")]),r("span",[t._v("your todos are waiting for you")])])}];function st(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?st(r,!0).forEach((function(e){Object(N["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ut={name:"LoginPage",components:{TheHeader:R},data:function(){return{isSignUp:!1,newUser:{username:"",email:"",password:""},existingUser:{email:"",password:""}}},methods:ct({},Object(l["b"])(["fetchUsers","postUser","authUser","postTodo"]),{login:function(){this.authUser(this.existingUser),this.getLogError||(this.existingUser.email="",this.existingUser.password="",wt.push("/todos"))},register:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.postUser(this.newUser);case 2:if(this.getRegError){t.next=20;break}return this.existingUser.email=this.newUser.email,this.existingUser.password=this.newUser.password,this.login(),e={title:"This is your first Todo! 😎️",dueAt:"Someday",isCompleted:!1,createdAt:new Date},t.next=9,this.postTodo(e);case 9:return e.title="You can add more with the form below 👇",t.next=12,this.postTodo(e);case 12:return e.title="Be Happy to Do! 🥳🤩",t.next=15,this.postTodo(e);case 15:return this.newUser.username="",this.newUser.email="",this.newUser.password="",t.next=20,wt.push("/todos");case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),computed:Object(l["c"])(["getRegError","getLogError"]),created:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchUsers();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},dt=ut,lt=(r("fc0a"),Object(c["a"])(dt,it,at,!1,null,"11c5eae9",null)),pt=lt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page-container"},[n("div",{staticClass:"content-wrapper"},[t._m(0),t._m(1),n("router-link",{attrs:{to:"/login",tag:"button"}},[t._v("Get Started")]),n("img",{attrs:{id:"showcase",src:r("e2dd"),alt:"app in computer screens"}})],1)])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-wrapper"},[n("img",{attrs:{id:"logo",src:r("307c"),alt:"logo",width:"300"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"text-field"}},[r("p",[t._v("Hi Guys, I am proudly present this little To-Do webapp that I have made for you.\n        I like to learn things via making so I made this app to cover as much as possible of the technologies that I\n        saw in the last frontend-test. Hope you will like it!"),r("br"),r("br"),t._v(" Have a look around! 🙂")])])}],gt={name:"LandingPage"},ht=gt,vt=(r("f71e"),Object(c["a"])(ht,mt,ft,!1,null,"28d4312c",null)),bt=vt.exports;n["a"].use(j["a"]);var wt=new j["a"]({routes:[{path:"/",name:"LandingPage",component:bt},{path:"/login",name:"LoginPage",component:pt,beforeEnter:function(t,e,r){_.getters.getIsLoggedIn?r("/todos"):r()}},{path:"/todos",name:"MainPage",component:ot,beforeEnter:function(t,e,r){_.getters.getIsLoggedIn?r():r("/login")}}]});n["a"].config.productionTip=!1,new n["a"]({router:wt,store:_,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,r){},"696f":function(t,e,r){"use strict";var n=r("a20d"),o=r.n(n);o.a},7818:function(t,e,r){"use strict";var n=r("9b5b"),o=r.n(n);o.a},"9b5b":function(t,e,r){},a20d:function(t,e,r){},a7a9:function(t,e,r){},c031:function(t,e,r){"use strict";var n=r("c622"),o=r.n(n);o.a},c622:function(t,e,r){},e2dd:function(t,e,r){t.exports=r.p+"img/showcase.a8768cc7.png"},f71e:function(t,e,r){"use strict";var n=r("2558"),o=r.n(n);o.a},fc0a:function(t,e,r){"use strict";var n=r("509c"),o=r.n(n);o.a}});
//# sourceMappingURL=app.1867c777.js.map