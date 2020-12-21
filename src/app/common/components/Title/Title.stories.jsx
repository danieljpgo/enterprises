import Title from '.';

export default {
  title: 'Components/Title',
  component: Title,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quis alias deleniti ipsum temporibus natus reprehenderit 
    excepturi itaque velit.`,
  },
  argTypes: {},
};

const Template = (args) => (
  <Title {...args} />
);

const TemplateDarkMode = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: 4 }}>
    <Title {...args} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  variants: 'base',
};

export const Aux = Template.bind({});
Aux.args = {
  variants: 'aux',
};

export const Contrast = TemplateDarkMode.bind({});
Contrast.args = {
  variants: 'contrast',
};
