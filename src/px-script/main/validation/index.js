import { hashId } from "../utils";

const SELECTORS = {
    VALIDATE: "[data-validate]",
    FIELDS: "input, select, textarea",
    VALIDATIONCONTAINER: ".form-group",
    SUBMITBUTTON: "[data-disable-invalid]"
};
const EMAILREGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validation = (() => {
    const validateField = field => {
        if (field.type === "email" && field.pattern && field.value.match(field.pattern)) {
            return true;
        } else if (field.type === "email" && field.value.match(EMAILREGEX)) {
            return true;
        } else if (field.type === "email") {
            return false;
        }

        return field.checkValidity();
    };

    const validateForm = form => {
        if (form.tagName === "FORM") {
            const fieldsToValidate = form.querySelectorAll(SELECTORS.FIELDS);
            let formValid = true;

            fieldsToValidate.forEach(field => {
                const state = _checkFieldState(field);

                if (state === "ERROR") {
                    formValid = false;
                }
            });

            return formValid;
        } else {
            try {
                throw new Error("px.validation.validateForm: Argument not HTMLElement with tagName form.");
            } catch (e) {
                console.error(`${e.name} ${e.message}`);

                return false;
            }
        }
    };

    const _checkFieldState = field => {
        if (!field.required && !field.value) {
            return "NEUTRAL";
        }

        return validateField(field) ? "SUCCESS" : "ERROR";
    };

    const _addFieldState = field => {
        const validationContainer = field.closest(SELECTORS.VALIDATIONCONTAINER);
        const state = _checkFieldState(field);

        switch (state) {
            case "SUCCESS":
                validationContainer.classList.add("has-success");
                validationContainer.classList.remove("has-error");

                break;
            case "ERROR":
                validationContainer.classList.add("has-error");
                validationContainer.classList.remove("has-success");

                break;
            default:
                validationContainer.classList.remove("has-error");
                validationContainer.classList.remove("has-success");
        }

        return state;
    };

    const _addFieldValidation = field => {
        const validationContainer = field.closest(SELECTORS.VALIDATIONCONTAINER);
        const reqLabel = validationContainer.querySelector("label");

        if (field.required && reqLabel) {
            const asterisk = document.createElement("span");

            asterisk.classList.add("required-asterisk");
            asterisk.innerHTML = "*";
            reqLabel.appendChild(asterisk);
        }

        field.addEventListener("input", () => {
            if (validationContainer.classList.contains("has-success") || validationContainer.classList.contains("has-error")) {
                _addFieldState(field);
            }
        });

        field.addEventListener("blur", () => {
            _addFieldState(field);
        });
    };

    const _addFormValidation = form => {
        const fields = form.querySelectorAll(SELECTORS.FIELDS);
        const submitBtn = form.querySelector(SELECTORS.SUBMITBUTTON);

        if (submitBtn && !validateForm(form)) {
            submitBtn.disabled = true;
        }

        fields.forEach(field => _addFieldValidation(field));

        if (submitBtn) {
            form.addEventListener("input", () => {
                if (validateForm(form)) {
                    submitBtn.disabled = false;
                } else {
                    submitBtn.disabled = true;
                }
            });
        }

        form.addEventListener("submit", e => {
            const formFields = form.querySelectorAll(SELECTORS.FIELDS);
            let formValid = true;

            formFields.forEach(field => {
                _addFieldState(field) === "ERROR" ? formValid = false : null;
            });

            if (!formValid) {
                e.preventDefault();
            }
        });
    };

    const init = id => {
        const validateId = hashId(id);
        const validationSelector = validateId ? document.querySelectorAll(validateId) : document.querySelectorAll(SELECTORS.VALIDATE);
        let validationElems = [];

        if (validationSelector.length) {
            validationElems = [...validationSelector].map(element => {
                const { tagName } = element;

                if (tagName === "FORM") {
                    _addFormValidation(element);
                } else if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
                    _addFieldValidation(element);
                }

                return { _el: element };
            });

            return validationElems.length === 1 ? validationElems[0] : validationElems;
        }

        return null;
    };

    return {
        init,
        validateField,
        validateForm
    };

})();

export default validation;

// TODO: SET UP TEMP FORM VALIDATION IN DOCUMENTATION
