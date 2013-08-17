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

function render(name, titles, json){
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
	var cont = fs.readFileSync(path.join(__dirname, 'views', name) + '.html', 'utf8');

	return cont;
}

var tpl = '<li key="<%=key%>"><%=value%></li>';

//var html = renderTpl(tpl, {key: "line1", value: "这是第一行"}); 

var json = [{key: "first", value: "这是第一行"}, {key: "second", value: "这是第2行"}, {key: "third", value: "这是第3行"}];

//var json = [{key: "first", value: "这是第一行"}];

var html = render("index", "this is Home", json);


console.log(html);