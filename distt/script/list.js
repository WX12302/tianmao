"use strict";!function(i){var l=[],c=[],p=null,s=null;i.ajax({url:"http://localhost/project_tianmao/php/listdata.php",dataType:"json"}).done(function(t){var a='<ul class="big_ul">';i.each(t,function(t,n){a+='\n\t\t\t\t<li class="muchpic">\n\t\t\t\t\t<a href="details.html?sid='+n.sid+'"target="_blank">\n\t\t\t\t\t\t<div class="smallpic"><img data-src="'+n.url+'"/></div>\n\t\t\t\t\t\t<p class = "price">￥'+n.price+'</p>\n\t\t\t\t\t\t<p class = "banben">'+n.title+'.00</p>\n\t\t\t\t\t\t<p class = "dianpu">'+n.dianpu+'</p>\n\t\t\t\t\t\t<div class = "xiaoliang">\n\t\t\t\t\t\t<p class = "left">该款月成交<span>'+n.xiaoliang+'</span></p>\n\t\t\t\t\t\t<p class="right"><img src="//img.alicdn.com/tps/i1/T11lggFoXcXXc1v.nr-93-93.png" ></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t'}),a+="</ul>",i(".big").html(a),lazyload(i("img")),i(".muchpic").each(function(t,n){c[t]=i(this),l[t]=i(this)})}),i(".page").pagination({pageCount:3,jump:!0,coping:!0,prevContent:"上一页",nextContent:"下一页",homePage:"首页",endPage:"尾页",callback:function(t){i.ajax({url:"http://localhost/project_tianmao/php/listdata.php",data:{page:t.getCurrent()},dataType:"json"}).done(function(t){var n=i(".big"),a='<ul class="big_ul">';i.each(t,function(t,n){a+='\n\t\t\t\t\t\t<li class="muchpic">\n\t\t\t\t\t\t\t<a href="details.html?sid='+n.sid+'"target="_blank">\n\t\t\t\t\t\t\t\t<div class="smallpic"><img data-src="'+n.url+'"/></div>\n\t\t\t\t\t\t\t\t<p class = "price">￥'+n.price+'</p>\n\t\t\t\t\t\t\t\t<p class = "banben">'+n.title+'.00</p>\n\t\t\t\t\t\t\t\t<p class = "dianpu">'+n.dianpu+'</p>\n\t\t\t\t\t\t\t\t<div class = "xiaoliang">\n\t\t\t\t\t\t\t\t<p class = "left">该款月成交<span>'+n.xiaoliang+'</span></p>\n\t\t\t\t\t\t\t\t<p class="right"><img src="//img.alicdn.com/tps/i1/T11lggFoXcXXc1v.nr-93-93.png" ></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t'}),a+="</ul>",n.html(a),lazyload(i("img")),c=[],l=[],i(".muchpic").each(function(t,n){c[t]=i(this),l[t]=i(this)})})}}),i(".ul1 .default").on("click",function(){i(".big_ul").empty(),i.each(l,function(t,n){i(".big_ul").append(n)})}),i(".ul1 .zengxu").on("click",function(){for(var t=0;t<c.length-1;t++){for(var n=0;n<c.length-t-1;n++)if(p=parseFloat(c[n].find(".price").html().substring(1)),(s=parseFloat(c[n+1].find(".price").html().substring(1)))<p){var a=c[n];c[n]=c[n+1],c[n+1]=a}i(".big_ul").empty(),i.each(c,function(t,n){i(".big_ul").append(n)})}}),i(".ul1 .jiangxu").on("click",function(){for(var t=0;t<c.length-1;t++){for(var n=0;n<c.length-t-1;n++)if(p=parseFloat(c[n].find(".price").html().substring(1)),s=parseFloat(c[n+1].find(".price").html().substring(1)),p<s){var a=c[n];c[n]=c[n+1],c[n+1]=a}i(".big_ul").empty(),i.each(c,function(t,n){i(".big_ul").append(n)})}})}(jQuery);