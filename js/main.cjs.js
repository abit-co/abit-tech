/*! BuildToolsCookbook v2.0.0 | (c) 2024 R A H U L J A I S W A L (RJ) | MIT License |  */
'use strict';

require('node_modules/jquery/dist/jquery.min.js');
require('node_modules/jquery/dist/jquery.slim.js');
require('node_modules/bootstrap/dist/js/bootstrap.js');

/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

document.addEventListener('click', function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}, false);

"function"!=typeof Object.create&&(Object.create=function(t){function o(){}return o.prototype=t,new o}),function(t,o,i,s){var n={_positionClasses:["bottom-left","bottom-right","top-right","top-left","bottom-center","top-center","mid-center"],_defaultIcons:["success","error","info","warning"],init:function(o,i){this.prepareOptions(o,t.toast.options),this.process();},prepareOptions:function(o,i){var s={};"string"==typeof o||o instanceof Array?s.text=o:s=o,this.options=t.extend({},i,s);},process:function(){this.setup(),this.addToDom(),this.position(),this.bindToast(),this.animate();},setup:function(){var o="";if(this._toastEl=this._toastEl||t("<div></div>",{"class":"jq-toast-single"}),o+='<span class="jq-toast-loader"></span>',this.options.allowToastClose&&(o+='<span class="close-jq-toast-single">&times;</span>'),this.options.text instanceof Array){this.options.heading&&(o+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),o+='<ul class="jq-toast-ul">';for(var i=0;i<this.options.text.length;i++)o+='<li class="jq-toast-li" id="jq-toast-item-'+i+'">'+this.options.text[i]+"</li>";o+="</ul>";}else this.options.heading&&(o+='<h2 class="jq-toast-heading">'+this.options.heading+"</h2>"),o+=this.options.text;this._toastEl.html(o),this.options.bgColor!==!1&&this._toastEl.css("background-color",this.options.bgColor),this.options.textColor!==!1&&this._toastEl.css("color",this.options.textColor),this.options.textAlign&&this._toastEl.css("text-align",this.options.textAlign),this.options.icon!==!1&&(this._toastEl.addClass("jq-has-icon"),-1!==t.inArray(this.options.icon,this._defaultIcons)&&this._toastEl.addClass("jq-icon-"+this.options.icon)),this.options["class"]!==!1&&this._toastEl.addClass(this.options["class"]);},position:function(){"string"==typeof this.options.position&&-1!==t.inArray(this.options.position,this._positionClasses)?"bottom-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,bottom:20}):"top-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,top:20}):"mid-center"===this.options.position?this._container.css({left:t(o).outerWidth()/2-this._container.outerWidth()/2,top:t(o).outerHeight()/2-this._container.outerHeight()/2}):this._container.addClass(this.options.position):"object"==typeof this.options.position?this._container.css({top:this.options.position.top?this.options.position.top:"auto",bottom:this.options.position.bottom?this.options.position.bottom:"auto",left:this.options.position.left?this.options.position.left:"auto",right:this.options.position.right?this.options.position.right:"auto"}):this._container.addClass("bottom-left");},bindToast:function(){var t=this;this._toastEl.on("afterShown",function(){t.processLoader();}),this._toastEl.find(".close-jq-toast-single").on("click",function(o){o.preventDefault(),"fade"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden");})):"slide"===t.options.showHideTransition?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden");})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden");}));}),"function"==typeof this.options.beforeShow&&this._toastEl.on("beforeShow",function(){t.options.beforeShow();}),"function"==typeof this.options.afterShown&&this._toastEl.on("afterShown",function(){t.options.afterShown();}),"function"==typeof this.options.beforeHide&&this._toastEl.on("beforeHide",function(){t.options.beforeHide();}),"function"==typeof this.options.afterHidden&&this._toastEl.on("afterHidden",function(){t.options.afterHidden();});},addToDom:function(){var o=t(".jq-toast-wrap");if(0===o.length?(o=t("<div></div>",{"class":"jq-toast-wrap"}),t("body").append(o)):(!this.options.stack||isNaN(parseInt(this.options.stack,10)))&&o.empty(),o.find(".jq-toast-single:hidden").remove(),o.append(this._toastEl),this.options.stack&&!isNaN(parseInt(this.options.stack),10)){var i=o.find(".jq-toast-single").length,s=i-this.options.stack;s>0&&t(".jq-toast-wrap").find(".jq-toast-single").slice(0,s).remove();}this._container=o;},canAutoHide:function(){return this.options.hideAfter!==!1&&!isNaN(parseInt(this.options.hideAfter,10))},processLoader:function(){if(!this.canAutoHide()||this.options.loader===!1)return !1;var t=this._toastEl.find(".jq-toast-loader"),o=(this.options.hideAfter-400)/1e3+"s",i=this.options.loaderBg,s=t.attr("style")||"";s=s.substring(0,s.indexOf("-webkit-transition")),s+="-webkit-transition: width "+o+" ease-in;                       -o-transition: width "+o+" ease-in;                       transition: width "+o+" ease-in;                       background-color: "+i+";",t.attr("style",s).addClass("jq-toast-loaded");},animate:function(){var t=this;if(this._toastEl.hide(),this._toastEl.trigger("beforeShow"),"fade"===this.options.showHideTransition.toLowerCase()?this._toastEl.fadeIn(function(){t._toastEl.trigger("afterShown");}):"slide"===this.options.showHideTransition.toLowerCase()?this._toastEl.slideDown(function(){t._toastEl.trigger("afterShown");}):this._toastEl.show(function(){t._toastEl.trigger("afterShown");}),this.canAutoHide()){var t=this;o.setTimeout(function(){"fade"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.fadeOut(function(){t._toastEl.trigger("afterHidden");})):"slide"===t.options.showHideTransition.toLowerCase()?(t._toastEl.trigger("beforeHide"),t._toastEl.slideUp(function(){t._toastEl.trigger("afterHidden");})):(t._toastEl.trigger("beforeHide"),t._toastEl.hide(function(){t._toastEl.trigger("afterHidden");}));},this.options.hideAfter);}},reset:function(o){"all"===o?t(".jq-toast-wrap").remove():this._toastEl.remove();},update:function(t){this.prepareOptions(t,this.options),this.setup(),this.bindToast();}};t.toast=function(t){var o=Object.create(n);return o.init(t,this),{reset:function(t){o.reset(t);},update:function(t){o.update(t);}}},t.toast.options={text:"",heading:"",showHideTransition:"fade",allowToastClose:!0,hideAfter:3e3,loader:!0,loaderBg:"#9EC600",stack:5,position:"bottom-left",bgColor:!1,textColor:!1,textAlign:"left",icon:!1,beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}};}(jQuery,window);

