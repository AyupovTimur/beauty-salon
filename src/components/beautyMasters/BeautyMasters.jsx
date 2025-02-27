import { LazyLoadImage } from "react-lazy-load-image-component";
import beautyMaster from "../../images/beautyMasters/master.jpg";
import "./beautyMasters.scss";

const BeautyMasters = () => {
  return (
    <section className="beautyMasters">
      <div className="beautyMasters__cardGroup">
        <div className="beautyMaster-card">
          <LazyLoadImage
            src={beautyMaster}
            alt="Natalia - cosmetologist aesthetician"
            effect="blur"
            className="beautyMaster-card__image"
          />
          <h2 className="beautyMaster-card__name">Наталья</h2>
          <h3 className="beautyMaster-card__profession">
            Косметолог - эстетист
          </h3>
          <p className="beautyMaster-card__description">
            Забочусь о вашей красоте
          </p>
        </div>
        <div className="beautyMasters__information">
          <p className="beautyMasters__information-text">
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
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeautyMasters;
