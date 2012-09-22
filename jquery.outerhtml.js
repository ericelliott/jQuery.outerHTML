/**
 * jQuery outerHTML
 * By Eric Elliott
 * http://ericleads.com/
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 * Adds outerHTML support to jQuery.
 */

(function ($) {
    'use strict';
    var ns = 'outerHTML';
    if (!$.fn[ns]) {
        $.fn[ns] = function outerHTML(replacement) {
            var $this = $(this),
                content;
            // Replace is already baked into jQuery
            // This is here for consistency with .html()
            if (replacement) {
                content = $this.replaceWith(replacement);
            // Fall back to native if it's supported
            } else if (typeof $this[0].outerHTML !== 'undefined') {
                content = $this[0].outerHTML;
            // Fake it 'till you make it!
            } else {
                // Don't use clone because of textarea bug?
                content = $this.wrap('<div>').parent().html();
                $this.unwrap();
            }
            return content;
        };
    }
}(jQuery));
