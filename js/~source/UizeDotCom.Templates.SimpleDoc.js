/*
	This is an automatically generated module, compiled from the JavaScript template file:
		UizeDotCom.Templates.SimpleDoc.js.jst
*/

/*ScruncherSettings Mappings="=" LineCompacting="TRUE"*/

Uize.module ({
	name:'UizeDotCom.Templates.SimpleDoc',
	required:[
		'Uize.Xml'
	],
	builder:function () {
		var _package = function () {};

		/*** Public Static Methods ***/
			_package.process = function (input) {
				var output = [];
				output.push ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n	<title>',input .title,' ');
				 if (input.section) {
				output.push ('| ',input .section,' ');
				 }
				output.push ('| UIZE JavaScript Framework</title>\r\n	<meta name="keywords" content="UIZE JavaScript Framework ',input .section,' ',input .extraMetaKeywords,'"/>\r\n	<meta name="description" content="',Uize.Xml.toAttributeValue ((input.description || '')),'"/>\r\n	<link rel="alternate" type="application/rss+xml" title="UIZE JavaScript Framework - Latest News" href="http://www.uize.com/latest-news.rss"/>\r\n	<link rel="stylesheet" href="',input .pathToRoot,'css/page.css"/>\r\n	<link rel="stylesheet" href="',input .pathToRoot,'css/page.simpledoc.css"/>\r\n</head>\r\n\r\n<body>\r\n\r\n<script type="text/javascript" src="',input .pathToRoot,'js/Uize.js"></script>\r\n\r\n<h1 class="document-title">\r\n	<a id="page-homeLink" href="',input .pathToRoot,'index.html" title="UIZE JavaScript Framework home"></a>\r\n	',input.displayTitleHtml || input.title,'\r\n</h1>\r\n\r\n<div class="main">\r\n',input .body,'\r\n</div>\r\n\r\n<script type="text/javascript">\r\n\r\nUize.module ({\r\n	required:[\r\n		\'UizeDotCom.Page.Doc.library\',\r\n		\'UizeDotCom.Page.Doc\'\r\n	],\r\n	builder:function () {(window.page = new UizeDotCom.Page.Doc).wireUi ()}\r\n});\r\n\r\n</script>\r\n\r\n</body></html>\r\n\r\n');
				return output.join ('');
			};

		/*** Public Static Properties ***/
			_package.input = {
				title:'string',
				section:'string',
				description:'string',
				extraMetaKeywords:'string',
				pathToRoot:'string',
				displayTitleHtml:'string',
				body:'string'
			};

		return _package;
	}
});

