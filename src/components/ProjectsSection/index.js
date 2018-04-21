import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import ravenLogo from '../../assets/images/projects/raven-logo.png'
import nypdLogo from '../../assets/images/projects/nypd-logo.png'
import smartBrainLogo from '../../assets/images/projects/smart-brain-logo.jpg'
import bitcoinLogo from '../../assets/images/projects/bitcoin-logo.png'
import kickstarterLogo from '../../assets/images/projects/kickstarter-logo.png'


class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={ravenLogo}
            colour="#FFFFFF"
            title="Raven"
            link=""
            timeperiod="Apr 2017 - Now"
            subtitle="Raven (just like the raven messengers on Westeros in Game of Throne), which is a distributed news and social networking service on which users post and interact with messages written in Golang. The front-end is implemented with HTML and Go, while the backend, known as citadel, are multiple servers that replicate changes over the cluster to maintain consistency and availability in unreliable networks."
          />
          <ExperienceUnit
            logo={nypdLogo}
            colour="#FFFFFF"
            title="NYC-At-Large"
            link="https://github.com/googlr/NYC-At-Large"
            timeperiod="Dec 2017 - Feb 2018"
            subtitle="A comprehensive analysis on NYPD Complaint Data Historic 
              from NYC Open Data."
          />
          <ExperienceUnit
            logo={smartBrainLogo}
            colour="#FFFFFF"
            title="The Magic Brain"
            link=""
            timeperiod="Feb 2018 - Apr 2018"
            subtitle="A responsive web application that providing face 
              recognition services with user uploaded photos."
          />
          <ExperienceUnit
            logo={bitcoinLogo}
            colour="#FFFFFF"
            title="The CoinHolder"
            link=""
            timeperiod="Apr 2018 - Now"
            subtitle="A Neural Network Method for Analysis and Prediction of 
              Bitcoin Price Trends."
          />
          <ExperienceUnit
            logo={kickstarterLogo}
            colour="#FFFFFF"
            title="KickFounder"
            link="https://github.com/googlr/KickFounder"
            timeperiod="Apr 2017 - May 2017"
            subtitle="A database-backed website with LAMP stack for 
              crowdfunding services."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
