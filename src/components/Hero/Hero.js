import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non libero id libero scelerisque iaculis eu sit amet ex. Suspendisse sagittis dui libero, a cursus nisi vestibulum a. Cras turpis urna, facilisis id eros ac, posuere euismod leo. Pellentesque id maximus mi. Morbi mollis leo eu neque consectetur, ut congue.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:adityachatterjee891@gmail.com'}>Hire Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;