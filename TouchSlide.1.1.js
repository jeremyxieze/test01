/*
 * TouchSlide v1.1
 * javascript触屏滑动特效插件，移动端滑动特效，触屏焦点图，触屏Tab切换，触屏多图切换等
 * 详尽信息请看官网：http://www.SuperSlide2.com/TouchSlide/
 *
 * Copyright 2013 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * 1.1 宽度自适应（修复安卓横屏时滑动范围不变的bug）
 */
var TouchSlide=function(L){L=L||{};var Aa={slideCell:L.slideCell||"#touchSlide",titCell:L.titCell||".hd li",mainCell:L.mainCell||".bd",effect:L.effect||"left",autoPlay:L.autoPlay||!1,delayTime:L.delayTime||200,interTime:L.interTime||2500,defaultIndex:L.defaultIndex||0,titOnClassName:L.titOnClassName||"on",autoPage:L.autoPage||!1,prevCell:L.prevCell||".prev",nextCell:L.nextCell||".next",pageStateCell:L.pageStateCell||".pageState",pnLoop:"undefined "==L.pnLoop?!0:L.pnLoop,startFun:L.startFun||null,endFun:L.endFun||null,switchLoad:L.switchLoad||null},Ac=document.getElementById(Aa.slideCell.replace("#",""));if(!Ac){return !1}var Ae=function(A,B){A=A.split(" ");var C=[];B=B||document;var D=[B];for(var E in A){0!=A[E].length&&C.push(A[E])}for(var E in C){if(0==D.length){return !1}var G=[];for(var H in D){if("#"==C[E][0]){G.push(document.getElementById(C[E].replace("#","")))}else{if("."==C[E][0]){for(var I=D[H].getElementsByTagName("*"),J=0;J<I.length;J++){var K=I[J].className;K&&-1!=K.search(new RegExp("\\b"+C[E].replace(".","")+"\\b"))&&G.push(I[J])}}else{for(var I=D[H].getElementsByTagName(C[E]),J=0;J<I.length;J++){G.push(I[J])}}}}D=G}return 0==D.length||D[0]==B?!1:D},Ag=function(A,B){var C=document.createElement("div");C.innerHTML=B,C=C.children[0];var D=A.cloneNode(!0);return C.appendChild(D),A.parentNode.replaceChild(C,A),At=D,C},Ai=function(A,B){!A||!B||A.className&&-1!=A.className.search(new RegExp("\\b"+B+"\\b"))||(A.className+=(A.className?" ":"")+B)},Ak=function(A,B){!A||!B||A.className&&-1==A.className.search(new RegExp("\\b"+B+"\\b"))||(A.className=A.className.replace(new RegExp("\\s*\\b"+B+"\\b","g"),""))},Am=Aa.effect,Ao=Ae(Aa.prevCell,Ac)[0],Aq=Ae(Aa.nextCell,Ac)[0],As=Ae(Aa.pageStateCell)[0],At=Ae(Aa.mainCell,Ac)[0];if(!At){return !1}var Aw,Ay,Av=At.children.length,Ax=Ae(Aa.titCell,Ac),Az=Ax?Ax.length:Av,AB=Aa.switchLoad,AD=parseInt(Aa.defaultIndex),AF=parseInt(Aa.delayTime),AH=parseInt(Aa.interTime),AJ="false"==Aa.autoPlay||0==Aa.autoPlay?!1:!0,AL="false"==Aa.autoPage||0==Aa.autoPage?!1:!0,AN="false"==Aa.pnLoop||0==Aa.pnLoop?!1:!0,AP=AD,AR=null,AT=null,f=null,Ab=0,Ad=0,Af=0,Ah=0,Aj=/hp-tablet/gi.test(navigator.appVersion),Al="ontouchstart" in window&&!Aj,An=Al?"touchstart":"mousedown",Ap=Al?"touchmove":"",Ar=Al?"touchend":"mouseup",Au=At.parentNode.clientWidth,AA=Av;if(0==Az&&(Az=Av),AL){Az=Av,Ax=Ax[0],Ax.innerHTML="";var AC="";if(1==Aa.autoPage||"true"==Aa.autoPage){for(var AE=0;Az>AE;AE++){AC+="<li>"+(AE+1)+"</li>"}}else{for(var AE=0;Az>AE;AE++){AC+=Aa.autoPage.replace("$",AE+1)}}Ax.innerHTML=AC,Ax=Ax.children}"leftLoop"==Am&&(AA+=2,At.appendChild(At.children[0].cloneNode(!0)),At.insertBefore(At.children[Av-1].cloneNode(!0),At.children[0])),Aw=Ag(At,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),At.style.cssText="width:"+AA*Au+"px;position:relative;overflow:hidden;padding:0;margin:0;";for(var AE=0;AA>AE;AE++){At.children[AE].style.cssText="display:table-cell;vertical-align:top;width:"+Au+"px"}var AG=function(){"function"==typeof Aa.startFun&&Aa.startFun(AD,Az)},AI=function(){"function"==typeof Aa.endFun&&Aa.endFun(AD,Az)},AK=function(A){var B=("leftLoop"==Am?AD+1:AD)+A,C=function(D){for(var E=At.children[D].getElementsByTagName("img"),G=0;G<E.length;G++){E[G].getAttribute(AB)&&(E[G].setAttribute("src",E[G].getAttribute(AB)),E[G].removeAttribute(AB))}};if(C(B),"leftLoop"==Am){switch(B){case 0:C(Av);break;case 1:C(Av+1);break;case Av:C(0);break;case Av+1:C(1)}}},AM=function(){Au=Aw.clientWidth,At.style.width=AA*Au+"px";for(var A=0;AA>A;A++){At.children[A].style.width=Au+"px"}var B="leftLoop"==Am?AD+1:AD;AO(-B*Au,0)};window.addEventListener("resize",AM,!1);var AO=function(A,B,C){C=C?C.style:At.style,C.webkitTransitionDuration=C.MozTransitionDuration=C.msTransitionDuration=C.OTransitionDuration=C.transitionDuration=B+"ms",C.webkitTransform="translate("+A+"px,0)translateZ(0)",C.msTransform=C.MozTransform=C.OTransform="translateX("+A+"px)"},AQ=function(A){switch(Am){case"left":AD>=Az?AD=A?AD-1:0:0>AD&&(AD=A?0:Az-1),null!=AB&&AK(0),AO(-AD*Au,AF),AP=AD;break;case"leftLoop":null!=AB&&AK(0),AO(-(AD+1)*Au,AF),-1==AD?(AT=setTimeout(function(){AO(-Az*Au,0)},AF),AD=Az-1):AD==Az&&(AT=setTimeout(function(){AO(-Au,0)},AF),AD=0),AP=AD}AG(),f=setTimeout(function(){AI()},AF);for(var B=0;Az>B;B++){Ak(Ax[B],Aa.titOnClassName),B==AD&&Ai(Ax[B],Aa.titOnClassName)}0==AN&&(Ak(Aq,"nextStop"),Ak(Ao,"prevStop"),0==AD?Ai(Ao,"prevStop"):AD==Az-1&&Ai(Aq,"nextStop")),As&&(As.innerHTML="<span>"+(AD+1)+"</span>/"+Az)};if(AQ(),AJ&&(AR=setInterval(function(){AD++,AQ()},AH)),Ax){for(var AE=0;Az>AE;AE++){!function(){var A=AE;Ax[A].addEventListener("click",function(){clearTimeout(AT),clearTimeout(f),AD=A,AQ()})}()}}Aq&&Aq.addEventListener("click",function(){(1==AN||AD!=Az-1)&&(clearTimeout(AT),clearTimeout(f),AD++,AQ())}),Ao&&Ao.addEventListener("click",function(){(1==AN||0!=AD)&&(clearTimeout(AT),clearTimeout(f),AD--,AQ())});var AS=function(A){clearTimeout(AT),clearTimeout(f),Ay=void 0,Af=0;var B=Al?A.touches[0]:A;Ab=B.pageX,Ad=B.pageY,At.addEventListener(Ap,AU,!1),At.addEventListener(Ar,F,!1)},AU=function(A){if(!Al||!(A.touches.length>1||A.scale&&1!==A.scale)){var B=Al?A.touches[0]:A;if(Af=B.pageX-Ab,Ah=B.pageY-Ad,"undefined"==typeof Ay&&(Ay=!!(Ay||Math.abs(Af)<Math.abs(Ah))),!Ay){switch(A.preventDefault(),AJ&&clearInterval(AR),Am){case"left":(0==AD&&Af>0||AD>=Az-1&&0>Af)&&(Af=0.4*Af),AO(-AD*Au+Af,0);break;case"leftLoop":AO(-(AD+1)*Au+Af,0)}null!=AB&&Math.abs(Af)>Au/3&&AK(Af>-0?-1:1)}}},F=function(A){0!=Af&&(A.preventDefault(),Ay||(Math.abs(Af)>Au/10&&(Af>0?AD--:AD++),AQ(!0),AJ&&(AR=setInterval(function(){AD++,AQ()},AH))),At.removeEventListener(Ap,AU,!1),At.removeEventListener(Ar,F,!1))};At.addEventListener(An,AS,!1)};