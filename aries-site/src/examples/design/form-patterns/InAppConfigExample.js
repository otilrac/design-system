import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  CheckBox,
  Footer,
  Form,
  FormField,
  Header,
  Heading,
  Layer,
  Main,
  Text,
  TextInput,
  ThemeContext,
} from 'grommet';
import { Close, PersonalComputer } from 'grommet-icons';

import { Identifier, Tile } from 'aries-core';

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

const ManageUserForm = ({ closeLayer }) => {
  const [formValues, setFormValues] = useState(intialFormValues);

  const onFormChange = values => {
    setFormValues(values);
  };

  const onSave = () => {
    // Validate
    // Get success status
    // If success, display success
    // eslint-disable-next-line no-alert
    alert('Success! \n User information saved.');
    closeLayer(false);
  };

  return (
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
  );
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

const UserDetailExample = ({ displayLayer }) => {
  return (
    <Main background="background-back" pad="large">
      <Tile
        alignContent="center"
        background="blue"
        height="medium"
        width="medium"
        onClick={displayLayer}
      >
        <Identifier
          title="lozzi@hpe.com"
          subTitle="10.68.229.0"
          direction="column"
          align="start"
          gap="small"
          pad={{ horizontal: 'medium', vertical: 'medium' }}
          size="xlarge"
        >
          <PersonalComputer size="xlarge" />
        </Identifier>
        <Box flex />
        <Footer background="background-contrast" pad="medium">
          <Box direction="row" gap="small">
            <Box
              round
              margin={{ vertical: 'xsmall' }}
              pad={{ horizontal: 'xsmall' }}
              background="status-warning"
            />
            <Text weight="bold">Expired</Text>
          </Box>
          <Button label="Manage User" onClick={displayLayer} primary />
        </Footer>
      </Tile>
    </Main>
  );
};

export const InAppConfigExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeLayer = () => setIsOpen(undefined);

  return (
    <>
      <UserDetailExample displayLayer={setIsOpen} />
      {isOpen && (
        <ThemeContext.Extend value={{ layer: { background: '' } }}>
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
            >
              <Header
                direction="column"
                align="start"
                elevation="xsmall"
                pad="medium"
              >
                <Button icon={<Close />} onClick={closeLayer} alignSelf="end" />
                <Heading
                  level={2}
                  margin={{ horizontal: 'medium', vertical: 'none' }}
                >
                  Manage User
                </Heading>
              </Header>
              <Main flex pad="large" width="large">
                <ManageUserForm closeLayer={setIsOpen} />
              </Main>
            </Box>
          </Layer>
        </ThemeContext.Extend>
      )}
    </>
  );
};

ManageUserForm.propTypes = {
  closeLayer: PropTypes.func,
};

UserDetailExample.propTypes = {
  displayLayer: PropTypes.func,
};
