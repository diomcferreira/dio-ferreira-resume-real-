function sendMail(contactForm) {
    emailjs.send("gmail", "Dio", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value, 
        "project_request": contactForm.projectsummery.value
})

.then (
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", response);    
        });
        return false;
    }


    