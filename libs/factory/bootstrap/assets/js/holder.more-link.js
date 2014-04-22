/**
* Factory More Link
*/

;(function ( $, window, document, undefined ) {
    "use strict"; // jshint ;_;
  
    var pluginName = 'factoryBootstrap308_moreLink';

    $.fn[pluginName] = function ( param1, param2 ) {
        
        return this.each(function () {
            var $this = $(this);
            
            $this.find(".factory-more-link-show").click(function(){
                $( $(this).attr('href') ).fadeIn();
                $(this).hide();
                return false;
            });
            
            $this.find(".factory-more-link-hide").click(function(){
                var content = $( $(this).attr('href') );
                content.fadeOut(300, function(){
                    content.prev().show();
                });
                return false;
            });
        });
    };

    // auto init
 
    $(function(){
        $('.factory-bootstrap-308 .factory-more-link').factoryBootstrap308_moreLink();  
    });
    
})( jQuery, window, document );