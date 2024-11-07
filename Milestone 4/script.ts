const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handling Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collecting values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skill = (document.getElementById('skill') as HTMLTextAreaElement).value;

    // Debug: Log values to ensure they are collected correctly
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Education:", education);
    console.log("Experience:", experience);
    console.log("Skills:", skill);

    // Generating the resume dynamically
    const resumeHTML = `
        <h2 style="color: blueviolet"><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span> </p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span> </p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span> </p>

        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skill}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        makeEditable();
    } else {
        console.error('resumeDisplayElement is missing!');
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content with input field
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');
                
                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
