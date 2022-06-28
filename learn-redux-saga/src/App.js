import * as React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div>
        <h1>hey🤪</h1>
        <header className="App-header">
          <img src={dog} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>
        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}
        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}
        {error && (
          <p style={{ color: "red" }}>Uh oh - something went wrong👹</p>
        )}
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);
