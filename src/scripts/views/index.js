
//var IScroll = require('../lib/iscroll-probe.js');

//document.body.innerHTML += indexTpl;
//
//window.onload = function(){
//	var myScroll = new IScroll('#index-scroll');
//}

var indexTpl = require('../tpl/index.string');

SPA.defineView('index',{
	html: indexTpl,
	plugins : ['delegated'],
});
