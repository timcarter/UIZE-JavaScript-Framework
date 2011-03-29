/*
	UIZE JAVASCRIPT FRAMEWORK 2011-03-23

	http://www.uize.com/reference/Uize.Color.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Color',builder:function(){var _a;var _b,_c=/(\w+)\s*\(\s*([^,\)]+)\s*,\s*([^,\)]+)\s*,\s*([^,\)]+)\s*(?:,\s*([^,\)]+)\s*)?\)/i;function _d(_e){return Uize.constrain(Math.round(_e),0,255)||0;}function _f(_g){var _h;for(var _i in _g)(_h=_g[_i])in _b||(_b[_h]=_i);}var _j=function(){this.tuple=[];_k.from.apply(this,arguments);},_k=_j.prototype;_k.from=function(_l){var _m=this;if(_l instanceof _j){_m.encoding=_l.encoding;_n(_l.tuple,_m.tuple);}else{var _o;if(arguments.length==3){_o='RGB array';_l=_p(arguments);}else{if(_l==_a||typeof _l=='number'){_o='RGB int';}else if(typeof _l=='string'){if(_g[_l]!=_a||_g[_l.toLowerCase()]!=_a){_o='name';}else{var _q=_l.match(_c);_o=_q?_q[1].toUpperCase()+' string':_l.charCodeAt(0)==35?'#hex':'hex';}}else if(typeof _l=='object'){if(_l.length){_o='RGB array';}else if('red'in _l){_o='RGB object';}else if('lightness'in _l){_o='HSL object';}else{for(_o in _l)break;_l=_l[_o];}}}var _r=_s[_o];if(!_r){_r=_s[_o='RGB int'];_l=0;}_r.from(_l,_m.tuple);
_m.encoding=_o;}return _m;};_k.getTuple=function(_t){var _u=_v[_s[this.encoding].colorSpace],_w=_t?_v[_t]||_v[_s[_t].colorSpace]:_u;return(_w!=_u?_w.fromHsl(_u.toHsl(this.tuple)):this.tuple);};_k.setEncoding=function(_x){_n(this.getTuple(_x&&_x!='color'?_x:(_x='hex')),this.tuple);this.encoding=_x;return this;};_k.to=function(_x){return(_x=='color'?new _j(this):_s[_x||this.encoding].to(this.getTuple(_x)));};_j.adapter=function(_y,_z){return{aToB:function(_e){return Uize.Color.to(Uize.pairUp(_y,_e),_z)},bToA:function(_e){return Uize.Color.to(Uize.pairUp(_z,_e),_y)}}};_j.defineColors=function(_A){Uize.copyInto(_g,_A);_b&&_f(_A);};_j.from=function(){return _k.from.apply(new _j,arguments)};var _p=_j.cloneTuple=function(_B){var _C=_B[3];return(isNaN(_C)||_C==_a?[_B[0],_B[1],_B[2]]:[_B[0],_B[1],_B[2],_C]);};var _D=_j.setTuple=function(_B,_E,_F,_G,_C){_B[0]= +_E;_B[1]= +_F;_B[2]= +_G;_B[3]= +_C;};var _n=_j.setTupleFromArray=function(_H,_B){_D(_B,_H[0],_H[1],_H[2],_H[3]);};var _I=_j.setTupleFromString=function(_J,_B){
var _q=_J.match(_c);_D(_B,parseFloat(_q[2]),parseFloat(_q[3]),parseFloat(_q[4]),parseFloat(_q[5]));};_j.to=function(_K,_o){return _L.from(_K).to(_o||'hex')};var _v=_j.colorSpaces={sRGB:{fromHsl:function(_B){var _M=_B[1]/100,_N=_B[2]/100;if(_M){var _O=_N<.5?_N*(1+_M):_N+_M-_N*_M,_P=2*_N-_O;var _Q=_B[0]/360;function _R(_S){return((_S=(_S+1)%1)<1/6?_P+(_O-_P)*6*_S:_S<.5?_O:_S<2/3?_P+(_O-_P)*6*(2/3-_S):_P)*255;}return[_R(_Q+1/3),_R(_Q),_R(_Q-1/3)];}else{var _T=_N*255;return[_T,_T,_T];}},toHsl:function(_B){var _U=_B[0]/255,_V=_B[1]/255,_W=_B[2]/255,_X=Math.max(_U,_V,_W),_Y=Math.min(_U,_V,_W),_Z=_X+_Y,_0=_X-_Y,_Q=0,_M=0,_N=_Z/2;if(_0){_M=_0/(_N<.5?_Z:2-_Z);_Q=((_U==_X?6+(_V-_W)/_0:_V==_X?2+(_W-_U)/_0:4+(_U-_V)/_0)*60)%360;}function _1(_S){return Uize.constrain(_S*100,0,100)}return[_Q,_1(_M),_1(_N)];},tuple:[{name:'red',min:0,max:255},{name:'green',min:0,max:255},{name:'green',min:0,max:255}]},HSL:{fromHsl:Object,toHsl:Object,tuple:[{name:'hue',min:0,max:360},{name:'saturation',min:0,max:100},
{name:'lightness',min:0,max:100}]}};function _2(_l,_B){if(_l.charCodeAt(0)==35)_l=_l.slice(1);var _3=_l.length;_l='0x'+_l-0;_3==1?_D(_B,_l*=17,_l,_l):_3==3?_D(_B,((_l>>8)&15)*17,((_l>>4)&15)*17,(_l&15)*17):_D(_B,(_l>>16)&255,(_l>>8)&255,_l&255);}var _s=_j.encodings={hex:{colorSpace:'sRGB',from:_2,to:function(_B){return(0x1000000+_s['RGB int'].to(_B)).toString(16).slice(1);}},'#hex':{colorSpace:'sRGB',from:_2,to:function(_B){return'#'+_s['hex'].to(_B)}},name:{colorSpace:'sRGB',from:function(_i,_B){_s['RGB int'].from(_i in _g?_g[_i]:_g[_i.toLowerCase()],_B);},to:function(_B){if(!_b){_b={};_f(_g);}return _b[_s['RGB int'].to(_B)]||_s['hex'].to(_B);}},'RGB array':{colorSpace:'sRGB',from:_n,to:_p},'RGB int':{colorSpace:'sRGB',from:function(_4,_B){_4=Uize.constrain(Math.round(_4),0,16777215);_D(_B,(_4>>16)&255,(_4>>8)&255,_4&255);},to:function(_B){return(_d(_B[0])<<16)+(_d(_B[1])<<8)+_d(_B[2]);}},'RGB object':{colorSpace:'sRGB',from:function(_5,_B){_D(_B,_5.red,_5.green,_5.blue);},
to:function(_B){return{red:_B[0],green:_B[1],blue:_B[2]}}},'RGB string':{colorSpace:'sRGB',from:_I,to:function(_B){return'rgb('+_d(_B[0])+','+_d(_B[1])+','+_d(_B[2])+')';}},'HSL array':{colorSpace:'HSL',from:_n,to:_p},'HSL object':{colorSpace:'HSL',from:function(_6,_B){_D(_B,_6.hue,_6.saturation,_6.lightness);},to:function(_B){return{hue:_B[0],saturation:_B[1],lightness:_B[2]}}},'HSL string':{colorSpace:'HSL',from:_I,to:function(_B){function _7(_8){return Uize.constrain(Math.round(_8),0,100)+'%'}return('hsl('+Math.round(_B[0])+','+_7(_B[1])+','+_7(_B[2])+')');}}};var _g=_j.colors={white:16777215,silver:12632256,gray:8421504,black:0,navy:128,blue:255,aqua:65535,teal:32896,green:32768,olive:8421376,lime:65280,maroon:8388608,red:16711680,orange:16753920,yellow:16776960,purple:8388736,fuchsia:16711935};var _L=new _j,_9=new _j;return _j;}});