(function($) {
  $.cookit = function(options) {

    var settings = $.extend({
      backgroundColor: '#1c1c1c',
      messageColor: '#fff',
      messageText: "<b>Do you hungry ?</b> 🍪 Pursuing navigation on this site, you accept the use of cookies.",
      linkColor: '#fad04c',
      linkText: "Learn more",
      linkUrl: "https://www.cookiesandyou.com",
      buttonColor: '#fad04c',
      buttonText: "I accept",
    }, options);

    const hasCookieConsent = getCookie('cookies-consent');

    if (!hasCookieConsent) {
      createBanner(settings);
      $('#cookit-button').on('click', () => {
        const cookieBanner = $('#cookit-banner');
        cookieBanner.addClass('hidden');
        setCookie('cookies-consent', 1, 365);
      });
    }

  };
})(jQuery);

function createBanner(settings) {
  var banner = $("<div></div>");
  banner.attr("id", "cookit-banner").css({
    'background-color': settings.backgroundColor
  });

  var container = $("<div></div>");
  container.attr("id", "cookit-container");

  var message = $("<p>"+ settings.messageText +"</p>");
  message.attr("id", "cookit-message").css({
    'color': settings.messageColor
  });

  var link = $("<a href='" + settings.linkUrl + "' target='_blank'>" + settings.linkText + "</a>");
  link.attr("id", "cookit-link").css({
    'color': settings.linkColor
  });

  var button = $("<a href='#'>" + settings.buttonText + "</a>");
  button.attr("id", "cookit-button").css({
    'background-color': settings.buttonColor,
    'color': settings.backgroundColor
  });

  $('body').append(banner);
  banner.append(container);
  container.append(message);
  container.append(link);
  container.append(button);
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  name = name + "=";

  for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
  }
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}