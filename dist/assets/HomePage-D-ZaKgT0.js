import{u as g,j as e,m as d}from"./animation-vendor-D8f1xLTe.js";import{r as l}from"./react-vendor-DCvpf80J.js";import{I as u}from"./index-D-u44ZiG.js";import{A as o}from"./AnimatedSection-B9zF9WLR.js";import{S as x,a as h,T as p,b,U as y,c as f,F as j,G as v,L as N,Q as w,d as S}from"./icons-BPxUW5u9.js";import{L as k}from"./router-vendor-BzcMnC6z.js";import"./three-vendor-IBb_iT91.js";const C=()=>{const t=g(),[a,i]=l.useState(!1),s=u.hero.cybersecurity;l.useEffect(()=>{const c=new Image;c.onload=()=>i(!0),c.src=s},[s]);const r=t?{initial:{opacity:1},animate:{opacity:1}}:{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8}},n=l.useCallback(()=>[0,100,200].map(c=>e.jsx("div",{className:`w-2 h-2 rounded-full ${t?"bg-blue-500":"animate-pulse"}`,style:t?{}:{animationDelay:`${c}ms`}},c)),[t]);return e.jsxs("div",{className:"relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"}),a&&e.jsxs(d.div,{...r,className:"relative w-full h-full",children:[e.jsx("img",{src:s,alt:"Advanced Cybersecurity Protection",loading:"eager",decoding:"async",className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-2xl"})]}),e.jsx(d.div,{initial:t?{}:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"absolute bottom-6 left-6 right-6 text-white",children:e.jsxs("div",{className:"bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-green-500",children:"System Protected"})]}),e.jsx("div",{className:"text-xs text-gray-300",children:"Advanced threat detection active • Real-time monitoring enabled"})]})}),e.jsx("div",{className:"absolute top-4 right-4 flex space-x-2",children:n()})]})},I=l.memo(C),A=()=>e.jsx(o,{className:"pt-20 pb-32",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"lg:grid lg:grid-cols-12 lg:gap-8",children:[e.jsxs("div",{className:"sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left",children:[e.jsxs("h1",{className:"text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl",children:[e.jsx("span",{className:"block",children:"We"}),e.jsx("span",{className:"block text-blue-400",children:"Guarantee Your"}),e.jsx("span",{className:"block",children:"Digital Security!"})]}),e.jsx("p",{className:"mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl",children:"Protecting your digital assets with advanced AI-driven security solutions. Stay ahead of cyber threats with our cutting-edge technology."}),e.jsx("div",{className:"mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left",children:e.jsxs("button",{className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors",children:["Get Protected Now",e.jsx(x,{className:"ml-2 h-5 w-5"})]})})]}),e.jsx("div",{className:"mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center",children:e.jsxs("div",{className:"relative mx-auto w-full h-[400px] rounded-lg shadow-lg lg:max-w-md",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-lg"}),e.jsx(I,{})]})})]})})}),L=()=>{const t=[{icon:h,title:"Vulnerability Management",description:"Continuous scanning, assessment, and remediation of security vulnerabilities across your infrastructure.",to:"/services/vulnerability-management"},{icon:p,title:"Penetration Testing",description:"Expert-led security assessments to identify and exploit vulnerabilities before attackers do.",to:"/services/penetration-testing"},{icon:b,title:"Cloud Security",description:"Comprehensive cloud infrastructure protection with real-time monitoring and compliance.",to:"/services/cloud-security"},{icon:x,title:"Managed SOC Services",description:"24/7 Security Operations Center with advanced threat detection and incident response.",to:"/services/managed-soc"}];return e.jsx("section",{id:"services",className:"py-16 md:py-24 bg-gray-900/50",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx(o,{delay:.2,children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl md:text-3xl lg:text-4xl font-extrabold text-white",children:"Our Services"}),e.jsx("p",{className:"mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto",children:"Enterprise-grade cybersecurity solutions for modern threats"})]})}),e.jsx("div",{className:"mt-12 md:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:t.map((a,i)=>e.jsx(o,{delay:.2+i*.1,children:e.jsx(k,{to:a.to,className:"block h-full",children:e.jsxs("div",{className:"h-full relative p-6 md:p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-600/20 mb-4",children:e.jsx(a.icon,{className:"h-6 w-6 md:h-7 md:w-7 text-blue-400"})}),e.jsx("h3",{className:"text-lg md:text-xl font-semibold text-white mb-2",children:a.title}),e.jsx("p",{className:"text-sm md:text-base text-gray-300 leading-relaxed",children:a.description}),e.jsx("div",{className:"mt-4 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsxs("span",{className:"text-blue-400 text-sm md:text-base font-medium inline-flex items-center",children:["Learn more",e.jsx("svg",{className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})},i))})]})})},T=({src:t,alt:a,className:i="",loading:s="lazy",width:r,height:n})=>e.jsx("img",{src:t,alt:a,width:r,height:n,loading:s,decoding:"async",className:`${i} w-full h-auto`}),P=l.memo(T),M=()=>{const[t,a]=l.useState(1),i=[{id:1,title:"Pre-Engagement",description:"It is essential that the pentester and client interact prior to the engagement in order to conduct a successful penetration test. Due to pentesting's technological nature, this phase is vital. Just like any other IT project, it requires great planning.",checkpoints:["Meetings","Requirement's","Scope","Test Plan"],additionalText:"Meeting with the client is the first step toward a successful pentest. This meeting will be followed by the development of a test plan. This will be the stage when you plan to achieve specific pentesting outcomes and align your goals with us.",image:u.services.pentesting}];return e.jsx("section",{className:"py-20 bg-gray-900/50",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Our Approach To Security"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"There is no such thing as a secure system! With the best minds in the security industry, we help complex organizations protect their web applications, cloud, networks and mobile phones."})]}),e.jsx("div",{className:"flex justify-center space-x-4 mb-12",children:i.map(s=>e.jsxs("button",{onClick:()=>a(s.id),className:`px-6 py-2 rounded-lg transition-all duration-300 ${t===s.id?"bg-pink-600 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"}`,children:["Step - ",s.id]},s.id))}),i.map(s=>e.jsx(d.div,{initial:{opacity:0,y:20},animate:{opacity:t===s.id?1:0,y:t===s.id?0:20,display:t===s.id?"block":"none"},transition:{duration:.5},className:"bg-gray-800/50 rounded-xl p-8 border border-pink-500/20",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-3xl font-bold text-white mb-6",children:s.title}),e.jsx("p",{className:"text-gray-300 mb-8",children:s.description}),e.jsx("div",{className:"grid grid-cols-2 gap-4 mb-8",children:s.checkpoints.map((r,n)=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-pink-600/20 flex items-center justify-center",children:e.jsx("div",{className:"w-2 h-2 rounded-full bg-pink-600"})}),e.jsx("span",{className:"text-gray-300",children:r})]},n))}),e.jsx("p",{className:"text-gray-400 mb-8",children:s.additionalText}),e.jsx("button",{className:"bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors",children:"Get Started Now"})]}),e.jsxs("div",{className:"relative h-[400px]",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"}),e.jsx(P,{src:s.image,alt:s.title,className:"w-full h-full object-cover rounded-xl",loading:"eager"})]})]})},s.id))]})})},D=()=>e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl"}),e.jsx("div",{className:"absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl"})]}),E=()=>e.jsxs(o,{delay:.2,className:"text-center mb-20",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Why Choose ",e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400",children:"CyberNeticsPlus"})]}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Delivering enterprise-grade security solutions with measurable results and comprehensive protection"})]}),G=({icon:t,title:a,description:i,delay:s=0})=>e.jsxs(o,{delay:s,className:"relative group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"}),e.jsxs("div",{className:"relative p-8 h-full",children:[e.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 p-0.5 mb-6",children:e.jsx("div",{className:"w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center",children:e.jsx(t,{className:"w-6 h-6 text-white"})})}),e.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:a}),e.jsx("p",{className:"text-gray-300",children:i}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]}),R=[{icon:x,title:"Advanced Protection",description:"Next-generation security solutions powered by AI and machine learning for proactive threat detection."},{icon:y,title:"Expert Team",description:"Seasoned cybersecurity professionals with decades of combined experience in protecting enterprise systems."},{icon:f,title:"24/7 Monitoring",description:"Round-the-clock security operations center with real-time threat detection and incident response."},{icon:j,title:"Compliance Ready",description:"Built-in compliance frameworks for GDPR, HIPAA, PCI DSS, and other regulatory requirements."},{icon:v,title:"Global Coverage",description:"Worldwide threat intelligence network providing real-time protection against emerging threats."},{icon:N,title:"Zero Trust Security",description:"Implementation of zero trust architecture ensuring maximum security at every access point."}],z=()=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:R.map((t,a)=>e.jsx(G,{icon:t.icon,title:t.title,description:t.description,delay:.1*a},a))}),q=()=>e.jsxs("section",{id:"features",className:"py-24 bg-gray-900/50 relative overflow-hidden",children:[e.jsx(D,{}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:[e.jsx(E,{}),e.jsx(z,{}),e.jsx(o,{delay:.3,className:"mt-16 text-center",children:e.jsx("button",{className:"bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105",children:"Get Started Today"})})]})]}),F=()=>{const t=l.useRef(null),a=l.useCallback(()=>{const i=t.current;i&&(i.scrollLeft>=i.scrollWidth-i.clientWidth?i.scrollLeft=0:i.scrollLeft+=1)},[]);return l.useEffect(()=>{const i=setInterval(a,50);return()=>clearInterval(i)},[a]),e.jsx("section",{className:"py-20 bg-gray-800/30",children:e.jsxs(o,{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx(w,{className:"w-12 h-12 text-blue-400 mx-auto mb-4"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"What Our Clients Say"}),e.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Trusted by leading organizations worldwide"})]}),e.jsx("div",{ref:t,className:"overflow-hidden whitespace-nowrap"})]})})},m=t=>t.replace(/[<>"'&]/g,a=>{switch(a){case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";case"&":return"&amp;";default:return a}}),W=()=>{const[t,a]=l.useState({name:"",email:"",message:""}),i=r=>{r.preventDefault();const n={name:m(t.name),email:m(t.email),message:m(t.message)};console.log("Sanitized form data:",n)},s=r=>{a(n=>({...n,[r.target.name]:r.target.value}))};return e.jsx("section",{id:"contact",className:"py-20 bg-gray-900/50",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[e.jsxs(d.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(S,{className:"h-12 w-12 text-blue-400 mx-auto mb-4"}),e.jsx("h2",{className:"text-3xl font-extrabold text-white sm:text-4xl",children:"Get in Touch"}),e.jsx("p",{className:"mt-4 text-xl text-gray-300",children:"Let's discuss how we can protect your digital assets"})]}),e.jsxs(d.form,{onSubmit:i,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsx("div",{className:"sm:col-span-2",children:e.jsx("input",{type:"text",name:"name",value:t.name,onChange:s,placeholder:"Name",required:!0,maxLength:100,pattern:"[A-Za-z\\s]+",className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx("input",{type:"email",name:"email",value:t.email,onChange:s,placeholder:"Email",required:!0,maxLength:254,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx("textarea",{name:"message",value:t.message,onChange:s,rows:4,placeholder:"Message",required:!0,maxLength:1e3,className:"w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"})}),e.jsx("div",{className:"sm:col-span-2",children:e.jsx("button",{type:"submit",className:"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Send Message"})})]})]})})})},Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(L,{}),e.jsx(M,{}),e.jsx(q,{}),e.jsx(F,{}),e.jsx(W,{})]});export{Z as default};