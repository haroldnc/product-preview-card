import imageProduct from "../assets/image-product.jpg";
import iconCart from "../assets/icon-cart.svg";
import "./scss/ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src={imageProduct}
        alt="Image Product"
        className="product-card-image"
      />
      <div className="product-card-info">
        <p className="product-card-info-type">PERFUME</p>
        <h2 className="product-card-info-title">
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className="product-card-info-description">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="product-card-info-box-price">
          <span className="price">$149.99</span>
          <span className="original-price">$169.99</span>
        </div>
        <button className="product-card-info-btn">
          <img
            src={iconCart}
            alt="Icon Cart"
            className="product-card-info-btn-icon"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