/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery);}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0);}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList));}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b];}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return !b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return !a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init();},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c});}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)));},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a);},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b);},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode);},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d);},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d);}},setDefaults:function(b){a.extend(a.validator.defaults,b);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b);}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b;});}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d);}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler);},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h));}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return {message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return !(a.name in b)});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b);},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide);},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide();},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin");}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return !d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]);},reset:function(){this.resetInternals(),this.currentElements=a([]);},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers);},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a);},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return "radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return "function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c;},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"));})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h);},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return void 0===a?"":a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return /radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return !this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return !!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return !a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0);},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()&&0===this.pendingRequest?(a(this.currentForm).trigger("submit"),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1);},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b);},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this]);}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a["date"===b?"dateISO":c]=!0);},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c);}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d]);}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d;}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]));}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]));}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0;}),b=c;}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b));},methods:{required:function(b,c,d){if(!this.depend(d,c))return "dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid();}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return "dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j);}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c);}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return "abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});

(function () {

	var RS = function (conf) {
		this.input 			= null;
		this.inputDisplay 	= null;
		this.slider 		= null;
		this.sliderWidth	= 0;
		this.sliderLeft		= 0;
		this.pointerWidth	= 0;
		this.pointerR		= null;
		this.pointerL		= null;
		this.activePointer	= null;
		this.selected 		= null;
		this.scale 			= null;
		this.step 			= 0;
		this.tipL			= null;
		this.tipR			= null;
		this.timeout		= null;
		this.valRange		= false;

		this.values = {
			start:	null,
			end:	null
		};
		this.conf = {
			target: 	null,
			values: 	null,
			set: 		null,
			range: 		false,
			width: 		null,
			scale:		true,
			labels:		true,
			tooltip:	true,
			step: 		null,
			disabled:	false,
			onChange:	null,
			onMove: null,
		};

		this.cls = {
			container:	'rs-container',
			background: 'rs-bg',
			selected: 	'rs-selected',
			pointer: 	'rs-pointer',
			scale: 		'rs-scale',
			noscale:	'rs-noscale',
			tip: 		'rs-tooltip'
		};

		for (var i in this.conf) { if (conf.hasOwnProperty(i)) this.conf[i] = conf[i]; }

		this.init();
	};

	RS.prototype.init = function () {
		if (typeof this.conf.target === 'object') this.input = this.conf.target;
		else this.input = document.getElementById(this.conf.target.replace('#', ''));

		if (!this.input) return console.log('Cannot find target element...');

		this.inputDisplay = getComputedStyle(this.input, null).display;
		this.input.style.display = 'none';
		this.valRange = !(this.conf.values instanceof Array);

		if (this.valRange) {
			if (!this.conf.values.hasOwnProperty('min') || !this.conf.values.hasOwnProperty('max'))
				return console.log('Missing min or max value...');
		}
		return this.createSlider();
	};

	RS.prototype.createSlider = function () {
		this.slider = createElement('div', this.cls.container);
		this.slider.innerHTML = '<div class="rs-bg"></div>';
		this.selected = createElement('div', this.cls.selected);
		this.pointerL = createElement('div', this.cls.pointer, ['dir', 'left']);
		this.scale = createElement('div', this.cls.scale);

		if (this.conf.tooltip) {
			this.tipL = createElement('div', this.cls.tip);
			this.tipR = createElement('div', this.cls.tip);
			this.pointerL.appendChild(this.tipL);
		}
		this.slider.appendChild(this.selected);
		this.slider.appendChild(this.scale);
		this.slider.appendChild(this.pointerL);

		if (this.conf.range) {
			this.pointerR = createElement('div', this.cls.pointer, ['dir', 'right']);
			if (this.conf.tooltip) this.pointerR.appendChild(this.tipR);
			this.slider.appendChild(this.pointerR);
		}

		this.input.parentNode.insertBefore(this.slider, this.input.nextSibling);

        if (this.conf.width) this.slider.style.width = parseInt(this.conf.width) + 'px';
		this.sliderLeft = this.slider.getBoundingClientRect().left;
		this.sliderWidth = this.slider.clientWidth;
		this.pointerWidth = this.pointerL.clientWidth;

		if (!this.conf.scale) this.slider.classList.add(this.cls.noscale);

		return this.setInitialValues();	
	};

	RS.prototype.setInitialValues = function () {
		this.disabled(this.conf.disabled);

		if (this.valRange) this.conf.values = prepareArrayValues(this.conf);

		this.values.start = 0;
		this.values.end = this.conf.range ? this.conf.values.length - 1 : 0;


		if (this.conf.set && this.conf.set.length && checkInitial(this.conf)) {
			var vals = this.conf.set;

			if (this.conf.range) {
				this.values.start = this.conf.values.indexOf(vals[0]);
				this.values.end = this.conf.set[1] ? this.conf.values.indexOf(vals[1]) : null;
			}
			else this.values.end = this.conf.values.indexOf(vals[0]);
		}
		return this.createScale();
	};

	RS.prototype.createScale = function (resize) {
		this.step = this.sliderWidth / (this.conf.values.length - 1);

		for (var i = 0, iLen = this.conf.values.length; i < iLen; i++) {
			var span = createElement('span'),
				ins = createElement('ins');

			span.appendChild(ins);
			this.scale.appendChild(span);

			span.style.width = i === iLen - 1 ? 0 : this.step + 'px';

			if (!this.conf.labels) {
				if (i === 0 || i === iLen - 1) ins.innerHTML = this.conf.values[i];
			}
			else ins.innerHTML = this.conf.values[i];

			ins.style.marginLeft = (ins.clientWidth / 2) * - 1 + 'px';
		}
		return this.addEvents();
	};

	RS.prototype.updateScale = function () {
		this.step = this.sliderWidth / (this.conf.values.length - 1);

		var pieces = this.slider.querySelectorAll('span');

		for (var i = 0, iLen = pieces.length; i < iLen; i++)
			pieces[i].style.width = this.step + 'px';

		return this.setValues();
	};

	RS.prototype.addEvents = function () {
		var pointers = this.slider.querySelectorAll('.' + this.cls.pointer),
			pieces = this.slider.querySelectorAll('span');

		createEvents(document, 'mousemove touchmove', this.move.bind(this));
		createEvents(document, 'mouseup touchend touchcancel', this.drop.bind(this));

		for (var i = 0, iLen = pointers.length; i < iLen; i++)
			createEvents(pointers[i], 'mousedown touchstart', this.drag.bind(this));

		for (var i = 0, iLen = pieces.length; i < iLen; i++)
			createEvents(pieces[i], 'click', this.onClickPiece.bind(this));

		window.addEventListener('resize', this.onResize.bind(this));

		return this.setValues();
	};

	RS.prototype.drag = function (e) {
		e.preventDefault();

		if (this.conf.disabled) return;

		var dir = e.target.getAttribute('data-dir');
		if (dir === 'left') this.activePointer = this.pointerL;
		if (dir === 'right') this.activePointer = this.pointerR;

		

		return this.slider.classList.add('sliding');
	};

	RS.prototype.move = function (e) {
		if (this.activePointer && !this.conf.disabled) {
			var coordX = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX,
				index = coordX - this.sliderLeft - (this.pointerWidth / 2);

			index = Math.round(index / this.step);

			if (index <= 0) index = 0;
			if (index > this.conf.values.length - 1) index = this.conf.values.length - 1;

			if (this.conf.range) {
				if (this.activePointer === this.pointerL) this.values.start = index;
				if (this.activePointer === this.pointerR) this.values.end = index;
			}
			else this.values.end = index;
			this.conf.onMove();
			
			return this.setValues();
		}
	};

	RS.prototype.drop = function () {
		this.activePointer = null;
	};

	RS.prototype.setValues = function (start, end) {
		var activePointer = this.conf.range ? 'start' : 'end';

		if (start && this.conf.values.indexOf(start) > -1)
			this.values[activePointer] = this.conf.values.indexOf(start);

		if (end && this.conf.values.indexOf(end) > -1)
			this.values.end = this.conf.values.indexOf(end);

		if (this.conf.range && this.values.start > this.values.end)
			this.values.start = this.values.end;

		// let sliderActualWidth = (this.slider.offsetWidth + 13)/2;
		// let x = (this.values[activePointer] * this.step - (this.pointerWidth / 2));


		// if(sliderActualWidth > x) {
		// 	this.pointerL.style.left = (this.values[activePointer] * this.step - (this.pointerWidth / 2)) + 20 + 'px';
		// } else {
		// 	this.pointerL.style.left = (this.values[activePointer] * this.step - (this.pointerWidth / 2)) + 'px';
		// }
			this.pointerL.style.left = (this.values[activePointer] * this.step - (this.pointerWidth / 2)) + 'px';

		
		if (this.conf.range) {
			if (this.conf.tooltip) {
				this.tipL.innerHTML = this.conf.values[this.values.start];
				this.tipR.innerHTML = this.conf.values[this.values.end];
			}
			this.input.value = this.conf.values[this.values.start] + ',' + this.conf.values[this.values.end];
			this.pointerR.style.left = (this.values.end * this.step - (this.pointerWidth / 2)) + 'px';
		}
		else {
			if (this.conf.tooltip)
				this.tipL.innerHTML = this.conf.values[this.values.end];
			this.input.value = this.conf.values[this.values.end];
		}

		if (this.values.end > this.conf.values.length - 1) this.values.end = this.conf.values.length - 1;
		if (this.values.start < 0) this.values.start = 0;
		
		this.selected.style.width = (this.values.end - this.values.start) * this.step + 'px';
		this.selected.style.left = this.values.start * this.step + 'px';		
		
		return this.onChange();
	};

	RS.prototype.onClickPiece = function (e) {

		if (this.conf.disabled) return;

		var idx = Math.round((e.clientX - this.sliderLeft) / this.step);

		if (idx > this.conf.values.length - 1) idx = this.conf.values.length - 1;
		if (idx < 0) idx = 0;

		if (this.conf.range) {
			if (idx - this.values.start <= this.values.end - idx) {
				this.values.start = idx;
			}
			else this.values.end = idx;
		}
		else this.values.end = idx;

		this.slider.classList.remove('sliding');

		return this.setValues();
	};

	RS.prototype.onChange = function () {
		var _this = this;

		if (this.timeout) clearTimeout(this.timeout);

		this.timeout = setTimeout(function () {
			if (_this.conf.onChange && typeof _this.conf.onChange === 'function') {		
				return _this.conf.onChange(_this.input.value, _this.values.end);
			}
		}, 500);
	};

	RS.prototype.onResize = function () {
		this.sliderLeft = this.slider.getBoundingClientRect().left;
		this.sliderWidth = this.slider.clientWidth;
		return this.updateScale();
	};

	RS.prototype.disabled = function (disabled) {
		this.conf.disabled = disabled;
		this.slider.classList[disabled ? 'add' : 'remove']('disabled');
	};

	RS.prototype.getValue = function () {
		return this.input.value;
	};

	RS.prototype.destroy = function () {
		this.input.style.display = this.inputDisplay;
		this.slider.remove();
	};

	var createElement = function (el, cls, dataAttr) {
		var element = document.createElement(el);
		if (cls) element.className = cls;
		if (dataAttr && dataAttr.length === 2)
			element.setAttribute('data-' + dataAttr[0], dataAttr[1]);

		return element;
	},

	createEvents = function (el, ev, callback) {
		var events = ev.split(' ');

		for (var i = 0, iLen = events.length; i < iLen; i++)
			el.addEventListener(events[i], callback);
	},

	prepareArrayValues = function (conf) {
		var values = [],
			range = conf.values.max - conf.values.min;

		if (!conf.step) {
			console.log('No step defined...');
			return [conf.values.min, conf.values.max];
		}

		for (var i = 0, iLen = (range / conf.step); i < iLen; i++)
			values.push(conf.values.min + i * conf.step);

		if (values.indexOf(conf.values.max) < 0) values.push(conf.values.max);

		return values;
	},

	checkInitial = function (conf) {
		if (!conf.set || conf.set.length < 1) return null;
		if (conf.values.indexOf(conf.set[0]) < 0) return null;

		if (conf.range) {
			if (conf.set.length < 2 || conf.values.indexOf(conf.set[1]) < 0) return null;
		}
		return true;
	};

	window.rSlider = RS;

})();

