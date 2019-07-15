(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=n(13),l=n(38),u=n(32),i=n(19),d=n(20),p=n(22),E=n(21),f=n(23),S=n(11),m=n.n(S),h=n(41),b=n.n(h),C={title:"",content:""},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state=Object(u.a)({},C),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.handleSubmit=function(e){var t=n.props.addNote;e.preventDefault();var a=m.a.CancelToken.source();t(n.state,a),n.setState(Object(u.a)({},C))},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.content;return r.a.createElement("form",{className:b.a.form,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",className:b.a.title,placeholder:"Title...",name:"title",value:t,onChange:this.handleChange,required:!0}),r.a.createElement("textarea",{className:b.a.text,rows:"6",placeholder:"Text...",name:"content",value:n,onChange:this.handleChange}),r.a.createElement("button",{className:b.a.btn,type:"submit"},"Save"))}}]),t}(a.Component),O={ADD_SUCCESS:"notes/ADD_SUCCESS",DELETE_SUCCESS:"notes/DELETE_SUCCESS",UPDATE_SUCCESS:"notes/UPDATE",FETCH_REQUEST:"notes/FETCH_REQUEST",FETCH_SUCCESS:"notes/FETCH_SUCCESS",FETCH_ERROR:"notes/FETCH_ERROR"},_={addNoteSuccess:function(e){return{type:O.ADD_SUCCESS,payload:e}},deleteNoteSuccess:function(e){return{type:O.DELETE_SUCCESS,payload:e}},updateNoteSuccess:function(e){return{type:O.UPDATE_SUCCESS,payload:e}},fetchRequest:function(){return{type:O.FETCH_REQUEST}},fetchSuccess:function(e){return{type:O.FETCH_SUCCESS,payload:e}},fetchError:function(e){return{type:O.FETCH_ERROR,payload:e}}},N=n(8),k=n.n(N),y=n(24);m.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/http://test.subj.ua/api/v1/",m.a.defaults.headers.common.Authorization="Bearer p2l0ynbwahsnx2404tcxi4lwyurwrpoyrwwr";var R=function(){var e=Object(y.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/notes");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(k.a.mark(function e(t,n){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/notes",t,{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(y.a)(k.a.mark(function e(t,n){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("/notes/".concat(t),{cancelToken:n.token});case 2:return a=e.sent,e.abrupt("return",204===a.status);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(y.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.patch("/notes/".concat(t.id),{title:t.title||"",text:t.text||""});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w={OPEN_SNACKBAR_ERROR:"snackbar/OPEN_SNACKBAR_ERROR",OPEN_SNACKBAR_SUCCESS:"snackbar/OPEN_SNACKBAR_SUCCESS",CLOSE_SNACKBAR_ERROR:"snackbar/CLOSE_SNACKBAR",CLOSE_SNACKBAR_SUCCESS:"snackbar/CLOSE_SNACKBAR"},U={openSnackbarError:function(){return{type:w.OPEN_SNACKBAR_ERROR}},closeSnackbarError:function(){return{type:w.CLOSE_SNACKBAR_ERROR}},openSnackbarSuccess:function(e){return{type:w.OPEN_SNACKBAR_SUCCESS,payload:e}},closeSnackbarSuccess:function(){return{type:w.CLOSE_SNACKBAR_SUCCESS}}},T=n(16);var x=Object(T.combineReducers)({snackbarSource:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case w.OPEN_SNACKBAR_SUCCESS:return a;case w.CLOSE_SNACKBAR_SUCCESS:return null;default:return e}},snackbarErrorIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case w.OPEN_SNACKBAR_ERROR:return!0;case w.CLOSE_SNACKBAR_ERROR:return!1;default:return e}},snackbarSuccessIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case w.OPEN_SNACKBAR_SUCCESS:return!0;case w.CLOSE_SNACKBAR_SUCCESS:return!1;default:return e}}}),D=function(e){return e.snackbar.snackbarErrorIsOpen},M=function(e){return e.snackbar.snackbarSuccessIsOpen},L=function(e){return e.snackbar.snackbarSource},P={fetchNotes:function(){return function(){var e=Object(y.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(_.fetchRequest()),e.prev=1,e.next=4,R();case 4:n=e.sent,t(_.fetchSuccess(n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(_.fetchError(e.t0)),t(U.openSnackbarError(e.t0));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},addNote:function(e,t){return function(n){function a(){return(a=Object(y.a)(k.a.mark(function a(){var r;return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A(e,t);case 3:if(!(r=a.sent)){a.next=8;break}n(_.addNoteSuccess(r)),a.next=9;break;case 8:throw new Error("error add item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),m.a.isCancel(a.t0)?(console.log("Request add note canceled.",a.t0.message),n(_.fetchError(a.t0))):(n(_.fetchError(a.t0)),n(U.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}},a,null,[[0,11]])}))).apply(this,arguments)}n(_.fetchRequest()),n(U.openSnackbarSuccess(t)),setTimeout(function(){return a.apply(this,arguments)},5e3)}},deleteNote:function(e,t){return function(n){function a(){return(a=Object(y.a)(k.a.mark(function a(){return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g(e,t);case 3:if(!a.sent){a.next=8;break}n(_.deleteNoteSuccess(e)),a.next=9;break;case 8:throw new Error("error delete item!");case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),m.a.isCancel(a.t0)?(console.log("Request delete note canceled.",a.t0.message),n(_.fetchError(a.t0))):(n(_.fetchError(a.t0)),n(U.openSnackbarError(a.t0)));case 14:case"end":return a.stop()}},a,null,[[0,11]])}))).apply(this,arguments)}n(_.fetchRequest()),n(U.openSnackbarSuccess(t)),setTimeout(function(){return a.apply(this,arguments)},5e3)}},updateNote:function(e){return function(){var t=Object(y.a)(k.a.mark(function t(n){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(_.fetchRequest()),t.prev=1,t.next=4,j(e);case 4:if(!t.sent){t.next=9;break}n(_.updateNoteSuccess(e)),t.next=10;break;case 9:throw new Error("error update item!");case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),n(_.fetchError(t.t0)),n(U.openSnackbarError(t.t0));case 16:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e){return t.apply(this,arguments)}}()}},B=function(e){return e.notes.items},K=function(e){return e.notes.error&&e.notes.error.message},F=function(e){return e.notes.loading},H={addNote:P.addNote},q=Object(s.b)(null,H)(v),z=n(36),Q=n.n(z),I=function(e){var t=e.notes,n=void 0===t?[]:t,a=e.deleteNote,c=e.openModal,o=e.source;return r.a.createElement("div",{className:Q.a.container},n.map(function(e){return r.a.createElement("div",{className:Q.a.note,key:e.id},r.a.createElement("p",{className:Q.a.noteTitle},e.title),r.a.createElement("p",null,e.content),r.a.createElement("hr",null),r.a.createElement("div",{className:Q.a.btns},r.a.createElement("button",{className:Q.a.delete,type:"button",onClick:function(){return c(e)}},"Update"),r.a.createElement("button",{className:Q.a.delete,type:"button",onClick:function(){return a(e.id,o)}},"Delete")))}))},W={OPEN_MODAL:"modal/OPEN_MODAL",CLOSE_MODAL:"modal/CLOSE_MODAL"},J={openModal:function(e){return{type:W.OPEN_MODAL,payload:e}},closeModal:function(){return{type:W.CLOSE_MODAL}}};var Y,X=Object(T.combineReducers)({modalNote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case W.OPEN_MODAL:return a;case W.CLOSE_MODAL:return null;default:return e}},isOpenModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case W.OPEN_MODAL:return!0;case W.CLOSE_MODAL:return!1;default:return e}}}),V=function(e){return e.modal.isOpenModal},Z=function(e){return e.modal.modalNote},G=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchNotes)(),Y=m.a.CancelToken.source()}},{key:"componentDidUpdate",value:function(){Y=m.a.CancelToken.source()}},{key:"render",value:function(){return r.a.createElement(I,this.props)}}]),t}(a.Component),$={fetchNotes:P.fetchNotes,deleteNote:P.deleteNote,updateNote:P.updateNote,openModal:J.openModal},ee=Object(s.b)(function(e){return{notes:B(e),source:Y}},$)(G),te=n(25),ne=n.n(te),ae={id:null,title:"",content:""},re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state=Object(u.a)({},ae),n.backdropRef=Object(a.createRef)(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(l.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.updateNote,r=t.closeModal;a(n.state),r(),n.setState(Object(u.a)({},ae))},n.handleKeyPress=function(e){var t=n.props.closeModal;"Escape"===e.code&&t()},n.handleBackdropClick=function(e){var t=n.props.closeModal,a=n.backdropRef.current;a&&e.target!==a||t()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.isOpenModal,n=e.modalNote,a=this.state.id;t&&n.id!==a&&this.setState(Object(u.a)({},n))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.content,a=this.props,c=a.isOpenModal,o=a.closeModal;return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("div",{className:ne.a.backdrop,ref:this.backdropRef,onClick:this.handleBackdropClick},r.a.createElement("div",{className:ne.a.modal},r.a.createElement("form",{className:ne.a.form,onSubmit:this.handleSubmit},r.a.createElement("h2",{className:ne.a.mainTitle},"Update Note"),r.a.createElement("input",{className:ne.a.title,name:"title",placeholder:"Title",required:!0,value:t,onChange:this.handleChange}),r.a.createElement("textarea",{className:ne.a.text,name:"content",placeholder:"Text",rows:"3",value:n,onChange:this.handleChange}),r.a.createElement("div",{className:ne.a.btns},r.a.createElement("button",{className:ne.a.btn,type:"button",onClick:o},"Cansel"),r.a.createElement("button",{className:ne.a.btn,type:"submit"},"Update"))))))}}]),t}(a.Component),ce={closeModal:J.closeModal,updateNote:P.updateNote},oe=Object(s.b)(function(e){return{isOpenModal:V(e),modalNote:Z(e)}},ce)(re),se=n(134),le=n(132),ue=n(43),ie=n.n(ue),de=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.snackbarMessage,n=e.handleClose,a=e.isOpenSnackbar;return r.a.createElement("div",null,r.a.createElement(se.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:a,autoHideDuration:2e3,onClose:n,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"red"}},t),action:[r.a.createElement(le.a,{key:"close","aria-label":"Close",color:"inherit",onClick:n},r.a.createElement(ie.a,null))]}))}}]),t}(a.Component),pe={handleClose:U.closeSnackbarError,handleClick:U.openSnackbarError},Ee=Object(s.b)(function(e){return{snackbarMessage:K(e),isOpenSnackbar:D(e)}},pe)(de),fe=n(133),Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,n=e.isOpenSnackbar,a=e.source;return r.a.createElement("div",null,r.a.createElement(se.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:2e3,onClose:t,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id",style:{color:"green",fontSize:"16px"}},"You can cancel the operation"),action:[r.a.createElement(fe.a,{key:"undo",color:"primary",size:"medium",onClick:function(){return function(e,t){e.cancel("Operation canceled by the user."),t()}(a,t)}},"\u0421ancel operation"),r.a.createElement(le.a,{key:"close","aria-label":"Close",color:"inherit",onClick:t},r.a.createElement(ie.a,null))]}))}}]),t}(a.Component),me={handleClose:U.closeSnackbarSuccess,handleClick:U.openSnackbarSuccess},he=Object(s.b)(function(e){return{isOpenSnackbar:M(e),source:L(e)}},me)(Se),be=Object(s.b)(function(e){return{isLoading:F(e)}})(function(e){var t=e.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))))});var Ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(ee,null),r.a.createElement(oe,null),r.a.createElement(Ee,null),r.a.createElement(he,null),r.a.createElement(be,null))},ve=n(68),Oe=n(69),_e=n(70);var Ne=Object(T.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O.FETCH_SUCCESS:return a.notes;case O.ADD_SUCCESS:return[a].concat(Object(_e.a)(e));case O.DELETE_SUCCESS:return e.filter(function(e){return e.id!==a});case O.UPDATE_SUCCESS:return e.map(function(e){return e.id===a.id?a:e});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case O.FETCH_REQUEST:return!0;case O.FETCH_SUCCESS:case O.FETCH_ERROR:case O.ADD_SUCCESS:case O.UPDATE_SUCCESS:case O.DELETE_SUCCESS:return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O.FETCH_REQUEST:return null;case O.FETCH_ERROR:return a;default:return e}}}),ke=Object(T.combineReducers)({modal:X,notes:Ne,snackbar:x}),ye=Object(T.applyMiddleware)(Oe.a),Re=Object(ve.composeWithDevTools)(ye),Ae=Object(T.createStore)(ke,Re);n(114);o.a.render(r.a.createElement(s.a,{store:Ae},r.a.createElement(Ce,null)),document.querySelector("#root"))},25:function(e,t,n){e.exports={backdrop:"UpdateNoteModal_backdrop__RW6h3",modal:"UpdateNoteModal_modal__1g7PY",form:"UpdateNoteModal_form__3wrNz",mainTitle:"UpdateNoteModal_mainTitle__1EkQI",title:"UpdateNoteModal_title__1zy11",text:"UpdateNoteModal_text__1VH7d",btns:"UpdateNoteModal_btns__24RdK",btn:"UpdateNoteModal_btn__3ifZm"}},36:function(e,t,n){e.exports={container:"NoteList_container__1a07X",note:"NoteList_note__1NzUu",noteTitle:"NoteList_noteTitle__Aa4-v",btns:"NoteList_btns__qOvY4"}},41:function(e,t,n){e.exports={form:"NoteEditor_form__32zFc",title:"NoteEditor_title__JShXz",text:"NoteEditor_text__1TAcr",btn:"NoteEditor_btn__3sWBz"}},77:function(e,t,n){e.exports=n(115)}},[[77,1,2]]]);
//# sourceMappingURL=main.eb802a39.chunk.js.map