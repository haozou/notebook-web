$(document).ready(function () {
    $('.btn-ok').click(function () {
        var username = $('.username').val();
        var image_name = $('.image_name').val();
        var command = $('.command').val();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: 'http://mbr-31574:8000/api/v1.0/run_notebook_in_docker', // post url
            data: {"username": username,
                   "image_name": image_name,
                   "command": command}, // the data passed to post
            success: function (result) {

                if (!$('#iframe').hasClass('active')) {
                    $('#iframe').addClass('active');
                }
                $('#iframe').attr('src', "http://localhost:" + result.port + "/notebooks/test2.ipynb");

                $('#configuration-modal').modal('hide');
            }
        });
    });
});