(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74523f98","chunk-701138c0"],{"677a":function(e,t,r){"use strict";r.d(t,"l",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"j",(function(){return m})),r.d(t,"n",(function(){return f})),r.d(t,"m",(function(){return p})),r.d(t,"k",(function(){return h})),r.d(t,"h",(function(){return b})),r.d(t,"g",(function(){return v})),r.d(t,"i",(function(){return g}));var n=r("b775"),a={roles:"admin/rbac/roles",create_role:"admin/rbac/create-role",edit_role:"admin/rbac/edit-role",delete_role:"admin/rbac/delete-role",create_permission:"admin/rbac/create-permission",edit_permission:"admin/rbac/edit-permission",permissions:"admin/rbac/permissions",delete_permission:"admin/rbac/delete-permission",give_role_permission:"admin/rbac/give-role-permission",give_admin_permission:"admin/rbac/give-admin-permission",get_role_permission:"admin/rbac/get-role-permission",get_admin_permission:"admin/rbac/get-admin-permission",get_admin_bill:"admin/bill/getList",get_admin_task:"admin/bill/getTaskList"};function i(e){return Object(n["a"])(a.roles,e)}function o(e){return Object(n["b"])(a.create_role,e)}function s(e){return Object(n["b"])(a.edit_role,e)}function l(e){return Object(n["b"])(a.delete_role,e)}function u(e){return Object(n["b"])(a.create_permission,e)}function c(e){return Object(n["b"])(a.edit_permission,e)}function d(e){return Object(n["b"])(a.delete_permission,e)}function m(e){return Object(n["a"])(a.permissions,e)}function f(e){return Object(n["b"])(a.give_role_permission,e)}function p(e){return Object(n["b"])(a.give_admin_permission,e)}function h(e){return Object(n["a"])(a.get_role_permission,e)}function b(e){return Object(n["a"])(a.get_admin_permission,e)}function v(e){return Object(n["b"])(a.get_admin_bill,e)}function g(e){return Object(n["b"])(a.get_admin_task,e)}},"88bc":function(e,t,r){(function(t){var r=1/0,n=9007199254740991,a="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,n=e?e.length:0,a=Array(n);while(++r<n)a[r]=t(e[r],r,e);return a}function f(e,t){var r=-1,n=t.length,a=e.length;while(++r<n)e[a+r]=t[r];return e}var p=Object.prototype,h=p.hasOwnProperty,b=p.toString,v=c.Symbol,g=p.propertyIsEnumerable,y=v?v.isConcatSpreadable:void 0,_=Math.max;function w(e,t,r,n,a){var i=-1,o=e.length;r||(r=F),a||(a=[]);while(++i<o){var s=e[i];t>0&&r(s)?t>1?w(s,t-1,r,n,a):f(a,s):n||(a[a.length]=s)}return a}function x(e,t){return e=Object(e),j(e,t,(function(t,r){return r in e}))}function j(e,t,r){var n=-1,a=t.length,i={};while(++n<a){var o=t[n],s=e[o];r(s,o)&&(i[o]=s)}return i}function O(e,t){return t=_(void 0===t?e.length-1:t,0),function(){var r=arguments,n=-1,a=_(r.length-t,0),i=Array(a);while(++n<a)i[n]=r[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=r[n];return o[t]=i,d(e,this,o)}}function F(e){return R(e)||V(e)||!!(y&&e&&e[y])}function k(e){if("string"==typeof e||I(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function V(e){return $(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==a)}var R=Array.isArray;function S(e){return null!=e&&q(e.length)&&!N(e)}function $(e){return C(e)&&S(e)}function N(e){var t=M(e)?b.call(e):"";return t==i||t==o}function q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){return!!e&&"object"==typeof e}function I(e){return"symbol"==typeof e||C(e)&&b.call(e)==s}var A=O((function(e,t){return null==e?{}:x(e,m(w(t,1),k))}));e.exports=A}).call(this,r("c8ba"))},ca002:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return s}));r("4de4"),r("4160"),r("a630"),r("c975"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0");var n=r("2909");function a(){var e=new Date,t=e.getHours();return t<9?"早上好":t<=11?"上午好":t<=13?"中午好":t<20?"下午好":"晚上好"}function i(e){var t=JSON.parse(JSON.stringify(e)),r=t.filter((function(e){var r=t.filter((function(t){return e.id==t.pid}));return r.length>0&&(e.children=r),0==e.pid}));return r}var o=function e(t){var r=[];return t.forEach((function(t){t.parent_id>0&&r.push(t.parent_id),t.children&&r.push.apply(r,Object(n["a"])(e(t.children)))})),r},s=function(e){if(Array.hasOwnProperty("from"))return Array.from(new Set(e));for(var t={},r=[],n=0;n<e.length;n++)t[e[n]]||(t[e[n]]=!0,r.push(e[n]));return r}},d5be:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.model?"编辑权限":"添加权限",width:550,visible:e.visible,confirmLoading:e.loading,okText:e.model?"立即编辑":"立即添加",cancelText:"取消"},on:{ok:e.submit,cancel:e.cancel}},[r("a-spin",{attrs:{spinning:e.loading}},[r("a-form",e._b({attrs:{form:e.form},on:{submit:e.submit}},"a-form",e.formLayout,!1),[r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:"0"}],expression:"['id', { initialValue: '0' }]"}]})],1),r("a-form-item",{attrs:{label:"父级菜单"}},[r("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id"],expression:"['parent_id']"}],attrs:{"dropdown-style":{maxHeight:"500px",overflow:"auto"},placeholder:"默认为顶级栏目","allow-clear":"","tree-default-expand-all":"","tree-data":e.tree,replaceFields:{children:"children",title:"title",key:"key",value:"id"}}})],1),r("a-form-item",{attrs:{label:"菜单类型"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:"0",rules:[{required:!0,message:"权限类型必选！"}]}],expression:"['type', { initialValue: '0', rules: [{ required: true, message: '权限类型必选！' }] }]"}]},[r("a-radio-button",{attrs:{value:"0"}},[e._v("目录")]),r("a-radio-button",{attrs:{value:"1"}},[e._v("菜单")]),r("a-radio-button",{attrs:{value:"2"}},[e._v("权限")])],1)],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("type"),expression:"form.getFieldValue('type') == 1"}],attrs:{label:"是否外链"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["is_frame",{initialValue:"0",rules:[{required:!0,message:"是否外链必选！"}]}],expression:"['is_frame', { initialValue: '0', rules: [{ required: true, message: '是否外链必选！' }] }]"}]},[r("a-radio-button",{attrs:{value:"0"}},[e._v("否")]),r("a-radio-button",{attrs:{value:"1"}},[e._v("是")])],1)],1),r("a-form-item",{attrs:{label:"是否隐藏"}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["hidden",{initialValue:"0",rules:[{required:!0,message:"是否隐藏必选！"}]}],expression:"['hidden', { initialValue: '0', rules: [{ required: true, message: '是否隐藏必选！' }] }]"}]},[r("a-radio-button",{attrs:{value:"0"}},[e._v("否")]),r("a-radio-button",{attrs:{value:"1"}},[e._v("是")])],1)],1),r("a-form-item",{attrs:{label:"菜单标题"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"菜单标题不能为空！"}]}],expression:"['title', { rules: [{ required: true, message: '菜单标题不能为空！' }] }]"}],attrs:{placeholder:"请填写菜单标题"}})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:2==e.form.getFieldValue("type"),expression:"form.getFieldValue('type') == 2"}],attrs:{label:"权限标识"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["perms",{rules:[{required:2==e.form.getFieldValue("type"),message:"请填写权限标识"}]}],expression:"[\n            'perms',\n            { rules: [{ required: form.getFieldValue('type') == 2, message: '请填写权限标识' }] }\n          ]"}],attrs:{placeholder:"请填写权限标识"}})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:2!=e.form.getFieldValue("type"),expression:"form.getFieldValue('type') != 2"}],attrs:{label:"路由地址"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:2!=e.form.getFieldValue("type"),message:"请填写路由地址"}]}],expression:"[\n            'path',\n            { rules: [{ required: form.getFieldValue('type') != 2, message: '请填写路由地址' }] }\n          ]"}],attrs:{placeholder:"请填写路由地址"}})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:1==e.form.getFieldValue("type")&&0==e.form.getFieldValue("is_frame"),expression:"form.getFieldValue('type') == 1 && form.getFieldValue('is_frame') == 0"}],attrs:{label:"组件地址"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["component",{rules:[{required:1==e.form.getFieldValue("type")&&0==e.form.getFieldValue("is_frame"),message:"请选择组件地址"}]}],expression:"[\n            'component',\n            {\n              rules: [\n                {\n                  required: form.getFieldValue('type') == 1 && form.getFieldValue('is_frame') == 0,\n                  message: '请选择组件地址'\n                }\n              ]\n            }\n          ]"}],attrs:{allowClear:"",placeholder:"请选择组件地址"}},e._l(e.routers,(function(t,n){return r("a-select-option",{key:n},[e._v(" "+e._s(n)+" ")])})),1)],1),r("a-form-item",{attrs:{label:"菜单排序"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort"],expression:"['sort']"}],staticStyle:{width:"100%"},attrs:{placeholder:"非必填项",min:0,max:9999}})],1),r("a-form-item",{directives:[{name:"show",rawName:"v-show",value:2!=e.form.getFieldValue("type"),expression:"form.getFieldValue('type') != 2"}],attrs:{label:"菜单图标"}},[r("a-input-search",{directives:[{name:"decorator",rawName:"v-decorator",value:["icon"],expression:"['icon']"}],attrs:{placeholder:"非必填项"}},[r("a-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[r("a-icon",{attrs:{type:"search"}})],1)],1)],1),r("a-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{htmlType:"submit"}},[e._v("确定")])],1)],1)],1)},a=[],i=(r("4160"),r("d3b7"),r("8bbf"),r("88bc")),o=r.n(i),s=r("677a"),l=r("aa0f"),u=["id","parent_id","type","title","path","component","perms","icon","sort","hidden","is_frame"],c={name:"RuleForm",props:{visible:{type:Boolean,required:!0},model:{type:Object,default:null},tree:{type:Array,default:[]}},data:function(){return{formLayout:{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}}},loading:!1,form:this.$form.createForm(this,{name:"rule_from",onValuesChange:function(e,t){}}),routers:l["a"]}},watch:{model:function(){this.model&&this.form.setFieldsValue(o()(this.model,u))}},created:function(){var e=this;u.forEach((function(t){return e.form.getFieldDecorator(t)}))},methods:{submit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e?t.loading=!1:(r.parent_id=void 0==r.parent_id?0:r.parent_id,r.icon=void 0==r.icon?"":r.icon,r.sort=void 0==r.sort?"0":r.sort,r.component=void 0==r.component?"":r.component,r.perms=void 0==r.perms?"":r.perms,r.path=void 0==r.path?"":r.path,t.loading=!0,r.id>0?t.edit(r):t.add(r))}))},cancel:function(){this.$emit("cancel")},add:function(e){var t=this;Object(s["a"])(e).then((function(e){200==e.code?(t.$message.success("菜单添加成功..."),t.$emit("success")):t.$message.info("菜单添加失败...")})).catch((function(e){t.$message.error("网络异常,请稍后再试...")})).finally((function(){t.loading=!1}))},edit:function(e){var t=this;Object(s["e"])(e).then((function(e){200==e.code?(t.$message.success("菜单编辑成功..."),t.$emit("success")):t.$message.info("菜单编辑失败...")})).catch((function(e){t.$message.error("网络异常,请稍后再试...")})).finally((function(){t.loading=!1}))}}},d=c,m=r("2877"),f=Object(m["a"])(d,n,a,!1,null,null,null);t["default"]=f.exports},fc8a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-header-wrapper",{attrs:{title:!1}},[r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"table-operator"},[r("a-button",{attrs:{type:"primary",icon:"sync"},on:{click:e.handleRefresh}}),r("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAddRule}},[e._v("添加")])],1),r("s-table",{ref:"table",attrs:{size:"default",rowKey:"id",columns:e.columns,data:e.loadData,showPagination:!1,defaultExpandedRowKeys:e.expandedRowKeys,scroll:{x:1200}},scopedSlots:e._u([{key:"icon",fn:function(t){return r("span",{},[t?r("span",[r("a-icon",{attrs:{type:t}})],1):r("span",[e._v("-")])])}},{key:"type",fn:function(e){return r("span",{},[r("a-badge",0==e?{attrs:{count:"目录","number-style":{backgroundColor:"#1890ff",borderRadius:"3px"}}}:1==e?{attrs:{count:"菜单","number-style":{backgroundColor:"#52c41a",borderRadius:"3px"}}}:{attrs:{count:"权限","number-style":{backgroundColor:"rgb(189, 193, 188)",borderRadius:"3px"}}})],1)}},{key:"hidden",fn:function(t){return r("span",{},[1==t?r("a-button",{staticStyle:{padding:"0"},attrs:{type:"link"}},[e._v(" 是 ")]):e._e(),0==t?r("span",[e._v("否")]):e._e()],1)}},{key:"is_frame",fn:function(t){return r("span",{},[1==t?r("a-button",{staticStyle:{padding:"0"},attrs:{type:"link"}},[e._v(" 是 ")]):e._e(),0==t?r("span",[e._v("否")]):e._e()],1)}},{key:"action",fn:function(t,n){return r("span",{},[r("a",{attrs:{disabled:2==n.type},on:{click:function(t){return e.handleInsert(n)}}},[e._v("新增")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.handleEditRule(n)}}},[e._v("编辑")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.deleteConfirm(n)}}},[e._v("删除")])],1)}}])}),r("rule-form",{ref:"formModal",attrs:{visible:e.formModal.visible,model:e.formModal.model,tree:e.treeData},on:{cancel:e.handleCancel,success:e.handleSuccess}})],1)],1)},a=[],i=(r("d81d"),r("a434"),r("d3b7"),r("25f0"),r("5530")),o=r("2909"),s=r("677a"),l=r("d5be"),u=r("ca002"),c={name:"SystemMenuPage",components:{RuleForm:l["default"]},data:function(){var e=this;return{columns:[{title:"菜单名称",dataIndex:"title"},{title:"权限标识",dataIndex:"perms",customRender:function(e){return""==e?"-":e}},{title:"路由地址",dataIndex:"path",customRender:function(e){return""==e?"-":e}},{title:"组件名称",dataIndex:"component",customRender:function(e){return""==e?"-":e}},{title:"图标",dataIndex:"icon",width:"80px",align:"center",scopedSlots:{customRender:"icon"}},{title:"排序",dataIndex:"sort",width:"80px",align:"center"},{title:"隐藏",dataIndex:"hidden",width:"60px",align:"center",scopedSlots:{customRender:"hidden"}},{title:"外链",dataIndex:"is_frame",width:"60px",align:"center",scopedSlots:{customRender:"is_frame"}},{title:"权限类型",dataIndex:"type",width:"120px",align:"center",scopedSlots:{customRender:"type"}},{title:"操作",dataIndex:"action",width:"155px",align:"center",scopedSlots:{customRender:"action"}}],expandedRowKeys:[],queryParam:{},loadData:function(t){var r=Object.assign({},t,e.queryParam);return Object(s["j"])(r).then((function(t){return e.formatData(t.data)}))},formModal:{model:null,visible:!1},treeData:[]}},methods:{formatData:function(e){var t,r=[];return e.rows.map((function(e){return e.key=e.id,e.pid=e.parent_id,e.parent_id>0&&r.push(e.parent_id),e})),this.expandedRowKeys.splice(0,this.expandedRowKeys.length),(t=this.expandedRowKeys).push.apply(t,Object(o["a"])(Object(u["d"])(r))),this.treeData=e.rows=Object(u["a"])(e.rows),e},handleRefresh:function(){this.$refs.table.refresh()},handleAddRule:function(){this.$refs.formModal.form.resetFields(),this.formModal.visible=!0,this.formModal.model=null},handleEditRule:function(e){e.parent_id=0==e.parent_id?null:e.parent_id.toString(),e.type=e.type.toString(),e.hidden=e.hidden.toString(),e.is_frame=e.is_frame.toString(),this.formModal.model=Object(i["a"])({},e),this.formModal.visible=!0},handleInsert:function(e){this.formModal.model={parent_id:e.id.toString()},this.formModal.visible=!0},handleSuccess:function(){this.formModal.visible=!1,this.$refs.table.refresh(),this.$refs.formModal.form.resetFields()},handleCancel:function(){this.formModal.visible=!1,this.$refs.formModal.form.resetFields()},deleteConfirm:function(e){this.$createElement;var t=this;this.$confirm({title:"确定删除该条权限信息吗？",content:function(e){return e("div",{style:"color:red;"},["删除后不可恢复"])},onOk:function(){return Object(s["c"])({id:e.id}).then((function(e){200==e.code?(t.$message.success("权限删除成功..."),t.handleRefresh()):t.$message.error("权限删除失败...")})).catch((function(e){t.$message.error("网络异常，请稍后再试...")}))}})}}},d=c,m=r("2877"),f=Object(m["a"])(d,n,a,!1,null,null,null);t["default"]=f.exports}}]);