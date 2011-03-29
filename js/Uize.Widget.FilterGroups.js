/*
	UIZE JAVASCRIPT FRAMEWORK 2011-03-24

	http://www.uize.com/reference/Uize.Widget.FilterGroups.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FilterGroups',required:['Uize.Widget.Options.FilterGroup','Uize.Data'],builder:function(c_a){var c_b=true,c_c=null;var c_d=c_a.subclass(c_c,function(){var c_e=this;c_e.c_f=c_e.c_g;}),c_h=c_d.prototype;c_h.c_i=function(){var c_e=this;if(c_e.isWired){var c_j=[];for(var c_k= -1;++c_k<c_e.c_l.length;){var c_m=c_e.children['filterGroup'+c_k].valueOf();c_m!=c_c&&c_j.push(c_m);}if(!Uize.Data.clones(c_j,c_e.c_f)){c_e.c_f=c_j;c_e.set({c_g:c_j});}}};c_h.c_n=function(){var c_e=this;if(c_e.isWired){var c_j=c_e.c_g,c_o=c_e.c_l,c_p=c_e.children,c_q={};for(var c_k= -1;++c_k<c_o.length;){var c_r=c_p['filterGroup'+c_k],c_s=c_c;for(var c_t= -1;++c_t<c_j.length;){var c_m=c_j[c_t];if(!c_q[c_m]&&c_r.getValueNoFromValue(c_m)> -1){c_s=c_m;c_q[c_m]=c_b;break;}}c_r.set({value:c_s});}}};c_h.wireUi=function(){var c_e=this;if(!c_e.isWired){var c_j=c_e.c_g,c_o=c_e.c_l;for(var c_k= -1;++c_k<c_o.length;)c_e.addChild('filterGroup'+c_k,Uize.Widget.Options.FilterGroup,c_o[c_k]).wire('Changed.value',
function(){c_e.c_i()});c_a.prototype.wireUi.call(c_e);c_e.c_n();c_e.c_i();}};c_d.registerProperties({c_u:{name:'allowMultiple',onChange:function(){var c_e=this;!c_e.c_u&&c_e.c_g.length>1&&c_e.set({c_g:c_e.c_g.splice(0,1)});},value:c_b},c_g:{name:'value',conformer:function(c_g){return this.c_u||c_g.length==1?c_g:c_g.splice(0,1)},onChange:c_h.c_n,value:[]},c_l:{name:'values',value:[]}});return c_d;}});