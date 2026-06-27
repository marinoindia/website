import LegalPageLayout from '@/components/LegalPageLayout';
import { business, fullAddress } from '@/data/business';

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="How Marino Corporation Of India collects, uses, and protects your personal information."
      canonicalPath="/privacy-policy"
      lastUpdated="25 June 2026"
    >
      <p>
        This Privacy Policy explains how {business.legalName} (“we”, “us”, “our”) collects, uses, discloses,
        and safeguards your information when you visit {business.website} or place an order with us. We are
        committed to protecting your privacy in accordance with the Information Technology Act, 2000, the
        Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or
        Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you browse our website or place an order, we may collect:</p>
      <ul>
        <li><strong>Contact details</strong> — name, phone number, email address.</li>
        <li><strong>Order &amp; delivery details</strong> — shipping address, city, state, pincode, landmark.</li>
        <li><strong>Transaction details</strong> — items ordered, amounts, and payment status (payment card/UPI data is handled solely by our payment gateway and is never stored by us).</li>
        <li><strong>Technical data</strong> — anonymised analytics such as pages visited, browser type, and approximate region.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To process, fulfil, and deliver your orders.</li>
        <li>To contact you about your order, quotation, or enquiry (including via WhatsApp, phone, or email).</li>
        <li>To issue GST-compliant tax invoices.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2>3. Payment Information</h2>
      <p>
        Online payments are processed through a PCI-DSS compliant, RBI-authorised payment gateway. We do
        <strong> not </strong>collect, see, or store your full card number, CVV, UPI PIN, or net-banking
        credentials. That information is transmitted directly to and secured by the payment gateway.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>We do not sell or rent your personal information. We may share it only with:</p>
      <ul>
        <li>Payment gateways, to process your transaction.</li>
        <li>Courier and logistics partners, to deliver your order.</li>
        <li>Government authorities, where required by law.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable security practices to protect your information from unauthorised access,
        alteration, or disclosure. Our website is served over HTTPS. However, no method of transmission over
        the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data, and you may withdraw
        consent, by contacting us using the details below. We will respond within a reasonable time.
      </p>

      <h2>7. Cookies &amp; Analytics</h2>
      <p>
        We use privacy-friendly analytics to understand site usage. You can disable cookies in your browser
        settings; some site features may not function as intended if you do.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version will always be available on
        this page with a revised “Last updated” date.
      </p>

      <h2>9. Grievance Officer &amp; Contact</h2>
      <p>
        In accordance with the Information Technology Act, 2000 and rules made thereunder, the name and
        contact details of the Grievance Officer are provided below:
      </p>
      <ul>
        <li><strong>Name:</strong> {business.grievanceOfficer.name}</li>
        <li><strong>Entity:</strong> {business.legalName} ({business.entityType})</li>
        <li><strong>Address:</strong> {fullAddress}</li>
        <li><strong>Email:</strong> <a href={`mailto:${business.grievanceOfficer.email}`}>{business.grievanceOfficer.email}</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${business.grievanceOfficer.phone}`}>{business.grievanceOfficer.phone}</a></li>
        <li><strong>GSTIN:</strong> {business.gstin}</li>
      </ul>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
