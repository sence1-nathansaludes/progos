/* Accordion Script
---------------------------------------------------------------------------------------- */
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


/* Tabs Script
---------------------------------------------------------------------------------------- */
$(".tabs .tab-item").on("click", function () {
  if ($(this).hasClass("active") === false) {
    const tab_index = $(this).attr('data-tab-index');

    // remove active class from current active item
    $(".tabs .tab-item.active").removeClass("active");
    $(".tabs .content-area .inner-container.active").removeClass("active");

    // set new active item
    $(this).toggleClass("active");
    $(`.tabs .content-area .inner-container[data-content-index="${tab_index}"]`).toggleClass("active");
  }
  else {
    // ignore
  }
});