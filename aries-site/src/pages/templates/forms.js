import React from 'react';

import { Meta, SubsectionText } from '../../components';
import {
  ChangePasswordExample,
  SettingsExample,
  SignInExample,
  SignUpExample,
} from '../../examples';
import { ContentSection, Example, Layout, Subsection } from '../../layouts';
import { getPageDetails } from '../../utils';

const title = 'Forms';
const topic = 'Templates';
const page = getPageDetails(title);

const Forms = () => {
  return (
    <Layout title={title}>
      <Meta
        title={title}
        description={page.seoDescription}
        canonicalUrl="https://design-system.hpe.design/templates/forms"
      />
      <ContentSection>
        <Subsection name={title} level={1} topic={topic}>
          <SubsectionText>
            Template patterns for common form use cases, from application
            configurations to payment acceptance for the latest as-a-service
            product offerings.
          </SubsectionText>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Sign Up">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SignUpExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=259%3A86"
          >
            <SignUpExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Sign In">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SignInExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=242%3A28"
          >
            <SignInExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Change Password">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/ChangePasswordExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=259%3A85"
          >
            <ChangePasswordExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Settings">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SettingsExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=267%3A77"
          >
            <SettingsExample />
          </Example>
        </Subsection>
      </ContentSection>
    </Layout>
  );
};
export default Forms;
