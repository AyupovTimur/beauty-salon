import { Component } from "react";
import errorGif from "../../images/error/error.gif";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
    });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>Упс! Что - то пошло не так</h2>
          <img
            style={{
              display: "block",
              objectFit: "contain",
              margin: "0 auto",
            }}
            src={errorGif}
            alt="errorGif"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
