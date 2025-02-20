import beautyMaster from "../../images/beautyMasters/master.jpg";
import "./beautyMasters.scss";

const BeautyMasters = () => {
  return (
    <div className="beautyMasters">
      <h2 className="beautyMasters__title">Обо мне</h2>
      <div className="beautyMasters__cardGroup">
        <div className="beautyMaster-card">
          <img src={beautyMaster} alt="" className="beautyMaster-card__image" />
          <h3 className="beautyMaster-card__name">Наталья</h3>
          <p className="beautyMaster-card__profession">Косметолог</p>
          <p className="beautyMaster-card__description">Все виды услуг</p>
        </div>
        <div className="beautyMasters__information">
          <div className="beautyMasters__information-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            labore rem corporis adipisci fuga minima eius vel pariatur, amet
            provident impedit, reiciendis in, omnis voluptas maiores eos.
            Deleniti, quae modi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptate labore rem corporis adipisci fuga minima
            eius vel pariatur, amet provident impedit, reiciendis in, omnis
            voluptas maiores eos. Deleniti, quae modi! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptate labore rem corporis
            adipisci fuga minima eius vel pariatur, amet provident impedit,
            reiciendis in, omnis voluptas maiores eos. Deleniti, quae modi!
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyMasters;
