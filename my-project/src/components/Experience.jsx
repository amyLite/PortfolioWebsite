

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import {Optum, DXC} from "../assets"
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = () => {

return(
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#060421', color: '#fff', border:'1px solid  rgb(33, 150, 243)', boxShadow:'None' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff',}}
  
    
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
    <img className="w-[60px] mx-auto" src={Optum} alt="optum"/>
  
    <p>
      UI/UX, fastAPI, Unit Testing, Backend, AI/ML, ChatBot
    </p>
    <br/>
    <div className="styleworkCard">

      <ul>
        <li><h3 className="pt-4">Chat Bot</h3>
          <p style={{fontSize:'small', fontWeight:'lighter', padding:'10px', paddingTop:'1px'}}>Created a Responsive ChatBot using RASA framework
            and React Js.
          </p>
        </li>
        <hr style={{width:'100px', margin:'auto'}}/>
        <li><h3 className="pt-4">Storage Cluster Forecasting</h3>
          <p style={{fontSize:'small', fontWeight:'lighter', padding:'10px', paddingTop:'1px'}}>
            Time Series forecasting of Cloud Storage Cluster using SARIMAX model.
            Created Live Graphs using Grafana.
          </p>
        </li>
        <hr style={{width:'100px', margin:'auto'}}/>
        <li><h3 className="pt-4">Chat Bot</h3>
          <p style={{fontSize:'small', fontWeight:'lighter', padding:'10px', paddingTop:'1px'}}>Created a Responsive ChatBot using RASA framework
            and React Js.
          </p>
        </li>
        
      </ul>
      
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#060421', color: '#fff', border:'1px solid  rgb(33, 150, 243)', boxShadow:'None' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <img className="w-[60px] mx-auto" src={DXC} alt="DXC"/>
    <p>
      UI/UX, backend, automation, web scrapping, RestAPI
    </p>
  </VerticalTimelineElement>
 
</VerticalTimeline>
);
};

const Experience = () => {
  return (
    <section className="text-center mt-[100px]" id="about">
    <motion.div>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div>
      <ExperienceCard/>
    </div>
    </section>
  )
}

export default Experience;