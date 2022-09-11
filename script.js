const passwordInputs = document.querySelectorAll(".password");
const pwdInitial = document.querySelector("#password-initial");
const pwdConfirm = document.querySelector("#password-confirm");
const initialLabel = document.querySelector("#initial-label");
const confirmLabel = document.querySelector("#confirm-label");

function checkMatch() {

    if (pwdInitial.value !== pwdConfirm.value) {
        for (const pwd of passwordInputs) {
            pwd.classList.add("error");
            pwd.classList.remove("match");
            confirmLabel.classList.add("error");
        }
    } else {
        for (const pwd of passwordInputs) {
            if (pwdInitial.value !== "") {
                pwd.classList.add("match");
                pwd.classList.remove("error");
                confirmLabel.classList.remove("error");
            }
        }
    }
}

for (const pwd of passwordInputs) {
    addEventListener("change", checkMatch);
}