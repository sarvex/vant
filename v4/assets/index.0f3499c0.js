import{c as l,b as v,e as P,u as C}from"./use-translate.c56bc05e.js";import{t as S,w as d}from"./with-install.2d06a5b3.js";import{u as y}from"./use-placeholder.dc0fc6b5.js";import{A as p,x as I,e as m,D as i}from"./vue-libs.a3cd7f61.js";import{u as V}from"./use-expose.2dad0d8e.js";import{r as _,u as N}from"./use-route.7a9317f3.js";import{B as k}from"./index.af6aabcb.js";const[B,u]=l("action-bar"),f=Symbol(B),w={placeholder:Boolean,safeAreaInsetBottom:S},E=p({name:B,props:w,setup(n,{slots:o}){const r=I(),e=y(r,u),{linkChildren:a}=v(f);a();const s=()=>{var c;return m("div",{ref:r,class:[u(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(c=o.default)==null?void 0:c.call(o)])};return()=>n.placeholder?e(s):s()}}),R=d(E),H=R,[$,z]=l("action-bar-button"),D=P({},_,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),F=p({name:$,props:D,setup(n,{slots:o}){const r=N(),{parent:e,index:a}=C(f),s=i(()=>{if(e){const t=e.children[a.value-1];return!(t&&"isButton"in t)}}),c=i(()=>{if(e){const t=e.children[a.value+1];return!(t&&"isButton"in t)}});return V({isButton:!0}),()=>{const{type:t,icon:A,text:b,color:h,loading:g,disabled:x}=n;return m(k,{class:z([t,{last:c.value,first:s.value}]),size:"large",type:t,icon:A,color:h,loading:g,disabled:x,onClick:r},{default:()=>[o.default?o.default():b]})}}}),K=d(F),J=K;export{f as A,H as V,J as a,K as b,R as c};
