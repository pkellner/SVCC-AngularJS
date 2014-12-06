$(document).ready(function () {


    var isKidInitial = $('#RegisterUserInfoLoggedIn_IsKid').is(':checked');
    if (isKidInitial == true) {
        $('#includenameonhonorrole').css('visibility', 'hidden');
        $('#optionaldonationsvccgiving').hide();
        $('#requiredkiddonation').show();
    } else {
        $('#includenameonhonorrole').css('visibility', 'visible');
        $('#optionaldonationsvccgiving').show();
        $('#requiredkiddonation').hide();
    }

    $("#RegisterUserInfoLoggedIn_IsKid").click(function (event) {

        if ($('#RegisterUserInfoLoggedIn_IsKid').is(':checked')) {
            $('#includenameonhonorrole').css('visibility', 'hidden');
            $('#optionaldonationsvccgiving').hide();
            $('#requiredkiddonation').show();
        } else {
            $('#includenameonhonorrole').css('visibility', 'visible');
            $('#optionaldonationsvccgiving').show();
            $('#requiredkiddonation').hide();
        }

    });


    // clear password1 and password2 because IE10 is showing data in password1
    // http://stackoverflow.com/questions/1113874/asp-net-mvc-html-password-set-value

    $('#RegisterUserInfoLoggedIn_Password1').val('');
    $('#RegisterUserInfoLoggedIn_Password2').val('');

    $("#clearkidsparent").click(function (event) {

        // seems to just do this for this click, the events resume for the real save or cancel
        event.stopPropagation();
        event.preventDefault();

        Ext.Ajax.request({
            url: '/rpc/Account/KidsTrackClearParent',
            actionMethods: 'POST',
            scope: this,
            params: {
                id: $('#RegisterUserInfoLoggedIn_AttendeesId').val()
            },
            success: function (r, o) {
                // any success here is a match so update username of parent field
                $('#RegisterUserInfoLoggedIn_KidParentUsername').val("Not Assigned");
                $('#buttonToAssignParentId').show();
            },
            failure: function (r, o) {
                $.prompt('failed clearing parent username');
            }
        });
    });


    $("#sponsoreditbutton").click(function(event) {

        window.location.href = "/SponsorInformation.aspx";

    });


    

    $("#assignkidsparent").click(function (event) {

        event.stopPropagation();
        event.preventDefault();

        var parentUsername = $('#RegisterUserInfoLoggedIn_KidParentUsername').val();

        // using ExtJS becasue of funny error with jquery below
        Ext.Ajax.request({
            url: '/rpc/Account/SendParentConfirmationEmail',
            actionMethods: 'POST',
            scope: this,
            params: {
                ParentUsername: parentUsername,
                AttendeesIdForKid: Ext.get('RegisterUserInfoLoggedIn_AttendeesId').el.getValue()
            },
            success: function (r, o) {
                $.prompt('An email has been sent to the account associated with username ' + parentUsername + ". When the account (owned by the guardian) confirms responsibility for this kid, and, this kid has completed the $25 donation, then this kid account will be able to both indicate interest in sessins as well as plan to attend if plan to attend is ready.");

            },
            failure: function (r, o) {

                $.prompt(Ext.decode(r.responseText).message);
            }
        });


    });


    function validateTheForm() {


        $("#registerformid").validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 2
                },
                RegisterUserInfoLoggedIn_UserLasttName: {
                    required: true,
                    minlength: 2
                },
                RegisterUserInfoLoggedIn_Password1: {
                    required: true,
                    minlength: 5
                },
                RegisterUserInfoLoggedIn_Password2: {
                    required: true,
                    minlength: 5,
                    equalTo: "#RegisterUserInfoLoggedIn_Password2"
                },
                RegisterUserInfoLoggedIn_Email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                firstname: "Please enter your firstname",
                RegisterUserInfoLoggedIn_UserLastName: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                RegisterUserInfoLoggedIn_Password1: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                RegisterUserInfoLoggedIn_Password2: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                RegisterUserInfoLoggedIn_Email: "Please enter a valid email address"
            }
        });
    }


    // END OF VALIDATION


    var showSvccGivingDonation = $('#ShowSvccGivingDonation').val().toLowerCase() == "true";

    $("#cancelit").click(function () {

        window.location.href = 'http://www.siliconvalley-codecamp.com/'; // SHOULD REALLY GO TO WHERE EVER WE ARE TODO:
    });


    $("#validateit").click(function () {


        // if not kid:
        //   force person to choose an amount (including 0) if they have not yet done that
        //   if 0 amount, don't redirect to payment page


        // if kid, Here is logic
        //  1.  check to see if they have donated enough or they are planning to donate enough on this page (if yes, all is good)
        //  2.  warn them that they will not be able to pick classes until they have donated the min $25

        var isKid = $('#RegisterUserInfoLoggedIn_IsKid').is(':checked');

        var donationAmount = 0.0;
        var donationConfirmed = $('#RegisterUserInfoLoggedIn_DonationConfirmed').val().toLowerCase() == "true";
        if (donationConfirmed == true || donationConfirmed == "True") {
            donationAmount = $('#RegisterUserInfoLoggedIn_DonationAmount').val();
        } else {
            donationAmount = $("input:radio[name='RegisterUserInfoLoggedIn.DonationAmount']").filter(":checked").val();
            var otherAmount = $('#RegisterUserInfoLoggedIn_OptionalDonationAmountEntered').val();
            if (otherAmount && otherAmount.trim().length > 0) {
                donationAmount = otherAmount;
            }
        }

        var errorStringKid = '';
        if (isKid === true) {

            var curVal = $('#RegisterUserInfoLoggedIn_KidParentUsername').val();
            if (!curVal || curVal.length === 0 || curVal === "Not Assigned") {
                errorStringKid += 'Before scheduling any kid sessions you must first assign a parent to the kid you are registering.  ';
            }

            if (donationConfirmed === true) {
                var amountDonatedPreviously = $('#RegisterUserInfoLoggedIn_DonationAmount').val().replace('$', '') * 1.0;
                if (amountDonatedPreviously < 25.00) {
                    if (amountDonatedPreviously > 0.00) {
                        errorStringKid += ' Your current donation is ' + $('#RegisterUserInfoLoggedIn_DonationAmount').val() + '. ';
                    }
                    errorStringKid += ' In order to schedule any kid classes you need to donate a minimum of $25';
                    var kidBirthYear = $('#RegisterUserInfoLoggedIn_KidBirthYear').val();

                    if (!kidBirthYear || kidBirthYear == "0") {
                        errorStringKid += ' and also include the birth year of the kid registering here.';
                    } else {
                        errorStringKid += '.';
                    }
                }
            }
        }

        if (errorStringKid.length == 0 && (donationAmount && donationAmount.length > 0 || showSvccGivingDonation == false || donationConfirmed == true)) {

            // server does not seem to be validating this, maybe becaues it's webapi on server?
            var securityToken = $('[name=__RequestVerificationToken]').val(); // this is not really working for anything, I could not get MVC auth to accept it on server
            //event.stopPropagation();
            //event.preventDefault();


            $.ajax({
                type: 'POST',
                url: '/rpc/account/UpdateAttendeeRegJquery',
                data: {
                    __RequestVerificationToken: securityToken,
                    DonationOnly: false,
                    AttendeesId: $('#RegisterUserInfoLoggedIn_AttendeesId').val(),
                    UserFirstName: $('#RegisterUserInfoLoggedIn_UserFirstName').val(),
                    UserLastName: $('#RegisterUserInfoLoggedIn_UserLastName').val(),
                    Email: $('#RegisterUserInfoLoggedIn_Email').val(),
                    QREmailAllow: $('#RegisterUserInfoLoggedIn_QREmailAllow').is(':checked'),
                    Company: $('#RegisterUserInfoLoggedIn_Company').val(),
                    PrincipleJob: $('#RegisterUserInfoLoggedIn_PrincipleJob').val(),
                    Address: $('#RegisterUserInfoLoggedIn_Address').val(),
                    City: $('#RegisterUserInfoLoggedIn_City').val(),
                    State: $('#RegisterUserInfoLoggedIn_State').val(),
                    UserZipCode: $('#RegisterUserInfoLoggedIn_UserZipCode').val(),

                    
                    NotificationLevel: $("input:radio[name='RegisterUserInfoLoggedIn.NotificationLevel']").filter(":checked").val(),
                    NotificationDestinationText: $('#RegisterUserInfoLoggedIn_NotificationDestinationText').is(':checked'),
                    NotificationDestinationEmail: $('#RegisterUserInfoLoggedIn_NotificationDestinationEmail').is(':checked'),

                    DonationAmount: donationAmount,
                    //DonationAmountEntered: otherAmount,
                    DonationOnHonorRoll: $('#RegisterUserInfoLoggedIn_DonationOnHonorRoll').is(':checked'),
                    WorkStudyInterest: $('#RegisterUserInfoLoggedIn_WorkStudyInterest').is(':checked'),



                    //AttendingDays: $("select[name='RegisterUserInfoLoggedIn.AttendingDays']").val(),

                    SaturdayClasses: $('#RegisterUserInfoLoggedIn_SaturdayClasses').is(':checked'),
                    SundayClasses: $('#RegisterUserInfoLoggedIn_SundayClasses').is(':checked'),

                    VolunteeredCurrentYear: $('#RegisterUserInfoLoggedIn_VolunteeredCurrentYear').is(':checked'),
                    PhoneNumber: $('#RegisterUserInfoLoggedIn_PhoneNumber').val(),
                    OptInSponsoredMailingsLevel: $('#RegisterUserInfoLoggedIn_OptInSponsoredMailingsLevel').is(':checked'),
                    OptInTechJobKeyWords: $('#RegisterUserInfoLoggedIn_OptInTechJobKeyWords').val(),

                    TwitterHandle: $('#RegisterUserInfoLoggedIn_TwitterHandle').val(),
                    FacebookId: $('#RegisterUserInfoLoggedIn_FacebookId').val(),
                    LinkedInId: $('#RegisterUserInfoLoggedIn_LinkedInId').val(),
                    GooglePlusId: $('#RegisterUserInfoLoggedIn_GooglePlusId').val(),

                    EmailSubscription: $("input:radio[name='RegisterUserInfoLoggedIn.EmailSubscription']").filter(":checked").val(),

                    Password1: $('#RegisterUserInfoLoggedIn_Password1').val(),
                    Password2: $('#RegisterUserInfoLoggedIn_Password2').val(),

                    IsKid: isKid,
                    KidBirthYear: $('#RegisterUserInfoLoggedIn_KidBirthYear').val(),
                    KidParentUsername: $('#RegisterUserInfoLoggedIn_KidParentUsername').val(),

                    Password: 'ignore',
                    PasswordConfirm: 'ignore'
                },

                success: function (data) {
                    if (donationAmount > 0.00) {
                        var myFormData = [
                            //{
                            //    name: 'HiddenValue',
                            //    value: 'Initial Value'
                            //},
                            {
                                name: 'x_login',
                                value: data.loginId
                            },
                            {
                                name: 'x_amount',
                                value: data.donationAmount
                            },
                            {
                                name: 'x_description',
                                value: data.description
                            },
                            {
                                name: 'x_test_request',
                                value: data.testRequest
                            },
                            {
                                name: 'x_invoice_num',
                                value: data.invoiceNumber
                            },
                            {
                                name: 'x_fp_sequence',
                                value: data.sequence
                            },
                            {
                                name: 'x_fp_hash',
                                value: data.fingerprint
                            },
                            {
                                name: 'x_show_form',
                                value: data.showForm
                            },
                            {
                                name: 'x_fp_timestamp',
                                value: data.timeStamp
                            },
                            {
                                name: 'x_first_name',
                                value: $('#RegisterUserInfoLoggedIn_UserFirstName').val()
                            },
                            {
                                name: 'x_last_name',
                                value: $('#RegisterUserInfoLoggedIn_UserLastName').val()
                            },
                            {
                                name: 'x_address',
                                value: $('#RegisterUserInfoLoggedIn_Address').val()
                            },
                            {
                                name: 'x_city',
                                value: $('#RegisterUserInfoLoggedIn_City').val()
                            },
                            {
                                name: 'x_state',
                                value: $('#RegisterUserInfoLoggedIn_State').val()
                            },
                            {
                                name: 'x_zip',
                                value: $('#RegisterUserInfoLoggedIn_UserZipCode').val()
                            },
                            {
                                name: 'x_email',
                                value: $('#RegisterUserInfoLoggedIn_Email').val()
                            },
                            {
                                name: 'x_cust_id',
                                value: $('#RegisterUserInfoLoggedIn_AttendeesId').val()
                            },
                            {
                                name: 'x_header_html_payment_form',
                                value:  isKid ? '<b>Silicon Valley Code Camp</b>' : '<b>Silicon Valley Code Camp Giving</b>'
                            },
                            {
                                name: 'x_color_background',
                                value: '#DDEEEE'
                            },
                            {
                                name: 'x_cancel_url',
                                value: 'http://www.siliconvalley-codecamp.com/register/status'
                            },
                            {
                                name: 'x_email_customer',
                                value: 'TRUE'
                            },
                            {
                                name: 'x_header_email_receipt',
                                value: isKid ? 'Confirmation of Donation For Kids Track' : 'Confirmation Of Donation To Silicon Valley Code Camp Giving'
                            },
                            {
                                name: 'x_footer_email_receipt',
                                value: 'Any Questions or Problems Contact service2014@siliconvalley-codecamp.com'
                            }
                            //, {  BOTH OF THESE HAVE TO DO ONLY WITH RECEIPT.  THIS SHOULD BE NOT INCLUDED AND THERE SHOULD BE NO RELAY ON SERVER.  SILENT POSTING SHOULD BE ON IS ALL
                            //    name: 'x_relay_response',
                            //    value: 'TRUE'
                            //}
                            //, {
                            //    name: 'x_relay_url',
                            //    value: 'http://co.siliconvalley-codecamp.com/authorizedotnet/sim'
                            //    //value: 'http://respondto.it/pkellner'
                            //}
                        ];

                        // https://support.authorize.net/authkb/index?page=content&id=A663  x_relay

                        $.each(myFormData, function (index, myData) {
                            $('#registerformid').append('<input type="hidden" name="' + myData.name + '" value="' + myData.value + '">');
                        });
                        $('#registerformid').submit();
                    } else {
                        // no donation so redirect to registration confirmation page
                        if (data.success === true) {

                            if (errorStringKid.length == 0) {
                                window.location.href = '/Register/Status';
                            } else {
                                window.location.href = '';
                            }

                        } else {
                            $.prompt('error: contacting Authorize.Net.  Please try later or contact service2014@siliconvalley-codecamp.com');
                            //TODO: NEED TO ADD LOG TRACE TO OUR SERVER FOR THIS
                        }
                    }
                },
                error: function (result) {

                    $.prompt(result.responseJSON.message);
                    //window.location.href = "/About";
                }
            });
        } else {

            if (errorStringKid.length > 0) {
                var errString = '<p>' + errorStringKid + '</p><p>You must enter a donation amount or select $0 to continue</p>';
                $.prompt(errString);
            } else {
                $.prompt('You must enter a donation amount or select $0 to continue');
            }
        }


    });
});


