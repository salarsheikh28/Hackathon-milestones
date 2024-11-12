// Get references to the form and display area
var form = document.getElementById("resume");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent page reload
  //   collect input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var qualification = document.getElementById("qualifications").value;
  var skills = document.getElementById("skills").value;
  var experience = document.getElementById("experience").value;
  // Generate resume content dynamically
  var resumeHTMl =
    "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>"
      .concat(name, "</p>\n<p><b>Email:</b>")
      .concat(email, "</p>\n<p><b>Phone.No:</b>")
      .concat(phone, "</p>\n\n<h3>Qualification</h3>\n<p>")
      .concat(qualification, "</p>\n\n<h3>Skills</h3>\n<p>")
      .concat(skills, "</p>\n\n<h3>Experience</h3>\n<p>")
      .concat(experience, "</p>");
  // Display generate resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTMl;
  } else {
    console.error("The Resume display element is missing");
  }
});
