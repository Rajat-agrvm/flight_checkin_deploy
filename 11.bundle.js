(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{109:function(e,a,s){"use strict";s.r(a);var t=s(19),l=s(94),n=s(27),r=s(0),i=s.n(r),d=s(96),u=s(34),c=s(77),m=s(80),p=s(76),o=s(91),g=s(78);var v={loadFlights:c.a,loadPassengers:m.a};a.default=Object(u.b)((function(e,a){var s=a.match.params.name,t=s&&e.flights.length>0?function(e,a){return e.find((function(e){return e.name===a}))||p.newFlight}(e.flights,s):p.newFlight,l=t.id&&e.passengers.length>0?e.passengers.filter((function(e){return e.flightId===t.id})):[];return{flight:t,flightPassengers:l,flights:e.flights,passengers:e.passengers,seatmaps:e.seatmaps}}),v)((function(e){var a=e.loadFlights,s=e.flights,u=e.passengers,c=e.loadPassengers,m=e.flight,p=Object(n.a)(e,["loadFlights","flights","passengers","loadPassengers","flight"]),v=Object(r.useState)(Object(t.a)(p.flightPassengers)),b=Object(l.a)(v,2),h=b[0],f=b[1];return Object(r.useEffect)((function(){0===s.length&&a().catch((function(e){return alert("Loading flights failed "+e)})),0===u.length?c().catch((function(e){return alert("Loading passengers failed "+e)})):s.length>0&&f(Object(t.a)(p.flightPassengers))}),[p.flightPassengers]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Flight Detail"),0===u.length?i.a.createElement(g.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement(d.a,{inFlight:!0,flight:m,passengers:u})),i.a.createElement("div",{className:"col-md-4"},i.a.createElement(o.a,{inFlight:!0,backUrl:"/staff/dashboard",passengers:h}))))," ")}))},76:function(e,a){e.exports={mealPreferences:{1:{id:1,value:"VEG"},2:{id:2,value:"NON-VEG"},3:{id:3,value:"NO MEAL"}},newPassenger:{id:null,name:"",pnr:"",flightId:null,ancillary:[],wheelChair:null,infants:0,seat:"",status:"available",mealPreference:null,specialMeals:[],purchase:[],passport:null,address:"",dob:""},newAncillaries:{id:null,value:[]},flights:[{id:1,name:"E301",departure:"13:00",destination:"Hyderabad",passengers:3,ancillariesId:1,purchases:{1:{id:1,value:"fitbit"},2:{id:2,value:"Smartwatch"},3:{id:3,value:"Bluetooth speaker"},4:{id:4,value:"EarPods"}},specialMeals:{1:{id:1,value:"Veg Sandwich"},2:{id:2,value:"Beverages"},3:{id:3,value:"Biriyani"},4:{id:4,value:"Fried Rice"}}},{id:2,name:"E302",departure:"14:00",destination:"Delhi",passengers:2,ancillariesId:2,purchases:{1:{id:1,value:"fitbit"},2:{id:2,value:"Smartwatch"},3:{id:3,value:"Bluetooth speaker"},4:{id:4,value:"EarPods"}},specialMeals:{1:{id:1,value:"Veg Sandwich"},2:{id:2,value:"Beverages"},3:{id:3,value:"Biriyani"},4:{id:4,value:"Fried Rice"}}},{id:3,name:"E303",departure:"15:00",destination:"Mumbai",passengers:3,ancillariesId:3,purchases:{1:{id:1,value:"fitbit"},2:{id:2,value:"Smartwatch"},3:{id:3,value:"Bluetooth speaker"},4:{id:4,value:"EarPods"}},specialMeals:{1:{id:1,value:"Veg Sandwich"},2:{id:2,value:"Beverages"},3:{id:3,value:"Biriyani"},4:{id:4,value:"Fried Rice"}}},{id:4,name:"E304",departure:"12:00",destination:"Jaipur",passengers:0,ancillariesId:4,purchases:{1:{id:1,value:"fitbit"},2:{id:2,value:"Smartwatch"},3:{id:3,value:"Bluetooth speaker"},4:{id:4,value:"EarPods"}},specialMeals:{1:{id:1,value:"Veg Sandwich"},2:{id:2,value:"Beverages"},3:{id:3,value:"Biriyani"},4:{id:4,value:"Fried Rice"}}}],passengers:[{id:1,name:"Scott Allen",pnr:"IND101",flightId:1,ancillary:[],wheelChair:!1,infants:0,seat:"",status:"available",mealPreference:1,purchase:[1],specialMeals:[],passport:!0,address:"xyz",dob:"1995-12-10"},{id:2,name:"Corey Hose",pnr:"IND102",flightId:1,ancillary:[4],wheelChair:!1,infants:0,seat:"1B",status:"reserved",mealPreference:2,purchase:[2],specialMeals:[1],passport:!0,address:"xyd",dob:"1994-12-10"},{id:3,name:"James",pnr:"IND103",flightId:1,ancillary:[],wheelChair:!0,infants:0,seat:"2A",status:"wheelChair",mealPreference:1,purchase:[],specialMeals:[1,2],passport:!1,address:"xyq",dob:"1995-12-11"},{id:4,name:"Bond",pnr:"IND104",flightId:2,ancillary:[1],wheelChair:!1,infants:1,seat:"2A",status:"infants",mealPreference:3,purchase:[],specialMeals:[3],passport:!0,address:"",dob:"1994-12-10"},{id:5,name:"Kevin",pnr:"IND105",flightId:2,ancillary:[],wheelChair:!1,infants:1,seat:"4A",status:"infants",mealPreference:1,purchase:[3],specialMeals:[4],passport:!1,address:"xlz",dob:""},{id:6,name:"Roger",pnr:"IND106",flightId:3,ancillary:[],wheelChair:!0,infants:0,seat:"1A",status:"wheelChair",mealPreference:3,purchase:[1],specialMeals:[2,3],passport:!0,address:"",dob:""},{id:7,name:"Sai",pnr:"IND107",flightId:3,ancillary:[],wheelChair:!1,infants:0,seat:"2B",status:"reserved",mealPreference:2,purchase:[1,3],specialMeals:[],passport:!0,address:"tyz",dob:"1995-12-01"},{id:8,name:"Rahul",pnr:"IND108",flightId:3,ancillary:[1],wheelChair:!1,infants:0,seat:"3A",status:"reserved",mealPreference:3,purchase:[],specialMeals:[],passport:!1,address:"pyz",dob:""}],purchases:{1:{id:1,value:"fitbit"},2:{id:2,value:"Smartwatch"},3:{id:3,value:"Bluetooth speaker"},4:{id:4,value:"EarPods"}},ancillaries:[{id:1,value:{1:{id:1,value:"seat-plus"},2:{id:2,value:"Excess Baggage"},3:{id:3,value:"Fast Forward"},4:{id:4,value:"Travel Assistance"}}},{id:2,value:{1:{id:1,value:"seat-plus"},2:{id:2,value:"Excess Baggage"},3:{id:3,value:"Fast Forward"},4:{id:4,value:"Travel Assistance"}}},{id:3,value:{1:{id:1,value:"seat-plus"},2:{id:2,value:"Excess Baggage"},3:{id:3,value:"Fast Forward"},4:{id:4,value:"Travel Assistance"}}},{id:4,value:{1:{id:1,value:"seat-plus"},2:{id:2,value:"Excess Baggage"},3:{id:3,value:"Fast Forward"},4:{id:4,value:"Travel Assistance"}}}],newFlight:{id:null,name:"",departure:"",destination:"",passengers:null,ancillariesId:null,purchases:{},specialMeals:{}},seatMaps:[{id:1,seatmap:[{id:1,number:"1A",status:"reserved",passengerId:1},{id:2,number:"1B",status:"reserved",passengerId:2},{id:3,number:"2A",status:"reserved",passengerId:3},{id:4,number:"2B",status:"available",passengerId:null},{id:5,number:"3A",status:"available",passengerId:null},{id:6,number:"3B",status:"available",passengerId:null},{id:7,number:"4A",status:"available",passengerId:null},{id:8,number:"4B",status:"available",passengerId:null}]},{id:2,seatmap:[{id:1,number:"1A",status:"available",passengerId:null},{id:2,number:"1B",status:"available",passengerId:null},{id:3,number:"2A",status:"reserved",passengerId:4},{id:4,number:"2B",status:"available",passengerId:null},{id:5,number:"3A",status:"available",passengerId:null},{id:6,number:"3B",status:"available",passengerId:null},{id:7,number:"4A",status:"reserved",passengerId:5},{id:8,number:"4B",status:"available",passengerId:null}]},{id:3,seatmap:[{id:1,number:"1A",status:"reserved",passengerId:6},{id:2,number:"1B",status:"available",passengerId:null},{id:3,number:"2A",status:"available",passengerId:null},{id:4,number:"2B",status:"reserved",passengerId:7},{id:5,number:"3A",status:"reserved",passengerId:8},{id:6,number:"3B",status:"available",passengerId:null},{id:7,number:"4A",status:"available",passengerId:null},{id:8,number:"4B",status:"available",passengerId:null}]},{id:4,seatmap:[{id:1,number:"1A",status:"available",passengerId:null},{id:2,number:"1B",status:"available",passengerId:null},{id:3,number:"2A",status:"available",passengerId:null},{id:4,number:"2B",status:"available",passengerId:null},{id:5,number:"3A",status:"available",passengerId:null},{id:6,number:"3B",status:"available",passengerId:null},{id:7,number:"4A",status:"available",passengerId:null},{id:8,number:"4B",status:"available",passengerId:null}]}],newSeatMap:{id:1,seatmap:[{id:1,number:"1A",status:"available",passengerId:null},{id:2,number:"1B",status:"available",passengerId:null},{id:3,number:"2A",status:"available",passengerId:null},{id:4,number:"2B",status:"available",passengerId:null},{id:5,number:"3A",status:"available",passengerId:null},{id:6,number:"3B",status:"available",passengerId:null},{id:7,number:"4A",status:"available",passengerId:null},{id:8,number:"4B",status:"available",passengerId:null}]},newSeat:{id:null,number:"",status:"",passengerId:null}}},77:function(e,a,s){"use strict";var t=s(8),l=s(75),n="https://my-json-server.typicode.com/rajat-agrvm/mock-json-server/flights/";function r(){return function(e){return fetch(n).then(l.b).catch(l.a).then((function(a){e(function(e){return{type:t.f,flights:e}}(a))})).catch((function(e){throw e}))}}function i(e){return function(a,s){return function(e){return fetch(n+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(l.b).catch(l.a)}(e).then((function(s){e.id?a(function(e){return{type:t.i,flight:e}}(s)):a(function(e){return{type:t.b,flight:e}}(s))})).catch((function(e){throw e}))}}s.d(a,"a",(function(){return r})),s.d(a,"b",(function(){return i}))},91:function(e,a,s){"use strict";var t=s(0),l=s.n(t),n=(s(92),s(76)),r=s(17);a.a=function(e){var a=e.passenger,s=e.passengers,t=e.select,i=e.onSave,d=e.backUrl,u=e.inFlight,c=void 0!==u&&u,m=e.isAdmin,p=void 0!==m&&m,o=e.saving,g=void 0!==o&&o,v=c?s.map((function(e){return e.seat&&e.specialMeals.length>0?{seat:e.seat,status:"special-meal"}:e.seat?{seat:e.seat,status:"reserved"}:{}})):s.map((function(e){var a=e.wheelChair&&e.infants>0?"both":e.infants>0?"infants":e.wheelChair?"wheelChair":"reserved";return e.seat?{seat:e.seat,status:a}:{}}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},n.newSeatMap.seatmap.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",{id:e.id,name:e.number,className:a&&a.seat===e.number?"selected":s.length>0?(v.find((function(a){return a.seat===e.number}))||{status:"available"}).status:e.status,onClick:a&&function(){return t({id:e.id,number:e.number})}},l.a.createElement("h4",{id:"seat-number"},e.number)),parseInt(e.id,10)%2==0&&l.a.createElement("div",{className:"clearBoth"}))})),l.a.createElement("div",{className:"row"},a&&!p&&l.a.createElement("div",{className:"col"},l.a.createElement("button",{style:{marginTop:20},className:"btn btn-primary",onClick:a&&i},g?"saving..":"save")),l.a.createElement("div",{className:"col"},l.a.createElement(r.b,{style:{marginTop:20},className:"btn btn-primary",to:d},"Back")))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"colorCode",style:{background:"#d8d8d8"}}),"Available",l.a.createElement("div",{className:"colorCode",style:{background:"#ffa500"}}),"Reserved",c?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"colorCode",style:{background:"#ac0788"}}),"Special Meal"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"colorCode",style:{background:"#3366cc"}}),"selected",l.a.createElement("div",{className:"colorCode",style:{background:"#c52b44"}}),"WheelChair",l.a.createElement("div",{className:"colorCode",style:{background:"#ac0788"}}),"Infants",l.a.createElement("div",{className:"colorCode",style:{background:"#04640c"}}),"WheelChair + Infants"))),a&&l.a.createElement("p",{className:"information"},"**Click on the same seat to de-select"))}},92:function(e,a,s){},96:function(e,a,s){"use strict";var t=s(0),l=s.n(t),n=s(17);a.a=function(e){var a=e.flight,s=e.passengers,t=e.inFlight,r=void 0!==t&&t,i=e.isAdmin,d=void 0!==i&&i;return l.a.createElement("table",{className:"table table-borderless"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,":"),l.a.createElement("td",null,a.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Departure"),l.a.createElement("td",null,":"),l.a.createElement("td",null,a.departure)),l.a.createElement("tr",null,l.a.createElement("td",null,"Destination"),l.a.createElement("td",null,":"),l.a.createElement("td",null,a.destination)),l.a.createElement("tr",null,l.a.createElement("td",null,"Passengers"),l.a.createElement("td",null,":"),l.a.createElement("td",null,s.filter((function(e){return e.flightId===a.id})).length,l.a.createElement(n.b,{style:{marginLeft:10},className:"btn btn-sm btn-outline-primary",to:(r?"/staff/in-flight/passengers/":d?"/admin/passengers/":"/staff/passengers/")+a.name},"Passenger List")))))}}}]);
//# sourceMappingURL=11.bundle.js.map