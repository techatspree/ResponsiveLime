                                                                                                                                                                                                                                                                /*
 * LimeSurvey
 * Copyright (C) 2007 The LimeSurvey Project Team / Carsten Schmitz
 * All rights reserved.
 * License: GNU/GPL License v2 or later, see LICENSE.php
 * LimeSurvey is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 * 
 * 
 * Description: Javascript file for templates. Put JS-functions for your template here.
 *  
 * 
 * $Id:$
 */


/*
 * The function focusFirst puts the Focus on the first non-hidden element in the Survey. 
 * 
 * Normally this is the first input field (the first answer).
 */
function focusFirst(Event)
{
	
	$('#limesurvey :input:visible:enabled:first').focus();

}
/*
 * The focusFirst function is added to the eventlistener, when the page is loaded.
 * 
 * This can be used to start other functions on pageload as well. Just put it inside the 'ready' function block
 */

/* Uncomment below if you want to use the focusFirst function */
/*
$(document).ready(function(){
	focusFirst();
});
*/



function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1])
   if ((version >= 5.5) && (version<7) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : "";
            var imgClass = (img.className) ? "class='" + img.className + "' " : "";
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
            var imgStyle = "display:inline-block;" + img.style.cssText;
            if (img.align == "left") imgStyle = "float:left;" + imgStyle;
            if (img.align == "right") imgStyle = "float:right;" + imgStyle;
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src='" + img.src + "', sizingMethod='scale');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
}


function compactMultipleOptComments(){ // reponsive compact layout for multiple options lists with comments
  $('div.question-wrapper.multiple-opt-comments').each(function () {
    $('div.answers ul.subquestions-list.checkbox-text-list li',this).each(function () {
      $(this).addClass("row");
      $('span.option',this).addClass("medium-6 large-4 columns");
      $('span.comment',this).addClass("medium-6 large-8 columns");   
      $('label.answertext input.text.other',this).width("70%").css("display","inline-block"); //inline label box for "other"
    });  
  });
}


$(document).ready(function(){
  $('input[type="submit"], input[type="button"]').removeClass("ui-button ui-widget ui-state-default ui-corner-all");
  $('input[type="submit"], input[type="button"]').addClass("button secondary tiny");
  /*$("#progressbar").removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all");
  $("#progressbar").addClass("progress");
  $("#progressbar>div").removeClass("ui-progressbar-value ui-widget-header ui-corner-left").addClass("meter");*/
  
  compactMultipleOptComments();
  
});
                                                                                                                                                                                                
