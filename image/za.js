var _za_version="1909231847";try{if(ZA&&ZA.version)throw new Error("Already loaded");var ZA=function(){var o=encodeURIComponent,n={t:"https://za.zalo.me"},i={o:"__zi",i:"st",s:"ozi",_:"_zsfp",u:"cdm",l:"_zirc"},e={g:"/v3/w/_zaf.gif",m:"/v3/le",p:"/v3/fp",h:"/static/v3/index.html?origin="},a={M:1,S:21},s={T:"checkFP",A:"reqVid",P:"resFP",O:"resVid"},c={},_="resRd"+Date.now(),u={R:function(t,n){if("string"==typeof n)for(var e=t+"=",r=n.split(/[;&]/),o=0;o<r.length;o++){for(var i=r[o];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(e))return i.substring(e.length,i.length)}},D:function(t){return t=t||window.location.pathname+window.location.search},V:function(t){(t=t||{}).url=t.url||"",t.params=t.params||{},t.success=t.success||function(){},t.fail=t.fail||function(){};var n=new XMLHttpRequest;n.addEventListener("readystatechange",function(){4===this.readyState&&(200===this.status?t.success(this.responseText):t.fail(this.status))}),n.open("POST",t.url),n.withCredentials=!0,n.setRequestHeader("content-type","application/x-www-form-urlencoded"),n.send(u.k(t.params))},F:function(t){(t=t||{}).url=t.url||"",t.params=t.params||{},t.success=t.success||function(){},t.fail=t.fail||function(){};var n=new XMLHttpRequest;n.addEventListener("readystatechange",function(){4===this.readyState&&(200===this.status?t.success(this.responseText):t.fail(this.status))}),n.open("GET",t.url+"?"+u.k(t.params)),n.send()},k:function(t){var n="",e=!0;for(var r in t)!1===e?n+="&":e=!1,n+=r+"="+o(t[r]);return n},I:function(t,n){try{n=n||window.location.href,t=t.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(n);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null}catch(t){return""}},N:function(t){var n=document.location.href,e=n.split("?");if(2<=e.length){for(var r=e.shift(),o=e.join("?"),i=encodeURIComponent(t)+"=",a=o.split(/[&;]/g),s=a.length;0<s--;)-1!==a[s].lastIndexOf(i,0)&&a.splice(s,1);n=r+(1<=a.length?"?"+a.join("&"):""),window.history.replaceState("",document.title,n)}return n},C:function(t){for(var n=document.getElementsByTagName("script"),e=0;e<n.length;e++)if(-1<n[e].src.indexOf(t))return n[e].src;return null},W:function(t){(t=t||{}).url=t.url||"",t.params=t.params||{};var n=document.createElement("img");n.setAttribute("width","0"),n.setAttribute("height","0"),n.setAttribute("onload","this.parentNode.removeChild(this)"),n.setAttribute("onerror","this.parentNode.removeChild(this)"),n.src=t.url+"?"+this.k(t.params)+"&r="+(new Date).getTime();var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)},G:function(t){if(!t||""===t)return 1;for(var n=0,e=0,r=t.length-1;0<=r;r--){var o=parseInt(t.charCodeAt(r));0!=(e=266338304&(n=(n<<6&268435455)+o+(o<<14)))&&(n^=e>>21)}return n},B:function(t){t=t||l.J;var n="Windows";return/windows 4.10/.test(t)?n="Windows 98":/windows 4.90/.test(t)?n="Windows ME":/windows nt 5.0/.test(t)?n="Windows 2000":/windows nt 5.1/.test(t)?n="Windows XP":/windows nt 6.0/.test(t)?n="Windows Vista":/windows nt 6.1/.test(t)?n="Windows 7":/windows nt 6.2/.test(t)?n="Windows 8":/windows nt 6.3/.test(t)&&(n="Windows 8.1"),n},Z:function(){if(/windows phone/.test(l.J))return"Windows Phone";var t=l.L.split(" ")[0];return"win32"===t.toLowerCase()||"win64"===t.toLowerCase()?t=this.B():"linux"===t.toLowerCase()&&(0<=l.J.indexOf("android")?t="Android":0<=l.J.indexOf("mac os")&&(t="iOS")),t},U:function(n){try{var t=document.cookie;if((t=t&&t.split(";"))&&0<t.length)for(var e=t.length-1;0<=e;e--){var r=t[e].trim().split("=");if(r&&1<r.length&&r[0]===n)return r[1]}return null}catch(t){return n===i.o&&g("Cant get vid: "+t+" | url: "+window.location.href+" | userAgent: "+navigator.userAgent),null}},q:function(t,n){try{var e=c[i.u]||u.X(),r=new Date(Date.now()+63072e6).toUTCString();return document.cookie=t+"="+n+"; expires="+r+"; path=/; domain="+e,!0}catch(t){return!1}},$:function(t){try{var n=c[i.u]||u.X();return document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+n,!0}catch(t){return!1}},j:function(){return/bot|google|yahoo|http|bingbot|bingpreview|bingweb|baidu.com/i.test(navigator.userAgent)},H:function(){return/zalo/i.test(navigator.userAgent)},K:function(){var t=navigator.userAgent.toLowerCase(),n="unkown";return-1<t.indexOf("googlebot")?n="Googlebot":-1<t.indexOf("yandex")?n="YandexBot":-1<t.indexOf("googleweblight")?n="googleweblight":-1<t.indexOf("google-speakr")?n="GoogleSpeakr":-1<t.indexOf("google web preview")?n="GoogleWebPreview":-1<t.indexOf("mappy")?n="Mappy":-1<t.indexOf("adsbot-google")?n="AdsBotGoogle":-1<t.indexOf("jp.co.yahoo")?n="YahooBot":-1<t.indexOf("baidu")?n="Baidu":-1<t.indexOf("mediapartners-google")?n="MediapartnersGoogle":-1<t.indexOf("facebook")?n="Facebook":-1<t.indexOf("applebot")?n="Applebot":-1<t.indexOf("google")&&(n="Google"),n},Y:function(t){return t.split("").reverse().join("")},tt:function(n){var e;try{e=new Event(n,{bubbles:!0,cancelable:!0})}catch(t){(e=document.createEvent("Event")).initEvent(n,!0,!0)}e&&document.dispatchEvent(e)},nt:function(){var t=navigator.userAgent;return!/iPhone|iPad/.test(t)&&(/AppleWebKit.* \(KHTML, like Gecko\)( Version.[^ ]*)? Chrome\/\d+(\.\d+)*( Mobile)? Safari\/\d+(\.\d+)*$/.test(t)||/Edg\//.test(t)||/coc_coc_browser/.test(t)||/Vivaldi/.test(t)||/OPR/.test(t)&&!/Mobile/.test(t))},et:function(){return!!window.postMessage},rt:function(){return window!==window.top},ot:function(t,n){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},it:function(t){var n=Date.now(),e=document.createElement("div");e.style.top="-10000px",e.style.width="0px",e.style.height="0px",e.style.position="absolute";var r=document.createElement("iframe");e.appendChild(r),r.onload=function(){f.at.push("ifr_append_"+location.origin+"_"+(Date.now()-n))},r.setAttribute("src",t),document.body.insertBefore(e,document.body.firstChild)},st:function(e,r){window.addEventListener("message",function(t){var n;try{n=JSON.parse(t.data)}catch(t){n={}}/za\.zalo\.me/.test(t.origin)&&n.msgType===e&&(f.at.push(e+"_success"),r(n.data),u.tt(_))},!1)},X:function(){var t=window.location.hostname.split(".");return"."+t[t.length-2]+"."+t[t.length-1]}},d="not available",r="error",f={ct:108e5,_t:6,ut:!1,dt:d,ft:d,vt:-1,lt:d,gt:d,at:[],pt:!1,wt:216e5,ht:function(){var t=[];try{if(navigator.plugins)for(var n=0;n<navigator.plugins.length;n++)t.push(navigator.plugins[n].name+";"+navigator.plugins[n].description+";"+navigator.plugins[n].filename)}catch(t){}return t.sort().toString()},xt:function(){u.st("cvs",this.yt)},yt:function(t){f.gt=t},bt:function(){var t=1;return!/mobile/i.test(navigator.userAgent)&&/firefox|edge|msie|trident/i.test(navigator.userAgent)&&(t=window.devicePixelRatio),screen.orientation&&screen.orientation.type&&-1<screen.orientation.type.indexOf("landscape")?window.screen.width*t+"x"+window.screen.height*t+"x"+window.screen.colorDepth:window.screen.height*t+"x"+window.screen.width*t+"x"+window.screen.colorDepth},zt:function(){var t=1;return!/mobile/i.test(navigator.userAgent)&&/firefox|edge|msie|trident/i.test(navigator.userAgent)&&(t=window.devicePixelRatio),screen.orientation&&screen.orientation.type&&-1<screen.orientation.type.indexOf("landscape")?window.screen.availWidth*t+"x"+window.screen.availHeight*t:window.screen.availHeight*t+"x"+window.screen.availWidth*t},Mt:function(){var t,n,e,r="Not supported",o="Not supported",i="Not supported";try{function a(t){return c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST),c.depthFunc(c.LEQUAL),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"}var s=document.createElement("canvas"),c=s.getContext("webgl")||s.getContext("experimental-webgl"),_=[],u=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,u);var d=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);c.bufferData(c.ARRAY_BUFFER,d,c.STATIC_DRAW),u.itemSize=3,u.numItems=3;var f=c.createProgram(),v=c.createShader(c.VERTEX_SHADER);c.shaderSource(v,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),c.compileShader(v);var l=c.createShader(c.FRAGMENT_SHADER);c.shaderSource(l,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),c.compileShader(l),c.attachShader(f,v),c.attachShader(f,l),c.linkProgram(f),c.useProgram(f),f.vertexPosAttrib=c.getAttribLocation(f,"attrVertex"),f.offsetUniform=c.getUniformLocation(f,"uniformOffset"),c.enableVertexAttribArray(f.vertexPosArray),c.vertexAttribPointer(f.vertexPosAttrib,u.itemSize,c.FLOAT,!1,0,0),c.uniform2f(f.offsetUniform,1,1),c.drawArrays(c.TRIANGLE_STRIP,0,u.numItems),null!=c.canvas&&_.push(c.canvas.toDataURL()),_.push("exts:"+c.getSupportedExtensions().join(";")),_.push("al_li_wid_rng:"+a(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE))),_.push("al_pnt_sz_rng:"+a(c.getParameter(c.ALIASED_POINT_SIZE_RANGE))),_.push("alp_bits:"+c.getParameter(c.ALPHA_BITS)),_.push("atal:"+(c.getContextAttributes().antialias?"yes":"no")),_.push("bl_bits:"+c.getParameter(c.BLUE_BITS)),_.push("dep_bits:"+c.getParameter(c.DEPTH_BITS)),_.push("grn_bits:"+c.getParameter(c.GREEN_BITS)),_.push("mx_antp:"+((e=(t=c).getExtension("EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic"))?(0===(n=t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT))&&(n=2),n):null)),_.push("mx_comb_txt_img_units:"+c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),_.push("mx_cube_map_txt_sz:"+c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE)),_.push("mx_fr_unf_vts:"+c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS)),_.push("mx_rdr_bf_sz:"+c.getParameter(c.MAX_RENDERBUFFER_SIZE)),_.push("mx_txt_img_units:"+c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS)),_.push("mx_tex_sz:"+c.getParameter(c.MAX_TEXTURE_SIZE)),_.push("mx_var_vts:"+c.getParameter(c.MAX_VARYING_VECTORS)),_.push("mx_vtx_atts:"+c.getParameter(c.MAX_VERTEX_ATTRIBS)),_.push("mx_vtx_tex_img_units:"+c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),_.push("mx_vtx_uf_vts:"+c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS)),_.push("mx_vp_dims:"+a(c.getParameter(c.MAX_VIEWPORT_DIMS))),_.push("rd_bits:"+c.getParameter(c.RED_BITS)),_.push("rdrr:"+c.getParameter(c.RENDERER)),_.push("shd_la_v:"+c.getParameter(c.SHADING_LANGUAGE_VERSION)),_.push("stcl_bits:"+c.getParameter(c.STENCIL_BITS)),_.push("vdr:"+c.getParameter(c.VENDOR)),_.push("v:"+c.getParameter(c.VERSION)),_.push("vtx_shd_hi_fl_prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision),_.push("vtx_shd_hi_fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).rangeMin),_.push("vtx_shd_hi_fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).rangeMax),_.push("vtx_shd_me_fl_prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision),_.push("vtx_shd_me_fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).rangeMin),_.push("vtx_shd_me_fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).rangeMax),_.push("vtx_shd_low fl_prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_FLOAT).precision),_.push("vtx_shd_low fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_FLOAT).rangeMin),_.push("vtx_shd_low fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_FLOAT).rangeMax),_.push("fr_shd_hi_fl_prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision),_.push("fr_shd_hi_fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).rangeMin),_.push("fr_shd_hi_fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).rangeMax),_.push("fr_shd_me_fl_prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision),_.push("fr_shd_me_fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).rangeMin),_.push("fr_shd_me_fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).rangeMax),_.push("fr_shd_low fl_prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_FLOAT).precision),_.push("fr_shd_low fl_prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_FLOAT).rangeMin),_.push("fr_shd_low fl_prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_FLOAT).rangeMax),_.push("vtx_shd_hi_int prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_INT).precision),_.push("vtx_shd_hi_int prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_INT).rangeMin),_.push("vtx_shd_hi_int prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_INT).rangeMax),_.push("vtx_shd_me_int prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_INT).precision),_.push("vtx_shd_me_int prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_INT).rangeMin),_.push("vtx_shd_me_int prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_INT).rangeMax),_.push("vtx_shd_low int prcs:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_INT).precision),_.push("vtx_shd_low int prcs_rngMn:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_INT).rangeMin),_.push("vtx_shd_low int prcs_rngMx:"+c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.LOW_INT).rangeMax),_.push("fr_shd_hi_int prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_INT).precision),_.push("fr_shd_hi_int prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_INT).rangeMin),_.push("fr_shd_hi_int prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_INT).rangeMax),_.push("fr_shd_me_int prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_INT).precision),_.push("fr_shd_me_int prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_INT).rangeMin),_.push("fr_shd_me_int prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_INT).rangeMax),_.push("fr_shd_low int prcs:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_INT).precision),_.push("fr_shd_low int prcs_rngMn:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_INT).rangeMin),_.push("fr_shd_low int prcs_rngMx:"+c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.LOW_INT).rangeMax),r=_.join("§");var g=(s=document.createElement("canvas")).getContext("webgl")||s.getContext("experimental-webgl");i=0<=g.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info")?(o=g.getParameter(g.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL),g.getParameter(g.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL)):o="Not supported"}catch(t){i=o=r="Not supported"}return{St:o,Tt:i,At:r}},Pt:function(){var t=d;try{t=(new window.Intl.DateTimeFormat).resolvedOptions().timeZone}catch(t){}return t},Ot:function(){try{return!!window.localStorage}catch(t){return r}},Rt:function(){try{return!!window.indexedDB}catch(t){return r}},Dt:function(){try{return!!window.openDatabase}catch(t){return r}},Vt:function(){try{return!!window.sessionStorage}catch(t){return r}},kt:function(){var t,n,e,r,o,i;t=100,n=10,e=function(t,n){var e=window.document,r=e.createElement("div");return r.innerHTML="&nbsp;",r.setAttribute("class",t),r.setAttribute("style",n),e.body.appendChild(r),r}("pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links","height: 10px !important; font-size: 20px; color: transparent; position: absolute; bottom: 0; left: -10000px;"),r=0,o=!1,i=setInterval(function(){r++,!(o=function(t){return 0===t.offsetHeight||!document.body.contains(t)||"none"===t.style.display||"hidden"===t.style.visibility}(e))&&r!==n||(clearInterval(i),e.parentNode&&e.parentNode.removeChild(e),f.ut=o,f.at.push("adb_success"),u.tt(_))},t)},Et:function(){var n,t=0;void 0!==navigator.maxTouchPoints?t=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),n=!0}catch(t){n=!1}return[t,n,"ontouchstart"in window]},Ft:function(){try{if(/OS 11.+Version\/11.+Safari/.test(navigator.userAgent))return f.dt="excluded",f.at.push("audio_exclude"),void u.tt(_);var t=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==t)return f.dt=d,f.at.push("audio_null"),void u.tt(_);var n=new t(1,44100,44100),e=n.createOscillator();e.type="triangle",e.frequency.setValueAtTime(1e4,n.currentTime);for(var r=n.createDynamicsCompressor(),o=[["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],i=0;i<o.length;i++)void 0!==r[o[i][0]]&&"function"==typeof r[o[i][0]].setValueAtTime&&r[o[i][0]].setValueAtTime(o[i][1],n.currentTime);e.connect(r),r.connect(n.destination),e.start(0),n.startRendering(),n.oncomplete=function(t){var n=d;try{n=t.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(t,n){return t+Math.abs(n)},0).toString(),e.disconnect(),r.disconnect()}catch(t){}f.dt=n,f.at.push("audio_success"),u.tt(_)}}catch(t){f.dt=d,f.at.push("audio_exception"),u.tt(_)}},It:function(){if(!u.nt()||!u.et())return f.at.push("mds_notavailable"),f.ft=d,void u.tt(_);u.st("mds",this.Nt)},Nt:function(t){f.ft=t},Ct:function(){u.st("jsf",this.Wt)},Wt:function(t){f.lt=t},Gt:function(){var t=10,n=setInterval(function(){t--,f.vt=navigator.deviceMemory,0===f.vt&&0!==t||(clearInterval(n),f.vt=void 0!==f.vt?f.vt:d,f.at.push("mem_success"),u.tt(_))},100)},Bt:function(){f.It(),f.Ct(),f.xt(),u.it(n.t+e.h+location.origin),f.kt(),f.Ft(),f.Gt()},Jt:function(){var t=u.U("_fbp"),n=u.U("_ga"),e={audio:f.dt,zadbl:f.ut,mds:f.ft,zmem:f.vt,zfont:f.lt,zcvs:f.gt};t&&(e.fbid=t),n&&(e.ggid=n);var r=v.Zt(i.l);return r&&(e[i.l]=r),e},Lt:function(){return v.Zt("fpsend")==Math.floor(Date.now()/f.ct)},Ut:function(){var t=f.Mt();return{zcr:l.qt,zacr:l.Xt,zl:window.location.href,zplg:l.$t,__zi:m.jt(),zglvdr:t.St,zglrdr:t.Tt,zgldt:t.At,zla:l.Ht,zconcurrency:l.Kt,ztzos:l.Yt,ztz:l.Qt,zsssto:f.Vt(),zlcsto:f.Ot(),zodbsto:f.Dt(),zidbsto:f.Rt(),ztouchsp:f.Et(),zvs:m.tn(),v:_za_version}},nn:function(){if(/https/.test(location.protocol)&&!u.j()&&!u.H()&&!f.pt)if(document.body&&m.tn()){f.pt=!0;try{if(!0!==c.sfp&&f.Lt())return;var t=f.Ut();c[i.s]&&(t[i.s]=c[i.s]),document.addEventListener(_,function(){f._t--,f._t<0&&g("Too many events fired! Events: "+f.at),0==f._t&&(u.ot(f.Jt(),t),u.V({url:n.t+e.p,params:t,success:function(t){var n;try{t=t||"{}",n=JSON.parse(t)}catch(t){n={},g("parse failed: "+t.message)}var e=Math.floor(Date.now()/f.ct);v.en("fpsend",e),n[i.l]&&v.en(i.l,n[i.l]),v.rn(i._)}}))}),f.Bt()}catch(t){g("FP failed! msg:"+t.message+" stack: "+(t.stackTrace||t.stack))}}else setTimeout(function(){f.nn()},200)},on:function(){function n(){u.rt()?function(t){var e=!1,r=setTimeout(function(){e=!0,window.removeEventListener("message",o,!1),t()},3e3);function o(t){var n={};try{n=JSON.parse(t.data)}catch(t){}!function(t){return t.msgType===s.P}(n)||e||(clearTimeout(r),window.removeEventListener("message",o,!1))}window.addEventListener("message",o,!1),window.top.postMessage(function(){var t={msgType:s.T,from:location.origin};return JSON.stringify(t)}(),"*")}(f.nn):f.nn()}document.addEventListener("ZA.onready",function(){setTimeout(function(){"complete"===document.readyState?n():document.addEventListener("readystatechange",function(t){"complete"===t.target.readyState&&n()})},0)})}},v={en:function(n,t){var e=!1;try{e=!(!(-1<location.hostname.indexOf("zalo.me"))||n!==i.l&&!u.U(n))||u.q(n,t),localStorage.setItem(n,t)}catch(t){e||g("Set key "+n+" failed! Msg: "+t.message)}},Zt:function(t){try{return u.U(t)||localStorage.getItem(t)}catch(t){return null}},rn:function(n){try{var e=u.$(n);localStorage.removeItem(n)}catch(t){e||g("Remove key "+n+" failed! Msg: "+t.message)}}},l={in:document.referrer||"",an:document.characterSet||document.charset||"",L:navigator.platform||"",sn:document.location.host||"",J:navigator.userAgent.toLowerCase(),cn:"function"==typeof navigator.javaEnabled&&!0===navigator.javaEnabled(),_n:-1<navigator.userAgent.toLowerCase().indexOf("safari")&&-1===navigator.userAgent.toLowerCase().indexOf("chrome"),qt:f.bt(),Xt:f.zt(),$t:f.ht(),Ht:[[navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||d],navigator.languages],vt:navigator.deviceMemory||d,Yt:(new Date).getTimezoneOffset(),Qt:f.Pt(),Kt:navigator.hardwareConcurrency||d};function g(t){u.W({params:{msg:t,ver:_za_version},url:n.t+e.m})}var m={un:"",i:"",dn:/^\d{4}\.\w+\.\d+\.\w+$/,fn:/^3000\.\d+/,vn:/^\d{4}\.[^\.]+\.\d$/,ln:function(t){return this.dn.test(t)||this.fn.test(t)},gn:function(t){return this.vn.test(t)},mn:function(){if(u.j()){var t=u.K().toLowerCase(),n="4000."+u.Y(t)+"."+Date.now()+"."+u.G(t);this.pn(n,a.S)}else{var e=v.Zt(i.o);m.wn(e)&&this.pn(e,a.M)}},wn:function(t){return this.ln(t)||this.gn(t)},hn:function(t){!1!==this.wn(t)?(this.un=t,v.en(i.o,t),x||(x=!0,ZA&&ZA.version?u.tt("ZA.onready"):setTimeout(function(){u.tt("ZA.onready")},0))):g("Set visitor id while it is invalid: "+t)},pn:function(t,n){this.xn(n),this.hn(t)},jt:function(){return this.un},yn:function(t){return"function"==typeof t&&(this.wn(this.un)?t(this.un):document.addEventListener("ZA.onready",function(){t(m.jt())})),this.un},xn:function(t){t&&(this.i=t)},tn:function(){return this.i}};function t(){var t=function(){var t={zl:window.location.href,zrf:l.in,zch:l.an,zts:(new Date).getTime(),zos:u.Z(),zla:l.Ht,__zi:v.Zt(i.o),v:_za_version},n=v.Zt(i._);n&&(t[i._]=n);var e=v.Zt(i.l);return e&&(t[i.l]=e),t}();t.zact="pv",t._zapp=u.U(location.host+"_zapp"),t._zidnbaid=u.U(location.host+"_zidnbaid"),u.V({url:n.t+e.g,params:t,success:function(t){c=JSON.parse(t),document.hasTracked=!0,c[i._]&&v.en(i._,c[i._]),c[i.l]&&v.en(i.l,c[i.l]),u.N("gidzl"),m.pn(c[i.o],c[i.i]),function(o){if(!0!==o.enabled)return;try{(new Image).src=o.fbUrl+"&vid="+m.jt()+"&pf="+o.pf;var n=!1;!function t(){n||("undefined"!=typeof ga?(n=!0,u.F({url:"https://px.za.zaloapp.com/cd",params:{id:o.id,pf:o.pf,pc:o.pc,cp:o.cp,vid:m.jt()},success:function(t){var n=JSON.parse(t),e={};if(0===n.errorCode)for(var r=1;r<=n.data.cds.length;r++)e["dimension"+r]=n.data.cds[r-1];ga("create",o.ggUA,"auto","dmp"),ga("dmp.set","userId",m.jt()),ga("dmp.send","pageview",e)}})):setTimeout(function(){t()},500))}()}catch(t){g("integrate failed! "+t.message)}}(c)},fail:function(t){x||(x=!0,u.tt("ZA.onready"))}})}function p(){window.addEventListener("message",function(t){var n={};try{n=JSON.parse(t.data)}catch(t){}!function(t){return t.msgType===s.A}(n)||t.source.postMessage(function(){var t={msgType:s.O,from:location.origin,data:m.jt()};return JSON.stringify(t)}(),t.origin)},!1)}function w(){window.addEventListener("message",function(t){var n={};try{n=JSON.parse(t.data)}catch(t){}!function(t){return t.msgType===s.T}(n)||t.source.postMessage(function(){var t={msgType:s.P,from:location.origin};return JSON.stringify(t)}(),t.origin)},!1)}function h(e){var t,r=!1,o=setTimeout(function(){r=!0,window.removeEventListener("message",i,!1),e()},1e3);function i(t){var n={};try{n=JSON.parse(t.data)}catch(t){}!function(t){return t.msgType===s.O}(n)||r||(clearTimeout(o),window.removeEventListener("message",i,!1),m.pn(n.data,a.M),e(n))}window.addEventListener("message",i,!1),window.top.postMessage((t={msgType:s.A,from:location.origin},JSON.stringify(t)),"*")}var x=!1;return f.on(),w(),m.mn(),u.rt()?m.jt()?t():h(t):(p(),t()),1==u.I("giddebug",window.location.href)&&document.addEventListener("readystatechange",function(t){if("complete"===t.target.readyState){var n=document.createElement("script");n.async=1,n.onload=function(){eruda.init()},n.src="//cdn.jsdelivr.net/npm/eruda",document.body.appendChild(n)}}),{version:_za_version,getVisitorID:function(t){return m.yn(t)}}}()}catch(t){"Already loaded"!==t.message&&((new Image).src="https://za.zalo.me/v3/le?error="+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+t.name+'","line":"'+(t.lineNumber||t.line)+'","script":"'+(t.fileName||t.sourceURL||t.script)+'","stack":"'+(t.stackTrace||t.stack)+'","ver":"'+_za_version+'","message":"'+t.message+'"}}'))}