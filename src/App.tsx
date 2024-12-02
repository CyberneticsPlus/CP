import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import { ErrorBoundary } from './utils/errorBoundary';
import { RouteConfig } from './components/routing/RouteConfig';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <RouteConfig />
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;