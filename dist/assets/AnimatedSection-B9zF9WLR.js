import{a as o,j as r,m as d}from"./animation-vendor-D8f1xLTe.js";const p=({children:i,className:t="",delay:e=0})=>{const{ref:n,inView:s}=o({triggerOnce:!0,threshold:.1}),a={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,delay:e,ease:[.17,.55,.55,1],type:"spring",damping:15,stiffness:200}}};return r.jsx(d.div,{ref:n,initial:"hidden",animate:s?"visible":"hidden",variants:a,className:t,children:i})};export{p as A};