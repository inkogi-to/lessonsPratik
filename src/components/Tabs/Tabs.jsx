import React, { PureComponent } from 'react';

class Tabs extends PureComponent {
  state = {
    activeTabsIdx: 0,
  };
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.activeTabsIdx!== this.state.activeTabsIdx;
//   }
  setActiveTab = idx => {
    this.setState({ activeTabsIdx: idx });
  };
  render() {
    const { activeTabsIdx } = this.state;
    const { items } = this.props;
    const activeTabs = items[activeTabsIdx];
    return (
      <>
        <div>
          {items.map((item, idx) => (
           
            <button
              type="button"
              key={idx}
              onClick={() => this.setActiveTab(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTabs.label}</h2>
          <p>{activeTabs.content}</p>
        </div>
      </>
    );
  }
}

export default Tabs;
