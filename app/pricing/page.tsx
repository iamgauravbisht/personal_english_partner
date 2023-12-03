declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <stripe-pricing-table
      pricing-table-id="prctbl_1OJ4SUSF25SRakbSKqJYOdNg"
      publishable-key="pk_test_51Mq10iSF25SRakbSwR5cq72JJOqWm5p7JtYePa7NOe4WPe7r9t1sMk2Np47n12C3d1PIxBiZodgRCk3ICNtKr37b00OJjnUa23"
    ></stripe-pricing-table>
  );
}

export default PricingPage;
