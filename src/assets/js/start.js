jQuery(document).ready( function($){

    function pricingSwitcher( elementCheck, elementParent, elementPricing ) {
        elementParent.find('.pts-left,.pts-right').removeClass('pts-switch-active');
        elementPricing.find('.pts-switch-content-left,.pts-switch-content-right').addClass('hidden');

        if( elementCheck.filter(':checked').length > 0 ) {
            elementParent.find('.pts-right').addClass('pts-switch-active');
            elementPricing.find('.pts-switch-content-right').removeClass('hidden');
        } else {
            elementParent.find('.pts-left').addClass('pts-switch-active');
            elementPricing.find('.pts-switch-content-left').removeClass('hidden');
        }
    }

    $('.pts-switcher').each( function(){
        var element = $(this),
            elementCheck = element.find(':checkbox'),
            elementParent = $(this).parents('.pricing-tenure-switcher'),
            elementPricing = $( elementParent.attr('data-container') );

        pricingSwitcher( elementCheck, elementParent, elementPricing );

        elementCheck.on( 'change', function(){
            pricingSwitcher( elementCheck, elementParent, elementPricing );
        });
    });

    // Get Started From Validation
    var getStartedForm = $('#get-started-form'),
        getStartedFormAlert = getStartedForm.attr('data-alert-type'),
        getStartedFormLoader = getStartedForm.attr('data-loader'),
        getStartedFormResult = getStartedForm.find('.contact-form-result'),
        getStartedFormRedirect = getStartedForm.attr('data-redirect');

    getStartedForm.validate({
        submitHandler: function(form) {

            getStartedFormResult.hide();

            if( getStartedFormLoader == 'button' ) {
                var defButton = $(form).find('button'),
                    defButtonText = defButton.html();

                defButton.html('<i class="icon-line-loader icon-spin nomargin"></i>');
            } else {
                $(form).find('.form-process').fadeIn();
            }

            $(form).ajaxSubmit({
                target: getStartedFormResult,
                dataType: 'json',
                resetForm: true,
                success: function( data ) {
                    if( getStartedFormLoader == 'button' ) {
                        defButton.html( defButtonText );
                    } else {
                        $(form).find('.form-process').fadeOut();
                    }
                    if( data.alert != 'error' && getStartedFormRedirect ){
                        window.location.replace( getStartedFormRedirect );
                        return true;
                    }
                    if( getStartedFormAlert == 'inline' ) {
                        if( data.alert == 'error' ) {
                            var alertType = 'alert-danger';
                        } else {
                            var alertType = 'alert-success';
                        }

                        getStartedFormResult.addClass( 'alert ' + alertType ).html( data.message ).slideDown( 400 );
                    } else {
                        getStartedFormResult.attr( 'data-notify-type', data.alert ).attr( 'data-notify-msg', data.message ).html('');
                        SEMICOLON.widget.notifications( getStartedFormResult );
                    }
                }
            });
        }
    });

    $('[data-pricing-plan]').click( function(){
        getStartedForm.find('#get-started-form-package').val( $(this).attr('data-pricing-plan') );
        getStartedForm.find('#modal-get-started-package').html( $(this).attr('data-pricing-plan') );
    });

});