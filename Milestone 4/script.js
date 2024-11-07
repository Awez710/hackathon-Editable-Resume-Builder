var form = document.getElementById('resume');
var resumeDisplayElement = document.getElementById('resume-display');
// Handling Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collecting values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skill').value;
    // Debug: Log values to ensure they are collected correctly
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Education:", education);
    console.log("Experience:", experience);
    console.log("Skills:", skill);
    // Generating the resume dynamically
    var resumeHTML = "\n        <h2 style=\"color: blueviolet\"><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">".concat(name, "</span> </p>\n        <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span> </p>\n\n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skill, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        makeEditable();
    }
    else {
        console.error('resumeDisplayElement is missing!');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with input field
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus(); // Fix: Call focus() correctly
            }
        });
    });
}
