import{j as t}from"./index.2e00d8e2.js";const o=t("auth/user",{state:()=>({token:null,permisos:null}),persist:!0,getters:{doubleCount:e=>e.counter*2},actions:{setToken(e){this.token=e},setPermisos(e){this.permisos=e}}});export{o as u};