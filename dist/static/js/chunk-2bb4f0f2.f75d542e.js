(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb4f0f2"],{"4d1f":function(t,a,e){},"64a2":function(t,a,e){"use strict";var s=e("4d1f"),i=e.n(s);i.a},ef77:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"fill-height warp"},[s("div",{staticClass:"banner-warp"},[s("div",{staticClass:"mask"},[s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"transparent"}},[s("v-row",{staticClass:"fill-height flex-column pa-5",attrs:{align:"center",justify:"center"}},[s("img",{staticStyle:{width:"200px"},attrs:{src:e("9d64"),alt:""}}),s("div",{staticClass:"top-decoration"}),s("div",{staticClass:"display-3 my-5 font-weight-black"},[s("span",{staticClass:"main-title"},[t._v("Meet Consultants")])]),s("div",{staticClass:"display-1 mb-5"},[t._v("寻找顾问")]),s("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)]),s("div",{staticClass:"mask"},[s("v-container",[s("v-card",{staticClass:"mx-auto pa-5",attrs:{"max-width":"1200",color:"",light:""}},[s("v-data-iterator",{attrs:{items:t.allConsultants,search:t.search,"sort-by":t.sortBy.toLowerCase(),"sort-desc":t.sortDesc,"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"transparent"}},[s("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",label:"检索"},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)]},proxy:!0},{key:"default",fn:function(a){return[s("v-row",t._l(t.localConsultants,function(a){return s("v-col",{key:a.id,staticClass:"py-12",attrs:{cols:"12",md:"6",lg:"3"}},[s("v-item-group",[s("v-item",{scopedSlots:t._u([{key:"default",fn:function(e){e.active,e.toggle;return[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[s("v-card",{staticClass:"text-center mx-auto pb-5",attrs:{width:"300",elevation:i?12:2},on:{click:function(e){return t.openItem(a)}}},[s("v-avatar",{staticClass:"mt-n6",attrs:{size:"120"}},[s("v-img",{attrs:{src:a.imgUrl,alt:"avatar",height:"120",position:"top center"}})],1),s("h2",{staticClass:"my-3"},[t._v(t._s(a.name))]),s("h4",{staticClass:"mb-2"},[t._v(t._s(a.position))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(a.keyword1))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(a.keyword2))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(a.keyword3))]),s("div",{staticClass:"caption grey--text"},[t._v(t._s(a.keyword4))]),s("div",{staticClass:"text-left"})],1)]}}],null,!0)})]}}],null,!0)})],1)],1)}),1)]}}])})],1)],1),s("v-dialog",{model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{width:"1200"}},[s("v-row",[s("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[s("v-card",{attrs:{color:"#232332",height:"100%",dark:""}},[s("div",[s("img",{attrs:{src:t.consultant.imgUrl,alt:"",width:"100%"}}),s("v-btn",{staticClass:"d-flex d-md-none",staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{color:"white darken-1",icon:""},on:{click:function(a){t.dialog=!1}}},[s("v-icon",[t._v("fas fa-times\n                                                ")])],1)],1),s("div",{staticClass:"pa-5"},[s("h1",{staticClass:"display-1 pa-2"},[t._v("\n                                                "+t._s(t.consultant.name)+"\n                                            ")]),s("h2",{staticClass:"title pa-2"},[t._v("\n                                                "+t._s(t.consultant.position)+"\n                                            ")]),s("div",{staticClass:"subtitle-2 pa-2"},[s("i",{staticClass:"fas fa-map-marker-alt mr-2"}),t._v(t._s(t.consultant.location)+"\n                                            ")]),s("div",{staticClass:"subtitle-2 pa-2"},[s("i",{staticClass:"far fa-envelope  mr-2"}),t._v(t._s(t.consultant.email)+"\n                                            ")])])])],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"8"}},[s("v-card",{attrs:{height:"100%"}},[s("v-card-text",[s("div",[s("div",{staticClass:"pa-2",staticStyle:{overflow:"hidden"},attrs:{width:"100%"}},[s("v-btn",{staticClass:"float-right d-none d-md-flex",attrs:{color:"grey darken-1",icon:""},on:{click:function(a){t.dialog=!1}}},[s("v-icon",[t._v("fas\n                                                            fa-times\n                                                        ")])],1)],1),s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-stream mx-3"}),t._v("个人简述\n                                                ")]),t.consultant.description?s("p",{staticClass:"pl-4"},[t._v("\n                                                    "+t._s(t.consultant.description)+"\n                                                ")]):t._e()]),s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-bolt mx-3"}),t._v("擅长领域\n                                                ")]),t.consultant.field1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field1))])]):t._e(),t.consultant.field2?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field2))])]):t._e(),t.consultant.field3?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.field3))])]):t._e()]),t.consultant.experience1?s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-book mx-3"}),t._v("个人资历\n                                                ")]),t.consultant.experience1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience1))])]):t._e(),t.consultant.experience2?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience2))])]):t._e(),t.consultant.experience3?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.consultant.experience3))])]):t._e()]):t._e()])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},i=[],c=e("2f62"),n={data(){return{dialog:!1,search:"",filter:{},sortBy:"姓名",keys:["发布时间","姓名","职位"],consultant:{},localConsultants:[{name:"孙磊",name_en:"TOM SUN",email:"",position:"外包业务负责人",location:"上海",date:"2019-9-16",description:"曾就职于中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司，并担任重要管理职位。同时，在Microsoft，Criteo等国际知名IT企业任职过。拥有丰富的IT，外包全行业的经验。",experience1:"中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司",experience2:"Microsoft，Criteo等国际知名IT企业",experience3:"",field1:"IT",field2:"全行业",field3:"",keyword1:"外包业务负责人",keyword2:"外包全行业",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:7,imgUrl:e("75c9")},{name:"樊申哲",name_en:"LESLIE",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"拥有十余年德资企业管理层经验，曾任海德堡销售总监，交通大学本科及交通大学工商管理学硕士，CIPC注册国际心理咨询师，五维教练领导力认证讲师，领导力方面颇有建树",experience1:"十余年德资企业管理层经验",experience2:"海德堡销售总监",experience3:"CIPC注册国际心理咨询师",field1:"制造业",field2:"德资",field3:"",keyword1:"销售总监",keyword2:"领导力",keyword3:"",keyword4:"",education1:"交通大学本科",education2:"交通大学工商管理学硕士",status:"有效",id:5,imgUrl:e("d5ff")},{name:"汤晓烨",name_en:"VERA",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"于14年以管培生身份加入择仕，连续3年百万顾问及公司TOP 1，4年连续晋升。南开大学应用心理学硕士。连续多次季度最佳业绩。斩获公司十多项嘉奖。带领团队成员单产年均75万",experience1:"多次季度最佳业绩",experience2:"连续3年百万顾问及公司TOP 1",experience3:"团队成员单产年均75万",field1:"互联网行业",field2:"",field3:"",keyword1:"资深顾问",keyword2:"百万顾问",keyword3:"",keyword4:"",education1:"南开大学应用心理学硕士",education2:"",status:"有效",id:6,imgUrl:e("bbf9")},{name:"火颖杰",name_en:"JASON",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"曾就职于瀚德、Michaelpage等大型外资猎头公司，同济大学本科，在瀚德就职期间年最高单产230万，2018年获择仕最高单笔业绩个人佣金60万。团队业绩五百万TeamLeader",experience1:"瀚德、Michaelpage等大型外资猎头公司",experience2:"最高单产230万",experience3:"团队业绩五百万TeamLeader",field1:"消费品行业",field2:"",field3:"",keyword1:"百万级Leader",keyword2:"资深猎头",keyword3:"",keyword4:"",education1:"同济大学本科",education2:"",status:"有效",id:8,imgUrl:e("696c")},{name:"张楠",name_en:"ELLA",email:"",position:"区域合伙人",location:"上海",date:"2019-9-16",description:" 拥有十年人力资源行业从业经验，曾任西北地区独角兽Yeahmobi集团核心高管带领择仕中国西安团队拿下多家北京、西北地区互联网头部客户，巩固择仕中国位于西北板块业务发展。",experience1:"十年人力资源行业从业经验",experience2:"曾任西北地区独角兽Yeahmobi集团核心高管",experience3:"",field1:"互联网行业",field2:"",field3:"",keyword1:"核心高管",keyword2:"十年经验",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:9,imgUrl:e("51a8")}]}},methods:{...Object(c["b"])(["fetchConsultants"]),openItem(t){this.consultant=Object.assign({},t),this.dialog=!0}},computed:{...Object(c["c"])(["allConsultants"])},created(){this.fetchConsultants()}},l=n,o=(e("64a2"),e("2877")),r=e("6544"),d=e.n(r),f=e("8212"),p=e("8336"),u=e("b0af"),v=e("99d9"),m=e("62ad"),C=e("a523"),x=e("c377"),h=e("169a"),_=e("ce87"),k=e("132d"),y=e("adda"),w=e("d903"),g=e("604c"),b=e("0fd9"),V=e("8654"),I=e("71d9"),T=Object(o["a"])(l,s,i,!1,null,"cd2cd0dc",null);a["default"]=T.exports;d()(T,{VAvatar:f["a"],VBtn:p["a"],VCard:u["a"],VCardText:v["b"],VCol:m["a"],VContainer:C["a"],VDataIterator:x["a"],VDialog:h["a"],VHover:_["a"],VIcon:k["a"],VImg:y["a"],VItem:w["a"],VItemGroup:g["b"],VRow:b["a"],VTextField:V["a"],VToolbar:I["a"]})}}]);
//# sourceMappingURL=chunk-2bb4f0f2.f75d542e.js.map