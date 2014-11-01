'use strict';
if(!window.console) window.console = {};
if(!window.console.log) window.console.log = function() {};

// footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox || ieDetector.ieVersion) {
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
          self.$element.css({top: -self.height});
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

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

});
