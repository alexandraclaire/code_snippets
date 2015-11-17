var $password = $('#password');
var $confirmPassword = $('#confirm_password');
var $username = $('#username');

//hide hints
$('form span').hide();

function isUsernamePresent(){
	return $username.val().length > 0;
}

function isPasswordValid(){
	return $password.val().length > 8;
}

function arePasswordsMatching(){
	return $password.val() === $confirmPassword.val();
}

function canSubmit(){
	return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

function passwordEvent(){
	//find put if password is valid
	if(isPasswordValid()){
		//hide hint if valid
		$password.next().hide();
	} else {
	//else show hint
	$password.next().show();
	}
}
function confirmPasswordEvent() {
    if (arePasswordsMatching()) {
        $confirmPassword.next()
            .hide();
    } else {
        $confirmPassword.next()
            .show();
    }
}
function enableSubmitEvent() {
	$('#submit').prop('disabled', !canSubmit());
}

function usernameEvent() {
	// find out if username is present
	if(isUsernamePresent()){
		//hide hint if username is present
		$username.next().hide();
	} else {
		// show hint if username not valid
		$username.next().show();
	}
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

