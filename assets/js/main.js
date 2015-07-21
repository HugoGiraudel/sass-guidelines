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
    this.fixSkipLinks();
    this.bindUI();
  };

  App.prototype.bindUI = function () {
    var input = document.querySelectorAll('input[name="syntax"]');

    Array.prototype.slice.call(input).forEach(function (element) {
      element.addEventListener('click', function (event) {
        if (element.value === 'sass') {
          addClass(document.body, 'sass');
        } else {
          removeClass(document.body, 'sass');
        }
      });
    });

    document.getElementById('language-picker').addEventListener('change', function (event) {
      window.location.href = this.value;
    });
  };

  App.prototype.addHeadingAnchors = function () {
    var headings = document.querySelectorAll('h1[id], h2[id], h3[id]');
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

document.addEventListener("DOMContentLoaded", function (event) {
  var app = new App();
});
