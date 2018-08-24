import React from 'react';

export default ({ children, title, index, activePanel, panelCount, className, bgImage }) => {
  const nextPanel = activePanel + 1 === panelCount ? 0 : activePanel + 1;
  const previousPanel = activePanel === 0 ? panelCount - 1 : activePanel - 1;
  const currentPosition = index === activePanel ? 'active' : index === nextPanel ? 'next' : index === previousPanel ? 'previous' : ''
  return (
    <div 
      className={`panel panel-${title.toLowerCase()} ${currentPosition} ${className}`}
      style={{ bgImage: `url(${bgImage}` }}
    >
      <div className="panel-content">
        { children }
        <h2>{ title }</h2>
      </div>
    </div>
  );
};