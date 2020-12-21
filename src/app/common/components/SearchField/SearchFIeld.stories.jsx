import SearchField from '.';

export default {
  title: 'Components/SearchField',
  component: SearchField,
  args: {
    value: '',
    placeholder: 'Search Field',
    trimTerm: false,
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

const Template = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px 0', borderRadius: 4 }}>
    <SearchField
      {...args}
      onChange={(e) => (
        Boolean(e.target.value) && alert(e.target.value)
      )}
    />
  </div>
);

const TemplateWithoutOnChange = (args) => (
  <div style={{ backgroundColor: 'black', padding: '20px 0', borderRadius: 4 }}>
    <SearchField
      {...args}
    />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Cleaning = TemplateWithoutOnChange.bind({});
Cleaning.args = {
  value: 'input',
};

export const Trim = Template.bind({});
Trim.args = {
  trimTerm: true,
};
