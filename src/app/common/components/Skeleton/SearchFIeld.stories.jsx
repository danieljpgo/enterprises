import Skeleton from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  args: {
    height: '100px',
  },
  argTypes: {},
};

const Template = (args) => (
  <Skeleton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
