import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AirportContainer } from "../containers/AirportContainer";
import "react-tabs/style/react-tabs.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Tabs>
      <TabList>
        <Tab>Airport Infomation</Tab>
      </TabList>
      <TabPanel>
        <AirportContainer />
      </TabPanel>
    </Tabs>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
