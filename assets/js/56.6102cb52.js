(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1115:function(e,t,a){"use strict";a.r(t);var l={name:"dhFormDemo",data:function(){var e=this.$createElement;return{formOpts:{labelPosition:"top",ref:null,formData:{id:"".concat(Math.floor(10*Math.random()+1)),account:"",password:"",name:"",sex:"",hobby:[],phone:"",createDate:"",valDate:"",wechat:"",qq:"",accountType:"",email:"",desc:"",number:"",status:""},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList",childSlotName:"accountType"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox"},{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"yyyy"},comp:"el-date-picker"},{labelRender:function(){return e("div",{class:"label_render"},[e("div",["element日期"]),e("el-tooltip",[e("template",{slot:"content"},[e("span",["自定义label"])]),e("i",{class:"el-icon-warning-outline",style:"cursor: pointer;margin-right:2px;"})])])},rules:{required:!0,message:"请选择element日期",trigger:"change"},value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期"}},{label:"微信",value:"wechat",slotName:"wechat",rules:{required:!0,message:"请输入微信",trigger:"blur"}},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",className:"t-form-block"}],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}]},operatorList:[{label:"提交",type:"danger",fun:this.submitForm},{label:"重置",type:"primary",fun:this.resetForm},{label:"清除校验",type:"danger",fun:this.clearValidate}],listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}}},methods:{handleEvent:function(e,t){switch(e){case"checkbox":console.log("checkbox",t,e)}},submitForm:function(){var e=this;this.formOpts.ref.validate((function(t){console.log(88,t),console.log(77,e.formOpts.formData),t&&console.log("最终数据",e.formOpts.formData)}))},resetForm:function(){Object.assign(this.$data.formOpts.formData,this.$options.data().formOpts.formData),this.formOpts.ref.clearValidate()},clearValidate:function(){this.formOpts.ref.clearValidate()}}},r=a(8),o=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"dh-form-demo"},[t("t-simple-form",{attrs:{"ref-obj":e.formOpts.ref,formOpts:e.formOpts,widthSize:2},on:{"update:refObj":function(t){return e.$set(e.formOpts,"ref",t)},"update:ref-obj":function(t){return e.$set(e.formOpts,"ref",t)},handleEvent:e.handleEvent},scopedSlots:e._u([{key:"wechat",fn:function(){return[t("div",{staticStyle:{display:"flex"}},[t("el-input",{attrs:{placeholder:"自定义插槽"},model:{value:e.formOpts.formData.wechat,callback:function(t){e.$set(e.formOpts.formData,"wechat",t)},expression:"formOpts.formData.wechat"}})],1)]},proxy:!0},{key:"accountType",fn:function(){return e._l(e.formOpts.listTypeInfo.accountTypeList,(function(e,a){return t("el-option",{key:a,attrs:{label:e,value:a}})}))},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=o.exports}}]);