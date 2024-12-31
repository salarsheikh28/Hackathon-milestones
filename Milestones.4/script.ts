// Get references to the form and display area

const form = document.getElementById("resume") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

// Handle form submission

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); //prevent page reload

  //   collect input values

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const qualification = (
    document.getElementById("qualifications") as HTMLInputElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;

  // Generate resume content dynamically
  const resumeHTMl = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable "true">${name}</span></p>
<p><b>Email:</b><span contenteditable "true">${name}</span>${email}</p>
<p><b>Phone.No:</b><span contenteditable "true">${name}</span>${phone}</p>

<h3>Qualification</h3>
<p contenteditable "true">${qualification}</p>

<h3>Skills</h3>
<p contenteditable "true">${skills}</p>

<h3>Experience</h3>
<p contenteditable "true">${experience}</p>
`;

  // Display generate resume

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTMl;
  } else {
    console.error("The Resume display element is missing");
  }
});
