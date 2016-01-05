//>>built
define("dijit/registry",["dojo/_base/array","dojo/sniff","dojo/_base/window","./main"],function(h,l,k,d){var e={},b={},g={length:0,add:function(a){if(b[a.id])throw Error("Tried to register widget with id\x3d\x3d"+a.id+" but that id is already registered");b[a.id]=a;this.length++},remove:function(a){b[a]&&(delete b[a],this.length--)},byId:function(a){return"string"==typeof a?b[a]:a},byNode:function(a){return b[a.getAttribute("widgetId")]},toArray:function(){var a=[],c;for(c in b)a.push(b[c]);return a},
getUniqueId:function(a){var c;do c=a+"_"+(a in e?++e[a]:e[a]=0);while(b[c]);return"dijit"==d._scopeName?c:d._scopeName+"_"+c},findWidgets:function(a,c){function d(a){for(a=a.firstChild;a;a=a.nextSibling)if(1==a.nodeType){var f=a.getAttribute("widgetId");f?(f=b[f])&&e.push(f):a!==c&&d(a)}}var e=[];d(a);return e},_destroyAll:function(){d._curFocus=null;d._prevFocus=null;d._activeStack=[];h.forEach(g.findWidgets(k.body()),function(a){a._destroyed||(a.destroyRecursive?a.destroyRecursive():a.destroy&&
a.destroy())})},getEnclosingWidget:function(a){for(;a;){var c=1==a.nodeType&&a.getAttribute("widgetId");if(c)return b[c];a=a.parentNode}return null},_hash:b};return d.registry=g});