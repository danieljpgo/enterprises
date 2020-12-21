import PasswordField from '.';

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
  args: {
    placeholder: 'Password Field',
  },
  argTypes: {
    onChange: {
      action: 'changed',
    },
    onBlur: {
      action: 'blured',
    },
  },
};

const Template = (args) => <PasswordField {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
};

export const Adornment = Template.bind({});
Adornment.args = {
  startAdornment: 'Init',
};

export const SeeMore = Template.bind({});
SeeMore.args = {
  startAdornment: 'Init',
  value: 'input',
};
