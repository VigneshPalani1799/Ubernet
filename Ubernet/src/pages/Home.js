import React from 'react'
import '../styles/style.css';
import Header from '../components/Header';
import PricePack from '../components/PricePack';
import { data } from '../data/pack-details';
import Banner from '../components/Banner';

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

export default function Home() {

  return (
      <div>
        <Header/>
        <Banner/>
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled className="tabList">
            <TabUnstyled className="tabStyle">Annual Plan</TabUnstyled>
            <TabUnstyled className="tabStyle">Half-yearly Plan</TabUnstyled>
            <TabUnstyled className="tabStyle">Monthly Plan</TabUnstyled>
            <TabUnstyled className="tabStyle">OTT Plan</TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <PricePack planType="Annual Plan" data={data["pack-details"]['annual-plan']}/>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <PricePack planType="Half-yearly Plan" data={data["pack-details"]["half-yearly-plan"]}/>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={2}>
            <PricePack planType="Monthly Plan" data={data["pack-details"]["monthly-plan"]}/>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={3}>
            <PricePack planType="OTT Plan" data={data["pack-details"]["ott-plan"]}/>
          </TabPanelUnstyled>
        </TabsUnstyled>  
      </div>
  );
}
