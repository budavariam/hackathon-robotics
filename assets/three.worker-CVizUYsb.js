var he=Object.defineProperty;var me=(f,u,d)=>u in f?he(f,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):f[u]=d;var a=(f,u,d)=>me(f,typeof u!="symbol"?u+"":u,d);(function(){"use strict";(function(){var f=(()=>{var s=self.location?self.location.href.split("/").slice(0,-1).join("/"):"";return function(e={}){var e;e||(e=typeof e<"u"?e:{});var _,c;e.ready=new Promise((t,n)=>{_=t,c=n});var w=Object.assign({},e),U=!0,o="";function G(t){return e.locateFile?e.locateFile(t,o):o+t}var P;o=self.location.href,s&&(o=s),o.indexOf("blob:")!==0?o=o.substr(0,o.replace(/[?#].*/,"").lastIndexOf("/")+1):o="",P=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)},e.print||console.log.bind(console);var p=e.printErr||console.error.bind(console);Object.assign(e,w),w=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var y;e.wasmBinary&&(y=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&b("no native wasm support detected");var W,z=!1,S,H,C,I,F,O,x;function X(){var t=W.buffer;e.HEAP8=S=new Int8Array(t),e.HEAP16=C=new Int16Array(t),e.HEAP32=I=new Int32Array(t),e.HEAPU8=H=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAPU32=F=new Uint32Array(t),e.HEAPF32=O=new Float32Array(t),e.HEAPF64=x=new Float64Array(t)}var D=[],M=[],T=[];function $(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Q(e.preRun.shift());B(D)}function J(){B(M)}function K(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Z(e.postRun.shift());B(T)}function Q(t){D.unshift(t)}function Y(t){M.unshift(t)}function Z(t){T.unshift(t)}var h=0,g=null;function ee(t){h++,e.monitorRunDependencies&&e.monitorRunDependencies(h)}function te(t){if(h--,e.monitorRunDependencies&&e.monitorRunDependencies(h),h==0&&g){var n=g;g=null,n()}}function b(t){e.onAbort&&e.onAbort(t),t="Aborted("+t+")",p(t),z=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw c(n),n}var ne="data:application/octet-stream;base64,";function V(t){return t.startsWith(ne)}var m;e.locateFile?(m="libvoxel.wasm",V(m)||(m=G(m))):m=new URL("/assets/libvoxel.1ba27f06.wasm",self.location).href;function j(t){try{if(t==m&&y)return new Uint8Array(y);if(P)return P(t);throw"both async and sync fetching of the wasm failed"}catch(n){b(n)}}function ie(t){return!y&&U&&typeof fetch=="function"?fetch(t,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+t+"'";return n.arrayBuffer()}).catch(()=>j(t)):Promise.resolve().then(()=>j(t))}function L(t,n,l){return ie(t).then(i=>WebAssembly.instantiate(i,n)).then(i=>i).then(l,i=>{p("failed to asynchronously prepare wasm: "+i),b(i)})}function se(t,n,l,i){return!t&&typeof WebAssembly.instantiateStreaming=="function"&&!V(n)&&typeof fetch=="function"?fetch(n,{credentials:"same-origin"}).then(q=>{var A=WebAssembly.instantiateStreaming(q,l);return A.then(i,function(fe){return p("wasm streaming compile failed: "+fe),p("falling back to ArrayBuffer instantiation"),L(n,l,i)})}):L(n,l,i)}function re(){var t={a:le};function n(i,q){var A=i.exports;return e.asm=A,W=e.asm.c,X(),e.asm.h,Y(e.asm.d),te(),A}ee();function l(i){n(i.instance)}if(e.instantiateWasm)try{return e.instantiateWasm(t,n)}catch(i){p("Module.instantiateWasm callback failed with error: "+i),c(i)}return se(y,m,t,l).catch(c),{}}function B(t){for(;t.length>0;)t.shift()(e)}function oe(t,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":return S[t>>0];case"i8":return S[t>>0];case"i16":return C[t>>1];case"i32":return I[t>>2];case"i64":return I[t>>2];case"float":return O[t>>2];case"double":return x[t>>3];case"*":return F[t>>2];default:b(`invalid type for getValue: ${n}`)}}function ae(t,n,l){H.copyWithin(t,n,n+l)}function ue(t){b("OOM")}function ce(t){H.length,ue()}var le={b:ae,a:ce};re(),e._generate=function(){return(e._generate=e.asm.e).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.f).apply(null,arguments)},e._free=function(){return(e._free=e.asm.g).apply(null,arguments)},e.getValue=oe;var v;g=function t(){v||k(),v||(g=t)};function k(){if(h>0||($(),h>0))return;function t(){v||(v=!0,e.calledRun=!0,!z&&(J(),_(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),K()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()}if(e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return k(),e.ready}})();async function u(){return await f()}class d{constructor(r,e){a(this,"_module");a(this,"_input");a(this,"_decompressBuffer");a(this,"_positions");a(this,"_uvs");a(this,"_indices");a(this,"_decompressedSize");a(this,"_faceCount");a(this,"_pointCount");a(this,"_decompressBufferSize");this._module=r,this._input=this._module._malloc(61440),this._decompressBuffer=this._module._malloc(8e4),this._positions=this._module._malloc(288e4),this._uvs=this._module._malloc(192e4),this._indices=this._module._malloc(576e4),this._decompressedSize=this._module._malloc(4),this._faceCount=this._module._malloc(4),this._pointCount=this._module._malloc(4),this._decompressBufferSize=e}release(){this._module._free(this._input),this._module._free(this._positions),this._module._free(this._uvs),this._module._free(this._indices),this._module._free(this._pointCount),this._module._free(this._decompressBuffer),this._module._free(this._decompressedSize)}generate(r,e){this._module.HEAPU8.set(r,this._input),this._module._generate(this._input,r.length,this._decompressBufferSize,this._decompressBuffer,this._decompressedSize,this._positions,this._uvs,this._indices,this._faceCount,this._pointCount,e),this._module.getValue(this._decompressedSize,"i32");const _=this._module.getValue(this._pointCount,"i32"),c=this._module.getValue(this._faceCount,"i32"),w=new Uint8Array(this._module.HEAPU8.subarray(this._positions,this._positions+c*12).slice()),U=new Uint8Array(this._module.HEAPU8.subarray(this._uvs,this._uvs+c*8).slice()),o=new Uint32Array(this._module.HEAPU8.subarray(this._indices,this._indices+c*24).slice().buffer);return{point_count:_,face_count:c,positions:w,uvs:U,indices:o}}}const R=self;let E=null;u().then(s=>{E=new d(s,8e4)}),R.addEventListener("message",s=>{const r=N(s.data);if(E){const e=E.generate(r.data,Math.floor(r.origin[2]/r.resolution));R.postMessage({geometryData:e,resolution:r.resolution,origin:r.origin})}},!1),R.addEventListener("error",()=>{console.log("error")});function N(s){const r=Number(s.resolution)||.1,e=s.origin,_=s.width;return{data:new Uint8Array(s.data),resolution:r,origin:e,width:_}}})()})();
