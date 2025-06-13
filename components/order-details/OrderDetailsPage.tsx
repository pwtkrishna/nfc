/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderDetailsPage() {
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/get-user-order-details", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setOrder(data.data);
          setIsLoggedIn(true);
        } else {
          setOrder(null);
          setIsLoggedIn(false);
        }
        setLoading(false);
      })
      .catch(() => {
        setOrder(null);
        setIsLoggedIn(false);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://nfc.premierwebtechservices.com/api/logout/me",
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (!res.ok) throw new Error("Logout failed");

      setIsLoggedIn(false);
      setOrder(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  if (loading)
    return (
      <div className="max-h-56 h-56 text-white flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <>
      <div className="flex justify-end mb-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white px-4 py-2 cursor-pointer hover:underline"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="text-white px-4 py-2 cursor-pointer hover:underline"
          >
            Login
          </button>
        )}
      </div>
      <div className="p-4 max-w-xl mx-auto text-white">
        {isLoggedIn && order ? (
          <>
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

            {/* User Details Section */}
            <h3 className="text-lg font-semibold mt-4">User Details</h3>
            <div className="mb-2">
              <strong>Name:</strong> {order.user?.name}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {order.user?.email}
            </div>
            <div className="mb-2">
              <strong>User ID:</strong> {order.user?.id}
            </div>

            {/* NFC Order Details */}
            <h3 className="text-lg font-semibold mt-4">NFC Order Details</h3>
            <ul>
              {order.nfc_order_detail?.map((item: any) => (
                <li key={item.id} className="mb-2">
                  <div>Card ID: {item.nfccard_id}</div>
                  <div>Price: ₹{item.price}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Status: {item.status}</div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-white flex items-center justify-center">
            No order details found.
          </div>
        )}
      </div>
    </>
  );
}
