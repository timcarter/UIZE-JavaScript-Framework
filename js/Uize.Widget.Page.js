/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-25

	http://www.uize.com/reference/Uize.Widget.Page.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Page',required:'Uize.Node',builder:function(c_a){var c_b=true,c_c=false,c_d,c_e=Uize.Node;var c_f=c_a.subclass(null,function(){c_f.xDeferredLinks&&this.wireDeferredLinks()}),c_g=c_f.prototype;function c_h(c_i){return(Uize.isFunction(c_i)&&c_i)||c_i.callback||Object;}c_g.c_j=function(c_k,c_l,c_m){var c_n=this;c_n.useDialog({component:c_n.c_o.component,widgetClassName:c_n.c_o.widgetClassName||'Uize.Widget.Dialog.Confirm',widgetProperties:{name:'confirmDialog',title:c_m.title||'',message:(c_m.message+'').replace(/\n/g,'<br/>'),mode:c_k,state:c_m.state||c_l,okText:c_m.okText||null,cancelText:c_m.cancelText||null},submitHandler:function(c_p){var c_q=c_m.callback||(c_p?c_m.yesHandler:c_m.noHandler);c_q&&c_q(c_p);}});};c_g.c_r=function(c_s){c_s=c_s||Object;var c_n=this,c_t=c_n.get('idPrefix');function c_u(c_v,c_w){var c_x,c_y;for(var c_z in c_w)(typeof(c_x=c_v[c_z])=='object'&&typeof(c_y=c_w[c_z])=='object'&&c_x&&c_y)?c_u(c_x,c_y):(c_v[c_z]=c_w[c_z]);}var c_A={},c_B=c_c,
