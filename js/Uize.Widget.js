/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Widget.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget',required:'Uize.Node',builder:function(b_a){var b_b=null,b_c=true,b_d=false,b_e='string',b_f=Uize.isFunction,b_g='concatenated',b_h,b_i=Uize.Node,b_j=b_i.doForAll,b_k=b_i.isNode,b_l=b_i.getById;var b_m=b_a.subclass(function(){this.children=this.b_n={};}),b_o=b_m.prototype;b_o.b_p=function(){if(window['$'+this.b_q]&&(!this.parent||this.b_q!=this.parent.b_q)){var b_r='$'+this.b_q;this.set(window[b_r]);window[b_r]=b_h;}};b_o.b_s=function(b_t,b_u,b_v,b_w){return((b_w==b_g|| !b_w)&&b_t!=b_h?(b_t+(b_v!==''?'_':'')+b_v):(b_w=='same as parent'?b_t:b_u));};var b_x={b_y:b_d,b_z:b_c};b_o.b_A=function(){(this.b_B=='inherit'?(this.parent||b_x).b_y:this.b_B)!=this.b_y&&this.set({b_y:!this.b_y});};b_o.b_C=function(){(this.b_D=='inherit'?(this.parent||b_x).b_z:this.b_D)!=this.b_z&&this.set({b_z:!this.b_z});};b_o.b_E=function(b_F,b_G,b_H){var b_I='show'+Uize.capFirstChar(b_F);this.getProvider(b_I)?this.callInherited(b_I)(b_G):setTimeout(function(){var b_J=b_H();
(b_G.callback||(b_J?b_G.yesHandler:b_G.noHandler)||function(){})(b_J)},0);};b_o.confirm=function(b_G){this.b_E('confirm',b_G,function(){return confirm(b_G.message)});};b_o.showInform=b_o.showConfirm=b_h;b_o.inform=function(b_G){this.b_E('inform',b_G,function(){alert(b_G.message);return b_c})};b_o.ajax=function(b_K,b_L){this.callInherited('performAjax')(b_K,Uize.isFunction(b_L)?{callback:b_L}:b_L||{})};b_o.localize=function(b_M,b_N,b_O){var b_P,b_Q=this;while(!(b_P=b_Q.b_R?b_Q.b_R[b_M]:b_h)&&(b_Q=b_Q.parent));return(b_f(b_P)?b_P.call(this,b_N):Uize.substituteInto(b_P,b_N,b_O||'{KEY}'));};b_o.buildHtml=function(b_S){var b_T=this,b_U=b_T.b_U;if(b_U!=b_h){var b_V=b_T.b_W||b_T.getNode('shell')||b_T.getNode();if(b_U===b_c){b_U=b_T.b_U=Uize.Template&&b_V?{process:Uize.Template.compile((b_i.find({root:b_V,tagName:'SCRIPT',type:'text/jst'})[0]||b_V).innerHTML,{openerToken:'[%',closerToken:'%]'})}:b_h;if(!b_U)return;}b_T.b_q||b_T.set({b_q:b_T.instanceId});var b_X=Uize.copyInto({pathToResources:Uize.pathToResources,
blankGif:b_m.getBlankImageUrl()},b_S||b_T.get());b_i.injectHtml(b_V||document.body,typeof b_U!=b_e&&b_f(b_U.process)?b_U.process.call(b_T,b_X):Uize.substituteInto(b_f(b_U)?b_T.b_U(b_X):b_U,b_X),b_T.b_Y||(b_V?'inner replace':'inner bottom'));b_T.b_Z=b_b;b_T.set({b_0:b_c});}};function b_1(b_2,b_3){b_o[b_2+'Node'+b_3]=new Function('arguments.length'+'?(arguments[0]=this.getNode(arguments[0]))'+':(arguments[arguments.length++]=this.getNode());'+'return Uize.Node.'+b_2+b_3+'.apply(0,arguments)');}b_o.getNode=function(b_4){if(b_4==b_b){if(b_4===b_b)return b_b;b_4='';}var b_T=this;if(b_T.b_5&&typeof b_4==b_e){var b_6=b_T.b_5[b_4];if(b_6!==b_h)b_4=b_6;}if(typeof b_4==b_e){return b_l(b_4,b_T.b_q,b_T.b_Z||(b_T.b_Z={}));}else if(b_k(b_4)){return b_4;}else{var b_7=b_b;b_j(b_4,function(b_8){(b_7||(b_7=[])).push(b_8)},b_T.b_q,b_T.b_Z||(b_T.b_Z={}));return b_7;}};b_1('get','Style');b_1('get','Value');b_o.flushNodeCache=function(b_9){if(this.b_Z)b_9==b_h?(this.b_Z=b_b):delete this.b_Z[b_9];};b_o.globalizeNode=function(b_ba){
var b_T=this,b_bb=document.body;b_j(b_T.getNode(b_ba),function(b_8){if(b_8.parentNode!=b_bb){(b_T.b_bc||(b_T.b_bc=[])).push(b_8);b_i.setStyle(b_8,{position:'absolute',left:-10000,top:-10000});b_bb.appendChild(b_8);}});};b_1('display','');b_1('inject','Html');b_o.removeNode=function(b_ba){b_i.remove(this.getNode(b_ba));this.flushNodeCache(b_ba);};b_1('set','Properties');b_1('set','Opacity');b_1('set','Style');b_1('set','ClipRect');b_1('set','InnerHtml');b_1('set','Value');b_1('show','');b_o.wireNode=function(b_ba,b_bd,b_be){arguments.length==3?b_i.wire(this.getNode(b_ba),b_bd,b_be,this.instanceId):b_i.wire(this.getNode(b_ba),b_bd,this.instanceId);};b_o.unwireNode=function(b_ba,b_bd,b_be){if(b_ba!==b_h)b_ba=this.getNode(b_ba);arguments.length==2&&typeof b_bd=='object'&&b_bd&& !b_bd.virtualDomEvent?b_i.unwire(b_ba,b_bd,this.instanceId):b_i.unwire(b_ba,b_bd,b_be,this.instanceId);};b_o.unwireNodeEventsByMatch=function(b_ba,b_bf){this.unwireNode(b_ba,(b_bf||(b_bf={})).eventName,b_bf.handler);};
b_o.addChild=function(b_v,b_bg,b_bh){if(!b_bh)b_bh={};var b_T=this,b_q=b_T.b_q,b_bi=Uize.isInstance(b_bg)?b_bg:b_b,b_u='idPrefix'in b_bh?b_bh.idPrefix:b_bh.node,b_bj=b_bh.idPrefixConstruction;b_bh.parent=b_T;if(b_v==b_h)b_v=b_bh.name;if(b_bi){if(b_v==b_h)b_v=b_bi.b_bk;if(b_u==b_h)b_u=b_bi.b_q;if(!b_bj)b_bj=b_bi.b_w;}if(!b_bj)b_bj=b_u==b_h?b_g:'explicit';b_bh.idPrefixConstruction=b_bj;b_bh.idPrefix=b_T.b_s(b_q,b_u,b_v,b_bj);b_bh.name=b_v;b_bi&&b_bi.set(b_bh);return b_T.b_n[b_v]=b_bi||new b_bg(b_bh);};b_o.removeChild=function(b_bl){var b_n=this.b_n,b_v=typeof b_bl==b_e||Uize.isNumber(b_bl)?b_bl:b_bl.b_bk,b_bi=b_n[b_v];if(b_bi){b_bi.unwireUi();delete b_bi.parent;delete b_n[b_v];}};b_o.getProvider=function(b_bm){var b_bn=this,b_bo;while(((b_bo=b_bn.get(b_bm))==='inherit'||b_bo===b_h)&&(b_bn=b_bn.parent));return b_bn;};b_o.getInherited=function(b_bm){var b_bp=this.getProvider(b_bm);return b_bp?b_bp.get(b_bm):b_h;};b_o.setInherited=function(b_bh){var b_bp;for(var b_bq in b_bh){if(b_bp=this.getProvider(b_bq))
b_bp.set(b_bq,b_bh[b_bq]);}};b_o.callInherited=function(b_bm){var b_T=this;return(function(){var b_bp=b_T.getProvider(b_bm),b_7;if(b_bp){var b_br=b_bp.get(b_bm);if(b_f(b_br))b_7=b_br.apply(b_bp,arguments);}return b_7;});};b_o.kill=function(){Uize.callOn(this.b_n,'kill');b_a.prototype.kill.call(this);};b_o.insertOrWireUi=function(){this.b_0?this.wireUi():this.insertUi();};b_o.insertUi=function(){this.buildHtml();this.wireUi();};b_o.removeUi=function(){this.unwireUi();this.removeNode();b_i.remove(this.b_bc);this.b_bc=b_h;Uize.callOn(this.b_n,'removeUi');this.set({b_0:b_d});};b_o.updateUi=function(){};b_o.wireUi=function(){if(!this.isWired){this.b_p();this.set({wired:b_c});var b_n=this.b_n;for(var b_v in b_n)b_n[b_v].insertOrWireUi();this.updateUi();}};b_o.unwireUi=function(){if(this.isWired){this.b_Z=b_b;this.unwireNode();Uize.callOn(this.b_n,'unwireUi');this.set({wired:b_d});}};b_m.getBlankImageUrl=function(){return Uize.pathToResources+'Uize/blank.gif';};b_m.spawn=function(b_bh,b_bs){var b_T=this,b_bt=[],
b_bn,b_bu=b_bs&&b_bs.b_q?b_bs.b_q+'_':'',b_bv=b_bu.length;b_j(Uize.Node.find(b_bh.idPrefix),function(b_8){b_bh.idPrefix=b_8;b_bs?(b_bn=b_bs.addChild(b_8.id.slice(0,b_bv)==b_bu?b_8.id.slice(b_bv):'generatedChildName'+Uize.getGuid(),b_T,b_bh)):(b_bn=new b_T(b_bh)).insertOrWireUi();b_bt.push(b_bn);});return b_bt;};b_m.registerProperties({b_0:{name:'built',value:b_c},b_B:{name:'busy',onChange:b_o.b_A,value:'inherit'},b_y:{name:'busyInherited',onChange:function(){Uize.callOn(this.b_n,b_o.b_A)},value:b_d},b_W:'container',b_D:{name:'enabled',onChange:b_o.b_C,value:'inherit'},b_z:{name:'enabledInherited',onChange:function(){Uize.callOn(this.b_n,b_o.b_C)},value:b_c},b_U:'html',b_q:{name:'idPrefix|node',conformer:function(b_q){return b_k(b_q)?(b_q.id||(b_q.id=Uize.getGuid())):b_q;},onChange:function(){var b_T=this,b_q=b_T.b_q;b_T.b_Z=b_b;if(b_q!=b_h){b_T.b_p();var b_n=b_T.b_n,b_bi;for(var b_v in b_n)(b_bi=b_n[b_v]).set({b_q:b_T.b_s(b_q,b_bi.b_q,b_v,b_bi.b_w)});if(b_T.isWired){b_T.set({wired:b_d});b_T.wireUi();}}}},
b_w:'idPrefixConstruction',b_Y:'insertionMode',b_R:'localized',b_bk:'name',b_5:'nodeMap',isWired:{name:'wired',value:b_d}});return b_m;}});