import{r as a,b,o as f,c as y,w as v,d as e,m as j,e as E,f as C,v as U,j as r,G as B,g as k,h as F,u as z,i as x,k as q,l as w,n as D,_ as N}from"./index-a8eec92e.js";/* empty css             */import{_ as P}from"./ConfirmDelete-aeff83de.js";/* empty css                   */import{E as Z}from"./Editor-de68eca4.js";const L=e("i",{class:"fa-solid fa-plus"},null,-1),S=e("p",null,"Add About Us Content",-1),G=[L,S],I={class:"w-full min-h-[calc(100vh-48px)] overflow-y-scroll invisible-scrollbar"},H={class:"w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg"},J={class:"flex justify-between border-b py-3 px-4 items-center"},K=e("p",{class:"font-medium text-lg"},"Add About Us",-1),O=["onClick"],Q={class:"px-5 py-3"},R={class:"space-y-3"},W={class:"grid grid-cols-1 gap-3"},X={class:"flex flex-col gap-2 text-sm"},Y=e("label",{for:"inputTitle"},"Title",-1),ee={class:"flex flex-col gap-2 text-sm"},te=e("label",{for:"inputContent"},"Content",-1),se={class:"bg-ezzora-500 hover:bg-ezzora-600 text-white px-3 py-2 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-3"},oe=e("p",null,"Add",-1),le=e("i",{class:"fa-solid fa-plus"},null,-1),ae={key:0,role:"status",class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),ie=e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),re=[ne,ie],de={__name:"AddAboutUs",props:{method:{type:Function,required:!0}},setup(_){const l=a(""),t=a(""),s=a(!1),o=_,h=async()=>{s.value=!0;const d=new FormData;d.append("title",l.value),d.append("content",t.value),await o.method(d,s),l.value="",t.value="",s.value=!1};return(d,c)=>{const g=b("v-dialog");return f(),y(g,null,{activator:v(({props:u})=>[e("div",j(u,{class:"bg-ezzora-200 hover:bg-ezzora-300 text-ezzora-800 shadow-lg px-4 py-2 rounded-lg gap-1 flex items-center text-sm cursor-pointer"}),G,16)]),default:v(({isActive:u})=>[e("div",I,[e("div",H,[e("div",J,[K,e("button",{onClick:n=>u.value=!1,class:"fa-solid fa-x rounded-xl hover:bg-gray-100 px-3 py-2"},null,8,O)]),e("div",Q,[e("form",{onSubmit:E(h,["prevent"]),enctype:"multipart/form-data"},[e("div",R,[e("div",W,[e("div",X,[Y,C(e("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"text","onUpdate:modelValue":c[0]||(c[0]=n=>l.value=n),id:"inputTitle",placeholder:"Enter Title",required:""},null,512),[[U,l.value]])]),e("div",ee,[te,r(B(Z),{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=n=>t.value=n),"api-key":"jkhiia9kovq641lwnylmyfhbnd2wio1chdku3lvam2mh8pmk",init:{toolbar_mode:"sliding",plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker markdown",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}},null,8,["modelValue"])])]),e("button",se,[oe,le,s.value?(f(),k("svg",ae,re)):F("",!0)])])],32)])])])]),_:1})}}},ce={class:"relative"},ue={class:"bg-ezzora-100 p-5 rounded-lg space-y-3 border"},pe={class:"flex justify-between items-center"},me={class:"flex gap-3 items-center justify-center text-xs"},_e={__name:"AboutUsTable",props:{users:Array,fetchUsers:Function},setup(_){const l=z(),t=_,s=a(""),o=a(1),h=a(10),d=[{key:"name",title:"Title"},{key:"email",title:"Content"},{key:"id",title:"Action",align:"center"}],c=x(()=>Math.ceil(g.value.length/h.value)),g=x(()=>t.users.filter(p=>p.name.toLowerCase().includes(s.value))),u=a(!1),n=a([]),A=x(()=>n.value),$=async p=>{await l.addUser(p,n,u),w(()=>{t.fetchUsers()},t.users)},V=async p=>{await l.deleteUser(p,u),w(()=>{t.fetchUsers()},t.users)};return(p,m)=>{const T=b("v-data-table"),M=b("v-pagination");return f(),k("div",ce,[r(q,{class:"w-full",errors:A.value},null,8,["errors"]),e("div",ue,[e("div",pe,[r(de,{method:$}),C(e("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=i=>s.value=i),class:"rounded-lg text-sm min-w-52",placeholder:"Search About Us"},null,512),[[U,s.value]])]),r(T,{page:o.value,"onUpdate:page":m[1]||(m[1]=i=>o.value=i),search:s.value,headers:d,items:_.users,"hide-default-footer":"","header-props":{class:"bg-ezzora-200"},"item-key":"id",class:"border shadow-lg"},{"item.id":v(({item:i})=>[e("div",me,[r(P,{type:"User",id:i.id,method:V},null,8,["id"])])]),_:1},8,["page","search","items"]),r(M,{modelValue:o.value,"onUpdate:modelValue":m[2]||(m[2]=i=>o.value=i),length:c.value,class:"bg-ezzora-200 rounded-lg","total-visible":5},null,8,["modelValue","length"])])])}}},he={class:"w-full space-y-5"},fe=e("p",{class:"text-2xl font-bold text-ezzora-900"},"About Us List",-1),ye={__name:"Index",setup(_){const l=z(),t=a([]);D(async()=>{await s()});async function s(){await l.userAll(),t.value=l.allUser.map(o=>({id:o.id,name:o.name,email:o.email}))}return(o,h)=>(f(),y(N,null,{default:v(()=>[e("div",he,[fe,r(_e,{users:t.value,fetchUsers:s},null,8,["users"])])]),_:1}))}};export{ye as default};