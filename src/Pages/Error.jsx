import React from "react";
import error from "../assets/img/error.jpg";
import styled from "styled-components";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oh no... Something went wrong... </h1>
          <ErrorImage src={error} />
          <div>
            <a href="/">Bring me back home</a>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
const ErrorImage = styled("img")`
  height: 200px;
`;
export default ErrorBoundary;
