(function (global) {

  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
  }

  function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }

  function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
  }

  var App = function () {
    this.initialize();
  };

  App.prototype.initialize = function () {
    this.addHeadingAnchors();
    this.loadCustomFonts();
    this.fixSkipLinks();
    this.bindUI();
  };

  App.prototype.bindUI = function () {
    var input = document.querySelectorAll('input[name="syntax"]');

    Array.prototype.slice.call(input).forEach(function (element) {
      element.addEventListener('click', function (event) {
        if (this.value === 'sass') {
          addClass(document.body, 'sass');
        } else {
          removeClass(document.body, 'sass');
        }
      });
    });

    document.getElementById('aside-toggle').addEventListener('click', function (event) {
      toggleClass(document.body, 'open');
    });

    document.getElementById('language-picker').addEventListener('change', function (event) {
      window.location.href = this.value;
    });
  };

  App.prototype.addHeadingAnchors = function () {
    var headings = document.querySelectorAll('h1:not(.title), h2:not(.baseline), h3');
    var len = headings.length;
    var link, heading, i;

    for (i = 0; i < len; i++) {
      heading = headings[i];

      link = document.createElement('a');
      link.setAttribute('href', '#' + heading.id);
      link.innerHTML = '§';
      link.setAttribute('class', 'anchor-link')
      heading.appendChild(link);
    }
  };

  App.prototype.loadCustomFonts = function () {
      WebFontConfig = {
        google: { families: ['Droid Sans:400,700', 'Source Code Pro'] }
      };

      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                  '://ajax.googleapis.com/ajax/libs/webfont/1.5.6/webfont.js';
        wf.async = 1;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
  };

  App.prototype.fixSkipLinks = function () {
    window.addEventListener("hashchange", function(event) {
      var element = document.getElementById(location.hash.substring(1));

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }
        element.focus();
      }
    }, false);
  };

  global.App = App;

}(window));