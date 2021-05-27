import React from 'react'
import Icon1 from '../../images/New SVG-5.png'
import Icon2 from '../../images/New SVG-3.png'
import Icon3 from '../../images/New SVG-5.png'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Information Here</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Information Here</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            doloremque corporis consequuntur dolorem.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Information Here</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            doloremque corporis consequuntur dolorem..
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            doloremque corporis consequuntur dolorem..
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
