import React from 'react';
import Sidebar from '../components/Sidebar';
import ContentPane from '../components/ContentPane';
export default function Home({ lists }) {
  return (
    <div className="page home">
      <div className="header">
        <h1>Welcome, Manjunath</h1>
      </div>
      <div className="content_pane">
        <Sidebar />
        <ContentPane lists={lists} />
      </div>
    </div>
  );
}
