// Accordion Script
window.onload = function () {
  $("footer .container-1 .group-1 .tab-content").html(
    $("footer .container-1 .group-1 .accordion .item.active .content").html()
  );
};

$("footer .container-1 .group-1 .accordion .item").click(function () {
  if ($(this).hasClass("active")) {
    $("footer .container-1 .group-1 .tab-content")
      .removeClass("active")
      .html("");
    $("footer .container-1 .group-1 .accordion .item.active").toggleClass("active");
  } else {
    const content_html = $(this).find(".content").html() ?? "";
    $("footer .container-1 .group-1 .tab-content")
      .addClass("active")
      .html(content_html);

    $("footer .container-1 .group-1 .accordion .item.active").removeClass("active");
    $(this).toggleClass("active");
  }
});