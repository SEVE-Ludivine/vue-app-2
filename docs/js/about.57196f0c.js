(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1aaf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("l-map",{ref:"map",staticClass:"map",attrs:{center:t.center,zoom:t.zoom},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated}},[n("l-tile-layer",{attrs:{url:t.url}}),t._l(this.json,(function(t){return n("Maps",{key:t.recordid,attrs:{marker:t,src:"marker"}})}))],2)],1)},o=[],i=(n("96cf"),n("1da1")),s=n("2699"),a=n("a40a"),c=(n("6cc5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-marker",{key:t.marker.recordid,attrs:{"lat-lng":t.marker.fields.location}},[n("l-icon",{attrs:{"icon-url":"src/assets/logo.png"}})],1)}),u=[],l=n("4e2b"),h=n("e11e"),d=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},p=function(t,e,n,r){var o=function(r){var o="set"+d(r),i=n[r].type===Object||n[r].type===Array||Array.isArray(n[r].type);n[r].custom&&t[o]?t.$watch(r,(function(e,n){t[o](e,n)}),{deep:i}):"setOptions"===o?t.$watch(r,(function(t,n){Object(h["setOptions"])(e,t)}),{deep:i}):e[o]&&t.$watch(r,(function(t,n){e[o](t)}),{deep:i})};for(var i in n)o(i)},f=function(t){var e={};for(var n in t){var r=t[n];null!==r&&void 0!==r&&(e[n]=r)}return e},m=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var r=f(n);t=f(t);var o=e.$options.props;for(var i in t){var s=o[i]?o[i].default&&"function"===typeof o[i].default?o[i].default.call():o[i].default:Symbol("unique"),a=!1;a=Array.isArray(s)?JSON.stringify(s)===JSON.stringify(t[i]):s===t[i],r[i]&&!a?(console.warn(i+" props is overriding the value passed in the options props"),r[i]=t[i]):r[i]||(r[i]=t[i])}return r},b=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},v={name:"LIcon",props:{iconUrl:{type:String,custom:!0,default:null},iconRetinaUrl:{type:String,custom:!0,default:null},iconSize:{type:[Object,Array],custom:!0,default:null},iconAnchor:{type:[Object,Array],custom:!0,default:null},popupAnchor:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},tooltipAnchor:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},shadowUrl:{type:String,custom:!0,default:null},shadowRetinaUrl:{type:String,custom:!0,default:null},shadowSize:{type:[Object,Array],custom:!0,default:null},shadowAnchor:{type:[Object,Array],custom:!0,default:null},bgPos:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},className:{type:String,custom:!0,default:""},options:{type:Object,custom:!0,default:function(){return{}}}},data:function(){return{parentContainer:null,observer:null,recreationNeeded:!1,swapHtmlNeeded:!1}},mounted:function(){var t=this;this.parentContainer=b(this.$parent),p(this,this.$parent.mapObject,this.$options.props),this.observer=new MutationObserver((function(){t.scheduleHtmlSwap()})),this.observer.observe(this.$el,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.scheduleCreateIcon()},beforeDestroy:function(){this.parentContainer.mapObject&&this.parentContainer.mapObject.setIcon(this.parentContainer.$props.icon),this.observer.disconnect()},methods:{scheduleCreateIcon:function(){this.recreationNeeded=!0,this.$nextTick(this.createIcon)},scheduleHtmlSwap:function(){this.htmlSwapNeeded=!0,this.$nextTick(this.createIcon)},createIcon:function(){if(this.htmlSwapNeeded&&!this.recreationNeeded&&this.iconObject&&this.parentContainer.mapObject.getElement())return this.parentContainer.mapObject.getElement().innerHTML=this.$el.innerHTML,void(this.htmlSwapNeeded=!1);if(this.recreationNeeded){this.iconObject&&h["DomEvent"].off(this.iconObject,this.$listeners);var t=m({iconUrl:this.iconUrl,iconRetinaUrl:this.iconRetinaUrl,iconSize:this.iconSize,iconAnchor:this.iconAnchor,popupAnchor:this.popupAnchor,tooltipAnchor:this.tooltipAnchor,shadowUrl:this.shadowUrl,shadowRetinaUrl:this.shadowRetinaUrl,shadowSize:this.shadowSize,shadowAnchor:this.shadowAnchor,bgPos:this.bgPos,className:this.className,html:this.$el.innerHTML||this.html},this);t.html?this.iconObject=Object(h["divIcon"])(t):this.iconObject=Object(h["icon"])(t),h["DomEvent"].on(this.iconObject,this.$listeners),this.parentContainer.mapObject.setIcon(this.iconObject),this.recreationNeeded=!1,this.htmlSwapNeeded=!1}},setIconUrl:function(){this.scheduleCreateIcon()},setIconRetinaUrl:function(){this.scheduleCreateIcon()},setIconSize:function(){this.scheduleCreateIcon()},setIconAnchor:function(){this.scheduleCreateIcon()},setPopupAnchor:function(){this.scheduleCreateIcon()},setTooltipAnchor:function(){this.scheduleCreateIcon()},setShadowUrl:function(){this.scheduleCreateIcon()},setShadowRetinaUrl:function(){this.scheduleCreateIcon()},setShadowAnchor:function(){this.scheduleCreateIcon()},setBgPos:function(){this.scheduleCreateIcon()},setClassName:function(){this.scheduleCreateIcon()},setHtml:function(){this.scheduleCreateIcon()}},render:function(){return null}};function y(t,e,n,r,o,i,s,a,c,u){"boolean"!==typeof s&&(c=a,a=s,s=!1);var l,h="function"===typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,o&&(h.functional=!0)),r&&(h._scopeId=r),i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},h._ssrRegister=l):e&&(l=s?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(h.functional){var d=h.render;h.render=function(t,e){return l.call(e),d(t,e)}}else{var p=h.beforeCreate;h.beforeCreate=p?[].concat(p,l):[l]}return n}var O=v,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},w=[],_=void 0,C=void 0,g=void 0,A=!1,S=y({render:j,staticRenderFns:w},_,O,C,A,g,!1,void 0,void 0,void 0),I=S,$={components:{LMarker:l["a"],LIcon:I},props:{marker:{type:Object,required:!0}}},U=$,N=n("2877"),R=Object(N["a"])(U,c,u,!1,null,null,null),k=R.exports,z=n("bc3a"),E=n.n(z),T="https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&q=&facet=libtype&facet=gardien&facet=jeux_enfants&facet=pataugeoire&facet=sanitaires&facet=sanitaires_handicapes&facet=chiens_autorises&facet=jardin_clos&facet=abris&facet=point_eau_potable&facet=table_pique_nique",L={components:{LMap:s["a"],LTileLayer:a["a"],Maps:k},created:function(){this.fetchData()},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",center:[47.218702,-1.553207],zoom:14,json:[]}},methods:{fetchData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{E.a.get(T).then((function(t){e.json=t.data.records,console.log(t.data.records)}))}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),zoomUpdated:function(t){this.zoom=t,console.log(this.markers)},centerUpdated:function(t){this.center=t}}},x=L,M=(n("a568"),Object(N["a"])(x,r,o,!1,null,null,null));e["default"]=M.exports},"8c51":function(t,e,n){},a568:function(t,e,n){"use strict";n("8c51")}}]);
//# sourceMappingURL=about.57196f0c.js.map