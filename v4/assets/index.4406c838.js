import{c as C,v as A,a as I}from"./use-translate.c7ada534.js";import{n as R,t as S,w as F}from"./with-install.fe59c8e0.js";import{H as d,f as E}from"./constant.80c6de18.js";import{u as N}from"./use-placeholder.7988df16.js";import{I as D,V as L}from"./index.6d509bfd.js";import{A as g,x as P,e as r,r as z,o as V,a as y,w as s,C as e,F as O}from"./vue-libs.34a885a4.js";import{s as x}from"./index.cc11a4d4.js";import"./use-height.d6e22e82.js";import"./on-popup-reopen.550cf80c.js";import"./index.3d1cb367.js";import"./index.3b8cf4e6.js";import"./interceptor.313e29a1.js";import"./use-expose.582395af.js";import"./use-touch.d7fba47b.js";import"./use-lazy-render.a4c2132f.js";import"./index.7cbf4c72.js";import"./index.17a6cccd.js";import"./mount-component.f74ecdc9.js";const[U,o]=C("nav-bar"),H={title:String,fixed:Boolean,zIndex:R,border:S,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},K=g({name:U,props:H,emits:["clickLeft","clickRight"],setup(a,{emit:t,slots:l}){const i=P(),u=N(i,o),m=c=>t("clickLeft",c),n=c=>t("clickRight",c),B=()=>l.left?l.left():[a.leftArrow&&r(D,{class:o("arrow"),name:"arrow-left"},null),a.leftText&&r("span",{class:o("text")},[a.leftText])],k=()=>l.right?l.right():r("span",{class:o("text")},[a.rightText]),h=()=>{const{title:c,fixed:p,border:_,zIndex:v}=a,w=A(v),T=a.leftArrow||a.leftText||l.left,b=a.rightText||l.right;return r("div",{ref:i,style:w,class:[o({fixed:p}),{[E]:_,"van-safe-area-top":a.safeAreaInsetTop}]},[r("div",{class:o("content")},[T&&r("div",{class:[o("left"),d],onClick:m},[B()]),r("div",{class:[o("title"),"van-ellipsis"]},[l.title?l.title():c]),b&&r("div",{class:[o("right"),d],onClick:n},[k()])])])};return()=>a.fixed&&a.placeholder?u(h):h()}}),M=F(K),f=M,ct=g({__name:"index",setup(a){const t=I({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>x(t("back")),i=()=>x(t("button"));return(u,m)=>{const n=z("demo-block");return V(),y(O,null,[r(n,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(n,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:i},null,8,["title","left-text"])]),_:1},8,["title"]),r(n,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:i},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(n,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(L),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{ct as default};
