/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

export default function OrderDetailsPage() {
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/get-order-details", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data.data); // assuming API returns { data: {...} }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!order) return <div>No order details found.</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Order Details</h2>
      <div className="mb-2">
        <strong>Order Code:</strong> {order.order_code}
      </div>
      <div className="mb-2">
        <strong>Company:</strong> {order.company_name}
      </div>
      <div className="mb-2">
        <strong>Total:</strong> ₹{order.total_amount}
      </div>
      <div className="mb-2">
        <strong>Status:</strong> {order.order_status}
      </div>
      <div className="mb-2">
        <strong>Payment Status:</strong> {order.payment_status}
      </div>
      <div className="mb-2">
        <strong>Order Date:</strong> {order.order_date}
      </div>
      <div className="mb-2">
        <strong>Shipping Address:</strong> {order.shipping_address}
      </div>
      <div className="mb-2">
        <strong>Billing Address:</strong> {order.billing_address}
      </div>
      {/* Add more fields as needed */}
      <h3 className="text-lg font-semibold mt-4">NFC Order Details</h3>
      <ul>
        {order.nfc_order_detail.map((item: any) => (
          <li key={item.id}>
            <div>Card ID: {item.nfccard_id}</div>
            <div>Price: ₹{item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Status: {item.status}</div>
            {/* Add more as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
