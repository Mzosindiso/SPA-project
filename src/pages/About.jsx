import React from "react";
import "../index.css";

function About() {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to our company! We are dedicated to providing excellent services and products to our customers.
                We have a passionate team of experts committed to achieving our goals and exceeding customer expectations.</p>
            <h3>GitHub and Our Users</h3>
            <p className="sentences">We leverage GitHub to collaborate efficiently and deliver the best possible experience for our users. Here's how GitHub helps us serve you better:
                Version Control: We use Git to track changes in our codebase, ensuring stability and allowing us to roll back if needed.
                Open Source Contributions: We actively participate in the open-source community, both by contributing to existing projects and sharing our own.
                Issue Tracking: GitHub's issue tracking system helps us manage bug reports and feature requests from our users effectively.
                Continuous Integration: We use GitHub Actions to automate our testing and deployment processes, ensuring high-quality releases.
                Our users are at the heart of everything we do. We value your feedback and continuously strive to improve our products based on your needs and suggestions. Join our GitHub community to:</p>         
        </div>
    );
}

export default About;