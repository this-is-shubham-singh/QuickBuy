import exchangeIcon from "../assets/frontend_assets/exchange_icon.png"
import support_img from "../assets/frontend_assets/support_img.png"
import quality_icon from "../assets/frontend_assets/quality_icon.png"

const OurPolicy = () => {
  return (
    <section className="policy-section">
      <div className="policy-card">
        <img
          src={exchangeIcon}
          alt="Easy Exchange"
          className="policy-image"
        />
        <h3 className="policy-title">Easy Exchange Policy</h3>
        <p className="policy-description">
          Hassle-free exchange within 3 days of delivery. Just contact our team and we’ll take care of the rest.
        </p>
      </div>

      <div className="policy-card">
        <img
          src={quality_icon}
          alt="7 Day Return"
          className="policy-image"
        />
        <h3 className="policy-title">7 Day Return Policy</h3>
        <p className="policy-description">
          Not satisfied? Return within 7 days for a full refund. Simple and straightforward process.
        </p>
      </div>

      <div className="policy-card">
        <img
          src={support_img}
          alt="Customer Support"
          className="policy-image"
        />
        <h3 className="policy-title">Best Customer Support</h3>
        <p className="policy-description">
          Our support team is available 24/7 to help you with any queries or issues you may face.
        </p>
      </div>
    </section>
  );
};

export default OurPolicy;
