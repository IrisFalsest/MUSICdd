(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/PlayBottom"],{"59e5":function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{playobj:null,stop:0}},watch:{"$globalDataAudio.audioCtx":{immediate:!0,handler:function(t){this.playobj=t,console.log("Updated playobj:",this.playobj),this.stop=this.$globalDataAudio.stop}}},methods:{play:function(){this.$globalDataAudio.hasAudioStatus(),1==this.stop?(this.stop=0,this.$globalDataAudio.audioCtx.play()):0==this.stop&&(this.stop=1,this.$globalDataAudio.audioCtx.pause())},updatePlayObj:function(){this.playobj=this.$globalDataAudio.audioCtx,this.stop=this.$globalDataAudio.stop}}};a.default=i},7531:function(t,a,o){"use strict";o.d(a,"b",(function(){return i})),o.d(a,"c",(function(){return n})),o.d(a,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},n=[]},7902:function(t,a,o){"use strict";o.r(a);var i=o("7531"),n=o("a387");for(var u in n)["default"].indexOf(u)<0&&function(t){o.d(a,t,(function(){return n[t]}))}(u);o("f680");var s=o("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1a6add02",null,!1,i["a"],void 0);a["default"]=l.exports},a387:function(t,a,o){"use strict";o.r(a);var i=o("59e5"),n=o.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){o.d(a,t,(function(){return i[t]}))}(u);a["default"]=n.a},f5b4:function(t,a,o){},f680:function(t,a,o){"use strict";var i=o("f5b4"),n=o.n(i);n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/PlayBottom-create-component',
    {
        'components/PlayBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7902"))
        })
    },
    [['components/PlayBottom-create-component']]
]);
