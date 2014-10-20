'use strict';

$(function() {

// footer
//-----------------------------------------------------------------------------
  var
    $pageWrapper = $('#page-wrapper'),
    footer  = {
      $element: $('#footer'),
      height: null,
      place: function() {
        var self = this;
        self.height = self.$element.outerHeight();
        $pageWrapper.css({paddingBottom: self.height});
        self.$element.css({marginTop: -self.height});
      }
    };

  $(window).on({
    load: function() {
      footer.place();
    },
    resize: function() {
      footer.place();
    }
  });

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();

});
