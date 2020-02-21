import React from 'react';

import { Meta, SubsectionText } from '../../components';
import { ContentSection, Layout, Subsection, Example } from '../../layouts';
import { InAppConfigExample } from '../../examples';
import { getPageDetails } from '../../utils';

const title = 'Form Interaction';
const page = getPageDetails(title);
const topic = 'Design';

const FormInteraction = () => (
  <Layout title={title}>
    <Meta
      title={title}
      description={page.seoDescription}
      canonicalUrl="https://design-system.hpe.design/design/forms"
    />
    <ContentSection>
      <Subsection name={title} level={1} topic={topic}>
        <SubsectionText>
          Lorem ipsum dolor amet wolf humblebrag pork belly, +1 four dollar
          toast kinfolk microdosing 3 wolf moon mixtape. Hell of poke irony
          flannel, taiyaki tousled craft beer gochujang flexitarian glossier.
          Blog man braid gentrify locavore chambray narwhal viral street art
          vegan tumblr put a bird on it fam unicorn typewriter kinfolk. Tacos
          direct trade before they sold out enamel pin activated charcoal.
        </SubsectionText>
        <SubsectionText size="medium">
          Tofu craft beer gastropub, palo santo bitters chillwave pork belly
          cray. Crucifix mustache mlkshk, twee seitan master cleanse pabst
          aesthetic raclette copper mug la croix messenger bag.
        </SubsectionText>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Account Creation">
        <SubsectionText>
          Lorem ipsum dolor amet wolf humblebrag pork belly, +1 four dollar
          toast.
        </SubsectionText>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="In-App Configuration">
        <Example>
          <InAppConfigExample />
        </Example>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Manage User">
        <SubsectionText>
          Lorem ipsum dolor amet wolf humblebrag pork belly, +1 four dollar
          toast.
        </SubsectionText>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Sign In">
        <SubsectionText>
          Lorem ipsum dolor amet wolf humblebrag pork belly, +1 four dollar
          toast.
        </SubsectionText>
      </Subsection>
    </ContentSection>
  </Layout>
);

export default FormInteraction;
