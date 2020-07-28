/**
 * name:    LinkIt
 * author:  Foysal md
 * version: 0.1.0
 * license: MIT license
 */

 (function($){
    $.fn.linkIt = function(options){
       // Default settings
       var settings = $.extend({
            href    :null,
            text    :null,
            target  :'_blank'
       }, options)
      // Validation
      if(settings.href == null){
        console.log('you need an href option for LinkIt to work')
        return this;
      }
      return this.each(function(){
          var object = $(this)

          if(settings.text == null) {
              settings.text = object.text()
          }
          object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text)
      })
      
    }
 }(jQuery));