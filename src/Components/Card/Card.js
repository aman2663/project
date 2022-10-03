import React,{useContext} from "react";
import star from "../../Star 5.svg";
import { CartContext } from "../../CartContext";
import './Card.css'
const Card = ({ value }) => {
  const { newPrice, oldPrice, productImage, productName } = value;
  const {cart,addToCart,removeFromCart,wish,addToWishlist,removeFromWishlist}= useContext(CartContext)
  return (
    <div className="product-main">
      <img src={productImage} alt="product-img" style={{height:'307px',backgroundSize:'cover'}}/>
      <div className="pdname">
        <p>{productName}</p>
        {wish.includes(value)?<span onClick={()=>removeFromWishlist(value)}>❤️</span>:<svg onClick={()=>addToWishlist(value)}
        
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z"
            fill="#23A6F0"
          />
        </svg>}
      </div>
      <div className="price">
        <div>
          <img src={star} alt="star-icon" />
          <img src={star} alt="star-icon" />
          <img src={star} alt="star-icon" />
          <img src={star} alt="star-icon" />
          <img src={star} alt="star-icon" />
        </div>
        <div className="pricing">
          <del>{oldPrice}/-</del>
          <h3>{newPrice}/-</h3>
        </div>
      </div>
      {cart.includes(value)?<button style={{backgroundColor:'red'}} onClick={()=>removeFromCart(value)}>Remove From Cart</button>:<button  onClick={()=>addToCart(value)}>Add to Cart</button>}
    </div>
  );
};

export default Card;
