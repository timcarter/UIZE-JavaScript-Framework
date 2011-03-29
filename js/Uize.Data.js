/*
	UIZE JAVASCRIPT FRAMEWORK 2011-02-20

	http://www.uize.com/reference/Uize.Data.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Data',builder:function(){var _a=function(){},_b='string',_c=true,_d=false,_e=null,_f;var _g={};_a.getColumn=function(_h,_i,_j){var _k=[];if(_h){var _l=_j?{}:_e;for(var _m= -1,_n=_h.length;++_m<_n;){var _o=_h[_m][_i];if(!_j||(!_l[_o]&&(_l[_o]=1)))_k.push(_o);}}return _k;};_a.findRecords=function(_p,_q){var _r=[];if(_p){for(var _s= -1,_t=_p.length,_u;++_s<_t;)Uize.recordMatches(_u=_p[_s],_q)&&_r.push(_u);}return _r;};_a.getKeys=function(_v){var _k=[];if(typeof _v!=_b)for(var _w in _v)_k.push(_w);return _k;};_a.getTotalKeys=function(_v){var _k=0;if(typeof _v!=_b)for(var _w in _v)_k++;return _k;};_a.getLookup=function(_x,_y,_z){var _A=_z?{constructor:_f,toLocaleString:_f,toString:_f,valueOf:_f}:{};if(arguments.length==1)_y=_c;if(_x!=_f){for(var _B= -1,_C=_x.length;++_B<_C;)_A[_x[_B]]=_y;}return _A;};_a.getReverseLookup=function(_v,_z){var _A=_a.getLookup(_e,0,_z);if(typeof _v!=_b)for(var _w in _v)_A[_v[_w]+'']=_w;return _A;};_a.getValues=function(_v){if(Uize.isArray(_v))return _v;
var _k=[];if(typeof _v!=_b)for(var _w in _v)_k.push(_v[_w]);return _k;};_a.isEmpty=function(_v){if(_v&&typeof _v=='object'&&_v.constructor!=_g.constructor)_v=_v.valueOf();if(!_v)return _c;if(Uize.isArray(_v))return!_v.length;if(typeof _v=='object'){for(var _w in _v)return _d;return _c;}return!_v;};_a.emptyOut=function(_D){if(typeof _D=='object'&&_D){if(Uize.isArray(_D)){_D.length=0;}else{for(var _E in _D)delete _D[_E];}}return _D;};_a.filter=function(_v,_F){var _G=this,_k={};if(_v&&_F){for(var _H= -1,_I=_F.length;++_H<_I;){var _J=_F[_H];if(_J in _v)_k[_J]=_v[_J];}}return _k;};_a.identical=function(_K,_L,_M){if(!_M)_M=_g;var _N=_M.equality,_O=_N=='loose',_P= !_O&&_N!='type',_Q=_M.allowConjoined!==_d;function _R(_K,_L){var _S,_T=typeof _K,_U=_T==typeof _L,_V=_T=='object';if(_U&&_V&&_K&&_L){var _W=_K.constructor;if(_K==_L){_S=_Q;}else if(_S=_W==_L.constructor){if(_W==Date||_W==String||_W==Number||_W==Boolean||_W==RegExp){_S=_K+''==_L+'';}else if(_S=(typeof _K.length!='number'||_K.length===_L.length)&&
_a.getTotalKeys(_K)==_a.getTotalKeys(_L)){for(var _J in _K){if(!(_J in _L)|| !_R(_K[_J],_L[_J])){_S=_d;break;}}}}}else{_S=(_O?_K==_L:(_U&&(_P?_K===_L:(!_V|| !_K== !_L))))||(_U&&_T=='number'&&isNaN(_K)&&isNaN(_L));}return _S;}return _R(_K,_L);};_a.conjoined=function(_K,_L){function _X(_v){var _Y=[];function _Z(_v){if(typeof _v=='object'){if(!Uize.isIn(_Y,_v)){_Y.push(_v);for(var _J in _v)_Z(_v[_J]);}}}_Z(_v);return _Y;}var _0=_d,_1=_X(_K),_2=_1.length,_3=_X(_L);for(var _4= -1;++_4<_2&& !_0;)_0=Uize.isIn(_3,_1[_4]);return _0;};_a.clones=function(_K,_L){return(_a.identical(_K,_L,{allowConjoined:_d})&& !_a.conjoined(_K,_L));};_a.intersection=function(_K,_L){var _k={};if(_K&&_L){for(var _J in _K){var _5=_K[_J];if(_L[_J]===_5)_k[_J]=_5;}}return _k;};_a.map=function(_6,_D,_7){if(typeof _D=='number'){_D=new Array(_D);if(typeof _7!='object')_7=_D;}var _8=Uize.isArray(_D);if(typeof _7!='object')_7=_7===_d?_D:_8?[]:{};if(typeof _6==_b)_6=new Function('value','key','return '+_6);function _9(_w){
var _ba=_6.call(_D,_D[_w],_w);if(_7)_7[_w]=_ba;}if(_8){for(var _bb= -1,_bc=_D.length;++_bb<_bc;)_9(_bb);}else{for(var _w in _D)_9(_w);}return _7;};_a.min=function(_v){return Math.min.apply(0,_a.getValues(_v));};_a.max=function(_v){return Math.max.apply(0,_a.getValues(_v));};return _a;}});