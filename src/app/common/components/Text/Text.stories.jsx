import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quis alias deleniti ipsum temporibus natus reprehenderit 
    excepturi itaque velit.`,
  },
  argTypes: {},
};

const Template = (args) => (
  <Text {...args} />
);

const TemplateDarkMode = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: 4 }}>
    <Text {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  variants: 'main',
};

export const Main = Template.bind({});
Main.args = {
  variants: 'main',
};

export const Submain = Template.bind({});
Submain.args = {
  variants: 'submain',
};

export const Base = Template.bind({});
Base.args = {
  variants: 'base',
};

export const Sub = Template.bind({});
Sub.args = {
  variants: 'sub',
};

export const Aux = Template.bind({});
Aux.args = {
  variants: 'aux',
};

export const Warning = Template.bind({});
Warning.args = {
  variants: 'warning',
};

export const Contrast = TemplateDarkMode.bind({});
Contrast.args = {
  variants: 'contrast',
};
