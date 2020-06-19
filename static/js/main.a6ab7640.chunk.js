(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={item:"ContactItem_item__26Vh6"}},15:function(t,e,n){t.exports={list:"ContactList_list__e1a8W"}},16:function(t,e,n){t.exports={box:"Filter_box__2cWr_"}},18:function(t,e,n){t.exports=n(26)},26:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),i=n(17),l=n(1),s=n(2),u=n(4),m=n(3),h=n(11),f=n(12),b=n(13),d=n.n(b),p=n(6),v=n.n(p),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddName(t.state),t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{className:v.a.input,type:"text",value:e,name:"name",onChange:this.handleChange})),c.a.createElement("label",null,"Number",c.a.createElement(d.a,{className:v.a.input,mask:"999-99-99",maskChar:" ",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component),g=n(14),E=n.n(g),_=function(t){var e=t.contact,n=t.number,a=t.onDeleteContact,r=t.id;return c.a.createElement("li",{className:E.a.item},c.a.createElement("p",null,e,": ",n),c.a.createElement("button",{onClick:function(){return a(r)}},"Delete"))},y=n(15),N=n.n(y),S=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:N.a.list},e.map((function(t){var e=t.name,a=t.id,r=t.number;return c.a.createElement(_,{contact:e,number:r,key:a,onDeleteContact:n,id:a})})))},k=n(7),O=n.n(k),j=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:O.a.section},c.a.createElement("h2",{className:O.a.name},e),n)},w=n(16),x=n.n(w),D=function(t){var e=t.value,n=t.onChange;return c.a.createElement("div",{className:x.a.box},c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{value:e,onChange:n})))},A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changeFilter=function(e){var n=e.target.value;t.setState({filter:n})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.addName=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts!"));else{var c={id:Object(h.v4)(),name:n,number:a};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts(),n=e.length>1,a=e.length>0;return c.a.createElement("div",null,c.a.createElement(j,{title:"Phonebook"},c.a.createElement(C,{onAddName:this.addName}),n&&c.a.createElement(D,{value:t,onChange:this.changeFilter})),a&&c.a.createElement(j,{title:"Contacts"},c.a.createElement(S,{contacts:e,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);o.a.render(c.a.createElement(A,null),document.getElementById("root"))},6:function(t,e,n){t.exports={input:"ContactForm_input__2vnr_"}},7:function(t,e,n){t.exports={section:"Section_section__27CmY",name:"Section_name__2rb89"}}},[[18,1,2]]]);
//# sourceMappingURL=main.a6ab7640.chunk.js.map