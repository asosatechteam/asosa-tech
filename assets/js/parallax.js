!function(a){a.fn.makeSideParallax=function(){!function(b,c){c.mousemove(function(c){for(var d=0;d<b.length;d++){var e=/[\-0-9]*[p-x\%]*$/.exec(a(b[d]).css("background-position")),f=(c.pageX-a(window).width()/2)*a(b[d]).data("scroll-speed");a(b[d]).css("background-position",f+"px "+e)}})}(this.children(".abs"),this)}}(jQuery);