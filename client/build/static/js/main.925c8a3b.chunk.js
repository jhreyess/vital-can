(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(23),r=c.n(a),i=(c(31),c(3)),j=c(7),l=c(13),o=c(17),d=c(6),b=c.n(d),m=c(9),u=c(24),p=c(25),x=new(function(){function e(){var t=this;Object(u.a)(this,e),this.loginUser=function(){var e=Object(m.a)(b.a.mark((function e(c){var s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)});case 2:return s=e.sent,e.next=5,s.json();case 5:return n=e.sent,200===s.status&&!0===n.success&&(t.authenticated=!0,t.userRole=n.role,t.userName=n.username),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.authenticated=!1,this.userRole="",this.userName=""}return Object(p.a)(e,[{key:"isAuthenticated",value:function(){return this.authenticated}},{key:"role",value:function(){return this.userRole}},{key:"name",value:function(){return this.userName}}]),e}()),O=c(1),h=["component"],f=function(e){var t=e.component,c=Object(o.a)(e,h);return Object(O.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return x.isAuthenticated()?Object(O.jsx)(t,Object(l.a)({},e)):Object(O.jsx)(j.a,{to:"/"})}}))},v=["component"],N=function(e){var t=e.component,c=Object(o.a)(e,v);return Object(O.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return x.isAuthenticated()&&"admin"===x.role()?Object(O.jsx)(t,Object(l.a)({},e)):Object(O.jsx)(j.a,{to:"/"})}}))},g=(c(39),function(e){return Object(O.jsx)("nav",{className:"subheader",children:e.title})}),w=(c(40),function(e){return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(i.b,{to:e.to,children:Object(O.jsx)("div",{className:"moduleCardwrapper",children:Object(O.jsxs)("div",{className:"moduleCard",children:[Object(O.jsxs)("div",{className:"moduleInfo",children:[Object(O.jsx)("h1",{children:e.text}),Object(O.jsx)("p",{children:e.desc})]}),Object(O.jsx)("div",{className:"moduleImage",children:e.img})]})})})})}),y=c(0),F=c(4),P=function(){var e="admin"===x.role()?Object(O.jsx)(w,{to:"/admin",text:"Dashboard",desc:"Business Management",img:Object(O.jsx)(F.d,{})}):null;return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(y.b.Provider,{value:{className:"icon-large"},children:Object(O.jsx)("div",{className:"modulesWrapper",children:Object(O.jsxs)("div",{className:"modules",children:[e,Object(O.jsx)(w,{to:"/app/records",text:"Expedientes",desc:"Informaci\xf3n de los pacientes y los clientes",img:Object(O.jsx)(F.k,{})}),Object(O.jsx)(w,{to:"/app/calendar",text:"Citas",desc:"Calendarizaci\xf3n de citas m\xe9dicas",img:Object(O.jsx)(F.b,{})}),Object(O.jsx)(w,{to:"/app/receipts",text:"Caja",desc:"Generaci\xf3n de Ticket",img:Object(O.jsx)(F.c,{})}),Object(O.jsx)(w,{to:"/app/invoices",text:"Facturas",desc:"Generaci\xf3n de Facturas",img:Object(O.jsx)(F.j,{})}),Object(O.jsx)(w,{to:"/app/barbershop",text:"Est\xe9tica",desc:"Calendarizaci\xf3n de citas est\xe9ticas",img:Object(O.jsx)(F.g,{})})]})})})})},C=function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:"P\xe1gina Principal"}),Object(O.jsx)(P,{})]})},I=c(5),k=c.p+"static/media/dog.3cc00c05.jpg",S=(c(41),function(e){var t=e.isPatient?Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)("div",{className:"recordImage",children:Object(O.jsx)("img",{alt:"",src:k})}),Object(O.jsxs)("div",{className:"recordInfo",children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("p",{children:e.breed}),Object(O.jsx)("p",{children:e.owner})]})]}):Object(O.jsx)(s.Fragment,{children:Object(O.jsxs)("div",{className:"recordInfo",children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("p",{children:e.city}),Object(O.jsx)("p",{children:e.telephone})]})}),c=Object(O.jsx)(i.b,{to:e.to,children:Object(O.jsx)("div",{className:"recordCardWrapper",children:Object(O.jsx)("div",{className:"recordCard",children:t})})});return Object(O.jsx)(s.Fragment,{children:c})}),E=(c(42),function(e){return Object(O.jsx)("hr",{className:"divider","data-content":e.title})}),L=(c(43),function(){return Object(O.jsx)("div",{className:"loader"})}),A=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/records/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if(s=e.sent,200!==c.status){e.next=10;break}return e.abrupt("return",s.data);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/records/clients/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if(s=e.sent,200!==c.status){e.next=10;break}return e.abrupt("return",s.data);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(m.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/records/patients/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if(s=e.sent,200!==c.status){e.next=10;break}return e.abrupt("return",s.data);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.useState)([]),t=Object(I.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(I.a)(a,2),j=r[0],l=r[1],o=Object(s.useState)(!1),d=Object(I.a)(o,2),u=d[0],p=d[1],x=Object(s.useState)(!1),h=Object(I.a)(x,2),f=h[0],v=h[1],N=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"})]}),w=c.map((function(e,t){return Object(O.jsx)(S,{isPatient:!1,to:"records/clients/".concat(e._id,"/"),name:"".concat(e.name.split(" ")[0]," ").concat(e.last_name.split(" ")[0]),city:e.city,telephone:e.telephone1},t)})),y=j.map((function(e,t){return Object(O.jsx)(S,{isPatient:!0,to:"records/patients/".concat(e._id,"/"),img:e.img,name:e.name,breed:e.breed,age:e.age,owner:e.owner.name},t)}));return Object(s.useEffect)((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:c=e.sent,"patients"===t?(l((function(e){return c})),v((function(e){return!0}))):(n((function(e){return c})),p((function(e){return!0})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e("clients"),e("patients")}),[]),Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:N}),Object(O.jsxs)("div",{className:"moduleContent",children:[Object(O.jsx)(E,{title:"Pacientes"}),Object(O.jsx)("div",{className:"records patients",children:f?y:Object(O.jsx)(L,{})}),Object(O.jsx)(E,{title:"Clientes"}),Object(O.jsx)("div",{className:"records clients",children:u?w:Object(O.jsx)(L,{})})]})]})},_=(c(44),function(e){return Object(O.jsx)(i.b,{to:e.to,children:Object(O.jsx)("button",{className:"btn ".concat(e.color),children:e.children})})}),B=function(){var e=Object(s.useState)([]),t=Object(I.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(I.a)(a,2),j=r[0],l=r[1],o=Object(s.useState)(!1),d=Object(I.a)(o,2),u=d[0],p=d[1],x=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records/patients",className:"nav",children:"Pacientes"})]}),h=j.map((function(e,t){return Object(O.jsx)(S,{isPatient:!0,to:"patients/".concat(e._id,"/"),img:e.img,name:e.name,breed:e.breed,owner:e.owner.name},t)}));return Object(s.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("patients");case 2:t=e.sent,n((function(e){return t})),l((function(e){return t})),p((function(e){return!0}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:x}),Object(O.jsxs)("div",{className:"moduleContent",children:[Object(O.jsxs)("div",{className:"data-subheader",children:[Object(O.jsx)(_,{color:"green-outline",to:"/app/records/patients/new",children:"Nuevo"}),Object(O.jsx)("input",{type:"text",placeholder:"Buscar...",className:"search",onChange:function(e){var t=e.target.value;l((function(e){return c.filter((function(e){return e.name.includes(t)}))}))}})]}),Object(O.jsx)(E,{title:"Pacientes"}),Object(O.jsx)("div",{className:"records patients",children:u?h:Object(O.jsx)(L,{})})]})]})},M=function(){var e=Object(s.useState)([]),t=Object(I.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(I.a)(a,2),j=r[0],l=r[1],o=Object(s.useState)(!1),d=Object(I.a)(o,2),u=d[0],p=d[1],x=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/clients",className:"nav",children:"Clientes"})]}),h=j.map((function(e,t){return Object(O.jsx)(S,{isPatient:!1,to:"clients/".concat(e._id,"/"),name:e.name,city:e.city,telephone:e.telephone1},t)}));return Object(s.useEffect)((function(){(function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("clients");case 2:t=e.sent,n((function(e){return t})),l((function(e){return t})),p((function(e){return!0}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:x}),Object(O.jsxs)("div",{className:"moduleContent",children:[Object(O.jsxs)("div",{className:"data-subheader",children:[Object(O.jsx)(_,{color:"green-outline",to:"/app/records/clients/new",children:"Nuevo"}),Object(O.jsx)("input",{type:"text",placeholder:"Buscar...",className:"search",onChange:function(e){var t=e.target.value;l((function(e){return c.filter((function(e){return e.name.includes(t)}))}))}})]}),Object(O.jsx)(E,{title:"Clientes"}),Object(O.jsx)("div",{className:"records clients",children:u?h:Object(O.jsx)(L,{})})]})]})},T=c.p+"static/media/default.507db18b.jpg",H=(c(45),function(e){var t=Object(s.useState)({}),c=Object(I.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(!1),j=Object(I.a)(r,2),l=j[0],o=j[1];Object(s.useEffect)((function(){D(e.match.params.id).then((function(e){a((function(t){return e}))}))}),[e.match.params.id]),Object(s.useEffect)((function(){0!==Object.keys(n).length&&(o((function(e){return!0})),console.log(n))}),[n]);var d=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records/clients",className:"nav",children:"Clientes"}),Object(O.jsx)("div",{className:"arrow"}),l&&Object(O.jsx)(i.b,{to:"/app/records/clients/".concat(n.info._id,"/"),className:"nav",children:n.info.name})]}),b=l&&Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)("div",{className:"profileHeader",children:l&&Object(O.jsxs)("h1",{children:[n.info.name," ",n.info.last_name]})}),Object(O.jsx)(E,{title:"Perfil"}),Object(O.jsxs)("div",{className:"profileInfo",children:[Object(O.jsxs)("div",{className:"profilePets",children:[Object(O.jsx)("h2",{children:"Compa\xf1eros"}),n.pets.map((function(e,t){return Object(O.jsxs)("div",{className:"pet",children:[Object(O.jsx)("div",{className:"petImage",children:Object(O.jsx)("img",{src:T,alt:""})}),Object(O.jsxs)("div",{className:"petInfo",children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("p",{children:e.breed})]})]},e._id)})),Object(O.jsx)("div",{className:"newPet",children:Object(O.jsx)(i.b,{to:"/app/records/patients/new",children:Object(O.jsx)("button",{className:"btn blue-outline extended",children:"Agregar"})})})]}),Object(O.jsxs)("div",{className:"profileContact",children:[Object(O.jsx)("h2",{children:"Informaci\xf3n de Contacto"}),Object(O.jsxs)("div",{className:"recordInformationContainer",children:[Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.p,{})," ",n.info.telephone1]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.p,{})," ",n.info.telephone2]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.l,{})," ",n.info.address]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.m,{})," ",n.info.email]})]})]})]})]});return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:d}),Object(O.jsx)("div",{className:"profileContent",children:l?b:Object(O.jsx)(L,{})})]})}),U=(c(46),c(47),function(e){var t=e.inner?"inner":"",c=e.isMain?"is-main":"";return Object(O.jsx)("div",{className:"form ".concat(t).concat(c),children:Object(O.jsx)("form",{children:e.children})})}),V=(c(48),function(e){var t=Object(s.useState)([]),c=Object(I.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),i=Object(I.a)(r,2),j=i[0],l=i[1];Object(s.useEffect)((function(){a((function(e){return[{date:"Julio 17 - 2021",reason:"Deramtitis at\xf3pica"},{date:"Febrero 3 - 2021",reason:"Enfermedad Periodontal"},{date:"Septiembre 20 - 2020",reason:"Cita est\xe9tica"}]})),l((function(e){return[{date:"Agosto 15 - 2021",reason:"Corte de u\xf1as"},{date:"Septiembre 20 - 2021",reason:"Ba\xf1o Medicado"}]}))}),[]);var o=function(e){e.preventDefault()};return Object(O.jsx)("div",{className:"medicalRecordInfo",children:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"backstory";switch(console.log(t),t){case"backstory":return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(U,{inner:!0,children:Object(O.jsxs)("div",{className:"form-column form-column-inner",children:[Object(O.jsx)("div",{className:"form-row form-row-inner",children:Object(O.jsxs)("div",{className:"form-input form-input-inner",children:[Object(O.jsx)("label",{children:Object(O.jsx)(E,{title:"Historial"})}),Object(O.jsx)("textarea",{name:"backstory",rows:"10",defaultValue:e.data.health.medHistory})]})}),Object(O.jsx)("div",{className:"form-row form-row-inner",children:Object(O.jsxs)("div",{className:"form-input form-input-inner",children:[Object(O.jsx)("label",{children:Object(O.jsx)(E,{title:"Vacunas / ATP"})}),Object(O.jsxs)("div",{className:"medicalRecordVaccines",children:[Object(O.jsx)("div",{className:"submit-row-inversed",children:Object(O.jsxs)("button",{className:"btn green-outline small",onClick:o,children:["+ ",Object(O.jsx)(F.q,{className:"icon-small"})]})}),Object(O.jsxs)("table",{className:"vaccines",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Aplicada"}),Object(O.jsx)("th",{children:"Fecha"}),Object(O.jsx)("th",{children:"Prox. Fecha"}),Object(O.jsx)("th",{children:"Proxima"}),Object(O.jsx)("th",{className:"vaccineActions",children:"Acciones"})]})}),Object(O.jsx)("tbody",{children:e.data.health.vaccines.map((function(e,t){return Object(O.jsxs)("tr",{className:"vaccine",children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:new Date(e.date).toLocaleDateString("es-MX")}),Object(O.jsx)("td",{children:new Date(e.nextDate).toLocaleDateString("es-MX")}),Object(O.jsx)("td",{children:e.next}),Object(O.jsxs)("td",{className:"vaccineActions",children:[Object(O.jsx)(F.i,{className:"icon-blue icon-margin"})," ",Object(O.jsx)(F.r,{className:"icon-red icon-margin"})]})]},t)}))})]})]})]})})]})}),Object(O.jsx)("div",{className:"submit-input",children:Object(O.jsx)("button",{className:"btn blue-outline",onClick:o,children:"Guardar"})})]});case"previous":return Object(O.jsx)(s.Fragment,{children:n.map((function(e,t){return Object(O.jsxs)("div",{className:"appointment",children:[Object(O.jsxs)("div",{className:"appointmentInfo",children:[Object(O.jsx)("h2",{children:e.date}),Object(O.jsx)("p",{children:e.reason})]}),Object(O.jsx)("div",{className:"appointmentLink",children:Object(O.jsx)(F.j,{className:"icon-medium"})})]},t)}))});case"appointments":return Object(O.jsx)(s.Fragment,{children:j.map((function(e,t){return Object(O.jsxs)("div",{className:"appointment",children:[Object(O.jsxs)("div",{className:"appointmentInfo",children:[Object(O.jsx)("h2",{children:e.date}),Object(O.jsx)("p",{children:e.reason})]}),Object(O.jsx)("div",{className:"appointmentLink",children:Object(O.jsx)(F.b,{className:"icon-medium"})})]},t)}))});default:return null}}(e.url)})}),J=(c(49),function(e){var t=Object(j.g)(),c=Object(s.useState)({}),n=Object(I.a)(c,2),a=n[0],r=n[1],l=Object(s.useState)(!1),o=Object(I.a)(l,2),d=o[0],b=o[1];Object(s.useEffect)((function(){q(e.match.params.id).then((function(e){r((function(t){return e}))}))}),[e.match.params.id]),Object(s.useEffect)((function(){0!==Object.keys(a).length&&b((function(e){return!0}))}),[a]);var m=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records/patients",className:"nav",children:"Pacientes"}),Object(O.jsx)("div",{className:"arrow"}),d&&Object(O.jsx)(i.b,{to:"/app/records/patients/".concat(a._id,"/"),className:"nav",children:a.name})]}),u=d&&Object(O.jsxs)(s.Fragment,{children:[Object(O.jsxs)("div",{className:"petProfileColumn",children:[Object(O.jsx)("div",{className:"petProfileHeader",children:Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)("div",{className:"petProfileImage",children:Object(O.jsx)("img",{src:k,alt:""})}),Object(O.jsxs)("div",{className:"petProfileName",children:[Object(O.jsx)("h1",{children:a.name}),Object(O.jsx)("h3",{children:a.breed}),Object(O.jsxs)("h3",{children:[a.age," a\xf1os"]})]})]})}),Object(O.jsx)(E,{title:"Perfil"}),Object(O.jsx)("div",{className:"petProfileInfo",children:Object(O.jsxs)("div",{className:"petProfileBasicInfo",children:[Object(O.jsx)("h2",{children:"Informaci\xf3n"}),Object(O.jsxs)("div",{className:"recordInformationContainer",children:[Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.p,{})," ",a.owner.telephone]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.o,{})," ",a.health.castrated?"S\xed":"No"," castrado"]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.n,{})," ",a.gender]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.h,{})," ",a.weight," kg"]}),Object(O.jsxs)("div",{className:"recordInformation",children:[Object(O.jsx)(F.a,{})," ",new Date(a.birthday).toLocaleDateString("es-MX")]})]})]})})]}),Object(O.jsx)("div",{className:"petProfileColumn",children:Object(O.jsxs)("div",{className:"medicalRecord",children:[Object(O.jsxs)("div",{className:"medicalRecordNav",children:[Object(O.jsx)(i.c,{isActive:function(){return""===t.pathname.split("/").pop()||"backstory"===t.pathname.split("/").pop()},to:"/app/records/patients/".concat(e.match.params.id,"/backstory"),activeClassName:"medicalRecordOpen",children:"Antecedentes"}),Object(O.jsx)(i.c,{to:"/app/records/patients/".concat(e.match.params.id,"/previous"),activeClassName:"medicalRecordOpen",children:"Citas previas"}),Object(O.jsx)(i.c,{to:"/app/records/patients/".concat(e.match.params.id,"/appointments"),activeClassName:"medicalRecordOpen",children:"Pr\xf3ximas Citas"})]}),Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/app/records/patients/".concat(e.match.params.id,"/backstory"),component:function(){return Object(O.jsx)(V,{url:"backstory",data:a})}}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/patients/".concat(e.match.params.id,"/previous"),component:function(){return Object(O.jsx)(V,{url:"previous",data:a})}}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/patients/".concat(e.match.params.id,"/appointments"),component:function(){return Object(O.jsx)(V,{url:"appointments",data:a})}}),Object(O.jsx)(j.b,{path:"/app/records/patients/".concat(e.match.params.id,"/"),component:function(){return Object(O.jsx)(V,{data:a})}})]})]})})]});return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:m}),Object(O.jsx)("div",{className:"petProfileContent",children:d?u:Object(O.jsx)(L,{})})]})}),W=function(e){var t="clients"===e.url?"Clientes":"Pacientes",c=Object(s.useState)([]),n=Object(I.a)(c,2),a=n[0],r=n[1],j=Object(s.useState)(!1),l=Object(I.a)(j,2),o=l[0],d=l[1];Object(s.useEffect)((function(){"clients"!==e.url&&function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("clients");case 2:t=e.sent,r((function(e){return t})),d((function(e){return!0}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e.url]);var u=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records",className:"nav",children:"Expedientes"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records/".concat(e.url),className:"nav",children:t}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/records/".concat(e.url,"/new"),className:"nav",children:"Nuevo"})]}),p=function(e){e.preventDefault();for(var t=document.getElementsByTagName("input"),c=0;c<t.length;c++)t[c].value="";for(var s=document.getElementsByTagName("textarea"),n=0;n<s.length;n++)s[n].value=""},x=function(e){e.preventDefault()},h=a.map((function(e,t){return Object(O.jsx)("option",{value:"".concat(e.name," ").concat(e.last_name)},t)})),f=function(e){var t=e.target.files[0],c=document.getElementById("patientpic"),s=new FileReader;["image/jpg","image/jpeg"].includes(t.type)&&(c.title=t.name,s.onload=function(e){c.src=e.target.result},s.readAsDataURL(t))};return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:u}),function(e){switch(e){case"clients":return Object(O.jsx)(U,{isMain:!0,children:Object(O.jsxs)("div",{className:"form-column",children:[Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"name",className:"required",children:"Nombre(s):"}),Object(O.jsx)("input",{type:"text",id:"name",name:"name",required:!0})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"last_name",className:"required",children:"Apellidos:"}),Object(O.jsx)("input",{type:"text",id:"last_name",name:"last_name",required:!0})]})]}),Object(O.jsx)("div",{className:"form-row",children:Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"address",children:"Direcci\xf3n:"}),Object(O.jsx)("input",{type:"text",id:"address",name:"address"})]})}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"city",children:"Municipio:"}),Object(O.jsx)("input",{type:"text",id:"city",name:"city"})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Correo Electr\xf3nico:"}),Object(O.jsx)("input",{type:"email",id:"email",name:"email"})]})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"tel1",className:"required",children:"Tel\xe9fono 1:"}),Object(O.jsx)("input",{type:"text",id:"tel1",name:"tel1",required:!0})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"tel2",children:"Tel\xe9fono 2:"}),Object(O.jsx)("input",{type:"text",id:"tel2",name:"tel2"})]})]}),Object(O.jsxs)("div",{className:"submit-row",children:[Object(O.jsx)("div",{className:"submit-input",children:Object(O.jsx)("button",{className:"btn green",onClick:x,children:"Agregar"})}),Object(O.jsx)("div",{className:"submit-input",children:Object(O.jsx)("button",{className:"btn blue-outline",onClick:p,children:"Limpiar Datos"})})]})]})});case"patients":return Object(O.jsxs)(U,{isMain:!0,children:[Object(O.jsxs)("div",{className:"form-column",children:[Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"name",className:"required",children:"Nombre(s):"}),Object(O.jsx)("input",{type:"text",id:"name",name:"name",required:!0})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"age",className:"required",children:"Edad:"}),Object(O.jsx)("input",{type:"number",min:"0",max:"999",id:"age",name:"age",required:!0})]})]}),Object(O.jsx)("div",{className:"form-row",children:Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"owner",className:"required",children:"Propietario:"}),Object(O.jsx)("input",{list:"owners",id:"owner",name:"owner",required:!0}),Object(O.jsx)("datalist",{id:"owners",children:o?h:"LOL"})]})}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"breed",className:"required",children:"Raza:"}),Object(O.jsx)("input",{type:"text",id:"breed",name:"breed",required:!0})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"gender",className:"required",children:"Sexo:"}),Object(O.jsxs)("div",{className:"form-subgroup",id:"gender",children:[Object(O.jsxs)("div",{className:"form-subinput",children:[Object(O.jsx)("input",{type:"radio",id:"male",name:"gender"}),Object(O.jsx)("span",{htmlFor:"male",children:"Macho"})]}),Object(O.jsxs)("div",{className:"form-subinput",children:[Object(O.jsx)("input",{type:"radio",id:"female",name:"gender"}),Object(O.jsx)("span",{htmlFor:"female",children:"Hembra"})]})]})]})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"birthday",children:"Fecha de nacimiento:"}),Object(O.jsx)("input",{type:"date",id:"birthday",name:"birthday"})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"weight",children:"Peso (kg):"}),Object(O.jsx)("input",{type:"number",min:"0",max:"99",id:"weight",name:"weight"})]})]}),Object(O.jsxs)("div",{className:"form-row",children:[Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"color",children:"Color/Pelaje:"}),Object(O.jsx)("input",{type:"text",name:"color",id:"color"})]}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"castrated",children:"Castrado:"}),Object(O.jsx)("div",{className:"form-subgroup",id:"castrated",children:Object(O.jsx)("div",{className:"form-subinput",children:Object(O.jsx)("input",{type:"checkbox",id:"castrated-value",name:"castrated"})})})]})]}),Object(O.jsx)("div",{className:"form-row",children:Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"alergies",children:"Alergias:"}),Object(O.jsx)("textarea",{id:"alergies",name:"alergies",rows:"5"})]})}),Object(O.jsx)("div",{className:"form-row",children:Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsx)("label",{htmlFor:"history",children:"Antecedentes:"}),Object(O.jsx)("textarea",{id:"history",name:"history",rows:"5"})]})}),Object(O.jsxs)("div",{className:"submit-row",children:[Object(O.jsx)("div",{className:"submit-input",children:Object(O.jsx)("button",{className:"btn green",onClick:x,children:"Agregar"})}),Object(O.jsx)("div",{className:"submit-input",children:Object(O.jsx)("button",{className:"btn blue-outline",onClick:p,children:"Limpiar Datos"})})]})]}),Object(O.jsxs)("div",{className:"form-column last-column",children:[Object(O.jsx)("div",{className:"form-row",children:Object(O.jsx)("img",{id:"patientpic",height:"200px",width:"100%",src:T,alt:""})}),Object(O.jsxs)("div",{className:"submit-row",children:[Object(O.jsx)("label",{htmlFor:"imgfile",className:"btn blue-outline extended",children:"Subir foto"}),Object(O.jsx)("input",{type:"file",id:"imgfile",name:"imgfile",accept:".jpg, .jpeg",onChange:f})]})]})]});default:return null}}(e.url)]})},z=function(){return Object(O.jsx)(s.Fragment,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/app/records",component:R}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/patients",component:B}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/clients",component:M}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/patients/new",component:function(){return Object(O.jsx)(W,{url:"patients"})}}),Object(O.jsx)(j.b,{exact:!0,path:"/app/records/clients/new",component:function(){return Object(O.jsx)(W,{url:"clients"})}}),Object(O.jsx)(j.b,{path:"/app/records/patients/:id",component:J}),Object(O.jsx)(j.b,{path:"/app/records/clients/:id",component:H})]})})},G=function(){return Object(O.jsx)("div",{})},X=function(){return Object(O.jsx)("div",{})},K=function(){var e=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/calendar",className:"nav",children:"Citas"})]});return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(g,{title:e}),Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/app/calendar",component:G}),Object(O.jsx)(j.b,{exact:!0,path:"/app/calendar/new",component:X})]})]})},Q=function(){var e=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/receipts",className:"nav",children:"Caja"})]});return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(g,{title:e})})},Y=function(){var e=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/invoices",className:"nav",children:"Facturaci\xf3n"})]});return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(g,{title:e})})},Z=function(){var e=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/barbershop",className:"nav",children:"Peluquer\xeda"})]});return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(g,{title:e})})},$=function(){var e=Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(i.b,{to:"/app",className:"nav",children:"P\xe1gina Principal"}),Object(O.jsx)("div",{className:"arrow"}),Object(O.jsx)(i.b,{to:"/app/profile",className:"nav",children:"Perfil"})]});return Object(O.jsx)(s.Fragment,{children:Object(O.jsx)(g,{title:e})})},ee=(c(50),function(e){return Object(O.jsxs)("div",{className:"sidebar",id:"sidebar",children:[Object(O.jsx)("div",{className:"burgerContainer",children:Object(O.jsxs)("div",{className:"burgerIcon",onClick:function(e){e.target.classList.toggle("active");var t=document.getElementById("sidebar"),c=document.getElementById("menuItems");document.getElementById("logout").classList.toggle("hidden"),c.classList.toggle("hidden"),t.classList.toggle("collapse")},children:[Object(O.jsx)("span",{className:"burgerLine"}),Object(O.jsx)("span",{className:"burgerLine"}),Object(O.jsx)("span",{className:"burgerLine"})]})}),Object(O.jsx)("div",{className:"menuItems",id:"menuItems",children:n.a.Children.map(e.children,(function(e){return Object(O.jsx)("div",{className:"menuItem",children:e})}))}),Object(O.jsxs)(i.b,{to:"/app/profile",id:"logout",className:"logout",children:[Object(O.jsx)(F.f,{})," ",Object(O.jsx)("div",{children:"Opciones"})]})]})}),te=c.p+"static/media/profile.5faf09a7.png",ce=function(e){var t=Object(O.jsxs)(ee,{children:[Object(O.jsx)("p",{children:"Empleado(a)"}),Object(O.jsx)("img",{alt:"",src:te}),Object(O.jsx)("h1",{children:x.name()})]}),c=Object(O.jsxs)(ee,{children:[Object(O.jsxs)(i.b,{to:"/app/records",children:[Object(O.jsx)(F.e,{})," ",Object(O.jsx)("div",{children:"Expedientes"})]}),Object(O.jsxs)("div",{className:"submenuItems",children:[Object(O.jsxs)(i.b,{to:"/app/records/patients",children:[Object(O.jsx)(F.o,{})," ",Object(O.jsx)("div",{children:"Pacientes"})]}),Object(O.jsxs)(i.b,{to:"/app/records/clients",children:[Object(O.jsx)(F.s,{})," ",Object(O.jsx)("div",{children:"Clientes"})]})]}),Object(O.jsxs)(i.b,{to:"/app/calendar",children:[Object(O.jsx)(F.b,{})," ",Object(O.jsx)("div",{children:"Citas M\xe9dicas"})]}),Object(O.jsx)("div",{className:"submenuItems"}),Object(O.jsxs)(i.b,{to:"/app/barbershop",children:[Object(O.jsx)(F.g,{})," ",Object(O.jsx)("div",{children:"Peluquer\xeda"})]}),Object(O.jsx)("div",{className:"submenuItems"}),Object(O.jsxs)(i.b,{to:"/app/invoices",children:[Object(O.jsx)(F.j,{})," ",Object(O.jsx)("div",{children:"Facturaci\xf3n"})]}),Object(O.jsx)("div",{className:"submenuItems"}),Object(O.jsxs)(i.b,{to:"/app/receipts",children:[Object(O.jsx)(F.c,{})," ",Object(O.jsx)("div",{children:"Caja"})]}),Object(O.jsx)("div",{className:"submenuItems"})]});return Object(O.jsx)(s.Fragment,{children:"profile"===e.type?t:c})},se=(c(51),c.p+"static/media/Logo.e89d5039.png"),ne=function(){return Object(O.jsxs)("nav",{className:"header",children:[Object(O.jsx)("div",{className:"imgcontainer",children:Object(O.jsx)(i.b,{to:"/app",children:Object(O.jsx)("img",{className:"img",alt:"logo",src:se})})}),Object(O.jsx)("div",{className:"nameContainer",children:Object(O.jsx)("p",{children:"VetSeid Software System"})}),Object(O.jsx)("div",{className:"imgcontainer options",children:Object(O.jsx)("img",{className:"img",alt:"logo",src:te})})]})},ae=(c(52),function(){var e=Object(j.g)();return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(ce,{type:"app"===e.pathname.split("/").pop()?"profile":"def"}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(ne,{}),Object(O.jsx)("div",{className:"data",children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/app",component:C}),Object(O.jsx)(j.b,{path:"/app/records",component:z}),Object(O.jsx)(j.b,{path:"/app/calendar",component:K}),Object(O.jsx)(j.b,{path:"/app/receipts",component:Q}),Object(O.jsx)(j.b,{path:"/app/invoices",component:Y}),Object(O.jsx)(j.b,{path:"/app/barbershop",component:Z}),Object(O.jsx)(j.b,{path:"/app/profile",component:$})]})})]})]})}),re=function(e){return Object(O.jsxs)("div",{children:["Hello Admin1",function(e){switch(e){case"Dashboard":return Object(O.jsx)("div",{children:"Hello admin!"});case"Users":return Object(O.jsx)("div",{children:"Users Listed here!"});default:return null}}(e.url)]})},ie=c(16),je=(c(53),function(e){return Object(O.jsx)("div",{className:"cardwrapper",children:Object(O.jsxs)("div",{className:"cardContainer",children:[Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{className:"cardlogo",alt:"Logo",src:e.logo}),Object(O.jsx)("div",{className:"cardinfo",children:e.children})]}),Object(O.jsx)("span",{className:"margin24",children:"Powered by VetSeid System"})]})})}),le=(c(54),function(e){var t=Object(s.useState)({}),c=Object(I.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)({email:"",password:""}),i=Object(I.a)(r,2),j=i[0],o=i[1],d=function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(ie.a)({},e.target.id,e.target.value))}))},u=function(){var t=Object(m.a)(b.a.mark((function t(c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({}),c.preventDefault(),x.loginUser(j).then((function(t){a(t),t.success&&e.history.push("/app")}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"login",children:Object(O.jsx)(je,{logo:se,children:Object(O.jsxs)("form",{className:"loginform",onSubmit:u,children:[Object(O.jsx)("div",{className:"inputWrapper",children:Object(O.jsxs)("div",{className:"formgroup",children:[Object(O.jsx)("input",{onChange:d,type:"text",className:"logininput",id:"email",value:j.email}),Object(O.jsx)("label",{className:"loginLabel",htmlFor:"email",children:"Email"})]})}),(n.email||n.emailnotfound)&&Object(O.jsx)("div",{className:"error margin24",children:n.email||n.emailnotfound}),Object(O.jsx)("div",{className:"inputWrapper",children:Object(O.jsxs)("div",{className:"formgroup",children:[Object(O.jsx)("input",{onChange:d,type:"password",className:"logininput",id:"password",value:j.password}),Object(O.jsx)("label",{className:"loginLabel",htmlFor:"password",children:"Password"})]})}),(n.password||n.passwordincorrect)&&Object(O.jsx)("div",{className:"error margin24",children:n.password||n.passwordincorrect}),Object(O.jsx)("button",{className:"btn darkblue margin24 extended shadow",type:"submit",children:"INICIAR SESI\xd3N"})]})})})});var oe=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/",component:le}),Object(O.jsx)(j.b,{exact:!0,path:"/login",component:le}),Object(O.jsx)(f,{path:"/app",component:ae}),Object(O.jsx)(N,{exact:!0,path:"/admin",component:function(){return Object(O.jsx)(re,{url:"Dashboard"})}}),Object(O.jsx)(N,{exact:!0,path:"/admin/users",component:function(){return Object(O.jsx)(re,{url:"Users"})}})]})})};r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(oe,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.925c8a3b.chunk.js.map