// import 

console.log("2");
let myPromise;


$(function() {
    addHTML();
    toggleArtWorkImg();

    $(".cstm-btn-props-2").click(function() {
      debugger
      $('html, body').animate({
        scrollTop: $(".fr-section-2").offset().top
      }, 2000);
    });
});

 function addHTML() {
   // debugger;
    var el, i, domEl, fileName, xmlHttp;
    
    /*Iterate all DOM*/
    //el = document.getElementsByTagName("*");
    el = document.querySelectorAll('[w3-include-html]');
    
    myPromise = new Promise(function(resolve, reject) {
        if(el.length) {
            for (i = 0; i < el.length; i++) {
                domEl = el[i];
                
                /*find the element having w3-include-html attribute*/
                fileName = domEl.getAttribute("w3-include-html");
                if (fileName) {
                    
                    /*http request with attribute value as file name*/
                    xmlHttp = new XMLHttpRequest();
                    xmlHttp.onreadystatechange = function() {
                        if (this.readyState == 4) {
                            if (this.status == 200) {
                            domEl.innerHTML = this.responseText;
                            }
                            if (this.status == 404) {
                            domEl.innerHTML = "Page not found.";
                            }
                            
                            /* Remove the attribute and invoke the function again*/
                            domEl.removeAttribute("w3-include-html");
                            addHTML();
                        }
                    };
                    xmlHttp.open("GET", fileName, true);
                    xmlHttp.send();
                    
                    /*function ends*/
                    return;
                }
            }
            resolve(true);
        }
        else {
            resolve(true);
        }
    });

    myPromise.then(function(flag) {
        if(flag) {
            bindOpenMethods();
        }
    }).catch(function(){
        bindOpenMethods();
        console.log("Nothing to include");
    });
   
 }

 function bindOpenMethods() {
    $(".toggleRegisterLoginPopup").off("click").on("click", function() {
        openLoginModal(this);
    });
    $(".waitlist-cta-btn").off("click").on("click", function() {
      let email = $(this).closest(".modal-content").find("#waitListEmail");
			  saveEmailInfo(email);
			});
      // $(".buySharesOfVideo").off("click").on("click", function() {
      //   buySharesOfCreatorVideo(this);
      // });
      $(".close").off("click").on("click", function() {
        if($(this).closest("#congratsModal").length === 1) {
         // redirectOnCloseOfCongratsModal();
          $(".modal-backdrop").remove();

        } else {
          $(".modal-backdrop").remove();
        }
      });

      prepareRegistrationPayloadAndCallApi();
      prepareLoginPayloadAndCallApi();


      $(".waitlist-close-modal").off("click").on("click", function() {
            const modal = $('#waitListModal');
            $('.modal-backdrop').remove();
              modal.modal({
			          keyboard: false,
              });
              modal.modal('hide');
        });

     
        $(window).scroll(function() {
         // if(waitListFlag) {
            const modal = $('#waitListModal');
            const scrollableHeight = $(document).height() - $(window).height() - 1;
            const scrollPosition = $(window).scrollTop();
      
            // Show the modal when scroll reaches the bottom of the page
            if (scrollPosition >= scrollableHeight) {
              modal.modal({
                backdrop: "static",
                show: true
              });
              // Optionally, you can add a class to the modal to style it, e.g., modal.addClass('show');
            }
        });  
 }

 function prepareRegistrationPayloadAndCallApi() {
  validateRegistrationForm();
  $('#registerUser').off("click").on("click", function(event) {
    event.preventDefault(); // Prevent form submission (optional)

    let form = $(".register-form");
    if($(form).valid())  {
      let inputs = {
        username: $(form).find("#exampleInputUsername").val(),
        email: $(form).find("#registerEmail").val(),
        password: $(form).find("#registerPassword").val(),
        //role: "user"
      };
      registerUser.call(inputs, form);
    } else {
      aBit_UTIL.displayErrorDialog('ERROR!', "Please fill the required field.");
    }
  });
 }

 function validateRegistrationForm() {
  $(".register-form").validate({
    errorElement:'em',
    errorClass: "err-cls",
    rules: {
      username: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6,
        // Add a custom rule to check password complexity
        passwordComplexity: true
      }
    },
    messages: {
      username: "Please enter your username.",
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password.",
        minlength: "Password should have at least 6 characters."
      }
    },
    highlight: function(element) {
      $(element).closest('em').addClass('error');
    },
    unhighlight: function(element) {
      $(element).closest('em').removeClass('error');
    }
    //your options
    
 });
  // Custom validation method for password complexity
  $.validator.addMethod("passwordComplexity", function(value) {
    debugger
    // Regular expression to check password complexity
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value);
  }, "Password should have at least 6 characters, one number, one capital letter, and one special character.");
 }

 function prepareLoginPayloadAndCallApi() {
  validateLoginForm();
  $('#loginForm').off("click").on("click", function(event) {
    debugger;
    event.preventDefault(); // Prevent form submission (optional)

    let form = $(".login-form");
    if($(form).valid())  {
      let inputs = {
        email: $(form).find("#loginEmail").val(),
        password: $(form).find("#loginPassword").val(),
      };
      loginUser.call(inputs, form);
    } else {
      aBit_UTIL.displayErrorDialog('ERROR!', "Please fill the required field.");
    }
  });
 }

 function validateLoginForm() {
  $(".login-form").validate({
    errorElement:'em',
    errorClass: "err-cls",
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6,
        // Add a custom rule to check password complexity
        passwordComplexity: false
      }
    },
    messages: {
      username: "Please enter your username.",
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password.",
        minlength: "Password should have at least 6 characters."
      }
    },
    highlight: function(element) {
      $(element).closest('em').addClass('error');
    },
    unhighlight: function(element) {
      $(element).closest('em').removeClass('error');
    }
    //your options
    
 });
  // Custom validation method for password complexity
  $.validator.addMethod("passwordComplexity", function(value) {
    debugger
    // Regular expression to check password complexity
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value);
  }, "Password should have at least 6 characters, one number, one capital letter, and one special character.");
 }

  function openLoginModal(elem) {
    debugger;  
    //const isLogin = $(elem).attr("login");
    const whichPopup = $(elem).attr("which");
    switch(whichPopup) {
      case "login" :
        $("#registerModal, #creatorSignupModal").modal("hide");
        $("#loginModal").modal("show");
          break;
      case "register":
        $("#loginModal, #creatorSignupModal").modal("hide");
        $("#registerModal").modal("show"); 
          break;
      case "creatorsignup": 
        $("#loginModal, #registerModal").modal("hide");
        $("#creatorSignupModal").modal("show");
        $("#creatorSignupModal .creator-signup-step-1").show();
        $("#creatorSignupModal .creator-signup-step-2, #creatorSignupModal .creator-login-step").hide();
          break;
      case "creatorlogin": 
      $("#loginModal, #registerModal").modal("hide");
      $("#creatorSignupModal").modal("show");
      $("#creatorSignupModal .creator-login-step").show();
      $("#creatorSignupModal .creator-signup-step-2, #creatorSignupModal .creator-signup-step-1").hide();
        break;
      case "creatorsignupcall": 
        $("#loginModal, #registerModal").modal("hide");
        $("#creatorSignupModal").modal("show");
        $("#creatorSignupModal .creator-signup-step-1,  #creatorSignupModal .creator-login-step").hide();
        $("#creatorSignupModal .creator-signup-step-2").show();
          break;
    }
    // if(isLogin == "enable") {
    //     $("#registerModal").modal("hide");
    //     $("#loginModal").modal("show");
    // } else {
    //     $("#loginModal").modal("hide");
    //     $("#registerModal").modal("show");
    // }  
}

