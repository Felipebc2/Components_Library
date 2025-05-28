import React from "react";
import { Meta, Story } from '@storybook/react';
import { AbCard } from '../src/components/AbCard';

export default {
    title: 'Components/AbCard',
    component: AbCard
} as Meta<typeof AbCard>;

const Template: Story<typeof AbCard> = () => <AbCard children={undefined} />;

export const Card = Template.bind({});