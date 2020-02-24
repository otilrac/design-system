import React, { useState } from 'react';
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Header,
  Heading,
  Layer,
  Main,
  TextInput,
  ThemeContext,
} from 'grommet';
import { Close } from 'grommet-icons';

const userPermissions = [
  'Select All',
  'Login',
  'Console',
  'Power Options',
  'Virtual Media Access',
  'Firmware Update',
  'Remote Configuration',
  'User Administration',
  'Host Network Control',
  'Host Storage Control',
  'Recover Mode',
];

const intialFormValues = {
  email: 'matthew.glissmann@hpe.com',
  displayName: 'Matt Glissmann',
  'Select All': true,
  Login: true,
  Console: true,
  'Power Options': true,
  'Virtual Media Access': false,
  'Firmware Update': true,
  'Remote Configuration': false,
  'User Administration': false,
  'Host Network Control': false,
  'Host Storage Control': false,
  'Recover Mode': false,
};

const SaveUserButton = () => {
  return (
    <Button
      label="Save User Information"
      margin={{ vertical: 'medium' }}
      onSubmit={() => {}}
      primary
      size="small"
      type="submit"
    />
  );
};

export const InAppConfigExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(intialFormValues);

  const closeLayer = () => setIsOpen(undefined);

  const displayLayer = () => setIsOpen(true);

  const onFormChange = values => {
    setFormValues(values);
  };

  const onSave = () => {
    // Validate
    // Get success status
    // If success, display success
    // eslint-disable-next-line no-alert
    alert('Success! \n User information saved.');
  };

  return (
    <>
      <ThemeContext.Extend value={{ layer: { background: '' } }}>
        <Box align="start">
          <Button label="Manage User" onClick={displayLayer} primary />
        </Box>
        {isOpen && (
          <Layer
            full="vertical"
            position="right"
            round={{ corner: 'left', size: 'large' }}
            onClickOutside={closeLayer}
            onEsc={closeLayer}
          >
            <Box
              background="background-front"
              fill="vertical"
              round={{ corner: 'left', size: 'large' }}
              overflow="scroll"
            >
              <Header direction="column" align="start" pad="medium">
                <Button icon={<Close />} onClick={closeLayer} alignSelf="end" />
                <Heading
                  level={2}
                  margin={{ horizontal: 'medium', vertical: 'none' }}
                >
                  Manage User
                </Heading>
              </Header>
              <Main pad="large" width="large">
                <Form
                  onChange={onFormChange}
                  onReset={() => {}}
                  onSubmit={onSave}
                  validate="blur"
                  value={formValues}
                >
                  <Heading level={3} size="small">
                    Account Information
                  </Heading>
                  <FormField name="email" label="Email" component={TextInput} />
                  <FormField
                    name="displayName"
                    label="Display Name"
                    component={TextInput}
                  />
                  <FormField
                    name="resetPassword"
                    label="Reset Password"
                    component={CheckBox}
                  />
                  <FormField
                    name="serviceAccount"
                    label="Service Account"
                    component={CheckBox}
                  />
                  <SaveUserButton />
                  <Heading level={3} size="small">
                    Session Services
                  </Heading>
                  {userPermissions &&
                    userPermissions.map(permission => {
                      return (
                        <FormField
                          component={CheckBox}
                          key={permission}
                          name={permission}
                          label={permission}
                          reverse
                          align="end"
                          toggle
                        />
                      );
                    })}
                  <SaveUserButton />
                </Form>
              </Main>
            </Box>
          </Layer>
        )}
      </ThemeContext.Extend>
    </>
  );
};