function saveEmailInfo(input) {

  $.ajax({
    url: "https://abit-backend-production.up.railway.app/api/waitlist",
    type: 'POST',
    data: JSON.stringify({
      'email': $(input).val()
    }),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      $(input).val("");

      aBit_UTIL.displaySuccessDialog('Success!', "Thank you! Our team will reach out soon.");


},
    error: function (XMLHttpRequest, textStatus, errorThrown) {
       $(input).val("");
       aBit_UTIL.displayErrorDialog('ERROR!', "SOME ERORR");
    }
  });
}
function registerUser(formElem) {

  $.ajax({
    url: "https://api-abit.onrender.com/v1/fan/signupWithEmail",
    type: 'POST',
    data: JSON.stringify(this),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      $(formElem)[0].reset();
      $(formElem).closest(".modal").hide();
      $('.modal-backdrop').remove();

      aBit_UTIL.displaySuccessDialog('Success!', `'Thank you for signing up with Us, ${this.name}! Become a co-owner of your favourite creator's videos by exploring aBit.`);

},
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      $(formElem)[0].reset();
      $(formElem).closest(".modal").hide();
      $('.modal-backdrop').remove();
      aBit_UTIL.displayErrorDialog('ERROR!', "Couldn't register; some issue occurred. Please give it another shot!");
    }
  });
}

