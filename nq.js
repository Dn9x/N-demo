var path = require('path');
var fs = require('fs');

/**  
 * 替换短句模板  
 */  
function renderTpl(tpl, op) {   
    return tpl.replace(/<%\=(\w+)%>/g, function(e1, e2) {   
        return op[e2] != null ? op[e2] : "";   
    });   
}

exports.render = function(name, titles, json){
	var cont1 = renderTpl(readFile('header'), {title: titles}); 

	var tpl = readFile(name);

	var cont2 = '';
	for(var jn in json){
		cont2 += renderTpl(tpl, json[jn]); 
	}

	var cont3 = readFile('footer');

	return cont1+cont2+cont3;
}

function readFile(name){
	//console.log(path.join(__dirname, 'views', name));
	var cont = fs.readFileSync(path.join(__dirname, 'views', name) + '.html', 'utf8');

	return cont;
}
