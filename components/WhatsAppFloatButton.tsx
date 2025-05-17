import Image from "next/image";
import Link from "next/link";

const WhatsAppFloatButton = () => {
  return (
    <Link
      href="https://wa.me/919999999999" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out">
        <Image
          src="/whatsapp-icon.svg"
          alt="Whatsapp Icon"
          height={100}
          width={100}
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
};

export default WhatsAppFloatButton;
