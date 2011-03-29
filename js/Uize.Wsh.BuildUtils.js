/*
	UIZE JAVASCRIPT FRAMEWORK 2011-03-04

	http://www.uize.com/reference/Uize.Wsh.BuildUtils.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Wsh.BuildUtils',required:['Uize.Url','Uize.Template','Uize.Data','Uize.Data.Simple','Uize.String','Uize.String.Lines','Uize.Json','Uize.Array.Sort','Uize.Test'],builder:function(){var _a=function(){};var _b={};function _c(_d){return _d}function _e(_f){return Uize.Url.from(_f).fileName;}function _g(_h,_i,_j){(_i=new RegExp(_i.source,'g'+(_i.multiline?'m':'')+(_i.ignoreCase?'i':''))).lastIndex=_j||0;return _i.exec(_h);}_a.getHtmlFilesInfo=function(_k,_l){var _m=[];if(!_l)_l=_c;for(var _n= -1,_o=Uize.Wsh.getFiles(_k),_p=_o.length;++_n<_p;){var _f=_o[_n],_q=Uize.Url.from(_f).file;if(/\.html$/i.test(_q)&&_q.charAt(0)!='~'){var _r=Uize.Wsh.readFile(_f),_s=_r.match(/<meta name="keywords" content="(.*?)"\/>/),_t=_r.match(/<meta name="description" content="(.*?)"\/>/),_u=_r.match(/<link rel="image_src" href="(.*?)"\/>/);_m.push({path:_k+'/'+_q,title:_l(_r.match(/<title>(.*?)<\/title>/)[1]),keywords:_s?_s[1]:'',description:_t?_t[1]:'',imageSrc:_u?Uize.Url.toAbsolute(_k,_u[1]):''});}}
Uize.Array.Sort.sortBy(_m,'value.title.toLowerCase ()');return _m;};_a.readSimpleDataFile=function(_v){return Uize.Data.Simple.parse({simple:Uize.Wsh.readFile(_v),collapseChildren:true});};_a.compileJstFile=function(_w){var _x=_b[_w];if(!_x){if(!Uize.Wsh.fileExists(_w))return;_x=_b[_w]=Uize.Template.compile(Uize.Wsh.readFile(_w),{result:'full'});Uize.module({required:_x.required});}return _x.templateFunction;};_a.processJstFile=function(_w,_y){var _x=_a.compileJstFile(_w);_x&&Uize.Wsh.writeFile({path:_w.replace(/\.jst$/,''),text:_x(_y)});};_a.runScripts=function(_z){var _A;if(!Uize.isArray(_z))_z=[_z];for(var _B= -1,_C=_z.length,_D=new ActiveXObject('WScript.Shell'),_E;++_B<_C&& !_A;)if(_E=_D.Run('WScript '+_z[_B],0,true))_A={script:_z[_B],errorCode:_E};return _A;};_a.testAllModules=function(){var _F=/\.js$/i,_G=/\.library\.js$/i,_H=/^[a-zA-Z_\$][a-zA-Z0-9_\$]*\.Test($|\.)/,_I=Uize.Wsh.getFiles(env.moduleFolderPath,function(_f){return _F.test(_f)&& !_G.test(_f)},_e).sort(),_J=Uize.Data.getLookup(_I);var
 _K={},_L=[];function _M(_N){if(!_K[_N]){_K[_N]=1;if(_N){var _O;try{Uize.moduleLoader(_N,function(_P){_O=_P});}catch(_A){}if(_O){var _Q=_N.substr(0,_N.lastIndexOf('.')),_R=new RegExp('Uize\\s*\\.\\s*module\\s*\\(\\s*\\{\\s*name\\s*:\\s*([\'"])'+Uize.escapeRegExpLiteral(_N)+'\\1'),_S=_g(_O,_R);_Q&&_M(_Q);if(_S){var _T=_S.index+_S[0].length,_U=/superclass\s*:\s*(['"])([^'"]*)\1/,_V=_g(_O,_U,_T),_W=/required\s*:\s*((['"])([^'"]*)\2|(\[[^\]]*\]))/,_X=_g(_O,_W,_T);_V&&_M(_V[2]);if(_X){if(_X[4]){var _Y=[];try{_Y=eval('('+_X[4]+')')}catch(_A){}for(var _Z= -1,_0=_Y.length;++_Z<_0;)_M(_Y[_Z]);}else{_M(_X[3]);}}}_L.push(_N);}}}}for(var _1= -1,_2=_I.length,_N;++_1<_2;)_H.test(_N=_I[_1])||_M(_N);var _3=[];for(var _1= -1,_2=(_I=_L).length,_N,_4;++_1<_2;){_N=_I[_1];_3.push(_J[_4=_N.match(/([^\.]*)(\.|$)/)[1]+'.Test.'+_N]?Uize.Test.testModuleTest(_4):Uize.Test.requiredModulesTest(_N));}_a.runUnitTests(Uize.Test.declare({title:'Unit Tests Suite',test:_3}));};_a.runUnitTests=function(_5){if(typeof _5=='string'){Uize.module({
required:_5,builder:function(){_a.runUnitTests(eval(_5))}});}else{var _6=new _5,_7=[];_6.wire({Start:function(_8){_7.push(Uize.String.repeat('\t',_8.source.getDepth())+_8.source.get('title'));},Done:function(_8){var _3=_8.source,_9=_3.get('reasonForFailure');_7.push(Uize.String.repeat('\t',_3.getDepth()+1)+(_3.get('result')?('PASSED!!! (duration: '+_3.get('duration')+'ms)'):('*** FAILED *** '+(_9||''))));_9&&_7.push('','',_3.getSynopsis());if(_3==_6|| !_3.get('result')){(WScript.Arguments.Count()&&WScript.Arguments.Item(0)=='silent')||alert(_3.getSynopsis());Uize.Wsh.writeFile({path:WScript.ScriptName.replace(/\.js$/,'.log'),text:_7.join('\n')});_3.get('result')||WScript.Quit(1);}}});_6.run();}};_a.writeDataModule=function(_ba,_N,_bb){Uize.Wsh.writeFile({path:_ba+'\\'+_N+'.js',text:'Uize.module ({\n'+'\tname:\''+_N+'\',\n'+'\tbuilder:function () {\n'+'\t\treturn function () {\n'+'\t\t\treturn '+Uize.String.Lines.indent(Uize.Json.to(_bb),3,'\t',false)+';\n'+'\t\t};\n'+'\t}\n'+'});\n'});};return _a;}});