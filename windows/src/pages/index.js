import React from 'react';
import Panel from '../components/Panel';

import pinkMountain from '../img/pink-mountain.jpg';
import pinkBridge from '../img/pink-bridge.jpg';
import pinkTulips from '../img/pink-tulips.jpg';

const imageArr = [pinkMountain, pinkBridge, pinkTulips]

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.panelCount = this.props.data.site.siteMetadata.pages.length;
    this.incrementActivePanel = this.incrementActivePanel.bind(this);
    this.state = {
      expandActivePanel: false,
      activePanel: 0,
    }
  }

  incrementActivePanel() {
    let pauseDuration = 0;
    if (this.state.expandActivePanel) {
      this.setState({ expandActivePanel: false });
      pauseDuration = 1100;
    }
    setTimeout(() => {
      this.setState({
        activePanel: this.state.activePanel + 1 === this.panelCount ? 0 : this.state.activePanel + 1
      });
    }, pauseDuration);
  }

  renderPanels() {
    return this.props.data.site.siteMetadata.pages.map((page, index) => (
      <Panel
        key={index}
        title={page}
        className={this.state.expandActivePanel ? 'expand' : ''}
        activePanel={this.state.activePanel}
        panelCount={this.panelCount}
        index={index}
      >
        <img src={imageArr[index]} className="bg-image" />
        <button
          className="expand-panel-button"
          onClick={() => this.setState({ expandActivePanel: !this.state.expandActivePanel })}
        >
          <i className="fas fa-plus"></i>
        </button>
      </Panel>
    ));
  }

  render() {
    return (
      <div className="main-container">
        <div className="description-container">
          <h2>Descripton</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Malesuada proin libero nunc consequat interdum varius sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci porta non pulvinar neque laoreet suspendisse. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Gravida in fermentum et sollicitudin. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Libero id faucibus nisl tincidunt eget nullam non nisi. Mauris sit amet massa vitae tortor condimentum. Pellentesque diam volutpat commodo sed egestas egestas. Non quam lacus suspendisse faucibus interdum posuere lorem. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
          </p>
        </div>
        <div className="panels-container">
          { this.renderPanels() }
          <button className="next-panel-btn" onClick={this.incrementActivePanel}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className={`panels-mask${this.state.expandActivePanel ? ' expand' : ''}`}>
            <div className="description-container-copy">
              <h2>Descripton</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at. Malesuada proin libero nunc consequat interdum varius sit amet. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Orci porta non pulvinar neque laoreet suspendisse. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Gravida in fermentum et sollicitudin. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Libero id faucibus nisl tincidunt eget nullam non nisi. Mauris sit amet massa vitae tortor condimentum. Pellentesque diam volutpat commodo sed egestas egestas. Non quam lacus suspendisse faucibus interdum posuere lorem. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
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
