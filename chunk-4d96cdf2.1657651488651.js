(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d96cdf2"],{"0c86":function(t,e,n){t.exports=n.p+"img/telegram.19830750.svg"},1538:function(t,e,n){t.exports=n.p+"img/twitter.6c959222.svg"},"175e":function(t,e,n){t.exports=n.p+"img/opensea.a67d3e70.svg"},"4a82":function(t,e,n){},"7ad7":function(t,e,n){},c31f:function(t,e,n){"use strict";n("4a82")},cd56:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerbox"},[n("nav-bar"),n("div",{staticClass:"bodyDiv"},[n("router-view")],1),t._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],class:["backToTop"],attrs:{id:"backToTop"},on:{click:function(e){return t.toTop(t.step)}}},[n("i",{staticClass:"fa fa-arrow-up"})])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerDiv"},[a("div",{staticClass:"copyright"},[t._v("Copyright 2022 © theinunft")]),a("div",{staticClass:"socials"},[a("a",{attrs:{href:"https://twitter.com/theinunft",target:"_blank"}},[a("img",{attrs:{src:n("1538")}})]),a("a",{attrs:{href:"https://t.me/InuCommunityChat",target:"_blank"}},[a("img",{attrs:{src:n("0c86")}})]),a("a",{attrs:{href:"http://opensea.io/collection/the-inu-nft",target:"_blank"}},[a("img",{attrs:{src:n("175e")}})])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[t._m(0),n("div",{class:["menu",{open:!t.navIsCollapse}]},[n("ul",[n("li",{staticClass:"active",on:{click:function(e){return t.toggleNav()}}},[n("a",{attrs:{href:"/#/"}},[t._v("Home")])]),n("li",{on:{click:function(e){return t.toggleNav()}}},[n("a",{attrs:{href:"/#about"}},[t._v("About")])]),n("li",{on:{click:function(e){return t.toggleNav()}}},[n("a",{attrs:{href:"#"}},[t._v("Mint")])])])]),n("div",{staticClass:"searchbox"},[t.showBalance?n("span",{staticClass:"addr"},[t._v(t._s(t.walletAddrShort))]):n("button",{staticClass:"btn_buy",on:{click:function(t){}}},[t._v("connect wallet")])]),n("div",{staticClass:"btnToggle",on:{click:function(e){return t.toggleNav()}}},[n("i",{staticClass:"fa fa-bars"})])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand"},[a("img",{staticClass:"logo_img",attrs:{src:n("fbae")}})])}],c=n("2f62"),r=n("99e5"),l=n.n(r),u=n("e015");n("5f71");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"NavBar",data:function(){return{navIsCollapse:!0,web3:{},walletAddrAll:"",walletAddrShort:"",balance:0,showBalance:!1,usdtContractInstant:{},telLink:"https://t.me/inunft_BSC_EN",langLabel:"EN / 中",langCode:"en"}},computed:f({},Object(c["b"])(["walletAddr"])),mounted:function(){this.$store.commit("updateWalletAddr",""),sessionStorage.setItem("walletAddr",""),this.getWeb3Instance(),this.accountChangecd()},methods:{initTelegramLink:function(){var t=this.$i18n.locale;this.telLink="cn"==t?"https://t.me/inunft_BSC_CN":"https://t.me/inunft_BSC_EN"},swithLang:function(){var t=this;"en"==t.langCode?(t.langCode="cn",t.telLink="https://t.me/inunft_BSC_CN"):(t.langCode="en",t.telLink="https://t.me/inunft_BSC_EN"),t.$i18n.locale=t.langCode,t.$store.commit("reLocale",t.langCode)},toggleNav:function(){this.navIsCollapse?this.navIsCollapse=!1:this.navIsCollapse=!0},accountChangecd:function(){var t=this;window.ethereum.on("accountsChanged",(function(e){t.getWeb3Instance()}))},getWeb3Instance:function(){var t=this;"undefined"!==typeof window.ethereum?(window.ethereum.enable(),t.web3=new l.a(window.ethereum),t.checkChainId()):"undefined"!==typeof window.web3&&(t.web3=new l.a(window.web3.currentProvider),this.checkChainId())},checkChainId:function(){var t=this;t.web3.eth.getChainId((function(e,n){switch(console.log(n),n){case 1:t.web3.eth.getAccounts((function(e,n){0==n.length?t.$Message.info({content:t.$t("common.checkwalletstate")}):(t.walletAddrAll=n[0],t.walletAddrShort=n[0].substr(0,4)+"***"+n[0].substr(38,4),t.$store.commit("updateWalletAddr",n[0]),sessionStorage.setItem("walletAddr",n[0]),t.showBalance=!0,u["a"].$emit("message","ready"))}));break;case 128:t.$Message.error({content:t.$t("common.usebsctips")});break;case 56:t.$Message.error({content:t.$t("common.usebsctips")});break;default:t.$Message.error({content:t.$t("common.usebsctips")});break}}))},getCurrentWalletAddr:function(){var t=this.$store.getters.walletAddr;return""==t?this.$Message.info({content:that.$t("common.unconnectips")}):t}}},p=m,g=(n("c31f"),n("2877")),b=Object(g["a"])(p,i,o,!1,null,"72a8596c",null),v=b.exports,w={name:"Main",components:{NavBar:v},data:function(){return{isActive:!1,step:{type:Number,default:40},timer:"",telLink:"https://t.me/inunft_BSC_EN"}},mounted:function(){window.addEventListener("scroll",this.handleScroll),document.addEventListener("scroll",this.handleScroll),this.initTelegramLink()},watch:{"$i18n.locale":function(t,e){this.telLink="cn"==t?"https://t.me/inunft_BSC_CN":"https://t.me/inunft_BSC_EN"}},methods:{initTelegramLink:function(){var t=this.$i18n.locale;this.telLink="cn"==t?"https://t.me/inunft_BSC_CN":"https://t.me/inunft_BSC_EN"},handleScroll:function(t){var e=document.documentElement.scrollTop;this.isActive=e>200},toTop:function(t){var e=this,n=this;document.documentElement.scrollTop-=t,document.documentElement.scrollTop>0?n.timer=setTimeout((function(){return e.toTop(t)}),300):clearTimeout(n.timer)}}},C=w,_=(n("e40a"),Object(g["a"])(C,a,s,!1,null,"27e372b4",null));e["default"]=_.exports},e40a:function(t,e,n){"use strict";n("7ad7")},fbae:function(t,e,n){t.exports=n.p+"img/LOGO.533866d1.png"}}]);
//# sourceMappingURL=chunk-4d96cdf2.1657651488651.js.map