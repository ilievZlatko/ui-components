import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    iconSet: {
      options: ['AntDesignIcons', 'DevIcons', 'FeatherIcons', 'FontAwesome', 'IonIcons', 'MaterialDesignIcons', 'WeatherIcons'],
      control: 'select',
      defaultValue: ['FontAwesome']
    },
    iconName: { control: 'text' },
    size: { control: 'number', defaultValue: 32 }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconName: 'FaRegEdit'
};
