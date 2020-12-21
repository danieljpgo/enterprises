import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Input',
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

const Template = (args) => <Input {...args} />;
const TemplateDark = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px 0', borderRadius: 4 }}>
    <Input {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
};

export const Adornment = Template.bind({});
Adornment.args = {
  startAdornment: 'Init',
  endAdornment: 'End',
};

export const Contrast = TemplateDark.bind({});
Contrast.args = {
  contrast: true,
};
