import{p as ae,q as E,o as p,g as y,s as ne,x as w,y as x,z as C,d as o,F as Z,A as J,a as q,t as G,c as L,B as M,h as T,m as F,C as ie,f as b,D as H,j as O,w as P,e as z,E as Q,T as re,r as d,n as R,b as j,v as S,G as te,i as I,k as ce,l as U,_ as de}from"./index-a8eec92e.js";/* empty css             */import{_ as ue}from"./ConfirmDelete-aeff83de.js";/* empty css                   */import{u as oe}from"./subcategory-e2b15757.js";const N=()=>E.get("/sanctum/csrf-cookie"),se=ae({id:"product",state:()=>({products:[],loading:!1,error:null}),getters:{allProduct:e=>e.products,isLoading:e=>e.loading,getError:e=>e.error},actions:{async productAll(){this.loading=!0;try{const e=await E.get("/api/product").then(t=>{this.products=t.data})}catch(e){this.error=e}finally{this.loading=!1}},async addProduct(e,t,s){await N(),s.value=!0,E.post("/api/product",e).then(a=>{s.value=!1,this.products.push(a.data),console.log(a)}).catch(a=>{if(console.log(a),a.response.status!==422)throw a;t.value=Object.values(a.response.data.errors).flat(),s.value=!1})},async editProduct(e,t,s,a){await N(),s.value=!0,E.post(`/api/product/${a}`,e).then(n=>{s.value=!1,console.log(n)}).catch(n=>{if(console.log(n),n.response.status!==422)throw n;t.value=Object.values(n.response.data.errors).flat(),s.value=!1})},async deleteProduct(e,t){await N(),t.value=!0;try{const s=await E.delete(`/api/product/${e}`);console.log(s),t.value=!1}catch(s){this.error=s,t.value=!1}finally{t.value=!1}}}});var pe=Object.defineProperty,he=Object.defineProperties,ge=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,Y=(e,t,s)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,A=(e,t)=>{for(var s in t||(t={}))fe.call(t,s)&&Y(e,s,t[s]);if(X)for(var s of X(t))me.call(t,s)&&Y(e,s,t[s]);return e},W=(e,t)=>he(e,ge(t));const _e={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer(){this.autoscroll&&this.maybeAdjustScroll()},open(e){this.autoscroll&&e&&this.$nextTick(()=>this.maybeAdjustScroll())}},methods:{maybeAdjustScroll(){var e;const t=((e=this.$refs.dropdownMenu)==null?void 0:e.children[this.typeAheadPointer])||!1;if(t){const s=this.getDropdownViewport(),{top:a,bottom:n,height:l}=t.getBoundingClientRect();if(a<s.top)return this.$refs.dropdownMenu.scrollTop=t.offsetTop;if(n>s.bottom)return this.$refs.dropdownMenu.scrollTop=t.offsetTop-(s.height-l)}},getDropdownViewport(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},ye={data(){return{typeAheadPointer:-1}},watch:{filteredOptions(){for(let e=0;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},open(e){e&&this.typeAheadToLastSelected()},selectedValue(){this.open&&this.typeAheadToLastSelected()}},methods:{typeAheadUp(){for(let e=this.typeAheadPointer-1;e>=0;e--)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadDown(){for(let e=this.typeAheadPointer+1;e<this.filteredOptions.length;e++)if(this.selectable(this.filteredOptions[e])){this.typeAheadPointer=e;break}},typeAheadSelect(){const e=this.filteredOptions[this.typeAheadPointer];e&&this.selectable(e)&&this.select(e)},typeAheadToLastSelected(){this.typeAheadPointer=this.selectedValue.length!==0?this.filteredOptions.indexOf(this.selectedValue[this.selectedValue.length-1]):-1}}},ve={props:{loading:{type:Boolean,default:!1}},data(){return{mutableLoading:!1}},watch:{search(){this.$emit("search",this.search,this.toggleLoading)},loading(e){this.mutableLoading=e}},methods:{toggleLoading(e=null){return e==null?this.mutableLoading=!this.mutableLoading:this.mutableLoading=e}}},K=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},be={},we={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"},xe=o("path",{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"},null,-1),Ce=[xe];function Oe(e,t){return p(),y("svg",we,Ce)}const $e=K(be,[["render",Oe]]),Se={},Pe={xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"},Ve=o("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),ke=[Ve];function Ae(e,t){return p(),y("svg",Pe,ke)}const Le=K(Se,[["render",Ae]]),ee={Deselect:$e,OpenIndicator:Le},Be={mounted(e,{instance:t}){if(t.appendToBody){const{height:s,top:a,left:n,width:l}=t.$refs.toggle.getBoundingClientRect();let m=window.scrollX||window.pageXOffset,r=window.scrollY||window.pageYOffset;e.unbindPosition=t.calculatePosition(e,t,{width:l+"px",left:m+n+"px",top:r+a+s+"px"}),document.body.appendChild(e)}},unmounted(e,{instance:t}){t.appendToBody&&(e.unbindPosition&&typeof e.unbindPosition=="function"&&e.unbindPosition(),e.parentNode&&e.parentNode.removeChild(e))}};function De(e){const t={};return Object.keys(e).sort().forEach(s=>{t[s]=e[s]}),JSON.stringify(t)}let Ee=0;function Te(){return++Ee}const Fe={components:A({},ee),directives:{appendToBody:Be},mixins:[_e,ye,ve],compatConfig:{MODE:3},emits:["open","close","update:modelValue","search","search:compositionstart","search:compositionend","search:keydown","search:blur","search:focus","search:input","option:created","option:selecting","option:selected","option:deselecting","option:deselected"],props:{modelValue:{},components:{type:Object,default:()=>({})},options:{type:Array,default(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},deselectFromDropdown:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:e=>e},selectable:{type:Function,default:e=>!0},getOptionLabel:{type:Function,default(e){return typeof e=="object"?e.hasOwnProperty(this.label)?e[this.label]:console.warn(`[vue-select warn]: Label key "option.${this.label}" does not exist in options object ${JSON.stringify(e)}.
https://vue-select.org/api/props.html#getoptionlabel`):e}},getOptionKey:{type:Function,default(e){if(typeof e!="object")return e;try{return e.hasOwnProperty("id")?e.id:De(e)}catch(t){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,e,t)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default(e,t,s){return(t||"").toLocaleLowerCase().indexOf(s.toLocaleLowerCase())>-1}},filter:{type:Function,default(e,t){return e.filter(s=>{let a=this.getOptionLabel(s);return typeof a=="number"&&(a=a.toString()),this.filterBy(s,a,t)})}},createOption:{type:Function,default(e){return typeof this.optionList[0]=="object"?{[this.label]:e}:e}},resetOnOptionsChange:{default:!1,validator:e=>["function","boolean"].includes(typeof e)},clearSearchOnBlur:{type:Function,default:function({clearSearchOnSelect:e,multiple:t}){return e&&!t}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:()=>[13]},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:(e,t)=>e},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default(e,t,{width:s,top:a,left:n}){e.style.top=a,e.style.left=n,e.style.width=s}},dropdownShouldOpen:{type:Function,default({noDrop:e,open:t,mutableLoading:s}){return e?!1:t&&!s}},uid:{type:[String,Number],default:()=>Te()}},data(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues(){return typeof this.modelValue>"u"||this.isReducingValues},selectedValue(){let e=this.modelValue;return this.isTrackingValues&&(e=this.$data._value),e!=null&&e!==""?[].concat(e):[]},optionList(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope(){const e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:A({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":`vs${this.uid}__combobox`,"aria-controls":`vs${this.uid}__listbox`,ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":`vs${this.uid}__option-${this.typeAheadPointer}`}:{}),events:{compositionstart:()=>this.isComposing=!0,compositionend:()=>this.isComposing=!1,keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:t=>this.search=t.target.value}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:W(A({},e),{deselect:this.deselect}),footer:W(A({},e),{deselect:this.deselect})}},childComponents(){return A(A({},ee),this.components)},stateClasses(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching(){return!!this.search},dropdownOpen(){return this.dropdownShouldOpen(this)},searchPlaceholder(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions(){const e=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return e;const t=this.search.length?this.filter(e,this.search,this):e;if(this.taggable&&this.search.length){const s=this.createOption(this.search);this.optionExists(s)||t.unshift(s)}return t},isValueEmpty(){return this.selectedValue.length===0},showClearButton(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options(e,t){const s=()=>typeof this.resetOnOptionsChange=="function"?this.resetOnOptionsChange(e,t,this.selectedValue):this.resetOnOptionsChange;!this.taggable&&s()&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler(e){this.isTrackingValues&&this.setInternalValueFromOptions(e)}},multiple(){this.clearSelection()},open(e){this.$emit(e?"open":"close")}},created(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions(e){Array.isArray(e)?this.$data._value=e.map(t=>this.findOptionFromReducedValue(t)):this.$data._value=this.findOptionFromReducedValue(e)},select(e){this.$emit("option:selecting",e),this.isOptionSelected(e)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(e):(this.taggable&&!this.optionExists(e)&&(this.$emit("option:created",e),this.pushTag(e)),this.multiple&&(e=this.selectedValue.concat(e)),this.updateValue(e),this.$emit("option:selected",e)),this.onAfterSelect(e)},deselect(e){this.$emit("option:deselecting",e),this.updateValue(this.selectedValue.filter(t=>!this.optionComparator(t,e))),this.$emit("option:deselected",e)},clearSelection(){this.updateValue(this.multiple?[]:null)},onAfterSelect(e){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue(e){typeof this.modelValue>"u"&&(this.$data._value=e),e!==null&&(Array.isArray(e)?e=e.map(t=>this.reduce(t)):e=this.reduce(e)),this.$emit("update:modelValue",e)},toggleDropdown(e){const t=e.target!==this.searchEl;t&&e.preventDefault();const s=[...this.deselectButtons||[],this.$refs.clearButton];if(this.searchEl===void 0||s.filter(Boolean).some(a=>a.contains(e.target)||a===e.target)){e.preventDefault();return}this.open&&t?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected(e){return this.selectedValue.some(t=>this.optionComparator(t,e))},isOptionDeselectable(e){return this.isOptionSelected(e)&&this.deselectFromDropdown},optionComparator(e,t){return this.getOptionKey(e)===this.getOptionKey(t)},findOptionFromReducedValue(e){const t=a=>JSON.stringify(this.reduce(a))===JSON.stringify(e),s=[...this.options,...this.pushedTags].filter(t);return s.length===1?s[0]:s.find(a=>this.optionComparator(a,this.$data._value))||e},closeSearchOptions(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){let e=null;this.multiple&&(e=[...this.selectedValue.slice(0,this.selectedValue.length-1)]),this.updateValue(e)}},optionExists(e){return this.optionList.some(t=>this.optionComparator(t,e))},normalizeOptionForSlot(e){return typeof e=="object"?e:{[this.label]:e}},pushTag(e){this.pushedTags.push(e)},onEscape(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur(){if(this.mousedown&&!this.searching)this.mousedown=!1;else{const{clearSearchOnSelect:e,multiple:t}=this;this.clearSearchOnBlur({clearSearchOnSelect:e,multiple:t})&&(this.search=""),this.closeSearchOptions();return}if(this.search.length===0&&this.options.length===0){this.closeSearchOptions();return}},onSearchFocus(){this.open=!0,this.$emit("search:focus")},onMousedown(){this.mousedown=!0},onMouseUp(){this.mousedown=!1},onSearchKeyDown(e){const t=n=>(n.preventDefault(),!this.isComposing&&this.typeAheadSelect()),s={8:n=>this.maybeDeleteValue(),9:n=>this.onTab(),27:n=>this.onEscape(),38:n=>(n.preventDefault(),this.typeAheadUp()),40:n=>(n.preventDefault(),this.typeAheadDown())};this.selectOnKeyCodes.forEach(n=>s[n]=t);const a=this.mapKeydown(s,this);if(typeof a[e.keyCode]=="function")return a[e.keyCode](e)}}},ze=["dir"],je=["id","aria-expanded","aria-owns"],Me={ref:"selectedOptions",class:"vs__selected-options"},Ie=["disabled","title","aria-label","onClick"],Ue={ref:"actions",class:"vs__actions"},Ne=["disabled"],qe={class:"vs__spinner"},Re=["id"],Ke=["id","aria-selected","onMouseover","onClick"],Ze={key:0,class:"vs__no-options"},Je=q(" Sorry, no matching options. "),Ge=["id"];function He(e,t,s,a,n,l){const m=ne("append-to-body");return p(),y("div",{dir:s.dir,class:Q(["v-select",l.stateClasses])},[w(e.$slots,"header",x(C(l.scope.header))),o("div",{id:`vs${s.uid}__combobox`,ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":l.dropdownOpen.toString(),"aria-owns":`vs${s.uid}__listbox`,"aria-label":"Search for option",onMousedown:t[1]||(t[1]=r=>l.toggleDropdown(r))},[o("div",Me,[(p(!0),y(Z,null,J(l.selectedValue,(r,h)=>w(e.$slots,"selected-option-container",{option:l.normalizeOptionForSlot(r),deselect:l.deselect,multiple:s.multiple,disabled:s.disabled},()=>[(p(),y("span",{key:s.getOptionKey(r),class:"vs__selected"},[w(e.$slots,"selected-option",x(C(l.normalizeOptionForSlot(r))),()=>[q(G(s.getOptionLabel(r)),1)]),s.multiple?(p(),y("button",{key:0,ref_for:!0,ref:g=>n.deselectButtons[h]=g,disabled:s.disabled,type:"button",class:"vs__deselect",title:`Deselect ${s.getOptionLabel(r)}`,"aria-label":`Deselect ${s.getOptionLabel(r)}`,onClick:g=>l.deselect(r)},[(p(),L(M(l.childComponents.Deselect)))],8,Ie)):T("",!0)]))])),256)),w(e.$slots,"search",x(C(l.scope.search)),()=>[o("input",F({class:"vs__search"},l.scope.search.attributes,ie(l.scope.search.events)),null,16)])],512),o("div",Ue,[b(o("button",{ref:"clearButton",disabled:s.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:t[0]||(t[0]=(...r)=>l.clearSelection&&l.clearSelection(...r))},[(p(),L(M(l.childComponents.Deselect)))],8,Ne),[[H,l.showClearButton]]),w(e.$slots,"open-indicator",x(C(l.scope.openIndicator)),()=>[s.noDrop?T("",!0):(p(),L(M(l.childComponents.OpenIndicator),x(F({key:0},l.scope.openIndicator.attributes)),null,16))]),w(e.$slots,"spinner",x(C(l.scope.spinner)),()=>[b(o("div",qe,"Loading...",512),[[H,e.mutableLoading]])])],512)],40,je),O(re,{name:s.transition},{default:P(()=>[l.dropdownOpen?b((p(),y("ul",{id:`vs${s.uid}__listbox`,ref:"dropdownMenu",key:`vs${s.uid}__listbox`,class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:t[2]||(t[2]=z((...r)=>l.onMousedown&&l.onMousedown(...r),["prevent"])),onMouseup:t[3]||(t[3]=(...r)=>l.onMouseUp&&l.onMouseUp(...r))},[w(e.$slots,"list-header",x(C(l.scope.listHeader))),(p(!0),y(Z,null,J(l.filteredOptions,(r,h)=>(p(),y("li",{id:`vs${s.uid}__option-${h}`,key:s.getOptionKey(r),role:"option",class:Q(["vs__dropdown-option",{"vs__dropdown-option--deselect":l.isOptionDeselectable(r)&&h===e.typeAheadPointer,"vs__dropdown-option--selected":l.isOptionSelected(r),"vs__dropdown-option--highlight":h===e.typeAheadPointer,"vs__dropdown-option--disabled":!s.selectable(r)}]),"aria-selected":h===e.typeAheadPointer?!0:null,onMouseover:g=>s.selectable(r)?e.typeAheadPointer=h:null,onClick:z(g=>s.selectable(r)?l.select(r):null,["prevent","stop"])},[w(e.$slots,"option",x(C(l.normalizeOptionForSlot(r))),()=>[q(G(s.getOptionLabel(r)),1)])],42,Ke))),128)),l.filteredOptions.length===0?(p(),y("li",Ze,[w(e.$slots,"no-options",x(C(l.scope.noOptions)),()=>[Je])])):T("",!0),w(e.$slots,"list-footer",x(C(l.scope.listFooter)))],40,Re)),[[m]]):(p(),y("ul",{key:1,id:`vs${s.uid}__listbox`,role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,Ge))]),_:3},8,["name"]),w(e.$slots,"footer",x(C(l.scope.footer)))],10,ze)}const le=K(Fe,[["render",He]]),Qe=o("i",{class:"fa-solid fa-plus"},null,-1),Xe=o("p",null,"Add Product",-1),Ye=[Qe,Xe],We={class:"w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg"},et={class:"flex justify-between border-b py-3 px-4 items-center"},tt=o("p",{class:"font-medium text-lg"},"Add Product",-1),ot=["onClick"],st={class:"px-5 py-3"},lt={class:"space-y-3"},at={class:"grid grid-cols-2 gap-3"},nt={class:"col-span-2 flex justify-center"},it={class:"flex justify-center w-40 flex-none"},rt={class:"relative"},ct=["src"],dt={class:"absolute z-50 top-0 hover:!opacity-100 rounded-lg",style:{opacity:"0"}},ut={for:"pictureInput"},pt=o("div",{class:"w-40 h-40 bg-black opacity-60 flex items-center rounded-lg"},[o("p",{class:"text-center w-full"},[o("i",{class:"fa-solid fa-pen",style:{color:"#ffffff"}})])],-1),ht={class:"flex flex-col gap-2 text-sm"},gt=o("label",{for:"product_name"},"Name",-1),ft={class:"flex flex-col gap-2 text-sm"},mt=o("label",{for:"product_price"},"Price",-1),_t={class:"flex flex-col gap-2 text-sm"},yt=o("label",{for:"product_stock"},"Stock",-1),vt={class:"flex flex-col gap-2 text-sm"},bt=o("label",{for:"product_tag"},"Tag",-1),wt={class:"flex flex-col gap-2 text-sm"},xt=o("label",{for:"product_tag"},"Category",-1),Ct=o("option",{value:null,disabled:""}," Select Age ",-1),Ot=o("div",null,null,-1),$t={class:"bg-ezzora-500 hover:bg-ezzora-600 text-white px-3 py-2 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-3"},St=o("p",null,"Add",-1),Pt=o("i",{class:"fa-solid fa-plus"},null,-1),Vt={key:0,role:"status",class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},kt=o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),At=o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),Lt=[kt,At],Bt={__name:"AddProduct",props:{method:{type:Function,required:!0}},setup(e){const t=oe(),s=d([]),a=d([]);R(async()=>{await n()});async function n(){await t.subCategoryAll(),s.value=t.allSubCategories.map(i=>({name:i.sub_category_name,category:i.category.category_name,id:i.id})),a.value=t.allSubCategories.map(i=>({id:i.id,label:i.sub_category_name,name:i.sub_category_name}))}const l=d(""),m=d(""),r=d(""),h=d(""),g=d(""),v=d(""),$=d(!1),k=e,V=d("https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"),B=async()=>{$.value=!0;const i=new FormData;i.append("product_name",l.value),i.append("product_price",m.value),i.append("product_stock",r.value),i.append("product_image",h.value),i.append("product_tag",g.value),i.append("sub_category_id",v.value.id?v.value.id:"null"),await k.method(i,$),console.log(),l.value="",m.value="",r.value="",h.value="",g.value="",$.value=!1,v.value="",V.value="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"},_=i=>{const c=i.target.files[0];c&&(h.value=c,V.value=URL.createObjectURL(c))};return(i,c)=>{const D=j("v-dialog");return p(),L(D,null,{activator:P(({props:f})=>[o("div",F(f,{class:"bg-ezzora-200 hover:bg-ezzora-300 text-ezzora-800 shadow-lg px-4 py-2 rounded-lg gap-1 flex items-center text-sm cursor-pointer"}),Ye,16)]),default:P(({isActive:f})=>[o("div",We,[o("div",et,[tt,o("button",{onClick:u=>f.value=!1,class:"fa-solid fa-x rounded-xl hover:bg-gray-100 px-3 py-2"},null,8,ot)]),o("div",st,[o("form",{onSubmit:z(B,["prevent"]),enctype:"multipart/form-data"},[o("div",lt,[o("div",at,[o("div",nt,[o("div",it,[o("div",rt,[o("img",{id:"picture",src:V.value,class:"object-cover w-40 h-40 rounded-lg",alt:"Placeholder Image"},null,8,ct),o("div",dt,[o("label",ut,[pt,o("input",{accept:"image/*",type:"file",class:"absolute bottom-0 opacity-0 w-40 h-2",id:"pictureInput",required:"",onChange:c[0]||(c[0]=(...u)=>_&&_(...u))},null,32)])])])])]),o("div",ht,[gt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>l.value=u),id:"product_name",placeholder:"Enter Product Name",required:""},null,512),[[S,l.value]])]),o("div",ft,[mt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"number","onUpdate:modelValue":c[2]||(c[2]=u=>m.value=u),id:"product_price",placeholder:"Enter Product Price",required:""},null,512),[[S,m.value]])]),o("div",_t,[yt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"number","onUpdate:modelValue":c[3]||(c[3]=u=>r.value=u),id:"product_stock",placeholder:"Enter Product Stock",required:""},null,512),[[S,r.value]])]),o("div",vt,[bt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"text","onUpdate:modelValue":c[4]||(c[4]=u=>g.value=u),id:"product_tag",placeholder:"Enter Product Tag",required:""},null,512),[[S,g.value]])]),o("div",wt,[xt,O(te(le),{modelValue:v.value,"onUpdate:modelValue":c[5]||(c[5]=u=>v.value=u),options:a.value,placeholder:"Enter Category",class:"w-full"},{default:P(()=>[Ct]),_:1},8,["modelValue","options"])]),Ot]),o("button",$t,[St,Pt,$.value?(p(),y("svg",Vt,Lt)):T("",!0)])])],32)])])]),_:1})}}},Dt=o("i",{class:"fa-solid fa-pen"},null,-1),Et=o("p",null,"Edit",-1),Tt=[Dt,Et],Ft={class:"w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg"},zt={class:"flex justify-between border-b py-3 px-4 items-center"},jt=o("p",{class:"font-medium text-lg"},"Edit Product",-1),Mt=["onClick"],It={class:"px-5 py-3"},Ut={class:"space-y-3"},Nt={class:"grid grid-cols-2 gap-3"},qt={class:"col-span-2 flex justify-center"},Rt={class:"flex justify-center w-40 flex-none"},Kt={class:"relative"},Zt=["src"],Jt={class:"absolute z-50 top-0 hover:!opacity-100 rounded-lg",style:{opacity:"0"}},Gt={for:"pictureInput"},Ht=o("div",{class:"w-40 h-40 bg-black opacity-60 flex items-center rounded-lg"},[o("p",{class:"text-center w-full"},[o("i",{class:"fa-solid fa-pen",style:{color:"#ffffff"}})])],-1),Qt={class:"flex flex-col gap-2 text-sm"},Xt=o("label",{for:"product_name"},"Name",-1),Yt={class:"flex flex-col gap-2 text-sm"},Wt=o("label",{for:"product_price"},"Price",-1),eo={class:"flex flex-col gap-2 text-sm"},to=o("label",{for:"product_stock"},"Stock",-1),oo={class:"flex flex-col gap-2 text-sm"},so=o("label",{for:"product_tag"},"Tag",-1),lo={class:"flex flex-col gap-2 text-sm"},ao=o("label",{for:"product_tag"},"Category",-1),no=o("option",{value:""},null,-1),io={class:"bg-ezzora-500 hover:bg-ezzora-600 text-white px-3 py-2 rounded-lg text-sm cursor-pointer flex justify-center items-center gap-3"},ro=o("p",null,"Add",-1),co=o("i",{class:"fa-solid fa-plus"},null,-1),uo={key:0,role:"status",class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},po=o("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),ho=o("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),go=[po,ho],fo={__name:"EditProduct",props:{method:{type:Function,required:!0},product:Object},setup(e){const t=oe(),s=d([]),a=d([]);R(async()=>{await n()});async function n(){await t.subCategoryAll(),s.value=t.allSubCategories.map(i=>({name:i.sub_category_name,category:i.category.category_name,id:i.id})),a.value=t.allSubCategories.map(i=>({id:i.id,label:i.sub_category_name,name:i.sub_category_name}))}const l=e,m=d(l.product.name),r=d(l.product.product_price),h=d(l.product.product_stock),g=d(null),v=d(l.product.product_tag),$=d(l.product.subcategory?l.product.subcategory.id:null),k=d(!1),V=d("https://api.ezzora.webz.co.id/storage/images/product/"+l.product.product_image),B=async()=>{k.value=!0;const i=new FormData;i.append("product_name",m.value),i.append("product_price",r.value),i.append("product_stock",h.value),i.append("product_image",g.value),i.append("product_tag",v.value),i.append("_method","PUT"),await l.method(i,l.product.id),k.value=!1},_=i=>{const c=i.target.files[0];c&&(g.value=c,V.value=URL.createObjectURL(c))};return(i,c)=>{const D=j("v-dialog");return p(),L(D,null,{activator:P(({props:f})=>[o("div",F(f,{class:"flex gap-2 items-center text-white bg-orange-400 rounded-lg px-3 py-1 cursor-pointer"}),Tt,16)]),default:P(({isActive:f})=>[o("div",Ft,[o("div",zt,[jt,o("button",{onClick:u=>f.value=!1,class:"fa-solid fa-x rounded-xl hover:bg-gray-100 px-3 py-2"},null,8,Mt)]),o("div",It,[o("form",{onSubmit:z(B,["prevent"]),enctype:"multipart/form-data"},[o("div",Ut,[o("div",Nt,[o("div",qt,[o("div",Rt,[o("div",Kt,[o("img",{id:"picture",src:V.value,class:"object-cover w-40 h-40 rounded-lg",alt:"Placeholder Image"},null,8,Zt),o("div",Jt,[o("label",Gt,[Ht,o("input",{accept:"image/*",type:"file",class:"absolute bottom-0 opacity-0 w-40 h-2",id:"pictureInput",onChange:c[0]||(c[0]=(...u)=>_&&_(...u))},null,32)])])])])]),o("div",Qt,[Xt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"text","onUpdate:modelValue":c[1]||(c[1]=u=>m.value=u),id:"product_name",placeholder:"Enter Product Name",required:""},null,512),[[S,m.value]])]),o("div",Yt,[Wt,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"number","onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),id:"product_price",placeholder:"Enter Product Price",required:""},null,512),[[S,r.value]])]),o("div",eo,[to,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"number","onUpdate:modelValue":c[3]||(c[3]=u=>h.value=u),id:"product_stock",placeholder:"Enter Product Stock",required:""},null,512),[[S,h.value]])]),o("div",oo,[so,b(o("input",{class:"text-sm rounded-lg bg-gray-100 w-full",type:"text","onUpdate:modelValue":c[4]||(c[4]=u=>v.value=u),id:"product_tag",placeholder:"Enter Product Tag",required:""},null,512),[[S,v.value]])]),o("div",lo,[ao,O(te(le),{modelValue:$.value,"onUpdate:modelValue":c[5]||(c[5]=u=>$.value=u),options:a.value,placeholder:"Enter Category",class:"w-full"},{default:P(()=>[no]),_:1},8,["modelValue","options"])])]),o("button",io,[ro,co,k.value?(p(),y("svg",uo,go)):T("",!0)])])],32)])])]),_:1})}}},mo={class:"relative"},_o={class:"bg-ezzora-100 p-5 rounded-lg space-y-3 border"},yo={class:"flex justify-between items-center"},vo={class:"flex gap-3 items-center justify-center text-xs"},bo={__name:"ProductTable",props:{products:Array,fetchProducts:Function},setup(e){const t=se(),s=e,a=d(""),n=d(1),l=d(10),m=[{key:"name",title:"Product Name"},{key:"subcategory.sub_category_name",title:"Category",align:"start"},{key:"product_price",title:"Price",align:"start"},{key:"product_stock",title:"Stock",align:"start"},{key:"product_tag",title:"Tag",align:"start"},{key:"id",title:"Action",align:"center"}],r=I(()=>Math.ceil(h.value.length/l.value)),h=I(()=>s.products.filter(_=>_.name.toLowerCase().includes(a.value))),g=d(!1),v=d([]),$=I(()=>v.value),k=async _=>{await t.addProduct(_,v,g),U(()=>{s.fetchProducts()},s.products)},V=async(_,i)=>{await t.editProduct(_,v,g,i),U(()=>{s.fetchProducts()},s.products)},B=async _=>{await t.deleteProduct(_,g),U(()=>{s.fetchProducts()},s.products)};return(_,i)=>{const c=j("v-data-table"),D=j("v-pagination");return p(),y("div",mo,[O(ce,{class:"w-full",errors:$.value},null,8,["errors"]),o("div",_o,[o("div",yo,[O(Bt,{method:k}),b(o("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=f=>a.value=f),class:"rounded-lg text-sm min-w-52",placeholder:"Search Product Item"},null,512),[[S,a.value]])]),O(c,{page:n.value,"onUpdate:page":i[1]||(i[1]=f=>n.value=f),search:a.value,headers:m,items:e.products,"hide-default-footer":"","header-props":{class:"bg-ezzora-200"},"item-key":"id",class:"border shadow-lg"},{"item.id":P(({item:f})=>[o("div",vo,[O(fo,{product:f,method:V},null,8,["product"]),O(ue,{type:"Product",id:f.id,method:B},null,8,["id"])])]),_:1},8,["page","search","items"]),O(D,{modelValue:n.value,"onUpdate:modelValue":i[2]||(i[2]=f=>n.value=f),length:r.value,class:"bg-ezzora-200 rounded-lg","total-visible":5},null,8,["modelValue","length"])])])}}},wo={class:"w-full space-y-5"},xo=o("p",{class:"text-2xl font-bold text-ezzora-900"},"Product Items",-1),Vo={__name:"Index",setup(e){const t=se(),s=d([]);R(async()=>{await a()});async function a(){await t.productAll(),s.value=t.allProduct.map(n=>({name:n.product_name,id:n.id,subcategory:n.subcategory,product_price:n.product_price,product_stock:n.product_stock,product_tag:n.product_tag,product_image:n.product_image,subcategory_id:n.subcategory_id}))}return(n,l)=>(p(),L(de,null,{default:P(()=>[o("div",wo,[xo,O(bo,{products:s.value,fetchProducts:a},null,8,["products"])])]),_:1}))}};export{Vo as default};
