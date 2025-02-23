import errorGif from "../../images/error/error.gif";

const Error = () => {
  return (
    <img
      src={errorGif}
      alt="error"
      style={{
        display: "block",
        width: "50rem",
        height: "50rem",
        objectFit: "contain",
        margin: "0 auto",
      }}
    />
  );
};

export default Error;