function loginUser(formElem) {
  $.ajax({
    url: "https://api-abit.onrender.com/v1/fan/loginWithEmail",
    type: 'POST',
    data: JSON.stringify(this),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      debugger;
      var validator = $(formElem).validate();
      validator.resetForm();
      $(formElem)[0].reset();
      $(formElem).closest(".modal").hide();
      $('.modal-backdrop').remove();

      let userInfo = {userType: "FAN", isLogin : true};
      localStorage.setItem("userInfo",  JSON.stringify({...data.user, ...userInfo}));

      const isLoggedIn = checkIfTokenExist();
			if(!isLoggedIn) {
				document.cookie = `abittoken=${data.user.token}; expires=${getFormattedExpirationDate()}; path=/`;
			}

      getUserProfileInfo();


    //  showProfileViewAfterSuccessfullLogin(data.user);

      aBit_UTIL.displaySuccessDialog('Success!', `'You are logged in successfully, ${this.name}! Welcome Back!`);

},
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      $(formElem)[0].reset();
      $(formElem).closest(".modal").hide();
      $('.modal-backdrop').remove();
      aBit_UTIL.displayErrorDialog('ERROR!', "Couldn't login; some issue occurred. Please give it another shot!");
    }
  });
}

function toggleArtWorkImg() {
    setInterval(function() {
        $(".gif-img").find("img.gif-person").toggleClass("d-none");
    }, 2000);
}

