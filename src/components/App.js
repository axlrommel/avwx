import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ReportContainer } from "../containers/ReportContainer";
import { KickoffReportContainer } from "../containers/KickoffReportContainer";
import { KickoffStationInfoContainer } from "../containers/KickoffStationInfoContainer";
import { StationInfoContainer } from "../containers/StationInfoContainer";
import "react-tabs/style/react-tabs.css";

const App = () => (
  <Tabs>
    <TabList>
      <Tab>Airport Infomation</Tab>
      <Tab>Airport Reports</Tab>
    </TabList>
    <TabPanel>
      <KickoffStationInfoContainer />
      <StationInfoContainer />
    </TabPanel>
    <TabPanel>
      <KickoffReportContainer />
      <ReportContainer />
    </TabPanel>
  </Tabs>
);

export default App;
