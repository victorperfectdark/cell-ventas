import{k as a,q as n}from"./index.95c2c698.js";import{a as u}from"./index.2cf0d985.js";import{u as i}from"./auth-user.32420ec5.js";function p(){return a(n)}const l=()=>{const e=p();return{mostrarNotify:(r,o,s="top-right")=>{e.notify({type:r,message:o,position:s})}}};i();const c=u.create({baseURL:"https://ventas-cell.herokuapp.com/api",headers:{"Content-Type":"application/json"}});c.interceptors.request.use(function(e){let t=JSON.parse(localStorage.getItem("auth/user"));return t=t.token,e.headers.Authorization=t?`${t}`:"",e});export{c as A,p as a,l as u};