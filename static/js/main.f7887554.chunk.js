(this.webpackJsonpcolleges=this.webpackJsonpcolleges||[]).push([[0],{13:function(e,a,s){e.exports=s(25)},18:function(e,a,s){},19:function(e,a,s){},24:function(e,a,s){},25:function(e,a,s){"use strict";s.r(a);var t=s(0),o=s.n(t),r=s(9),n=s.n(r),l=(s(18),s(1)),i=s(2),c=(s(19),s(11)),m=s(10);s(8);function g(e){var a=e.detail,s=e.reference,t=a.tags,r=a.rating,n=a.ranking,i=a.promoted,g=a.amenties,f=a.discount,_=a.offertext,d=a.fees_cycle,u=a.college_name,y=a.nearest_place,p=a.original_fees,h=a.rating_remarks,k=a.discounted_fees,w=a.famous_nearest_places;return o.a.createElement("div",{className:"college-card",ref:s},o.a.createElement("div",{className:"college-card__image"},o.a.createElement("img",{alt:"college",src:"images/college_02.jpg"}),o.a.createElement("div",{className:"college-card__image-item"},o.a.createElement("div",{className:"college-card__tag-group d-flex align-center"},t.map((function(e,a){return o.a.createElement("div",{key:a,className:"college-card__tag thin-text bold-text"},e)}))),o.a.createElement("div",{className:"college-card__ranking light-text bold-text"},"#",n))),i?o.a.createElement("div",{className:"college-card__ribbon"},"promoted"):null,i?o.a.createElement("div",{className:"college-card__ribbon--shadow"}):null,o.a.createElement("div",{className:"college-card__remarks"},o.a.createElement("div",{className:"college-card__remarks__text"},o.a.createElement("div",null,o.a.createElement("span",{className:"college-card__remarks__text--bold"},r),"/5"),o.a.createElement("div",null,h))),o.a.createElement("div",{className:"college-card__details d-flex"},o.a.createElement("div",{className:"college-card__details__general"},o.a.createElement("div",{className:"college-card__name-wrapper bold-text"},o.a.createElement("span",{className:"college-card__name"},u),o.a.createElement("span",{className:"college-card__star-group"},Object(l.a)(Array(5)).map((function(e,a){return o.a.createElement(m.Icon,{color:a<r?"#444444":"#adadad",path:c.a,size:.52,key:a})})))),o.a.createElement("div",{className:"college-card__nearest thin-text bold-text"},o.a.createElement("span",{className:"college-card__nearest-bold"},y[0]),o.a.createElement("span",{className:"college-card__nearest-muted"}," | ",y[1])),o.a.createElement("div",{className:"college-card__nearest-famous thin-text bold-text"},o.a.createElement("span",{className:"college-card__nearest-match"},"93% Match: "),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:w.match(/(\d+\.?\d*) *(kms?|Kms?)/g).reduce((function(e,a){return e.replace(a,'<span class="college-card__nearest--bold">'.concat(a,"</span>"))}),w)}})),o.a.createElement("div",{className:"college-card__offer-ribbon thin-text bold-text"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:function(){var e=_.match(/\d+(,\d+)*(\.\d*)?/g);return console.log(e),e.reduce((function(e,a){return e.replace(a,'<span class="college-card__offer--green">'.concat(a,"</span>"))}),_).replace("Flat","<span class='college-card__offer--muted'>Flat</span>").replace("LOGIN","<span class='college-card__offer--button'>LOGIN</span>")}()}}))),o.a.createElement("div",{className:"college-card__details__price"},o.a.createElement("div",{className:"college-card__discount-wrapper d-flex align-center thin-text"},o.a.createElement("div",{className:"college-card__original-fees thin-text"},"\u20b9",p.toLocaleString()),o.a.createElement("div",{className:"college-card__discount"},f,o.a.createElement("div",{className:"college-card__discount-dot"}))),o.a.createElement("div",{className:"college-card__discount-fees bold-text"},"\u20b9",k.toLocaleString()),o.a.createElement("div",{className:"college-card__fees-cycle thin-text"},d),o.a.createElement("div",{className:"college-card__amenties light-text bold-text"},g.join("  \xb7  ")))))}var f=o.a.forwardRef((function(e,a){return o.a.createElement(g,Object.assign({},e,{reference:a}))}));function _(){return o.a.createElement("div",{className:"college-card__loading-wrapper"},o.a.createElement("div",{className:"college-card__loading loading-image"}),o.a.createElement("div",{className:"college-card__loading-text"},o.a.createElement("div",{className:"college-card__loading loading-title"}),o.a.createElement("div",{className:"college-card__loading loading-subtitle"}),o.a.createElement("div",{className:"college-card__loading loading-subtitle"}),o.a.createElement("div",{className:"college-card__loading loading-ribbon"})))}var d=s(5),u=s.n(d),y=s(12),p=s(6),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return new Promise((function(s,t){var o=(e-1)*a;setTimeout((function(){try{s({hasNext:p.a.length>o+a,colleges:p.a.slice(o,o+a)})}catch(e){t(e)}}),1e3)}))};var k=function(){var e=Object(t.useState)(1),a=Object(i.a)(e,2),s=a[0],r=a[1],n=function(e){var a=Object(t.useState)(!0),s=Object(i.a)(a,2),o=s[0],r=s[1],n=Object(t.useState)([]),c=Object(i.a)(n,2),m=c[0],g=c[1],f=Object(t.useState)(!0),_=Object(i.a)(f,2),d=_[0],p=_[1];return Object(t.useEffect)((function(){r(!0),function(){var a=Object(y.a)(u.a.mark((function a(){var s,t,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h(e);case 3:s=a.sent,t=s.colleges,o=s.hasNext,g((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),p(o),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),g([]),p(!0);case 14:return a.prev=14,r(!1),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[0,10,14,17]])})));return function(){return a.apply(this,arguments)}}()()}),[e]),{loading:o,hasNext:d,colleges:m,length:m.length}}(s),c=n.colleges,m=n.loading,g=n.hasNext,d=n.length,p=Object(t.useRef)(),k=Object(t.useCallback)((function(e){m||(p.current&&p.current.disconnect(),p.current=new IntersectionObserver((function(e){e[0].isIntersecting&&g&&r((function(e){return e+1}))})),e&&p.current.observe(e))}),[m,g]);return o.a.createElement("div",{className:"college-list"},o.a.createElement("div",{className:"college-list__title"},"Colleges in North India"),o.a.createElement("div",{className:"college-list__items"},c.map((function(e,a){return Object(t.createElement)(f,{ref:function(e){return a===d-1&&k(e)},detail:e,key:a})})),m&&Object(l.a)(Array(4)).map((function(e,a){return o.a.createElement(_,{key:a})}))))};s(24);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))};n.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"a":[{"college_name":"Hansraj College Delhi University - 1","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 2","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 3","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 4","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 5","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 6","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 7","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 8","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 9","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 10","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 11","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 12","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 13","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 14","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 15","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 16","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 17","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 18","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 19","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 20","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 21","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 22","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 23","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 24","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 25","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 26","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 27","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 28","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 29","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 30","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 31","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 32","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 33","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 34","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 35","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 36","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 37","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 38","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 39","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 40","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 41","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 42","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 43","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 44","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 45","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 46","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 47","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 48","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 49","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "},{"college_name":"Hansraj College Delhi University - 50","promoted":true,"discount":20,"original_fees":6000,"discounted_fees":5200,"fees_cycle":"Per Semester (3months)","image":"college.png","ranking":"7 in 260 colleges in north campus","tags":["best colleges in 2018","2kms away"],"amenties":["Fee cancellation","Free Wifi"],"rating":4,"rating_remarks":"Very Good","famous_nearest_places":"2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk","nearest_place":["Near Vishwavidyalya Metro Station","2 Kms away from bus stand"],"offertext":"Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN "}]}')},8:function(e,a,s){}},[[13,1,2]]]);
//# sourceMappingURL=main.f7887554.chunk.js.map