function toggleAccordian(elem) {
  if($(this).attr("tool") == undefined) {

  let nextSibling = $(this).next(".collapse");
  // let status = $(this).closest(".cstm-accordian").find(".collapse").hasClass("show");
  // if(status) {
  //   $(this).closest(".cstm-accordian").find(".collapse").toggleClass("show");
  //   //$(this).closest(".cstm-accordian").find("img.toggle-icon").removeClass("d-none");
  // }
  $(nextSibling).toggleClass("show");

  $(this).find("img.toggle-icon").toggleClass("d-none");
}
}

$(function(){
    $('.cstm-accordian .card-header').off("click").on("click", function(event) {

      toggleAccordian.call(this, event);
      // $("#collapseOne3").toggleClass("show");
      // if(!$("#collapseOne3").hasClass("show")) {
      //   $("#collapseOne3").addClass("show");
      // } else {
      //   $("#collapseOne3").removeClass("show");
      // }
    });

    let flag=0;
    $('.next').click(function(){
      if(flag == 0){
        $('.c1').css({'transform':'translateX(-100px) scale(0.7)','z-index':'9'});
        $('.c2').css({'transform':'translateX(100px) scale(1.2)','z-index':'9'});
        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c3').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
        $('.c1').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
        $('.c3').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 0;
      }
    });
    $('.prev').click(function(){
      if(flag == 0){
        $('.c3').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
        $('.c1').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 1;
      } else if(flag == 1){
        $('.c1').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
        $('.c2').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 2;
      }else if(flag == 2){
        $('.c2').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
        $('.c3').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
        flag = 0;
      }
    });
  });


  let aBit_UTIL = {

    displaySuccessDialog: function (...args) {
      this.displayHtmlDialog(args[0], args[1], "#045104", "#eee", "success");
    },

    /**
	* Pass arguments in the sequence title, message
	*/
	displayErrorDialog: function (...args) {
    this.displayHtmlDialog(args[0], args[1], "#e74c3c", "#eee", "error");
	},

	displayWarningDialog: function (...args) {
		this.displayHtmlDialog(args[0], args[1], "#9d1c23", "#eee", "warning");
  },
  displayHtmlDialog : function(heading, title, bgColor, tColor, icon) {
    $.toast({ 
      heading: heading,
      text : title, 
      showHideTransition : 'slide',  // It can be plain, fade or slide
      bgColor : bgColor,              // Background color for toast
      textColor : tColor,            // text color
      allowToastClose : true,       // Show the close button or not
      hideAfter : 5000,              // `false` to make it sticky or time in miliseconds to hide after
      stack : 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
      textAlign : 'left',            // Alignment of text i.e. left, right, center
      position : 'top-right',     // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
      icon: icon
    });
  },
};
