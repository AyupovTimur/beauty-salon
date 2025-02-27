import { LazyLoadImage } from "react-lazy-load-image-component";
import errorGif from "../../images/error/error.gif";

const Error = () => {
  return (
    <LazyLoadImage
      src={errorGif}
      alt="error"
      style={{
        display: "block",
        width: "30rem",
        height: "30rem",
        objectFit: "contain",
        margin: "0 auto",
      }}
    />
  );
};

export default Error;
