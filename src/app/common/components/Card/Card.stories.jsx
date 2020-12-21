import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = () => (
  <div style={{ padding: 20, backgroundColor: 'black' }}>
    <Card>
      <div style={{ padding: 20, textAlign: 'center' }}>Test</div>
    </Card>
  </div>
);

export const Basic = Template.bind({});
