$('.jquery_accordion_title').click(function (event) {
    event.preventDefault();
    $(this).closest('.jquery_accordion_item').siblings().removeClass('active').find('.jquery_accordion_content').slideUp(400);
    $(this).closest('.jquery_accordion_item').toggleClass('active').find('.jquery_accordion_content').slideToggle(400);
  });