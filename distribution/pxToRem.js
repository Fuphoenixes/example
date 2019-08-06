function pxToRem(){
  var html = document.documentElement;
  var windowWidth = html.clientWidth;
  var padReg = /(iPad|iPod|PAD)/i;
  var phoneReg = /(iPhone|iPhone OS|Phone|iOS|Android)/i;
  var content = 'width=device-width,initial-scale=1.0';
  var head = document.getElementsByTagName('head')[0];
  var body = document.getElementsByTagName('body')[0];
  //pc端展示
  var W = windowWidth > 520 ? 520 : windowWidth;
  body.style.maxWidth = '520px';
  //pad端展示
  if(padReg.test(navigator.userAgent)){ 
    content="target-densitydpi=device-dpi, width=375px, user-scalable=no";
    W = windowWidth;
    body.style.maxWidth = '';
  //phone端展示
  }else if(phoneReg.test(navigator.userAgent)){  
    W = windowWidth;
    body.style.maxWidth = '';
  }

  html.style.fontSize = W / 7.5+ 'px';

  var metas = document.getElementsByTagName('meta');
  var viewport = [].filter.call(metas,function(meta){
    return meta.name === 'viewport'
  })[0];
  if(!viewport){
    var viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content= content;
    head.append(viewport);
  }else{
    viewport.content = content;
  }
}
pxToRem();
window.addEventListener('load',pxToRem)
window.addEventListener('resize',pxToRem);