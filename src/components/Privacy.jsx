import React from "react";
import "./Pages.css"; 

function Privacy() {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>Shree Vishwanath Roadways</strong>, we value your trust and are committed to 
        protecting your personal information. This Privacy Policy explains what data we collect, 
        how we use it, how we safeguard it, and your rights regarding your information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following categories of information from clients, users, and visitors:</p>
      <ul>
        <li>Personal details such as name, phone number, email, and address.</li>
        <li>Business-related details, including consignment and billing information.</li>
        <li>Payment and transaction details related to bookings and services.</li>
        <li>Technical data such as IP address, browser type, and website usage patterns.</li>
      </ul>

      <h2>2. Purpose of Data Collection</h2>
      <p>Your information is collected and used for the following purposes:</p>
      <ul>
        <li>To provide, manage, and improve logistics and transportation services.</li>
        <li>To communicate regarding inquiries, bookings, and service updates.</li>
        <li>To process secure payments and issue invoices.</li>
        <li>For analytics, service optimization, and business performance improvements.</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your personal and transactional data. 
        However, no system is completely secure. Users are advised to handle their login credentials 
        and sensitive information responsibly.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell, rent, or trade your personal data. Information may be shared only with trusted 
        third-party partners and service providers, but strictly for purposes such as transportation, 
        payment processing, compliance with law, or legal obligations.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our website may contain links to external or third-party websites. We are not responsible 
        for their privacy practices or policies. Users are encouraged to review the policies of 
        third-party websites before sharing personal data.
      </p>

      <h2>6. Cookies & Tracking</h2>
      <p>
        We may use cookies and similar technologies to enhance website functionality and user experience. 
        Users can manage or disable cookies through their browser settings, but this may affect site functionality.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal, financial, and transactional data only for as long as necessary to fulfill 
        business, contractual, legal, and tax obligations. Once no longer required, data is securely deleted.
      </p>

      <h2>8. User Rights</h2>
      <p>
        You have the right to request access, correction, or deletion of your personal data, subject to 
        applicable laws. To exercise these rights, you may contact us using the details below.
      </p>

      <h2>9. Updates to Policy</h2>
      <p>
        This Privacy Policy may be revised periodically to reflect changes in legal requirements 
        or business practices. The updated version will always be available on this page.
      </p>

      <p>
        For questions or requests regarding our Privacy Policy, please contact us at:{" "}
        <a href="mailto:shreevishwanathroadways81@gmail.com">
          shreevishwanathroadways81@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Privacy;
