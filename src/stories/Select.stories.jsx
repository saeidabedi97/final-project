import React from 'react';
import { SelectOption } from './Select';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Select/selectOptions/select1',
  component: SelectOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <select {...args} />;

export const SelectOption2 = Template.bind({});
SelectOption2.args = {
  size: 'large',
  label: 'Button',
  title: 'Yes',
};


