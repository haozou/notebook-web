$(document).ready(function () {
    $('.btn-ok').click(function () {
        var username = $('.username').val();
        var image_name = $('.image_name').val();
        var command = $('.command').val();

        var data = {"username": username,
         "image_name": image_name,
         "command": command}

         var ret = post('http://localhost:8000/api/v1.0/run_notebook_in_docker', data);
         ret.done(function(result, status) {
            if (status == "success") {
                name = result.container_name;
                port = result.port;
                ret = post("http://localhost:8000/api/v1.0/creates", {"target_dir": "notebook_data/" + name, "filename": "test.ipynb"});
                ret.done(function(result, status) {
                    if (status == "success") {
                        if (!$('#iframe').hasClass('active')) {
                             $('#iframe').addClass('active');
                         }
                         $('#iframe').attr('src', "http://localhost:" + port + "/notebooks/test.ipynb");
                    }
                });
            }
         });
         $('#configuration-modal').modal('hide');
    });

    function post(uri, data) {
        var ret = $.ajax({
            type: "POST",
            dataType: "json",
            url: uri, // post url
            data: data // the data passed to post
        });
        return ret;
    }
});