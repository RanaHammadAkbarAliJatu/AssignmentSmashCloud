(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),l=t(3),n=t.n(l),i=t(15),r=(t(10),t(13),t(5)),j=t(7),d=t(2),b=t(14),o=t(1),u=[{id:1,label:"Zero point",value:"0"},{id:2,label:"NS Interchange",value:"5"},{id:3,label:"Ph4 Interchange",value:"10"},{id:4,label:"Ferozpur Interchange",value:"17"},{id:5,label:"Lake City Interchange",value:"24"},{id:6,label:"Raiwand Interchange",value:"29"},{id:7,label:"Bahria Interchange",value:"34"}];var h=function(e){var c=e.plate,t=e.vehicles,s=e.getValue;return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b.a,{placeholder:c?"Number-Plate LLL-NNN":"Interchange",options:c?t:u,onChange:function(e){return s(e),e}})})},O=function(e){var c=e.exit,t=e.getVehicle,a=e.vehicles,l=Object(s.useState)({interchangeName:"",numberPlate:"",dateTime:"",label:"",value:""}),n=Object(r.a)(l,2),i=n[0],b=n[1],u=function(e){var c=e.target,t=c.name,s=c.value;b((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},t,"numberPlate"==t?s.replace(/([a-z]){2}(\d)/i,"$1-$2"):s))})),"numberPlate"==t&&b((function(e){return Object(d.a)(Object(d.a)({},e),{},{label:s.replace(/([a-z])(\d)/i,"$1-$2"),value:s.replace(/([a-z])(\d)/i,"$1-$2")})}))};return Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("span",{children:c?"Exit":"Entry"}),Object(o.jsx)("div",{class:"row top20",children:Object(o.jsx)(h,{getValue:function(e){b((function(c){return Object(d.a)(Object(d.a)({},c),{},{interchangeName:e})}))}})}),Object(o.jsx)("div",{class:"row top20",children:c?Object(o.jsx)(h,{plate:!0,vehicles:a,getValue:function(e){b((function(c){return Object(d.a)(Object(d.a)({},c),{},{numberPlate:e})}))}}):Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("input",{name:"numberPlate",className:"width-inherit",placeholder:"Number Plate LLL-NNN",onChange:u,maxLength:7})})}),Object(o.jsx)("div",{class:"row top20",children:Object(o.jsx)("div",{class:"col",children:Object(o.jsx)("input",{className:"width-inherit",onChange:u,name:"dateTime",placeholder:"Date-Time",type:"date"})})}),Object(o.jsxs)("div",{class:"row top20",children:[Object(o.jsx)("div",{class:"col-8"}),Object(o.jsx)("div",{class:"col-3",children:Object(o.jsx)("button",{className:"button",type:"submit",onClick:function(){i.interchangeName?i.numberPlate?i.dateTime?t(i):alert("please enter Date"):alert("please enter number Plate"):alert("please enter interchange Name")},children:"Submit"})})]})]})};function x(e){var c=e.totalCostTrip,t=c.baseRate,s=c.breakDown,a=c.SubTotal,l=c.discount,n=c.total,i=c.vehicleNumber;return Object(o.jsxs)("div",{class:"container",children:[Object(o.jsx)("span",{children:i}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{children:"Break Down Cost"})}),Object(o.jsx)("div",{class:"col-2"}),Object(o.jsx)("div",{class:"col-4"}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{})}),Object(o.jsx)("div",{class:"col-4",children:Object(o.jsxs)("span",{children:["Base Rate: ",t]})}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{children:"Distance Cost"})}),Object(o.jsx)("div",{class:"col-4"}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{})}),Object(o.jsx)("div",{class:"col-4",children:Object(o.jsxs)("span",{children:["BreakDown: ",s]})}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{})}),Object(o.jsx)("div",{class:"col-4",children:Object(o.jsxs)("span",{children:["Sub-Total: ",a]})}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{})}),Object(o.jsx)("div",{class:"col-4",children:Object(o.jsxs)("span",{children:["Discount/Other: ",l]})}),Object(o.jsx)("div",{class:"col-6"})]}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("span",{})}),Object(o.jsx)("div",{class:"col-4",children:Object(o.jsxs)("span",{children:["TOTAL TO BE CHARGED: ",n]})}),Object(o.jsx)("div",{class:"col-6"})]})]})}var v=["12-25","3-23","8-14"],p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function m(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],l=Object(s.useState)({baseRate:20,breakDown:0,SubTotal:0,discount:0,vehicleNumber:"",total:0}),n=Object(r.a)(l,2),j=n[0],d=n[1];return Object(o.jsxs)("div",{class:"container",children:[Object(o.jsxs)("div",{class:"row top30",children:[Object(o.jsx)("div",{class:"col-5 border-add",children:Object(o.jsx)(O,{getVehicle:function(e){a([].concat(Object(i.a)(t),[e]))}})}),Object(o.jsx)("div",{class:"col-1"}),Object(o.jsx)("div",{class:"col-5 border-add",children:Object(o.jsx)(O,{exit:!0,vehicles:t,getVehicle:function(e){!function(e){var c,s=t.findIndex((function(c){return c.numberPlate=e.numberPlate.value})),a=t[s].interchangeName.value,l=0,n=0,i=e.numberPlate.value.split("-")[1]%2==0,r=e.interchangeName.value,j=Math.abs(a-r),b=new Date(e.dateTime).getDate(),o=new Date(e.dateTime).getMonth()+1,u="".concat(o,"-").concat(b),h=p[b];"Sunday"==h||"Saturday"==h?l=1.5*j+20:"Monday"==h||"Wednesday"==h?(l=.2*j+20,i&&(n=.1*l)):"Tuesday"==h||"Thursday"==h?(l=.2*j+20,i||(n=.1*l)):l=.2*j+20,v.includes(u)&&(n=.5*l),alert(u),c=l-n,d({baseRate:20,breakDown:j,SubTotal:l,discount:n,vehicleNumber:e.numberPlate.value,total:c})}(e)}})})]}),Object(o.jsx)("div",{class:"row top30",children:Object(o.jsx)("div",{class:"col",children:Object(o.jsx)(x,{totalCostTrip:j})})}),Object(o.jsxs)("div",{class:"row top30",children:[Object(o.jsxs)("span",{children:["Total Vsehicles: ",t.length]}),t.map((function(e){return Object(o.jsx)("div",{class:"col-2",children:Object(o.jsx)("button",{className:"button",type:"submit",children:Object(o.jsx)("span",{children:e.numberPlate})})})}))]})]})}t(38);n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.88317bfc.chunk.js.map