import React from 'react';
import './ScheduleTab.styles.css'

const tabData = [
    [
      {
        name: '16 Nov',
        content: `16 Nov, Thursday Schedule will be published soon`,
      },
      {
        name: '17 Nov',
        content: `17 Nov, Friday schedule will be published soon`,
      },
      {
        name: '18 Nov',
        content: `18 Nov, Saturday will be published soon`,
      },
    ]
  ];

export const ScheduleTab = () => {
    return(
        <div class="App">
        <TabContainer defaultTab={0} tabData={tabData[0]}/>
      </div>
    )
}

class TabContainer extends React.Component {
    constructor(props) {
      super(props);
  
      // Set initial state
      this.state = {
        currentTab: this.props.defaultTab,
      };
      
      // Dummy data
      this._tabData = this.props.tabData;
    }
  
    _setCurrentTab(currentTab) {
      // Don't re-render if current tab is clicked again
      if (this.state.currentTab === currentTab) {
        return;
      }
      this.setState({ currentTab });
    }
  
    _renderTabs() {
      // Map data to Tab component. 
      // Pass index down so we can send it up to this.state later.
      return (
        <ul className="Tabs">
          {
            this._tabData.map((tab, index) => {
              return (
                <Tab
                  index={index}
                  text={tab.name}
                  isSelected={this.state.currentTab === index}
                  setCurrentTab={this._setCurrentTab.bind(this)}
                />
              )
            })
          }
        </ul>
      );
    }
  
    _renderTabPanel() {
      // Map data to TabPanel component
      return this._tabData.map((tab, index) => {
        if (this.state.currentTab === index) {
          return (
            <TabPanel 
              content={tab.content} />
          );
        }
      });
    }
  
    render() {
      const Tabs = this._renderTabs();
      const TabPanel = this._renderTabPanel();
      return (
        <div className="TabContainer">
          {Tabs}
          {TabPanel}
        </div>
      );
    }
  }

  class Tab extends React.Component {
    _handleClick(e) {
      const { setCurrentTab, index } = this.props;
      setCurrentTab(index);
    }
  
    render() {
      const { text, isSelected } = this.props;
      return (
        <li 
          className={`Tab${isSelected ? ' is-selected' : ''}`} 
          onClick={this._handleClick.bind(this)}>
          {text}
        </li>
      );
    }
  }

  const TabPanel = ({ content }) => 
  <div className="TabPanel">
    <p>{content}</p>
  </div>;