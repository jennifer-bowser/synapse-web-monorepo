import{e as d,r as h}from"./util-BbuHFHEZ.js";import{r as L,a as b,b as w,_ as y,c as q,e as E,p as S}from"./pipeline-DfWHfBsc.js";var u,v;function g(){if(v)return u;v=1,u=n;var t=d.EventEmitter,_=h();_(n,t),n.Readable=L(),n.Writable=b(),n.Duplex=w(),n.Transform=y,n.PassThrough=q,n.finished=E,n.pipeline=S,n.Stream=n;function n(){t.call(this)}return n.prototype.pipe=function(r,f){var e=this;function m(s){r.writable&&r.write(s)===!1&&e.pause&&e.pause()}e.on("data",m);function l(){e.readable&&e.resume&&e.resume()}r.on("drain",l),!r._isStdio&&(!f||f.end!==!1)&&(e.on("end",c),e.on("close",p));var i=!1;function c(){i||(i=!0,r.end())}function p(){i||(i=!0,typeof r.destroy=="function"&&r.destroy())}function a(s){if(o(),t.listenerCount(this,"error")===0)throw s}e.on("error",a),r.on("error",a);function o(){e.removeListener("data",m),r.removeListener("drain",l),e.removeListener("end",c),e.removeListener("close",p),e.removeListener("error",a),r.removeListener("error",a),e.removeListener("end",o),e.removeListener("close",o),r.removeListener("close",o)}return e.on("end",o),e.on("close",o),r.on("close",o),r.emit("pipe",e),r},u}export{g as r};
