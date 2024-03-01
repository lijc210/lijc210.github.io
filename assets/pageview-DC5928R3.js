import{_ as t}from"./app-B_QR5UrJ.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://zeabur.cizai.io/",pageview:!0};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-B_QR5UrJ.js").then(r=>r.W),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
