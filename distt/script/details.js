"use strict";!function(){var o=$(".smallbox"),e=$(".smallfd"),g=$(".smallbox img"),i=$(".bigbox"),u=$(".bigbox img"),t=location.search.substring(1).split("=")[1];$.ajax({url:"http://localhost/project_tianmao/php/getsid.php",data:{sid:t},dataType:"json"}).done(function(i){$(".smallbox").find("img").attr("src",i.url),$(".bigbox").find("img").attr("src",i.url),$(".smallbox").find("img").attr("sid",i.sid),console.log($(".smallbox").find("img").attr("sid")),function(i){var t=$(".checkul ul"),s=$(".phone_main_right_top"),o=$(".price strong");s.html(i.title),o.html(i.price);var e=i.xiaotu.split(","),c="";$.each(e,function(i,t){c=c+'<li><img src = "'+t+'"></li>'}),t.html(c);var a=$(".checkul ul li");a.on("click",function(){var i=$(this).find("img").attr("src");g.attr("src",i),u.attr("src",i)});var l=$(".leftarr"),n=$(".rightarr"),r=5;n.on("click",function(){if(r<a.size()){r++,l.css("visibility","visible"),r==a.size()&&n.css("visibility","hidden");var i=-a.eq(0).outerWidth(!0)*(r-5)-17;t.animate({left:i})}}),l.on("click",function(){if(5<r){r--,n.css("visibility","visible"),5==r&&l.css("visibility","hidden");var i=-a.eq(0).outerWidth(!0)*(r-5);t.animate({left:i})}});var h=[],d=[];$(".addcar").on("click",function(){var i=$(".smallbox").find("img").attr("sid");if(d=jscookie.get("cookiesid")&&jscookie.get("cookienum")?(h=jscookie.get("cookiesid").split(","),jscookie.get("cookienum").split(",")):(h=[],[]),-1!=$.inArray(i,h)){var t=parseInt(d[$.inArray(i,h)])+parseInt($(".input1").val());d[$.inArray(i,h)]=t,jscookie.add("cookienum",d,15)}else h.push(i),jscookie.add("cookiesid",h,15),d.push($(".input1").val()),jscookie.add("cookienum",d,15)})}(i)}),e.width(g.width()*i.width()/u.width()),e.height(g.height()*i.height()/u.height());var c=i.width()/e.width();o.hover(function(){e.css("visibility","visible"),i.css("visibility","visible"),o.on("mousemove",function(i){var t=i.pageX-o.offset().left-e.width()/2,s=i.pageY-o.offset().top-e.height()/2;t<0?t=0:t>o.width()-e.width()&&(t=o.width()-e.width()),s<0?s=0:s>o.height()-e.height()&&(s=o.height()-e.height()),e.css({left:t,top:s}),u.css({left:-t*c,top:-s*c})})},function(){e.css("visibility","hidden"),i.css("visibility","hidden")})}();