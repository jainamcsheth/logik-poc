import React from 'react';
import { connect } from 'react-redux';
import { sampleAction } from './actions/sampleAction';
import './App.css';

function App(props) {
  const sampleAction = (event) => {
    props.sampleAction();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={sampleAction}>Test redux action</button>
        <pre>{JSON.stringify(props)}</pre>
        {/* <img src={logo} className='App-logo' alt='logo' />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  sampleAction: () => dispatch(sampleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
