import HomeHeroSection from "@/components/HomeHeroSection";
import TrustedCarousel from "@/components/TrustedCarousel";
import Image from "next/image";
import BestSeller from "@/components/BestSeller";
import ForTeamsSection from "@/components/ForTeamsSection";
import EveryOneSectionCard from "@/components/EveryOneSectionCard";
import Faqs from "@/components/Faqs";
import FilledLink from "@/components/FilledLink";
import Footer from "@/components/footer/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import CartSidebar from "@/components/cart/CartSidebar";

export default function Home() {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <HomeHeroSection />
      <TrustedCarousel />
      <section className=" bg-[#1F2128]">
        <div className="p-[20px] max-w-[1320px] w-full m-auto">
          <div className=" flex items-center justify-between gap-[65px]  max-md:flex-col">
            <div className="w-[50%] max-md:w-full">
              <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left pr-[84px] max-sm:text-[32px] max-[468px]:text-[24px] max-sm:leading-[38px]">
                Why a Digital Profile is Important?
              </h2>
              <div className="pt-[28px]">
                <p className="text-[#9E9FA7] text-[18px] leading-[27px] text-left font-normal">
                  In today’s fast-paced world, your first impression matters
                  more than ever. TapOnn’s smart digital profile ensures every
                  interaction is unique, professional, and memorable. Replace
                  the hassle of sharing multiple links or repeating details with
                  just one powerful scan or tap. Share everything in one
                  go—contact details, social profiles, review links, documents,
                  and more. Literally, anything you need to connect or impress
                  can be added to your TapOnn profile.
                </p>
                <br />
                <p className="text-[#9E9FA7] text-[18px] leading-[27px] text-left font-normal">
                  Build smarter, faster, and more meaningful connections
                  globally. Whether you’re networking at an event, meeting a
                  client, or connecting online, TapOnn ensures seamless sharing
                  anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="w-[38%] max-md:w-full">
              <Image
                src="/digital_profile_with_text_1.webp"
                alt="Digital Profile"
                height={500}
                width={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <BestSeller />
      <section>
        <div className="container pt-[95px] pb-[35px] px-[20px] max-w-[1320px] w-full m-auto">
          <div className="flex justify-between max-md:flex-wrap max-md:gap-[14px]">
            <div className="w-[50%] max-md:w-full">
              <h2 className="text-white text-[42px] font-semibold leading-[50.4px] text-left">
                TapOnn – Your One-Stop Solution !
              </h2>
            </div>
            <div className="w-[510px]">
              <p className="text-[#9E9FA7] text-[18px] font-normal leading-[21.6px] text-left">
                Whether <strong>physically or virtually</strong>, TapOnn makes
                information sharing seamless and effortless. From
                <strong>individuals to entire organizations</strong>, TapOnn
                provides <strong>smart, scalable solutions</strong> to connect,
                network, and grow—anytime, anywhere.
                <br />
                <br />
                🚀
                <strong>
                  Tap. Share. Connect. The Future of Information Sharing Starts
                  Here!
                </strong>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-10px] gap-y-[20px] pt-[30px]">
            <div
              className="nfc-card nfc-card-1 p-[40px] rounded-[12px] text-left  min-h-[400px] pt-[35px]"
              style={{ width: "calc(60% - 20px)" }}
            >
              <div className="max-w-[405px] w-full">
                <h3 className="text-white mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  TapOnn for Teams
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#9E9FA7]">
                  Effortlessly manage team profiles, track leads, and integrate
                  with CRM tools using our powerful dashboard. Gain insights,
                  monitor performance, and make data-driven decisions—all in one
                  seamless platform.
                </p>
              </div>
            </div>

            <div
              className="nfc-card nfc-card-2 p-[40px] rounded-[12px] text-left mx-[10px] min-h-[400px] pt-[35px]"
              style={{ width: "calc(40% - 20px)" }}
            >
              <div className="max-w-[405px] w-full">
                <h3 className="text-black mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  Unique Custom link in bio and Dynamic QR codes
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#1F2128]">
                  Create your unique custom link and dynamic QR code. Share your
                  digital profile seamlessly and update your details anytime
                  without changing your link or QR code
                </p>
              </div>
            </div>

            <div
              className="nfc-card nfc-card-3 p-[40px] rounded-[12px] text-left mx-[10px] min-h-[400px] pt-[35px]"
              style={{ width: "calc(40% - 20px)" }}
            >
              <div className="max-w-[405px] w-full">
                <h3 className="text-[#1F2128] mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  Wallet cards
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#1F2128]">
                  Your phone is always with you— so will be your digital profile
                  now! Set up your Profile Wallet Cards in seconds, share
                  effortlessly, and make instant connections anytime, anywhere
                </p>
              </div>
            </div>

            <div
              className="nfc-card nfc-card-4 p-[40px] rounded-[12px] text-left mx-[10px] min-h-[400px] pt-[35px]"
              style={{ width: "calc(60% - 20px)" }}
            >
              <div className="max-w-[405px] w-full">
                <h3 className="text-white mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  Lead Management
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#9E9FA7]">
                  Effortlessly capture, track, and manage leads with TapOnn. Our
                  AI-powered paper card scanner ensures you never miss a lead,
                  while smart tools let you share and collect details on the go.
                </p>
              </div>
            </div>

            <div
              className="nfc-card nfc-card-5 p-[40px] rounded-[12px] text-left mx-[10px] min-h-[400px] pt-[35px] flex items-center"
              style={{ width: "calc(60% - 20px)" }}
            >
              <div className="max-w-[320px] w-full">
                <h3 className="text-white mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  Review Management
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#9E9FA7]">
                  Take control of your online reputation. Collect, track, and
                  manage reviews across platforms from one powerful
                  dashboard—boosting credibility and customer trust effortlessly
                </p>
              </div>
            </div>

            <div
              className="nfc-card nfc-card-6 p-[40px] rounded-[12px] text-left mx-[10px] min-h-[400px] pt-[35px]"
              style={{ width: "calc(40% - 20px)" }}
            >
              <div className="max-w-[405px] w-full">
                <h3 className="text-[#1F2128] mb-[10px] text-[28px] font-semibold leading-[36px] text-left">
                  Email Signature and Virtual Backgrounds.
                </h3>
                <p className="text-[15px] font-medium leading-[20.2px] text-left text-[#1F2128]">
                  Instantly share your digital profile in emails and video
                  calls, ensuring a professional and seamless networking
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ForTeamsSection />
      <EveryOneSectionCard />
      <section>
        <div className="max-w-[1325px] w-full m-auto p-[20px]">
          <div className="flex justify-between max-[792px]:flex-col max-[792px]:gap-[16px]">
            <div
              className="affiliate-card  rounded-[12px] overflow-x-hidden py-[25px] px-[50px] max-md:w-full"
              style={{
                width: "calc(50% - 20px)",
                backgroundImage: "url('/Frame.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#04CEFA] via-[#A1DBEA] to-white inline-block text-[32px] font-bold leading-[38.4px] text-center">
                Join our affiliate program
              </h2>
              <p className="py-[10px] text-base font-normal leading-[19.2px] text-left text-white ">
                Encourage others to switch to smarter and more sustainable
                networking solutions and earn
              </p>
              <ul>
                <li className="flex items-center gap-[8px] text-white">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M10.84 14.0402H9.34C8.19 14.0402 7.26 13.0802 7.26 11.8902C7.26 11.4802 7.6 11.1402 8.01 11.1402C8.42 11.1402 8.76 11.4802 8.76 11.8902C8.76 12.2502 9.02 12.5402 9.34 12.5402H10.84C11.07 12.5402 11.25 12.3302 11.25 12.0702C11.25 11.7202 11.19 11.7002 10.96 11.6202L8.55 10.7802C7.68 10.4802 7.25 9.8702 7.25 8.9202C7.25 7.8402 8.11 6.9502 9.16 6.9502H10.66C11.81 6.9502 12.74 7.9102 12.74 9.1002C12.74 9.5102 12.4 9.8502 11.99 9.8502C11.58 9.8502 11.24 9.5102 11.24 9.1002C11.24 8.7402 10.98 8.4502 10.66 8.4502H9.16C8.93 8.4502 8.75 8.6602 8.75 8.9202C8.75 9.2702 8.81 9.2902 9.04 9.3702L11.45 10.2102C12.32 10.5202 12.74 11.1302 12.74 12.0702C12.75 13.1602 11.89 14.0402 10.84 14.0402Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M10 14.8401C9.59 14.8401 9.25 14.5001 9.25 14.0901V13.3501C9.25 12.9401 9.59 12.6001 10 12.6001C10.41 12.6001 10.75 12.9401 10.75 13.3501V14.0901C10.75 14.5101 10.41 14.8401 10 14.8401Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M10 8.44016C9.59 8.44016 9.25 8.10016 9.25 7.69016V6.91016C9.25 6.50016 9.59 6.16016 10 6.16016C10.41 6.16016 10.75 6.50016 10.75 6.91016V7.69016C10.75 8.10016 10.41 8.44016 10 8.44016Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M9.99 19.2202C5.17 19.2202 1.25 15.3002 1.25 10.4802C1.25 5.66023 5.17 1.74023 9.99 1.74023C14.81 1.74023 18.73 5.66023 18.73 10.4802C18.73 15.3002 14.8 19.2202 9.99 19.2202ZM9.99 3.25023C6 3.25023 2.75 6.50023 2.75 10.4902C2.75 14.4802 6 17.7202 9.99 17.7202C13.98 17.7202 17.23 14.4702 17.23 10.4802C17.23 6.49023 13.98 3.25023 9.99 3.25023Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M17.02 23.2198C15.17 23.2198 13.43 22.3198 12.36 20.7998C12.12 20.4598 12.2 19.9898 12.54 19.7498C12.88 19.5098 13.35 19.5898 13.59 19.9298C14.38 21.0498 15.66 21.7098 17.02 21.7098C19.34 21.7098 21.22 19.8298 21.22 17.5098C21.22 16.1598 20.56 14.8798 19.46 14.0898C19.12 13.8498 19.05 13.3798 19.29 13.0398C19.53 12.6998 20 12.6298 20.34 12.8698C21.83 13.9398 22.72 15.6698 22.72 17.5098C22.72 20.6698 20.17 23.2198 17.02 23.2198Z"
                        fill="#A1DBEA"
                      ></path>
                    </svg>
                  </i>
                  Commissions on each purchase
                </li>
                <li className="flex items-center gap-[8px] text-white">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M17 21.25H7C2.59 21.25 1.25 19.91 1.25 15.5V15C1.25 14.59 1.59 14.25 2 14.25C2.96 14.25 3.75 13.46 3.75 12.5C3.75 11.54 2.96 10.75 2 10.75C1.59 10.75 1.25 10.41 1.25 10V9.5C1.25 5.09 2.59 3.75 7 3.75H17C21.41 3.75 22.75 5.09 22.75 9.5V10.5C22.75 10.91 22.41 11.25 22 11.25C21.04 11.25 20.25 12.04 20.25 13C20.25 13.96 21.04 14.75 22 14.75C22.41 14.75 22.75 15.09 22.75 15.5C22.75 19.91 21.41 21.25 17 21.25ZM2.75 15.66C2.77 19.1 3.48 19.75 7 19.75H17C20.34 19.75 21.15 19.16 21.24 16.16C19.81 15.82 18.75 14.53 18.75 13C18.75 11.47 19.82 10.18 21.25 9.84V9.5C21.25 5.93 20.57 5.25 17 5.25H7C3.48 5.25 2.77 5.9 2.75 9.34C4.18 9.68 5.25 10.97 5.25 12.5C5.25 14.03 4.18 15.32 2.75 15.66Z"
                        fill="#A1DBEA"
                      ></path>
                      <path
                        d="M15.0002 16.3799C14.4402 16.3799 13.9902 15.9299 13.9902 15.3799C13.9902 14.8299 14.4402 14.3799 14.9902 14.3799C15.5402 14.3799 15.9902 14.8299 15.9902 15.3799C15.9902 15.9299 15.5602 16.3799 15.0002 16.3799Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M9.00023 11.3799C8.44023 11.3799 7.99023 10.9299 7.99023 10.3799C7.99023 9.82988 8.44023 9.37988 8.99023 9.37988C9.54023 9.37988 9.99023 9.82988 9.99023 10.3799C9.99023 10.9299 9.56023 11.3799 9.00023 11.3799Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M8.63031 16.9301C8.44031 16.9301 8.25031 16.8601 8.10031 16.7101C7.81031 16.4201 7.81031 15.9401 8.10031 15.6501L14.8303 8.92014C15.1203 8.63014 15.6003 8.63014 15.8903 8.92014C16.1803 9.21014 16.1803 9.69014 15.8903 9.98014L9.16031 16.7101C9.02031 16.8601 8.82031 16.9301 8.63031 16.9301Z"
                        fill="#04CEFA"
                      ></path>
                    </svg>
                  </i>
                  Get exclusive vouchers
                </li>
                <li className="flex items-center gap-[8px] text-white">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M14.2293 16.6101H12.2493C11.7893 16.6101 11.1193 16.4701 10.7293 16.0801L9.1893 14.8901L10.1093 13.7001L11.7193 14.9501C11.8393 15.0401 12.0593 15.1001 12.2493 15.1001H14.2293C14.5293 15.1001 14.8893 14.8401 14.9593 14.5801L16.2193 10.7301C16.2493 10.6501 16.2793 10.5401 16.2293 10.4601C16.1893 10.4001 16.0793 10.3601 15.9493 10.3601H13.8693C13.4993 10.3601 13.1493 10.2002 12.8993 9.92017C12.6593 9.64017 12.5493 9.26013 12.5993 8.88013L12.8593 7.21009C12.8893 7.08009 12.7993 6.93014 12.6893 6.89014C12.5993 6.86014 12.4493 6.91009 12.4093 6.96009L10.2793 10.1301L9.0293 9.29016L11.1593 6.12012C11.5793 5.49012 12.4693 5.2001 13.1893 5.4701C13.9993 5.7401 14.5193 6.64011 14.3393 7.4801L14.1293 8.8501H15.9493C16.5793 8.8501 17.1293 9.12009 17.4593 9.59009C17.7793 10.0501 17.8493 10.6401 17.6493 11.2101L16.4093 14.9901C16.1793 15.8801 15.2193 16.6101 14.2293 16.6101Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M8.56 16.0398H8.03999C6.47999 16.0398 6.25 14.9498 6.25 14.2998V9.20972C6.25 8.55972 6.47999 7.46973 8.03999 7.46973H8.56C10.12 7.46973 10.35 8.55972 10.35 9.20972V14.2998C10.35 14.9498 10.12 16.0398 8.56 16.0398ZM7.78 14.5298C7.81 14.5298 7.88999 14.5398 8.03999 14.5398H8.56C8.72 14.5398 8.81 14.5198 8.84 14.5098C8.84 14.4898 8.85001 14.4298 8.85001 14.2998V9.20972C8.85001 9.07972 8.84 9.00975 8.83 8.98975C8.81 8.98975 8.73 8.97974 8.56 8.97974H8.03999C7.87999 8.97974 7.78999 8.99977 7.75999 9.00977C7.75999 9.02977 7.75 9.08973 7.75 9.21973V14.3098C7.75 14.4398 7.76 14.5098 7.77 14.5398C7.77 14.5298 7.78 14.5298 7.78 14.5298Z"
                        fill="#04CEFA"
                      ></path>
                      <path
                        d="M12 23.2498C11.3 23.2498 10.59 22.9797 10.06 22.4497L8.35001 20.7598C7.92001 20.3398 7.35999 20.1097 6.75999 20.1097H6C3.93 20.1097 2.25 18.4398 2.25 16.3898V5.47974C2.25 3.42974 3.93 1.75977 6 1.75977H18C20.07 1.75977 21.75 3.42974 21.75 5.47974V16.3898C21.75 18.4398 20.07 20.1097 18 20.1097H17.24C16.64 20.1097 16.07 20.3398 15.65 20.7598L13.94 22.4497C13.41 22.9797 12.7 23.2498 12 23.2498ZM6 3.24976C4.76 3.24976 3.75 4.24973 3.75 5.46973V16.3798C3.75 17.6098 4.76 18.5997 6 18.5997H6.75999C7.75999 18.5997 8.7 18.9897 9.41 19.6897L11.12 21.3798C11.61 21.8598 12.4 21.8598 12.89 21.3798L14.6 19.6897C15.31 18.9897 16.25 18.5997 17.25 18.5997H18C19.24 18.5997 20.25 17.5998 20.25 16.3798V5.46973C20.25 4.23973 19.24 3.24976 18 3.24976H6Z"
                        fill="#A1DBEA"
                      ></path>
                    </svg>
                  </i>
                  Early joiners get free trials
                </li>
              </ul>
              <p
                className="text-base leading-[19.2px] text-left text-white py-[10px]"
                style={{ fontWeight: "500" }}
              >
                Start earning while making a positive impact today!
              </p>
              <FilledLink href="#">Join now</FilledLink>
            </div>
            <div
              className="affiliate-card  rounded-[12px] overflow-x-hidden py-[25px] px-[50px] max-md:w-full"
              style={{
                width: "calc(50% - 20px)",
                backgroundImage: "url('/Frame2.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-[305px] w-full">
                <span className="text-[#A1DBEA] text-[18px] font-normal leading-[24px]">
                  Bulk Order
                </span>
                <h2 className="text-[32px] font-semibold leading-[38.4px] text-left text-white py-[10px] ">
                  Need a Bulk Order? Get in Touch Now!
                </h2>
                <p className="text-base font-normal leading-[19.2px] text-left text-[#9E9FA7] mb-[18px]">
                  We&rsquo;re ready to provide the perfect solution for your
                  business. Let&apos;s talk!
                </p>
                <FilledLink href="#">Get a quote</FilledLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
