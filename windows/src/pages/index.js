import React from 'react';
import Panel from '../components/Panel';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import IScroll from '../vendor/iscroll.min.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.maskScroll = null;
    this.panelCount = this.props.data.site.siteMetadata.pages.length;
    this.incrementActivePanel = this.incrementActivePanel.bind(this);
    this.toggleExpandPanel = this.toggleExpandPanel.bind(this);
    this.maskTransitionEnd = this.maskTransitionEnd.bind(this);
    this.state = {
      expandActivePanel: false,
      collapseActivePanel: false,
      nextPanelRequested: false,
      activePanel: 0,
    }
  }

  toggleExpandPanel() {
    this.setState({
      collapseActivePanel: this.state.expandActivePanel,
      expandActivePanel: !this.state.expandActivePanel
    });
  }

  componentDidMount() {
    this.createMaskScroll();
  }

  createMaskScroll() {
    new IScroll('.panels-mask .description-container-copy', { mouseWheel: true });
  }

  incrementActivePanel() {
    if (this.state.expandActivePanel) {
      this.setState({ 
        expandActivePanel: false,
        collapseActivePanel: true,
        nextPanelRequested: true
      });
    } else {
      this.setState({
        activePanel: this.state.activePanel + 1 === this.panelCount ? 0 : this.state.activePanel + 1,
      });
      setTimeout(() => this.createMaskScroll(), 10);
    }
  }

  renderSectionContent(layer) {
    const { siteMetadata } = this.props.data.site;
    switch(siteMetadata.pages[this.state.activePanel]) {
      case 'Work':
        return <Work layer={layer} />
      case 'About':
        return <About layer={layer} />
      case 'Contact':
        return <Contact layer={layer} />
    }
  }

  renderPanels() {
    return this.props.data.site.siteMetadata.pages.map((page, index) => (
      <Panel
        key={index}
        title={page}
        className={this.state.expandActivePanel ? 'expand' : this.state.collapseActivePanel ? 'collapse' : ''}
        activePanel={this.state.activePanel}
        panelCount={this.panelCount}
        index={index}
      >
        <button
          className="expand-panel-button"
          onClick={this.toggleExpandPanel}
        >
          <i className="fas fa-plus"></i>
        </button>
      </Panel>
    ));
  }

  maskTransitionEnd(e) {
    if (!this.state.expandActivePanel) {
      this.setState({ collapseActivePanel: false });
      if (this.state.nextPanelRequested) {
        this.setState({ nextPanelRequested: false });
        this.incrementActivePanel();
      }
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className={`description-container ${this.state.expandActivePanel ? 'expand' : ''}`}>
          { this.renderSectionContent('background') }
        </div>
        <div className="panels-container">
          { this.renderPanels() }
          <button className="next-panel-btn" onClick={this.incrementActivePanel}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div
            onAnimationEnd={this.maskTransitionEnd}
            className={`panels-mask ${this.state.expandActivePanel ? 'expand' : this.state.collapseActivePanel ? 'collapse' : ''}`}
          >
            <div className="description-container-copy">
              { this.renderSectionContent('mask')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query SitePagesQuery {
    site {
      siteMetadata {
        pages
      }
    }
  }
`
