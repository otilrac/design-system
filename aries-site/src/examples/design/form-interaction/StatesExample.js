import React from 'react';
import { Form, FormField, TextInput } from 'grommet';

export const StatesExample = () => {
  return (
    <Form>
      <FormField label="Name" htmlFor="enabledState" required>
        <TextInput
          id="enabledState"
          name="enabledState"
          placeholder="Enter a name"
        />
      </FormField>
      <FormField label="Name" htmlFor="focusEmptyState" required>
        <TextInput
          id="focusEmptyState"
          name="focusEmptyState"
          placeholder="Enter a name"
        />
      </FormField>
    </Form>
  );
};
