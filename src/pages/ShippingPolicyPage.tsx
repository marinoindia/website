import LegalPageLayout from '@/components/LegalPageLayout';
import { business } from '@/data/business';

const ShippingPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Shipping & Delivery Policy"
      description="Delivery timelines, charges, coverage, and pick-up options for orders from Marino Corporation Of India."
      canonicalPath="/shipping-policy"
      lastUpdated="25 June 2026"
    >
      <p>
        {business.legalName} dispatches industrial lifting and marine equipment across India from our base in
        Kolkata. This policy explains our delivery coverage, timelines, and charges.
      </p>

      <h2>1. Delivery Coverage</h2>
      <ul>
        <li>We deliver <strong>pan-India</strong> through reputed courier and transport/logistics partners.</li>
        <li>Heavy or bulk consignments are shipped by road transport; lighter items by courier.</li>
        <li>For remote locations, delivery to the nearest transport hub may apply, with final-mile pickup by the customer.</li>
      </ul>

      <h2>2. Minimum Order &amp; Pick-up</h2>
      <ul>
        <li>A <strong>minimum order value of ₹5,000</strong> applies for doorstep delivery.</li>
        <li>Orders below ₹5,000 are available for <strong>pick-up at our store</strong> in Kolkata. We will contact you once the order is ready for collection.</li>
      </ul>

      <h2>3. Delivery Timelines</h2>
      <ul>
        <li><strong>Standard delivery:</strong> typically within <strong>7 business days</strong> of payment confirmation, depending on destination and item availability.</li>
        <li><strong>Express delivery:</strong> within <strong>3 business days</strong> where available, for an additional charge.</li>
        <li>Made-to-order / custom items may require additional production time, which will be communicated at the time of order.</li>
        <li>Timelines are estimates and may be affected by transporter delays, weather, strikes, or other factors beyond our control.</li>
      </ul>

      <h2>4. Shipping Charges</h2>
      <ul>
        <li>Shipping charges depend on the weight, dimensions, destination, and chosen delivery speed.</li>
        <li>Applicable charges (including any express-delivery fee) are confirmed at the time of order.</li>
        <li>GST is applied as per prevailing rates.</li>
      </ul>

      <h2>5. Order Tracking &amp; Receipt</h2>
      <ul>
        <li>Once dispatched, we will share the courier/transport details or docket number via WhatsApp or phone.</li>
        <li>Please <strong>inspect the consignment at the time of delivery</strong>. If the packaging is damaged or the seal is broken, note it with the delivery agent and inform us within 48 hours (see our <a href="/refund-policy/">Replacement, Refund &amp; Warranty Policy</a>).</li>
      </ul>

      <h2>6. Failed or Delayed Delivery</h2>
      <ul>
        <li>If delivery fails due to an incorrect address or unavailability of the recipient, re-delivery charges may apply.</li>
        <li>We are not liable for delays caused by transporters or events beyond our reasonable control, but we will assist in resolving any issue.</li>
      </ul>

      <h2>7. Contact</h2>
      <p>
        For delivery-related questions, contact us at{' '}
        <a href={`tel:${business.phones[0].number}`}>{business.phones[0].number}</a> or{' '}
        <a href={`mailto:${business.emails[0]}`}>{business.emails[0]}</a>.
      </p>
    </LegalPageLayout>
  );
};

export default ShippingPolicyPage;
