import * as React from 'react';
import BasicCard from './cards';

function proCard(props) {
  
  return (
    
    <>
      <BasicCard 
        cardName="free"
        plan="$0/Month"
        noOfUser="SingleUser"
        storage="5 GB Storage"
        publicProjects="Unlimited Public Projects"
        access="Community Access"
        privateProjects="Unlimited Private Projects"
        phoneSupport="Dedicated Phone Support"
        domain="Free Subdomain"
        reports="Monthly Status Reports"
      />
    </>

  );
}
export default proCard;