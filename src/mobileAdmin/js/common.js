$(function() {
    uploadFile();
});

function scrollPrevent(prop) {
    if ( prop == true ) {
        $('body').css({'overflow':'hidden'});
    } else {
        $('body').css({'overflow':'initial'});
    }
}

function uploadFile() {
    var fileTarget = $('.fileinput-wrap input[type=file]');
    
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
    
        $(this).siblings('.form-control').val(filename);
    });
}