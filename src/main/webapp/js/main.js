$(document).ready(function () {
    $('.btn-ok').click(function(){
        var param1 = $('.configuration1').val();
        var param2 = $('.configuration2').val();
        var param3 = $('.configuration3').val();
        
        var url = "www.example.com" + "?configuration1=" + param1
            + "configuration2=" + param2
            + "configuration3=" + param3;

        if(!$('#iframe').hasClass('active')) {
            $('#iframe').addClass('active');
        }
        $('#iframe').attr('src', url);

        $('#configuration-modal').modal('hide');
    });
});