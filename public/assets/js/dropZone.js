$(document).ready(function () {
    $("#submit-all").on("click", function() {
        $.ajax({
        url: "/file-upload",
        method: "POST",
        data: {
          image: $("#my-awesome-dropzone")
        }
      })
    })
});