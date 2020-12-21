import Spinner from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args) => (
  <Spinner {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
