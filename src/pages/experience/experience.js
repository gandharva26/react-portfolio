
import React from 'react'

import xor from '../../assets/products/xoriant.webp'
import ucr from '../../assets/products/ucr.png'
import ts from '../../assets/products/techsk.jpeg'
import postman from '../../assets/products/postman.png'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { FaBlackTie } from 'react-icons/fa'
import { experienceList } from './experience.util'
export const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline class = "vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
{experienceList.map(experienceItem => {
return(
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  date={experienceItem.tenure}
  iconStyle={{ background: "#e9d35b", color: "#fff" }}
  icon={<img src={experienceItem.logo} height=" 100%"   //change this
  width="100%" style={{borderRadius:"50%"}}
  />}>

<h3 className="vertical-timeline-element-title">
         {experienceItem.role}
        </h3>
        <h4>
         {experienceItem.companyName}
        </h4>
       {experienceItem.description.map((description => {return (<p>{description}</p>)}))}
  </VerticalTimelineElement>
)
}
    
  )}
    
         <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2022- Mar 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<img src={ucr} height=" 100%"
        width="100%" style={{borderRadius:"50%"}}
        />}
      >
        <h3 className="vertical-timeline-element-title">
          Research Assistant
        </h3>
        <h4>
          University of California
        </h4>
        <p>Deployed Node.Js package and VSCode Extension for JSONSki parser which is 3x faster than current Javascript parsing tools.
</p><p>Migrated JSONSki’s C++ codebase into Javascript using Node.Js’ NAPI Module and published an npm package.
</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jun 2022- Dec 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<img src={postman} height=" 100%" alt="postman logo"
        width="100%" style={{borderRadius:"50%"}}
        />}
      >
        <h3 className="vertical-timeline-element-title">
          Software Engineer (Co-op)
        </h3>
        <h4 >
          Postman, Inc.
        </h4>
  
     <p>
     Migrated functionalities into React.js based Postman-app from existing framework to create mono-repo and save
developer’s time and enhance productivity by at least 20%.
</p>
<p>
 Piloted automation flows for React-Redux applications using WebdriverIO to improve code coverage by at least 1.5x.
</p>
<p>
Implemented REST and GraphQL APIs for migration of repositories inside the postman-app using Node.js to improve
the feedback loop for end to end test triggers and reduce delay by 40%.</p><p>
Packaged the Anomaly detection module into a REST API using Python Flask for performance tests by processing
cloud data and detecting performing modules, aimed to improve app performance quality by ~30%
     </p>
     
     </VerticalTimelineElement>
     <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Nov 2020 - Aug 2021"
        iconStyle={{ color: "#fff" }}
        icon={<img src={xor} height=" 100%"
        width="100%" style={{borderRadius:"50%", boxShadow:   '0 0 15px black'}}
        />}
      
      >
        <h3 className="vertical-timeline-element-title">
          Associate Software Engineer
        </h3>

        <h4 >
          Xoriant Pvt. Ltd.
        </h4>
        <p>Developed an employee Timeline using HTML, CSS and Javascript for UI, PHP - Codeignitor MVC and MySQL for backend for stake-holders to assess resources and manage project allocations. </p>
    <p>


 Developed frontend components for Weekly status report app used by 3000+ users using HTML, CSS and Javascript.

    </p>
    <p>
     Designed various Java and MySQL based Cron Jobs for cleaning, filtering, synchronizing and migrating data .

    </p>
    <p>
     Modeled the Project Health Report pipeline using SAS programming, Python, and SQL to generate quarterly reports
by designing 10 dashboards pertaining to data of ~75 business clients.
    </p>

    </VerticalTimelineElement>
   
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2019 - Oct 2020"
        iconStyle={{  color: "#fff" }}
        icon={<img src={ts} height=" 100%"
        width="100%" style={{borderRadius:"50%", boxShadow:   '0 0 15px black'}}
        />}
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer
        </h3>

        <h4>
          TechskillsIt Pvt. Ltd.
        </h4>
        <p>Supported development of Angular application to monitor sales data for a client using Angular.js, MongoDB.
</p><p>Enhanced security by adding 2-factor authentication for the Angular application and wrote unit tests using JEST.</p>

       
      </VerticalTimelineElement>
    
   



       

  
  
    </VerticalTimeline>
  </div>
  )
}
