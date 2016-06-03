
var tplGuide = require('../tpl/guide.string');


SPA.defineView('guide',{
	html : tplGuide,
	plugins : ['delegated'],
	bandActions : {
		'goto.index' : function(){
			SPA.open('index');
		}
	}
});
