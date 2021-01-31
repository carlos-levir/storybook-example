import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Button, { Props } from '../components/Button';


const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Teste1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Teste2',
  disabled: true,
};

const ButtonStory = {
  title: 'Example/Button',
  component: Button,
};

export default ButtonStory;