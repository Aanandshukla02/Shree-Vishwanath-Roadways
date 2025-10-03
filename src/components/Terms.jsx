import React from "react";
import "./Pages.css"; 

function Terms() {
  return (
    <div className="page-container">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to <strong>Shree Vishwanath Roadways</strong>. By accessing and using our services or website, 
        you agree to the following Terms and Conditions. These terms govern the transportation, storage, 
        and delivery of goods by us, and they outline the rights and responsibilities of consignors, 
        consignees, banks, and the Transport Operator. Please read them carefully before engaging our services.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide logistics and transportation solutions including Road, Rail, and Air freight, 
        FTL (Full Truck Load), PTL (Part Truck Load), Warehousing, and Door-to-Door delivery. 
        Services are subject to operational feasibility, availability, and applicable regulations.
      </p>

      <h2>2. Bookings & Payments</h2>
      <p>
        Bookings are confirmed only upon full or partial payment as mutually agreed. Payments may be made 
        via bank transfer, UPI, or other agreed methods. The consignor shall be primarily liable for 
        all transportation and incidental charges, payable at our Head Office in Chennai or any other agreed place. 
        Delayed payments may result in service delays or cancellations.
      </p>

      <h2>3. Bank Liability</h2>
      <p>
        Where a Bank has agreed to accept a Lorry Receipt, the consignee, endorsee, or holder shall have 
        direct rights against the Transport Operator as if the Bank were a party to the agreement. 
        The Transport Operator shall be liable to the Bank to the extent of the full declared value of goods 
        handed over for carriage, storage, or delivery.
      </p>

      <h2>4. Delivery of Goods</h2>
      <p>
        The Transport Operator undertakes to deliver goods in the same order and condition as received, 
        subject to natural deterioration caused by weather, temperature, or other natural factors. 
        Delivery shall be made only upon surrender of the duly discharged Lorry Receipt along with 
        authorization from the concerned Bank or holder.
      </p>

      <h2>5. Sub-Contracting</h2>
      <p>
        The Transport Operator may entrust goods to another carrier or lorry at its discretion. 
        However, responsibility for safety and due delivery of goods shall continue to rest with the Transport Operator, 
        regardless of such sub-contracting.
      </p>

      <h2>6. Insurance</h2>
      <p>
        Clients are strongly advised to insure their consignments. We do not assume liability for 
        uninsured or under-insured goods. Proper insurance documentation may be required before acceptance.
      </p>

      <h2>7. Perishable Goods</h2>
      <p>
        The Transport Operator reserves the right to dispose of perishable goods lying undelivered 
        after 48 hours of arrival, without prior notice to the consignor or consignee.
      </p>

      <h2>8. Prohibited & Restricted Goods</h2>
      <p>
        Hazardous, illegal, flammable, or regulated goods require prior declaration and approval. 
        Transporting prohibited items without disclosure may result in refusal of service and legal action.
      </p>

      <h2>9. Client Obligations</h2>
      <ul>
        <li>Provide accurate details regarding weight, volume, and contents of consignments.</li>
        <li>Ensure proper packaging, labeling, and documentation of goods.</li>
        <li>Comply with all local, state, and national regulations.</li>
        <li>Avoid false or incorrect declarations; the consignor is responsible for all consequences thereof.</li>
      </ul>

      <h2>10. Liability & Compensation</h2>
      <p>
        While we take utmost care in handling consignments, we shall not be liable for delays, damages, 
        or losses arising from natural calamities, strikes, accidents, governmental restrictions, 
        or circumstances beyond our control.  
        <br />
        In cases where goods are lost, destroyed, damaged, or deteriorated, the compensation payable by 
        the Transport Operator shall not exceed <strong>10% of the declared value</strong>.
      </p>

      <h2>11. Cancellations & Refunds</h2>
      <p>
        Cancellation requests must be communicated before dispatch. Refunds, if applicable, shall depend on 
        the stage of service execution and are subject to applicable deductions.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        The Transport Operator shall not be liable for indirect, incidental, or consequential damages, 
        including but not limited to loss of profits, revenue, or business opportunities.
      </p>

      <h2>13. Dispute Resolution & Jurisdiction</h2>
      <p>
        Any disputes arising from our services shall first be attempted to be resolved amicably. 
        If unresolved, such disputes shall fall under the jurisdiction of the competent courts in Vapi, Gujarat.
      </p>

      <h2>14. Amendments</h2>
      <p>
        We reserve the right to update or modify these Terms & Conditions without prior notice. 
        Clients are advised to review the terms periodically to stay informed.
      </p>

      <p>
        For questions regarding our Terms & Conditions, please contact us at:{" "}
        <a href="mailto:shreevishwanathroadways81@gmail.com">
          shreevishwanathroadways81@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Terms;
