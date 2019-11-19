(function() {
	function pxToRem(){
		var html = document.getElementsByTagName('html')[0];
		var windowWidth = document.documentElement.clientWidth;
		var padReg = /(iPad|iPod|PAD|PlayBook|Tablet)/i;
		var phoneReg = /(iPhone|iPhone OS|Phone|iOS|Android)/i;

		var content = 'width=device-width,initial-scale=1.0, user-scalable=no';
		var W = windowWidth;
		var bodyStyleContent = '';

		var head = document.getElementsByTagName('head')[0];

		//pad端展示
		if(padReg.test(navigator.userAgent)){
			content="target-densitydpi=device-dpi, width=375px, user-scalable=no";
			W = windowWidth;
			bodyStyleContent = '';
			//phone端展示
		}else if(phoneReg.test(navigator.userAgent)){
			W = windowWidth;
			bodyStyleContent = '';
		}else{
			//pc端展示
			W = windowWidth > 520 ? 520 : windowWidth;
			bodyStyleContent = 'body {max-width: 520px;}';
		}

		//设置rem基数
		html.style.fontSize = W / 7.5+ 'px';

		//设置窗口最大宽度
		var bodyStyle = document.getElementById('__bodyStyle');
		if(!bodyStyle){
			bodyStyle = document.createElement('style');
			bodyStyle.id = '__bodyStyle';
			bodyStyle.type = 'text/css';
			head.append(bodyStyle);
		}
		bodyStyle.innerHTML = bodyStyleContent;

		//设置viewport
		var metas = document.getElementsByTagName('meta');
		var viewport = null;
		for(var i=0; i<metas.length; i++){
			if(metas[i].name === 'viewport'){
				viewport = metas[i]
			}
		}
		if(!viewport){
			viewport = document.createElement('meta');
			viewport.name = 'viewport';
			viewport.content= content;
			head.append(viewport);
		}else{
			viewport.content = content;
		}
	}

	pxToRem();
	window.addEventListener('resize',pxToRem);
})();
