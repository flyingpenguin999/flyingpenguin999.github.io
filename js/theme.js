!function(e){"use strict";var t=e("header").height()+50;e(".header_area").length&&e(window).scroll(function(){e(window).scrollTop()>=t?e(".header_area").addClass("navbar_fixed"):e(".header_area").removeClass("navbar_fixed")}),e(".nav-link").on("click",function(t){t.preventDefault(!0);let i=e(this).attr("href");"#portfolio"==i||"#service"==i?e("html,body").animate({scrollTop:e(i).offset().top-80},1e3):e("html,body").animate({scrollTop:e(i).offset().top},1e3),e(".nav-item").removeClass("active"),e('.nav-link[href="'+i+'"]').closest(".nav-item").addClass("active")});var i,o=e("div.main_menu"),a=o.outerHeight()+1,r=o.find("a"),l=r.map(function(){var t=e(e(this).attr("href"));if(t.length)return t});e(window).scroll(function(){var t=e(this).scrollTop()+a,o=l.map(function(){if(e(this).offset().top<t)return this}),n=(o=o[o.length-1])&&o.length?o[0].id:"";i!==n&&(i=n,r.parent().removeClass("active"),r.filter("[href='#"+n+"']").parent().addClass("active"))}),e(window).on("load",function(){if(e(".portfolio-filter ul li").on("click",function(){e(".portfolio-filter ul li").removeClass("active"),e(this).addClass("active");var i=e(this).attr("data-filter");t.isotope({filter:i})}),document.getElementById("portfolio"))var t=e(".portfolio-grid").isotope({itemSelector:".all",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}})}),e(".testimonial-slider").length&&e(".testimonial-slider").owlCarousel({loop:!1,margin:30,items:1,autoplay:!1,smartSpeed:2500,dots:!0})}(jQuery);