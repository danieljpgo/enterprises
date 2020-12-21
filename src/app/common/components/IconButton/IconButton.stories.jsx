import IconButton from '.';
import EyeIcon from '../icons/EyeIcon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    children: 'Button',
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = (args) => (
  <IconButton {...args}>
    <EyeIcon />
  </IconButton>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
