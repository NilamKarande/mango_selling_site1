(function ($) {
  var form = $("#myform");

  form.submit(function (event) {
    event.preventDefault();
    var req = $.ajax({
      url: form.attr("https://emailsend-xwdejvu4hq-uc.a.run.app"),
      type: "POST",
      data: form.serialize(),
      headers: {
        accept: "application/json",
      },
      crossDomain: true,
      success: function () {
        alert("success");
      },
    });
  });
})(jQuery);
