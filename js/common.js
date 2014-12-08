'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      footer  = {
        $element: $('#footer'),
        height: null,
        $preFooter: $('<div/>').attr({id: 'pre-footer'}),
        place: function() {
          var
            self = this;
          self.height = self.$element.outerHeight();
          if(!$('#pre-footer').length) {
            $pageWrapper.append(self.$preFooter);
          }
          self.$preFooter.height(self.height);
          self.$element.css({marginTop: -self.height});
          $pageWrapper.after(self.$element);
          //.remove();
        }
      };

    $(window).on({
      load: function () {
        footer.place();
      },
      resize: function () {
        footer.place();
      }
    });
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        console.log($pageBody.addClass('flex-none').height(), $(window).height());
        if($pageBody.addClass('flex-none').height() + $('#header').height() + $('#footer').height() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('resize', function () {
      ieFlexboxFix();
    });
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

});
