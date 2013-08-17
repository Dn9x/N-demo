exports.route = function(handle, pathname){
	console.log(pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		return "else";
		console.log('else :' + pathname);
	}
}