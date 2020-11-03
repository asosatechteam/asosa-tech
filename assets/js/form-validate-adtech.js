define(["jquery","jqueryValidate","inputCheck"],function(){function a(a){a.css("opacity",0),setTimeout(function(){a.hide()},1400)}function b(a){a.val()?a.addClass("focus-change"):a.removeClass("focus-change")}document.getElementsByClassName("btn")[0].onclick=function(){$("#sendContactFormAdtech").validate()},$("#sendContactFormAdtech").validate({focusInvalid:!0,invalidHandler:function(a,b){b.numberOfInvalids()&&$("html, body").animate({scrollTop:$(b.errorList[0].element).offset().top-200},2e3)},rules:{field:{required:!0,validEmail:!0,email:!0},startdate:{required:!0},phone:{requiredphone:!0},"ad-user-agreement":{required:!0}},messages:{startdate:{required:"This field is required"},phone:{requiredphone:"Invalid phone number"},"ad-user-agreement":{required:"Checkbox field is required"}},errorElement:"span",errorPlacement:function(a,b){"ad-user-agreement"==b.attr("name")?a.insertAfter("#ad-user-agreement"):a.insertAfter(b)},submitHandler:function(b){var c=$("#tel_for_country").intlTelInput("getSelectedCountryData").name;c=c.substring(0,c.indexOf("(")-1),$("#country_source").val(c);var d=document.getElementsByName("name")[0].value;$("#ok-popup .popup-content").text("").append("<br />Dear "+(d.length>0?d:"")+"!<br /><br />"),$("#ok-popup").show(10,function(){$(this).css("opacity",1)});var e=new FormData(b);return $.ajax({type:"POST",url:$(b).data("path"),data:e,processData:!1,contentType:!1,cache:!1,success:function(b){var c=document.getElementsByName("name")[0].value;"ok"==b.status?$("#ok-popup .popup-content").text("").append("<br />Dear "+(c.length>0?c:"")+'!<br /><br />Thanks for your interest in our white paper!<br /><br /><a class="js_whitepaper"style="color:#f7706f" href="'+b.link+'" target="_blank" download onclick="$(\'#sendContactFormAdtech\')[0].reset();">Click to open</a> <br /><br />Have a good day!<br />The APP Solutions Team<br /><br />'):b.errField.length>0&&$("#ok-popup .popup-content").text("").append("<br />Dear "+(c.length>0?c:"")+'!<br /><br />Sorry, something has going wrong.<br /><br />Field: <span style="color:red">'+b.errField+"</span> - "+b.errMsg+"<br /><br />"),$("#ok-popup").show(10,function(){$(this).css("opacity",1)}),$("#ok-popup").click(function(){a($(this))})},error:function(a,b,c){alert(a.status),alert(c)}}),!1}}),$("textarea").each(function(){$(this).bind("keyup, paste",function(){$(this).height(33),$(this).height(this.scrollHeight)})}),$('input[type="text"], textarea').each(function(){b($(this)),$(this).focusout(function(){b($(this))})}),$("#sendContactForm").unbind("submit").submit(function(c){function d(a,b){return!(!a.val()&&!b.val())||(a.inputCheck("makeError","no mail"),!1)}c.stopPropagation(),c.preventDefault();var e=$(this),f=e.find('.temp[name="user-phone"]'),g=e.find('[name="user-country"]'),h=e.find('.temp[name="user-email"]'),i=e.find('[name="user-name"]');f.val()&&g.attr("data-required","required"),e.find("input, textarea, select").inputCheck("errRemove"),e.find("input, textarea").focus(function(){$(this).inputCheck("errRemove")});var j=$(this).inputCheck(),k=!f.length||!h.length||d(h,f);if(j&&k){var l=new FormData(this);$("input[type=file]").length&&l.append("file",$("input[type=file]")[0].files[0]);var m=getClientId();l.append("clientId",m);"de"==/[a-z\-]*/.exec(/[a-z\-]*\/$/.exec(/\/[a-z\-]*\/$/.exec(window.location.href)))?$("#ok-popup .popup-content").text("").append("Sehr geehrte "+(i.val()?i.val():"Customer")+"!<br /><br />"):$("#ok-popup .popup-content").text("").append("Dear "+(i.val()?i.val():"Customer")+"!<br /><br />"),$("#ok-popup").show(10,function(){$(this).css("opacity",1)}),$.ajax({type:"POST",url:$(this).attr("action"),data:l,processData:!1,contentType:!1,cache:!1,success:function(c){if(c.status)if("fail"===c.status)$("#ok-popup .popup-content").text("").append("Sorry, something has going wrong");else if("ok"===c.status&&void 0!=c.message)$("#ok-popup .popup-content").text("").append(c.message);else if("ok"===c.status){"undefined"!=typeof ga&&ga("send","pageview","/thanks-popup_virtual"),console.log("pageview /thanks-popup_virtual"),e.hasClass("contactform")&&e.addClass("submited"),e.hasClass("businnes-pr")?"undefined"!=typeof ga&&ga("send","event","theappsolutions_business_prototype","get_business_prototype","submit_form_business_prototype_"+m):e.hasClass("businnes-analytics")&&"undefined"!=typeof ga&&ga("send","event","theappsolutions_business_analysis","get_business_analysis","submit_form_business_analysis_"+m);var d=/[a-z\-]*/.exec(/[a-z\-]*\/$/.exec(/\/[a-z\-]*\/$/.exec(window.location.href)));"de"==d?$("#ok-popup .popup-content").text("").append("Sehr geehrte "+(i.val()?i.val():"Customer")+"!<br /><br />Danke schön für kontactieren uns auf der App Solutions Website.<br /><br />Wir antworten an Ihre Anfrage so schell wie möglich!<br /><br />Mit freundliche Grüße, <br />The APP Solutions team"):$("#ok-popup .popup-content").text("").append("Dear "+(i.val()?i.val():"Customer")+"!<br /><br />Thank you for contacting us on app.solutions.<br /><br />We will respond you within 24 hours!<br /><br />Best regards, <br />The APP Solutions team")}else $("#ok-popup .popup-content").text("").append("Welcome on Board!<br /><br />Now please check your email to confirm your subscription.<br /><br />The App Solutions Team");else c.data?$("#ok-popup .popup-content").text("").append(c.data):$("#ok-popup .popup-content").text("").append("Sorry, something has going wrong");$("#ok-popup").show(10,function(){$(this).css("opacity",1),setTimeout(function(){a($("#ok-popup"))},6e3)}),$("#ok-popup").click(function(){a($(this))}),$('input:not([type="submit"], [type="reset"], [type="hidden"]), textarea').val("").removeAttr("checked").removeAttr("selected").each(function(){b($(this))})},error:function(a,b,c){alert(a.status),alert(c)}})}else $(this).offset().top<window.pageYOffset&&$(window).scrollTop($(this).find(".has-error").first().offset().top-100)})});