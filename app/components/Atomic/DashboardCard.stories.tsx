import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import DashboardCard, { DashboardCardProps } from "./DashboardCard";

const meta: Meta<typeof DashboardCard> = {
  component: DashboardCard,
};
export default meta;

const Template: StoryFn<DashboardCardProps> = (args) => (
  <DashboardCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: "Iphone 16 Pro",
  model: "MISO123",
  brand: "Apple",
  price: "1599.99 USD",
};

export const CustomCard = Template.bind({});
CustomCard.args = {
  id: 2,
  name: "Custom Product",
  model: "Model Z",
  brand: "Brand A",
  price: "$200",
};
