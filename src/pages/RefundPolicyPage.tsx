import LegalPageLayout from '@/components/LegalPageLayout';
import { business } from '@/data/business';

const RefundPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Replacement, Refund & Warranty Policy"
      description="Replacement-only policy, cancellations, refunds, and product warranty terms for orders placed with Marino Corporation Of India."
      canonicalPath="/refund-policy"
      lastUpdated="27 June 2026"
    >
      <p>
        This policy explains how cancellations, replacements, refunds, and warranty claims are handled for
        orders placed with {business.legalName}. Because industrial lifting and rigging products are
        safety-critical items, <strong>we follow a replacement-only policy — we do not accept returns or
        exchanges except to replace items that are defective, damaged in transit, or incorrectly supplied.</strong>
      </p>

      <h2>1. Order Cancellation</h2>
      <ul>
        <li>You may cancel an order free of charge <strong>before it has been dispatched</strong> by contacting us on WhatsApp or phone.</li>
        <li>Once an order has been dispatched, it cannot be cancelled but may be eligible for return as per the conditions below.</li>
        <li>Custom-made or made-to-order items (e.g. custom-length slings or special assemblies) <strong>cannot be cancelled</strong> once production has begun.</li>
      </ul>

      <h2>2. No Returns — Replacement Only for Defective Items</h2>
      <p>
        We do <strong>not accept returns or exchanges</strong> for change of mind, incorrect selection by the
        customer, or products no longer required. Please review product specifications carefully — or confirm
        with us on WhatsApp — before placing your order.
      </p>
      <p>We provide a <strong>free replacement</strong> only where:</p>
      <ul>
        <li>The product delivered is <strong>defective</strong> due to a manufacturing fault.</li>
        <li>The product was <strong>damaged in transit</strong>.</li>
        <li>The <strong>wrong item</strong> (size, specification, or product) was delivered, or the quantity does not match your order.</li>
      </ul>
      <h3>Conditions for a Replacement</h3>
      <ul>
        <li>Report the issue within <strong>48 hours of delivery</strong>, with photographs/video and your order/invoice details, via WhatsApp or email.</li>
        <li>The item must be <strong>unused, uninstalled, and in its original condition and packaging</strong>, with all tags, certificates, and accessories.</li>
        <li>We may require the item to be sent back for inspection before approving the replacement.</li>
        <li>Once verified, we dispatch a replacement at no extra cost. If an identical replacement is unavailable, see Section 3.</li>
      </ul>
      <h3>Not Eligible for Replacement</h3>
      <ul>
        <li>Change of mind, wrong selection by the customer, or product no longer required.</li>
        <li>Custom-made / made-to-order products, unless defective or damaged in transit.</li>
        <li>Products that have been used, installed, cut, modified, or subjected to load.</li>
        <li>Claims reported after 48 hours from delivery, or without prior approval and proof.</li>
      </ul>

      <h2>3. Refunds</h2>
      <p>
        As we operate a <strong>replacement-only policy</strong>, refunds are limited to the following
        situations:
      </p>
      <ul>
        <li>An order is <strong>cancelled before dispatch</strong> — full refund of the amount paid.</li>
        <li>An eligible item is defective, damaged, or incorrect and we are <strong>unable to provide a replacement</strong>.</li>
      </ul>
      <ul>
        <li>Approved refunds are initiated to your <strong>original payment method</strong> within <strong>7–10 business days</strong>; the time to reflect depends on your bank or payment provider.</li>
        <li>Any applicable payment-gateway charges will be communicated to you in advance.</li>
        <li>We do not offer cash refunds.</li>
      </ul>

      <h2>4. Product Warranty</h2>
      <ul>
        <li>Products are warranted to be <strong>free from manufacturing defects</strong> and to conform to the specifications stated at the time of sale.</li>
        <li>Where products carry a manufacturer's test certificate (e.g. wire rope from Usha Martin), the applicable manufacturer warranty and certificate terms apply.</li>
        <li>The warranty covers manufacturing or material defects only. It <strong>does not</strong> cover:
          <ul>
            <li>Normal wear and tear.</li>
            <li>Damage from overloading, exceeding the rated Working Load Limit (WLL), shock loading, or misuse.</li>
            <li>Improper storage, installation, handling, or maintenance.</li>
            <li>Corrosion or damage due to harsh environments beyond the product's rated use.</li>
            <li>Any modification, cutting, or repair carried out by the customer or third parties.</li>
          </ul>
        </li>
        <li>All lifting equipment must be inspected before use and used only by trained personnel within rated limits and applicable safety standards (e.g. IS 2266 / relevant IS codes).</li>
      </ul>

      <h2>5. How to Raise a Claim</h2>
      <p>To request a cancellation, return, refund, or warranty claim, contact us with your order/invoice number:</p>
      <ul>
        <li><strong>WhatsApp / Phone:</strong> <a href={`tel:${business.phones[0].number}`}>{business.phones[0].number}</a></li>
        <li><strong>Email:</strong> <a href={`mailto:${business.emails[0]}`}>{business.emails[0]}</a></li>
      </ul>
      <p>
        We aim to acknowledge all claims within <strong>2 business days</strong> and resolve them as quickly as
        possible.
      </p>
    </LegalPageLayout>
  );
};

export default RefundPolicyPage;
