import LegalPageLayout from '@/components/LegalPageLayout';
import { business, fullAddress } from '@/data/business';

const TermsPage = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="The terms and conditions governing the use of the Marino Corporation Of India website and the purchase of products."
      canonicalPath="/terms"
      lastUpdated="25 June 2026"
    >
      <p>
        These Terms &amp; Conditions (“Terms”) govern your use of {business.website} and the purchase of
        products from {business.legalName} (“we”, “us”, “our”). By accessing this website or placing an order,
        you agree to these Terms.
      </p>

      <h2>1. Business Information</h2>
      <ul>
        <li><strong>Legal Entity:</strong> {business.legalName} ({business.entityType})</li>
        <li><strong>Registered Address:</strong> {fullAddress}</li>
        <li><strong>GSTIN:</strong> {business.gstin}</li>
        <li><strong>Email:</strong> <a href={`mailto:${business.emails[0]}`}>{business.emails[0]}</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${business.phones[0].number}`}>{business.phones[0].number}</a></li>
      </ul>

      <h2>2. Products &amp; Pricing</h2>
      <ul>
        <li>All products are industrial lifting and marine hardware sold for professional / industrial use.</li>
        <li>Prices are listed in Indian Rupees (₹) and are exclusive of GST unless stated otherwise. Applicable GST is added as per prevailing rates.</li>
        <li>Listed rates are indicative and may change without notice. We reserve the right to confirm the final price before accepting an order, particularly for bulk or custom orders.</li>
        <li>Product images are representative; actual products may vary slightly in appearance.</li>
      </ul>

      <h2>3. Orders &amp; Acceptance</h2>
      <ul>
        <li>An order placed through the website or WhatsApp constitutes an offer to purchase. We reserve the right to accept or decline any order.</li>
        <li>A contract is formed only when we confirm acceptance of your order.</li>
        <li>We may cancel an order in case of pricing errors, stock unavailability, or suspected fraud, with a full refund of any amount paid.</li>
      </ul>

      <h2>4. Payment</h2>
      <ul>
        <li>Online payments are processed through a secure, RBI-authorised payment gateway (UPI, cards, net-banking, and wallets).</li>
        <li>Orders are processed only after successful payment confirmation, unless otherwise agreed.</li>
        <li>GST tax invoices are issued for all sales.</li>
      </ul>

      <h2>5. Delivery</h2>
      <p>
        Delivery timelines and charges are described in our <a href="/shipping-policy/">Shipping &amp; Delivery Policy</a>.
        A minimum order value may apply for delivery; smaller orders may be available for pick-up at our store.
      </p>

      <h2>6. Replacement, Refunds &amp; Warranty</h2>
      <p>
        We follow a <strong>replacement-only policy</strong> (no returns except for defective, damaged, or
        incorrectly supplied items). Cancellations, replacements, refunds, and product warranty are governed
        by our {' '}<a href="/refund-policy/">Replacement, Refund &amp; Warranty Policy</a>.
      </p>

      <h2>7. Use of Website</h2>
      <ul>
        <li>You agree not to misuse the website, attempt unauthorised access, or infringe our intellectual property.</li>
        <li>All content, logos, images, and text on this website are the property of {business.legalName} and are protected by copyright law.</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        Our products must be used by trained personnel within their rated working load limits and in accordance
        with applicable safety standards. We are not liable for any loss, injury, or damage arising from misuse,
        overloading, improper installation, or use beyond rated capacity. To the maximum extent permitted by law,
        our total liability is limited to the value of the product purchased.
      </p>

      <h2>9. Governing Law &amp; Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
        jurisdiction of the courts at Kolkata, West Bengal.
      </p>

      <h2>10. Contact</h2>
      <p>
        For any questions about these Terms, contact us at{' '}
        <a href={`mailto:${business.emails[0]}`}>{business.emails[0]}</a> or{' '}
        <a href={`tel:${business.phones[0].number}`}>{business.phones[0].number}</a>.
      </p>
    </LegalPageLayout>
  );
};

export default TermsPage;
