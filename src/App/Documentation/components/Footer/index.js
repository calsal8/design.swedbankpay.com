import React from "react";

import { ComponentPreview, DocContainer, Property } from "@docutils";
import FooterComponent from "@components/Footer";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            Our footer component comes with the same brand color as our topbar.
            The <Property value="page-footer-rights" /> class ensures that the wrapped text is centered on mobile.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <FooterComponent />
        </ComponentPreview>
    </>
);

const Footer = () => (
    <DocContainer docToc>
        <p className="lead">
            The Swedbank Pay footer.
        </p>
        <Overview />
    </DocContainer>
);

export default Footer;

/* For testing */
export { Overview };