$(function () {
  'use strict';
  $(".toggle-sidebar").on("click", function () {
    $(".sidebar, .toggle-sidebar, .content-area").toggleClass("no-sidebar");
  });
});