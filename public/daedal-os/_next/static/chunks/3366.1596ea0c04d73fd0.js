"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3366,3333],{83366:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(85893),i=a(1864),l=a(67294);let r=a(10508).ZP.div(["iframe{opacity:",";transition:opacity 0.25s ease-in;}.loading{&::before{color:#fff;font-weight:500;mix-blend-mode:normal;text-shadow:1px 2px 3px rgba(0,0,0,50%);}}"],({$loaded:e})=>e?"100%":"0%");var o=a(33333),s=a(45279),f=a(44696),d=a(20063),u=a(58437),c=a(76488),p=a(97836),m=a(48764).Buffer,v=({id:e})=>{let{closeWithTransition:t,processes:{[e]:{libs:[a=""]=[],url:v=""}={}}={}}=(0,u.z)(),{createPath:w,exists:h,readFile:y,updateFolder:g,writeFile:b}=(0,d.o)(),{foregroundId:$,setForegroundId:k,setWallpaper:x}=(0,c.k)(),L=(0,l.useRef)(null),[E,_]=(0,l.useState)(!1),[T,j]=(0,l.useState)(),{prependFileToTitle:C}=(0,f.Z)(e),F=(0,l.useCallback)(e=>t=>{let a=(0,i.join)(p.dA,"wallpaper.png");t.toBlob(async t=>{await b(a,m.from(await (null==t?void 0:t.arrayBuffer())),!0),x(a,e)})},[x,b]),{onDragOver:H,onDrop:Z}=(0,s.Z)({id:e});return(0,l.useEffect)(()=>{C("Untitled")},[C]),(0,l.useEffect)(()=>{if($!==e){var t,a;null===(a=L.current)||void 0===a||null===(t=a.contentWindow)||void 0===t||t.addEventListener("click",()=>k(e),p.K7)}},[$,e,k]),(0,l.useEffect)(()=>{let{contentWindow:a}=L.current||{};if(E&&a&&!T){let n=a.systemHooks.showOpenFileDialog,l=a.file_new;j(a),a.file_new=()=>{C("Untitled"),l()},a.systemHooks.setWallpaperTiled=F("tile"),a.systemHooks.setWallpaperCentered=F("center"),a.systemHooks.showOpenFileDialog=async e=>{let{file:t}=await n(e);return C(t.name),{file:t}},a.close=()=>t(e),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async({defaultFileName:e,getBlob:t})=>g(p.Ll,await w(`${e}.png`,p.Ll,m.from(await (await t("image/png")).arrayBuffer()))),a.systemHooks.writeBlobToHandle=async(e,t)=>{await h(e)&&(await b(e,m.from(await t.arrayBuffer()),!0),g((0,i.dirname)(e),(0,i.basename)(e)))},a.addEventListener("dragover",H),a.addEventListener("drop",Z)}},[t,w,h,e,T,E,H,Z,C,F,g,b]),(0,l.useEffect)(()=>{T&&v&&y(v).then(e=>{let t=T.onunhandledrejection;T.onunhandledrejection=e=>{var a;null==t||t(e),(null==e?void 0:null===(a=e.reason)||void 0===a?void 0:a.message)==="either options.data or options.file or options.filePath must be passed"&&C("Untitled")},T.open_from_file(new File([e],v),v),C((0,i.basename)(v))})},[T,C,y,v]),(0,n.jsxs)(r,{$loaded:E,children:[!E&&(0,n.jsx)(o.default,{className:"loading"}),(0,n.jsx)("iframe",{ref:L,height:"100%",id:`jspaint-${e}`,onLoad:()=>_(!0),src:a,title:e,width:"100%",...p.v0})]})}},33333:function(e,t,a){a.r(t);let n=a(10508).ZP.div(['cursor:wait;height:100%;width:100%;&::before{color:#fff;content:"Working on it...";display:flex;font-size:12px;justify-content:center;mix-blend-mode:difference;padding-top:18px;}']);t.default=n},45279:function(e,t,a){var n=a(1864),i=a(67294),l=a(59746),r=a(23736),o=a(89670),s=a(20063),f=a(58437),d=a(76488),u=a(97836),c=a(6484);t.Z=({callback:e,directory:t=u.Ll,id:a,onDragLeave:p,onDragOver:m,updatePositions:v})=>{let{url:w}=(0,f.z)(),{iconPositions:h,sortOrders:y,setIconPositions:g}=(0,d.k)(),{exists:b,mkdirRecursive:$,updateFolder:k,writeFile:x}=(0,s.o)(),L=(0,i.useCallback)(async(e,t,i)=>{if(a){if(t){let l=(0,n.join)(u.Ll,e);if(await $(u.Ll),await x(l,t,!0))return i===o.v.UPDATE_URL&&w(a,l),k(u.Ll,e),(0,n.basename)(l)}else i===o.v.UPDATE_URL&&w(a,e)}return""},[a,$,k,w,x]),{openTransferDialog:E}=(0,l.Z)();return{onDragLeave:p,onDragOver:e=>{null==m||m(e),(0,c.nK)(e)},onDrop:i=>{if(!u.my.has((0,c.RT)(t))){if(v&&i.target instanceof HTMLElement){let{files:e,text:a}=(0,r.p4)(i);if(0===e.length&&""===a)return;let l={x:i.clientX,y:i.clientY},o=[];if(a){try{o=JSON.parse(a)}catch{}if(!Array.isArray(o))return;let[e]=o;if(!e||e.startsWith(t)&&(0,n.basename)(e)===(0,n.relative)(t,e))return;o=o.map(e=>(0,n.basename)(e))}else e instanceof FileList?o=[...e].map(e=>e.name):o=[...e].map(e=>{var t;return(null===(t=e.getAsFile())||void 0===t?void 0:t.name)||""}).filter(Boolean);o=o.map(e=>{if(!h[`${t}/${e}`])return e;let a=0,i="";do a+=1,i=`${t}/${(0,n.basename)(e,(0,n.extname)(e))} (${a})${(0,n.extname)(e)}`;while(h[i]);return(0,n.basename)(i)}),(0,c.vi)(t,i.target,h,y,l,o,g,b)}(0,r.WG)(i,e||L,t,E,!!a)}}}}},44696:function(e,t,a){var n=a(67294),i=a(58437),l=a(37176),r=a(97836);t.Z=e=>{let{title:t}=(0,i.z)(),[a]=e.split(r.CC),{title:o}=l.Z[a]||{};return{appendFileToTitle:(0,n.useCallback)((a,n)=>{let i=a?` - ${a}${n?` ${r.xy}`:""}`:"";t(e,`${o}${i}`)},[e,o,t]),prependFileToTitle:(0,n.useCallback)((a,n,i)=>{let l=a?`${n?`${r.xy} `:""}${a}${i?" ":" - "}`:"";t(e,`${l}${o}`)},[e,o,t])}}}}]);