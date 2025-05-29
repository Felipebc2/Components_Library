import React from "react";
import { Meta, Story } from '@storybook/react';
import { AbBotao } from '../src';

export default {
    title: 'Components/AbBotao',
    component: AbBotao
} as Meta<typeof AbBotao>

const Template: Story<typeof AbBotao> = () => <AbBotao />;

export const Primario = Template.bind({});