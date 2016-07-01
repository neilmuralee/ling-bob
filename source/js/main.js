//  LING BOB SITE JS



$(document).ready(function($) {

    $('[data-toggle~="menu-toggle"]').click(function() {
        $("body").toggleClass("menu-toggle");
    });

    // instagram
    $(".instafeed").instastream({
        instaToken: '3062633.5e1f163.ffa63aafbff9485ca34574dc55432ab1',
        instaUser: '3062633',
        instaResults: 8,
        instaMenu: 'yes'
    });

    // Contact Form
    $(function() {

        // Get the form.
        var form = $('.contact-form');

        // Get the messages div.
        var formMessages = $('.contact-form__message');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(form).addClass('hidden');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#first_name').val('');
                    $('#last_name').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#enquiry').val('');
                })
                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });

    });


});