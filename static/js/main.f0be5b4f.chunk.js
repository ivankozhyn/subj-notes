(this["webpackJsonpsubj-notes"]=this["webpackJsonpsubj-notes"]||[]).push([[0],{18:function(e,t,n){e.exports={backdrop:"updateNoteModal_backdrop__mdFIm",modal:"updateNoteModal_modal__21q57",form:"updateNoteModal_form__2fSjU",mainTitle:"updateNoteModal_mainTitle__1oz6f",title:"updateNoteModal_title__1joIp",text:"updateNoteModal_text__2IEPf",btns:"updateNoteModal_btns__mODeR",btn:"updateNoteModal_btn__30XEq"}},22:function(e,t,n){e.exports={container:"noteList_container__3lYN9",note:"noteList_note__1lfkd",noteTitle:"noteList_noteTitle__39Ews",btns:"noteList_btns__2yqvQ"}},32:function(e,t,n){e.exports={form:"noteEditor_form__2bXMY",title:"noteEditor_title__2-qAz",text:"noteEditor_text__1fmaq",btn:"noteEditor_btn__1tQzW"}},62:function(e,t,n){e.exports=n(95)},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),l=n(10),s=n(23),u=n(20),i=n(24),d=n(25),p=n(27),m=n(26),b=n(28),f=n(8),h=n.n(f),v=n(32),E=n.n(v),k=function(e){var t=e.title,n=e.content,a=e.handleChange,o=e.handleSubmit;return r.a.createElement("form",{className:E.a.form,onSubmit:o},r.a.createElement("input",{type:"text",className:E.a.title,placeholder:"Title...",name:"title",value:t,onChange:a,required:!0}),r.a.createElement("textarea",{className:E.a.text,rows:"6",placeholder:"Text...",name:"content",value:n,onChange:a}),r.a.createElement("button",{className:E.a.btn,type:"submit"},"Save"))},y="notes/ADD_SUCCESS",O="notes/DELETE_SUCCESS",S="notes/UPDATE",g="notes/FETCH_REQUEST",_="notes/FETCH_SUCCESS",N="notes/FETCH_ERROR",C=function(e){return{type:y,payload:e}},j=function(e){return{type:O,payload:e}},w=function(e){return{type:S,payload:e}},x=function(){return{type:g}},M=function(e){return{type:_,payload:e}},T=function(e){return{type:N,payload:e}},R=n(5),D=n.n(R),A=n(17);h.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/http://test.subj.ua/api/v1/",h.a.defaults.headers.common.Authorization="Bearer p2l0ynbwahsnx2404tcxi4lwyurwrpoyrwwr";var L=function(){var e=Object(A.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(A.a)(D.a.mark((function e(t,n){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/notes",t,{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(A.a)(D.a.mark((function e(t,n){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/notes/".concat(t),{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",204===a.status);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(A.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("note: ",t),e.next=3,h.a.patch("/notes/".concat(t.id),{title:t.title||"",content:t.content||""});case 3:return n=e.sent,console.log("response: ",n),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z="snackbar/OPEN_SNACKBAR_ERROR",B="snackbar/OPEN_SNACKBAR_SUCCESS",F="snackbar/CLOSE_SNACKBAR",I="snackbar/CLOSE_SNACKBAR",K={openSnackbarError:function(){return{type:z}},closeSnackbarError:function(){return{type:F}},openSnackbarSuccess:function(e){return{type:B,payload:e}},closeSnackbarSuccess:function(){return{type:I}}},H=n(13);var Q=Object(H.combineReducers)({snackbarSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case B:return a;case I:return null;default:return e}},snackbarErrorIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case z:return!0;case F:return!1;default:return e}},snackbarSuccessIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case B:return!0;case I:return!1;default:return e}}}),W=function(e){return e.snackbar.snackbarErrorIsOpen},Y=function(e){return e.snackbar.snackbarSuccessIsOpen},J=function(e){return e.snackbar.snackbarSource},X={fetchNotes:function(){return function(){var e=Object(A.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),e.prev=1,e.next=4,L();case 4:n=e.sent,t(M(n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(T(e.t0)),t(K.openSnackbarError(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},addNote:function(e,t){return function(n){function a(){return(a=Object(A.a)(D.a.mark((function a(){var r;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U(e,t);case 3:if(!(r=a.sent)){a.next=8;break}n(C(r)),a.next=9;break;case 8:throw new Error("error add item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),h.a.isCancel(a.t0)?(console.log("Request add note canceled.",a.t0.message),n(T(a.t0))):(n(T(a.t0)),n(K.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}n(x()),n(K.openSnackbarSuccess(t)),setTimeout((function(){return a.apply(this,arguments)}),3e3)}},deleteNote:function(e,t){return function(n){function a(){return(a=Object(A.a)(D.a.mark((function a(){return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(e,t);case 3:if(!a.sent){a.next=8;break}n(j(e)),a.next=9;break;case 8:throw new Error("error delete item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),h.a.isCancel(a.t0)?(console.log("Request delete note canceled.",a.t0.message),n(T(a.t0))):(n(T(a.t0)),n(K.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))).apply(this,arguments)}n(x()),n(K.openSnackbarSuccess(t)),setTimeout((function(){return a.apply(this,arguments)}),3e3)}},updateNote:function(e){return function(){var t=Object(A.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,P(e);case 4:if(a=t.sent,console.log("data: ",a),!a){t.next=10;break}n(w(e)),t.next=11;break;case 10:throw new Error("error update item!");case 11:t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),n(T(t.t0)),n(K.openSnackbarError(t.t0));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()}},G=function(e){return e.notes.items},V=function(e){return e.notes.error&&e.notes.error.message},Z=function(e){return e.notes.loading},$={title:"",content:""},ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(u.a)({},$),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.handleSubmit=function(e){var t=n.props.addNote;e.preventDefault();var a=h.a.CancelToken.source();t(n.state,a),n.setState(Object(u.a)({},$))},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.content;return r.a.createElement(k,Object.assign({},this.props,{title:t,content:n,handleChange:this.handleChange,handleSubmit:this.handleSubmit}))}}]),t}(a.Component),te={addNote:X.addNote},ne=Object(l.b)(null,te)(ee),ae=n(22),re=n.n(ae),oe=function(e){var t=e.notes,n=void 0===t?[]:t,a=e.deleteNote,o=e.openModal,c=e.source;return r.a.createElement("div",{className:re.a.container},n.map((function(e){return r.a.createElement("div",{className:re.a.note,key:e.id},r.a.createElement("p",{className:re.a.noteTitle},e.title),r.a.createElement("p",null,e.content),r.a.createElement("hr",null),r.a.createElement("div",{className:re.a.btns},r.a.createElement("button",{className:re.a.delete,type:"button",onClick:function(){return o(e)}},"Update"),r.a.createElement("button",{className:re.a.delete,type:"button",onClick:function(){return a(e.id,c)}},"Delete")))})))},ce="modal/OPEN_MODAL",le="modal/CLOSE_MODAL",se={openModal:function(e){return{type:ce,payload:e}},closeModal:function(){return{type:le}}};var ue,ie=Object(H.combineReducers)({modalNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case ce:return a;case le:return null;default:return e}},isOpenModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case ce:return!0;case le:return!1;default:return e}}}),de=function(e){return e.modal.isOpenModal},pe=function(e){return e.modal.modalNote},me=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchNotes)(),ue=h.a.CancelToken.source()}},{key:"componentDidUpdate",value:function(){ue=h.a.CancelToken.source()}},{key:"render",value:function(){return r.a.createElement(oe,this.props)}}]),t}(a.Component),be={fetchNotes:X.fetchNotes,deleteNote:X.deleteNote,updateNote:X.updateNote,openModal:se.openModal},fe=Object(l.b)((function(e){return{notes:G(e),source:ue}}),be)(me),he=n(18),ve=n.n(he),Ee={id:null,title:"",content:""},ke=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state=Object(u.a)({},Ee),n.backdropRef=Object(a.createRef)(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.updateNote,r=t.closeModal;a(n.state),r(),n.setState(Object(u.a)({},Ee))},n.handleKeyPress=function(e){var t=n.props.closeModal;"Escape"===e.code&&t()},n.handleBackdropClick=function(e){var t=n.props.closeModal,a=n.backdropRef.current;a&&e.target!==a||t()},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.isOpenModal,n=e.modalNote,a=this.state.id;t&&n.id!==a&&this.setState(Object(u.a)({},n))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.content,a=this.props,o=a.isOpenModal,c=a.closeModal;return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("div",{className:ve.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:ve.a.modal},r.a.createElement("form",{className:ve.a.form,onSubmit:this.handleSubmit},r.a.createElement("h2",{className:ve.a.mainTitle},"Update Note"),r.a.createElement("input",{className:ve.a.title,name:"title",placeholder:"Title",required:!0,value:t,onChange:this.handleChange}),r.a.createElement("textarea",{className:ve.a.text,name:"content",placeholder:"Text",rows:"3",value:n,onChange:this.handleChange}),r.a.createElement("div",{className:ve.a.btns},r.a.createElement("button",{className:ve.a.btn,type:"button",onClick:c},"Cansel"),r.a.createElement("button",{className:ve.a.btn,type:"submit"},"Update"))))))}}]),t}(a.Component),ye={closeModal:se.closeModal,updateNote:X.updateNote},Oe=Object(l.b)((function(e){return{isOpenModal:de(e),modalNote:pe(e)}}),ye)(ke),Se=n(114),ge=n(112),_e=n(36),Ne=n.n(_e),Ce={handleClose:K.closeSnackbarError,handleClick:K.openSnackbarError},je=Object(l.b)((function(e){return{snackbarMessage:V(e),isOpenSnackbar:W(e)}}),Ce)((function(e){var t=e.snackbarMessage,n=e.handleClose,a=e.isOpenSnackbar;return r.a.createElement(Se.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:a,autoHideDuration:2e3,onClose:n,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"red"}},t),action:[r.a.createElement(ge.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n},r.a.createElement(Ne.a,null))]})})),we=n(113),xe={handleClose:K.closeSnackbarSuccess,handleClick:K.openSnackbarSuccess},Me=Object(l.b)((function(e){return{isOpenSnackbar:Y(e),source:J(e)}}),xe)((function(e){var t=e.handleClose,n=e.isOpenSnackbar,a=e.source;return r.a.createElement(Se.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:2e3,onClose:t,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"green"}},"You can cancel the operation"),action:[r.a.createElement(we.a,{key:"undo",color:"primary",size:"medium",onClick:function(){return function(e,t){e.cancel("Operation canceled by the user."),t()}(a,t)}},"\u0421ancel operation"),r.a.createElement(ge.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t},r.a.createElement(Ne.a,null))]})})),Te=Object(l.b)((function(e){return{isLoading:Z(e)}}))((function(e){var t=e.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))}));var Re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null),r.a.createElement(fe,null),r.a.createElement(Oe,null),r.a.createElement(je,null),r.a.createElement(Me,null),r.a.createElement(Te,null))},De=n(52),Ae=n(53),Le=n(54);var Ue=Object(H.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return a.notes;case y:return[a].concat(Object(Le.a)(e));case O:return e.filter((function(e){return e.id!==a}));case S:return e.map((function(e){return e.id===a.id?a:e}));default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case g:return!0;case _:case N:case y:case S:case O:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case g:return null;case N:return a;default:return e}}}),qe=Object(H.combineReducers)({modal:ie,notes:Ue,snackbar:Q}),Pe=Object(H.applyMiddleware)(Ae.a),ze=Object(De.composeWithDevTools)(Pe),Be=Object(H.createStore)(qe,ze);n(94);c.a.render(r.a.createElement(l.a,{store:Be},r.a.createElement(Re,null)),document.querySelector("#root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f0be5b4f.chunk.js.map