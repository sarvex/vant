import{c as p,b as P,E as b,e as G,u as v,p as _}from"./use-translate.c56bc05e.js";import{n as h,b as y,t as E,w as O}from"./with-install.2d06a5b3.js";import{u as f}from"./use-expose.2dad0d8e.js";import{A as k,y as V,e as x,D as S,B as A}from"./vue-libs.a3cd7f61.js";import{c as B,C as w}from"./Checker.4199cd3d.js";const[C,D]=p("checkbox-group"),K={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:y(),checkedColor:String},g=Symbol(C),Y=k({name:C,props:K,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{children:c,linkChildren:i}=P(g),l=e=>r("update:modelValue",e),s=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:d}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&d?o.checked.value:t!=null?t:!o.checked.value:!1).map(o=>o.name);l(n)};return V(()=>a.modelValue,e=>r("change",e)),f({toggleAll:s}),b(()=>a.modelValue),i({props:a,updateValue:l}),()=>{var e;return x("div",{class:D([a.direction])},[(e=u.default)==null?void 0:e.call(u)])}}}),[N,$]=p("checkbox"),z=G({},B,{bindGroup:E}),F=k({name:N,props:z,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{parent:c}=v(g),i=e=>{const{name:t}=a,{max:d,modelValue:m}=c.props,n=m.slice();if(e)!(d&&n.length>=d)&&!n.includes(t)&&(n.push(t),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(t);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},l=S(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),s=(e=!l.value)=>{c&&a.bindGroup?i(e):r("update:modelValue",e)};return V(()=>a.modelValue,e=>r("change",e)),f({toggle:s,props:a,checked:l}),b(()=>a.modelValue),()=>x(w,A({bem:$,role:"checkbox",parent:c,checked:l.value,onToggle:s},a),_(u,["default","icon"]))}}),H=O(F),j=H;export{H as C,j as V,Y as _};
