var tpl = require('./nq.js');

function start(response){
	var json = [{key: "first", value: "这是第一行"}, {key: "second", value: "这是第2行"}, {key: "third", value: "这是第3行"}];

	var html = tpl.render("index", "this is Home", json);

	console.log('this is start');

	return html;
}

function upload(response){
	console.log('this is upload');
	return "upload";
}

exports.start = start;
exports.upload = upload;