c_C='$'+c_t+'_',c_D=c_C.length,c_E;for(var c_z in window){if(c_z.charAt(0)=='$'&&c_z.substr(0,c_D)==c_C&&typeof(c_E=window[c_z])=='object'&&c_E&&c_E.widgetClass){c_B=c_b;for(var c_F= -1,c_G=c_A,c_H=c_z.substr(c_D).split('_'),c_I=c_H.length;++c_F<c_I;){var c_J=c_H[c_F],c_K=c_G[c_J];if(c_F<c_I-1){if(!c_K)c_K=c_G[c_J]={};c_G=c_K.children||(c_K.children={});}else{c_K?c_u(c_K,c_E):(c_G[c_J]=c_E);window[c_z]=c_d;}}}}if(c_B){function c_L(c_M,c_N){function c_O(c_P,c_Q,c_R){var c_S=c_R.children,c_T=c_M(c_P,c_Q,c_R);c_S&&c_U(c_T,c_S);c_N&&c_N(c_T);}function c_U(c_P,c_V){for(var c_Q in c_V)c_O(c_P,c_Q,c_V[c_Q]);}c_U(c_n,c_A);}var c_W={},c_X=[];c_L(function(c_P,c_Q,c_R){var c_Y=c_R.widgetClass;if(c_Y&& !c_W[c_Y]){c_W[c_Y]=1;c_X.push(c_Y);}});Uize.module({required:c_X,builder:function(){c_L(function(c_P,c_Q,c_R){var c_T=c_P.children[c_Q],c_Y=c_R.widgetClass||Uize.Widget;delete c_R.widgetClass;delete c_R.children;c_T?c_T.set(c_R):(c_T=c_Q.charCodeAt(0)==36&&c_Q.charCodeAt(1)==36?eval(c_Y).spawn(c_R,c_P)
:c_P.addChild(c_Q,eval(c_Y),c_R));return c_T;},c_n.isWired?function(c_T){Uize.callOn(c_T,'insertOrWireUi')}:0);c_s();}});}else{c_s();}};c_g.loadHtmlIntoNode=function(c_Z,c_0,c_1){var c_n=this,c_2=c_Z.rootNodeId,c_s=c_h(c_1),c_3={callback:function(c_4){var c_5=document.body,c_6=c_Z.node!=undefined?c_n.getNode(c_Z.node):(c_2?c_e.getById(c_2+'-shell'):c_7)||c_5;c_e.injectHtml(c_6,c_4,c_Z.injectMode||(c_6==c_5?'inner bottom':'inner replace'));c_n.c_r(c_s);}};c_Z.alwaysReplace===c_c&&c_2&&c_e.getById(c_2)?c_s():c_n.loadHtml(c_0,typeof c_1=='object'&&c_1?Uize.copyInto({},c_1,c_3):c_3);};c_g.performAjax=function(){};c_g.useDialog=function(c_m){var c_n=this,c_8=Uize.copyInto({},c_n.c_9,c_m.widgetProperties),c_ba=c_8.parent||c_n,c_bb=c_8.name,c_bc=c_ba.children[c_bb],c_bd=c_m.component,c_be;if(c_bd){var c_2=c_8.idPrefix||(c_ba.get('idPrefix')+'_'+c_bb);c_be={name:c_bd.name,rootNodeId:c_2,params:Uize.copyInto({idPrefix:c_2},c_bd.params)};}function c_bf(c_bg){var c_bh=c_n.get('productType');c_bc.fire({
name:'Track Event',extra:c_bg+(c_bh?(' ('+c_bh+')'):''),bubble:c_b});}function c_bi(c_bj){setTimeout(function(){function c_bk(c_bl,c_bm){var c_q=c_m[c_bl];c_q&&c_q.apply(0,c_bm);}function c_bn(c_bo){var c_bm=[c_bo];c_bk(c_bo.name.toLowerCase()+'Handler',c_bm);c_bk('dismissHandler',c_bm);}c_bc.unwire(c_bc.eventHandlersForUseDialog||{});c_bc.eventHandlersForUseDialog={'Submission Complete':function(c_bo){c_bk('submitHandler',[c_bo.result,c_bo])},Close:c_bn,Cancel:c_bn};c_bc.wire(c_bc.eventHandlersForUseDialog);c_bc.set(c_8);c_bc.set({shown:c_b});c_bf(c_bj);},0);}if(c_bc&&(c_bc.componentProfile==c_be||Uize.Data.identical(c_bc.componentProfile,c_be))){c_bi('subsequent');}else{var c_bp=c_be&& !!c_bc;if(c_bp){c_bc.removeUi();c_ba.removeChild(c_bb);}function c_bq(){var c_br=c_m.widgetClassName;Uize.module({required:c_br,builder:function(){(c_bc=c_ba.children[c_bb])?c_bc.set(c_8):(c_bc=c_ba.addChild(c_bb,eval(c_br),c_8));c_bc.componentProfile=c_be;c_bc.wire(c_m.widgetEventHandlers);c_bc.insertOrWireUi();
c_bi(c_bp?'refetched':'initial');}});}c_be?c_n.loadHtmlIntoNode({rootNodeId:c_be.rootNodeId,injectMode:'inner bottom',alwaysReplace:c_c},Uize.copyInto({cp:c_be.name},c_be.params),c_bq):c_bq();}};c_g.wireUi=function(){var c_n=this;if(!c_n.isWired){c_n.c_r();c_a.prototype.wireUi.call(c_n);}};var c_bs={yes:1,on:1,1:1,'true':1};c_f.launchPopup=c_g.launchPopup=function(c_m){if(!c_m)c_m={};if(c_m.width==c_d)c_m.width=850;if(c_m.height==c_d)c_m.height=600;var c_bt=window.screen;if(c_m.left==c_d)c_m.left=Math.max((c_bt.width-c_m.width-10)>>1,0);if(c_m.top==c_d)c_m.top=Math.max((c_bt.height-c_m.height-40)>>1,0);function c_bu(c_bv){return c_bv+'='+c_m[c_bv];}function c_bw(c_bv,c_bx){return(c_bv+'='+(c_bs[c_m[c_bv]==c_d?c_bx:c_m[c_bv]+'']?'yes':'no'));}var c_by=window.open(c_m.url||'',c_m.name==c_d?'popupWindow':c_m.name,[c_bu('width'),c_bu('height'),c_bu('top'),c_bu('left'),c_bw('toolbar',0),c_bw('location',0),c_bw('directories',0),c_bw('status',0),c_bw('menubar',0),c_bw('scrollbars',1),c_bw('resizable',1)].join(','));
c_by&&c_by.focus();return c_by;};c_f.registerProperties({c_o:{name:'confirmDialog',value:{}},c_9:'dialogProperties'});c_f.set({idPrefix:'page'});c_g.loadHtml=function(c_0,c_i){c_h(c_i)('');};c_g.showConfirm=function(c_m){this.c_j('confirm','confirm',c_m);};c_g.showInform=function(c_m){this.c_j('alert','info',c_m);};return c_f;}});