import Backdrop from '.';
import Spinner from '../Spinner';

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
  args: {},
  argTypes: {},
};

const Template = (args) => (
  <div style={{ height: 200, display: 'grid', gap: 16 }}>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus minima veniam
      laudantium assumenda, accusantium labore officiis voluptatem exercitationem repellendus magnam
      velit corrupti odio sunt ducimus quisquam id. Non, sapiente saepe?
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus minima veniam
      laudantium assumenda, accusantium labore officiis voluptatem exercitationem repellendus magnam
      velit corrupti odio sunt ducimus quisquam id. Non, sapiente saepe?
    </div>
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus minima veniam
      laudantium assumenda, accusantium labore officiis voluptatem exercitationem repellendus magnam
      velit corrupti odio sunt ducimus quisquam id. Non, sapiente saepe?
    </div>
    <Backdrop {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithSpinner = Template.bind({});
WithSpinner.args = {
  show: true,
  children: <Spinner />,
};
