import React from 'react';
import '../Assets/css/Terms.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <h1>Terms and Conditions</h1>

      <p>
        By accessing or using our student database management system, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our system.
      </p>

      <h2>1. User Responsibilities</h2>
      <p>
        - You are responsible for maintaining the confidentiality of your login credentials.
        <br />
        - You must not share your login information with others.
        <br />
        - You agree to provide accurate and complete information when using the system.
      </p>

      <h2>2. Data Privacy</h2>
      <p>
        - We respect your privacy and handle your data in accordance with our privacy policy.
        <br />
        - You understand and agree to the collection and use of your data as described in our privacy policy.
      </p>

      <h2>3. Prohibited Actions</h2>
      <p>
        - You must not engage in any unlawful or harmful activities while using the system.
        <br />
        - You shall not attempt to gain unauthorized access to our system.
        <br />
        - You must not disrupt or interfere with the security or availability of the system.
      </p>

      <h2>4. Termination</h2>
      <p>
        - We reserve the right to terminate your access to the system at our discretion.
        <br />
        - You may terminate your use of the system at any time.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        - We may modify these terms and conditions at any time.
        <br />
        - Continued use of the system after changes constitutes acceptance of the modified terms.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:contact@example.com">contact@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsAndConditions;