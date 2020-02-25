const _accordions = _accordions || [];
const _accordionGroups = _accordionGroups || [];

class AccordionGroup {
    constructor (element) {
        this.elem = element;
        this.accordions = element.querySelectorAll(".accordion");

        if (!this.accordions.length) {
            console.warn("accordion-group: No accordion children found");
        }

        this.accordions = [...this.accordions].map(accordion => {
            const expObj = new Accordion(accordion);

            this._initializeHeader(expObj);
            _accordions.push(expObj);

            return expObj;
        });

        this.openExp = [...this.accordions].find(exp => exp.isOpen);
    }

    _toggle (expParam) {
        if (this.openExp) {
            this.openExp._close();

            if (this.openExp === expParam) {
                this.openExp = null;

                return;
            }
        }

        expParam._open();
        this.openExp = expParam;
    }

    _open (expParam) {
        if (this.openExp) {
            this.openExp._close();
        }

        expParam._open();
        this.openExp = expParam;
    }

    _close () {
        this.openExp._close();
        this.openExp = null;
    }

    _initializeHeader (expParam) {
        if (!expParam.header) {
            console.warn("accordion-group: An accordion is missing a header");

            return null;
        }

        expParam._setAriaExpanded();

        expParam.header.addEventListener("click", () => {
            if (this._containsExpanding()) {
                console.warn("accordion-group: The accordion-group contains an expanding element");

                return null;
            }

            this._toggle(expParam);
        });
    }

    _containsExpanding () {
        return this.accordions.some(exp => exp.isExpanding);
    }
}

class Accordion {
    constructor (element) {
        this.id = element.id;
        this.elem = element;
        this.header = this.elem.querySelector(".accordion-header");
        this.body = this.elem.querySelector(".accordion-body");
        this.expGrpParent = this.elem.closest(".accordion-group");

        if (!this.body) {
            console.warn("accordion: No accordion-body found");

            return null;
        }

        this.isOpen = this.elem.classList.contains("accordion-open");
        this.isExpanding = this.body.classList.contains("expanding");
        this.bodyHeight = this.body.clientHeight;
    }

    _initializeHeader () {
        if (!this.header) {
            console.warn("accordion: No .accordion-header found");

            return null;
        }

        this._setAriaExpanded();

        this.header.addEventListener("click", () => {
            this.isOpen ? this._close() : this._open();
        });
    }

    _setAriaExpanded () {
        this.header.setAttribute("aria-expanded", this.isOpen);
    }

    _open () {
        // If the accordion is expanding then return to avoid messing up the animation [AW]
        if (this.isExpanding) {
            console.warn(`accordion: The given accordion is ${this.isOpen ? "expanding" : "collapsing"}`);

            return false;
        }

        this.isOpen = true;

        this._setAriaExpanded();

        this.isExpanding = true;
        this.elem.classList.add("show");
        this.elem.classList.add("accordion-open");
        this.bodyHeight = this.body.clientHeight;
        this.body.classList.add("expanding");

        /*
            Calling clientHeight forces a reflow making it so we get the correct element height.
            https://developers.google.com/speed/docs/insights/browser-reflow [AW]
        */
        this.body.clientHeight;

        this.body.style.height = `${this.bodyHeight}px`;

        setTimeout(() => {
            this.isExpanding = false;
            this.body.style.height = "";
            this.body.classList.remove("expanding");
        }, 300);
    }

    _close () {
        // If the accordion is expanding then return to avoid messing up the animation [AW]
        if (this.isExpanding) {
            console.warn(`accordion: The given accordion is ${this.isOpen ? "expanding" : "collapsing"}`);

            return false;
        }

        this.isOpen = false;

        this._setAriaExpanded();

        this.elem.classList.remove("accordion-open");
        this.isExpanding = true;
        this.body.style.height = `${this.body.clientHeight}px`;

        this.body.clientHeight; // Trigger reflow again
        this.body.classList.add("expanding");

        this.body.style.height = "";

        setTimeout(() => {
            this.isExpanding = false;
            this.body.classList.remove("expanding");
            this.elem.classList.remove("show");
        }, 300);
    }
}

const open = id => {
    let accordion = null;

    accordion = _accordions.find(e => e.id === id);

    if (!accordion) {
        console.warn(`accordion.open: accordion with id ${id} was not found`);

        return false;
    }

    if (accordion.isOpen) {
        console.warn(`accordion.open: accordion with id ${accordion.id} is open`);

        return false;
    }

    if (accordion.expGrpParent) {
        const expGrpObj = _accordionGroups.find(eg => eg.elem === accordion.expGrpParent);

        expGrpObj._open(accordion);

        return accordion;
    }

    accordion._open();

    return accordion;
};

const close = id => {
    let accordion = null;

    accordion = _accordions.find(e => e.id === id);

    if (!accordion) {
        console.warn(`accordion.close: accordion with id ${id} was not found`);

        return false;
    }

    if (!accordion.isOpen) {
        console.warn(`accordion.close: accordion with id ${accordion.id} is closed`);

        return false;
    }

    if (accordion.expGrpParent) {
        const expGrpObj = _accordionGroups.find(eg => eg.elem === accordion.expGrpParent);

        expGrpObj._close(accordion);

        return accordion;
    }

    accordion._close();

    return accordion;
};

const init = id => {
    if (id) {
        const element = document.getElementById(id);

        if (!element) {
            console.warn(`No accordion-group or accordion with id ${id} found`);

            return null;
        }

        if (element.closest(".accordion-group")) {
            const expGrpObj = new AccordionGroup(element);

            _accordionGroups.push(expGrpObj);

            return expGrpObj;
        }

        const expObj = new Accordion(element);

        expObj._initializeHeader();
        _accordions.push(expObj);

        return expObj;
    } else {
        const accordionGroups = document.querySelectorAll(".accordion-group");
        const accordions = [...document.querySelectorAll(".accordion")].filter(exp => !exp.closest(".accordion-group"));
        const returnVal = [];

        if (!accordionGroups.length && !accordions.length) {
            console.warn("accordion.init: No accordion-group or accordions found");

            return null;
        }

        if (accordionGroups.length) {
            [...accordionGroups].forEach(expGrp => {
                const expGrpObj = new AccordionGroup(expGrp);

                returnVal.push(expGrpObj);

                expGrpObj ? _accordionGroups.push(expGrpObj) : null;
            });
        }

        if (accordions.length) {
            [...accordions].forEach(exp => {
                const expObj = new Accordion(exp);

                expObj._initializeHeader();

                returnVal.push(expObj);

                expObj ? _accordions.push(expObj) : null;
            });
        }

        return returnVal;
    }
};

export default {
    init,
    open,
    close
};
