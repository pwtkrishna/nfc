import React from "react";
import OrderTodayIcon from "../ui/OrderTodayIcon";
import DesignConfirmedIcon from "../ui/DesignConfirmedIcon";
import OrderShippedIcon from "../ui/OrderShippedIcon";
import DeliveryTimeline from "../DeliveryTimeline";

const today = new Date();
const designStart = new Date(today);
designStart.setDate(today.getDate() + 2);

const designEnd = new Date(today);
designEnd.setDate(today.getDate() + 3);

const shippedStart = new Date(today);
shippedStart.setDate(today.getDate() + 5);

const shippedEnd = new Date(today);
shippedEnd.setDate(today.getDate() + 6);

const deliverySteps = [
  {
    label: "Order Today",
    date: today,
    Icon: OrderTodayIcon,
  },
  {
    label: "Design Confirmed",
    date: [designStart, designEnd] as [Date, Date],
    Icon: DesignConfirmedIcon,
  },
  {
    label: "Order Shipped",
    date: [shippedStart, shippedEnd] as [Date, Date],
    Icon: OrderShippedIcon,
  },
];

const DeliverySection = () => <DeliveryTimeline steps={deliverySteps} />;

export default DeliverySection;
