import "./beautyservices.scss";
import quoteIcon from "../../images/beautyService/quoteIcon.svg";
import cardImg from "../../images/beautyService/cosmetology.svg";
import brand from "../../images/beautyService/brends/brand.svg";
import brand2 from "../../images/beautyService/brends/brand2.svg";
import brand3 from "../../images/beautyService/brends/brand3.svg";
import brand4 from "../../images/beautyService/brends/brand4.svg";

const BeautyServices = () => {
  return (
    <div className="services">
      <img className="services__icon" src={quoteIcon} alt="quoteIcon" />
      <div className="services__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
        vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
        risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
        tristique. Viverra augue lorem ut quisque quam tortor, malesuada
        iaculis.
        <br />
        Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
        viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
        imperdiet sapien fringilla vestibulum sit fames.
      </div>
      <div className="services__cards">
        <div className="services__cards_item">
          <div className="services__cards_item-border">
            <img src={cardImg} alt="cosmetology-icon" />
          </div>
          <div className="services__cards-text">Косметология</div>
        </div>
        <div className="services__cards_item">
          <div className="services__cards_item-border">
            <img src={cardImg} alt="cosmetology-icon" />
          </div>
          <div className="services__cards-text">Косметология</div>
        </div>
        <div className="services__cards_item">
          <div className="services__cards_item-border">
            <img src={cardImg} alt="cosmetology-icon" />
          </div>
          <div className="services__cards-text">Косметология</div>
        </div>
        <div className="services__cards_item">
          <div className="services__cards_item-border">
            <img src={cardImg} alt="cosmetology-icon" />
          </div>
          <div className="services__cards-text">Косметология</div>
        </div>
        <div className="services__cards_item">
          <div className="services__cards_item-border">
            <img src={cardImg} alt="cosmetology-icon" />
          </div>
          <div className="services__cards-text">Косметология</div>
        </div>
      </div>
      <div className="services__brends">
        <div className="services__brends-group">
          <img src={brand} alt="Kevin Murphy" />
          <img src={brand2} alt="Oribe" />
          <img src={brand3} alt="Alterna" />
          <img src={brand4} alt="Aldo Coppola" />
        </div>
      </div>
    </div>
  );
};

export default BeautyServices;
