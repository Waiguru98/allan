function submit_Form(){
    if(confirm("Are you sure you want to proceed?")){
        checkDetails();
    }
}
function checkDetails() {
    var name = document.forms["contact_form"]["name"].value;
    var email = document.forms["contact_form"]["email"].value;


    if(name == ""){
        alert("Please enter your name, field required");
        return false;
    }
    if(email == ""){
        alert("Please enter your email, field required");
        return false;
    }

    alert("Thank you "+name+ " we have received your info, Thankyou!");
    return true;

}