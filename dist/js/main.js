$(function () {
  'use strict';
  let animationSpeed = 300;// speed of all animations in sidebar

  $(".toggle-sidebar").on("click", function () {// sidebar toggle button
    $(".sidebar, .toggle-sidebar, .content-area").toggleClass("no-sidebar");
  });
  $(".toggle-submenu").on("click", function () {// submenu toggle
    if ($(this).parent('a').next('.child-links').css('display') == 'none') {
      // if the submenu is not open it will reset all submenus and open the target submenu
      $("li .toggle-submenu").removeClass("active").parent("a").siblings(".child-links").slideUp(animationSpeed);
      $(this).addClass("active").parent("a").next(".child-links").slideToggle(animationSpeed);
    }else {// if the submenu is open it will reset all submenus
      $(this).removeClass("active").parent("a").next(".child-links").slideUp(animationSpeed);;
    }
  });
});