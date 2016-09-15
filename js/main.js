// pattern for email validation
var emailPattern = /^([a-zA-Z0-9\.\-\+\_])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


$(document).ready(function () {

    //open popup window
    $('.login').on('click', function(){
        $('.fixed-container').addClass('transparent');
        $('.login-popup').toggle('slow');
    });

    //close the login window
    var $close = $('.btn-close');
    $close.on('click', function(){
       $('.login-popup').hide();
        $('.fixed-container').removeClass('transparent');
    });

    // click event on submit button
    $('.go').on('click', function(e) {
        e.preventDefault();

        var $form = $('.login-form');

        $form.submit();
    });

    // validate form
    $('.login-form').on('submit', function(e) {
        e.preventDefault();

        var $pass = $("input[type = 'password']");
        var $email = $("input[type = 'email']");

        // validate email
        if (!emailPattern.test($email.val())) {
            alert('Please enter a valid email');
            return;
        }

        // validate password
        if (!$pass.val()) {
            alert('Please enter a password');
            return;
        }

        $.ajax({
            type: 'post',
            dataType: 'jsonp',
            url: 'http://tobolkin.com/slavik/index.php',
            data: {
                app_key: 'checkeeTestGoodLuck',
                action: 'login',
                email: $email.val(),
                password: $pass.val()
            },
            success: function(data) {
                $('.login-form').html(data);
            },
            error: function(data, errorThrown){
                alert(errorThrown);
            }

        })
    });

    //toggle top menu
    $('.btn-menu').on('click', function(e) {
        $('.main-menu').toggle(500);
    })
});

