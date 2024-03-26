function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o,u as n}from"./app-DmBL4sy3.js";const s=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-DmBL4sy3.js").then(r=>r.N),__vite__mapDeps([])),t=n();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};
