/**
* Light Weight jQuery Accordions
*/
 
;(function ( $, window, document, undefined ) {
    "use strict"; // jshint ;_;
    
    $.fn.factoryBootstrap308_accordion = function(){         
        return this.each(function () {           
            var $self = $(this); 
            var startAnimation = false;
            
            $('.'+$self.attr('class')+' > div:first').show();
            $('.'+$self.attr('class')+' > div:first')
                    .add('.'+$self.attr('class')+' > h3:first')
                    .addClass('active');

            $('.'+$self.attr('class')+' > h3').on('click', function() {                  
                var selfOn = $(this); 
                var target = selfOn.next(); 
                
                if(!selfOn.hasClass('active') && !startAnimation){ 
                    startAnimation = true;
                    selfOn.parent().children('div').slideUp(500);

                    $('.'+$self.attr('class')+' > h3').removeClass('active');               
                    selfOn.addClass('active');                
                    target.addClass('active').slideDown(500, function(){
                        startAnimation = false;
                        $self.trigger('shown.bs.accordion');
                    });
                }    

              return false;
            });
        });      
  }  
  
  $(function(){
    $('.factory-bootstrap-308 .factory-accordion').factoryBootstrap308_accordion();
  });
  
})( jQuery, window, document );