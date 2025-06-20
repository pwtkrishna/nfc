"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Download,
  Share2,
  MessageCircle,
  ExternalLink,
  Briefcase,
  Eye,
} from "lucide-react";
import Button from "../Button";
import { generateVCard } from "@/utils/vcard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserProfilePage({ profile }: any) {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: profile.linkedin_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 26 26"
        >
          <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: profile.instagram_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
        </svg>
      ),
    },
    {
      name: "Threads",
      url: profile.threads_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M46,9v32c0,2.757-2.243,5-5,5H9c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5h32C43.757,4,46,6.243,46,9z M33.544,35.913	c2.711-2.708,2.635-6.093,1.746-8.17c-0.54-1.255-1.508-2.33-2.798-3.108l-0.223-0.138c-0.33-0.208-0.609-0.375-1.046-0.542	c-0.008-0.278-0.025-0.556-0.058-0.807c-0.59-4.561-3.551-5.535-5.938-5.55c-2.154,0-3.946,0.92-5.044,2.592l1.672,1.098	c0.736-1.121,1.871-1.689,3.366-1.689c2.367,0.015,3.625,1.223,3.96,3.801c-1.141-0.231-2.426-0.314-3.807-0.233	c-3.924,0.226-5.561,2.591-5.442,4.836c0.134,2.486,2.278,4.222,5.216,4.222c0.13,0,0.259-0.003,0.384-0.011	c2.297-0.126,5.105-1.29,5.61-6.063c0.021,0.013,0.041,0.026,0.062,0.039l0.253,0.157c0.932,0.562,1.621,1.317,1.994,2.185	c0.643,1.501,0.682,3.964-1.322,5.966c-1.732,1.73-3.812,2.479-6.936,2.502c-3.47-0.026-6.099-1.145-7.812-3.325	c-1.596-2.028-2.42-4.953-2.451-8.677c0.031-3.728,0.855-6.646,2.451-8.673c1.714-2.181,4.349-3.299,7.814-3.325	c3.492,0.026,6.165,1.149,7.944,3.338c0.864,1.063,1.525,2.409,1.965,3.998l1.928-0.532c-0.514-1.858-1.301-3.449-2.341-4.728	c-2.174-2.674-5.363-4.045-9.496-4.076c-4.12,0.031-7.278,1.406-9.387,4.089c-1.875,2.383-2.844,5.712-2.879,9.91	c0.035,4.193,1.004,7.529,2.879,9.913c2.109,2.682,5.262,4.058,9.385,4.088C28.857,38.973,31.433,38.021,33.544,35.913z M28.993,25.405c0.07,0.016,0.138,0.031,0.202,0.046c-0.005,0.078-0.01,0.146-0.015,0.198c-0.314,3.928-2.295,4.489-3.761,4.569	c-0.091,0.005-0.181,0.008-0.271,0.008c-1.851,0-3.144-0.936-3.218-2.329c-0.065-1.218,0.836-2.576,3.561-2.732	c0.297-0.018,0.589-0.027,0.875-0.027C27.325,25.137,28.209,25.227,28.993,25.405z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: profile.facebook_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 30 30"
        >
          <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: profile.twitter_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 30 30"
        >
          <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: profile.youtube_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
        </svg>
      ),
    },
    {
      name: "Snapchat",
      url: profile.snapchat_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z"></path>
        </svg>
      ),
    },
    {
      name: "Tik Tok",
      url: profile.tiktok_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
        </svg>
      ),
    },
    {
      name: "Behance",
      url: profile.behance_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 12 18 L 18.730469 18 C 19.460469 18 23.410156 17.950312 23.410156 21.570312 C 23.410156 23.490313 22.099766 24.139688 21.509766 24.429688 C 22.389766 24.709688 24 25.52 24 28 C 24 31.83 19.609531 32 19.019531 32 L 12 32 L 12 18 z M 29 18 L 36 18 L 36 20 L 29 20 L 29 18 z M 15 20.429688 L 15 23.710938 L 18.220703 23.710938 C 18.660703 23.710938 20.119141 23.47 20.119141 22 C 20.119141 20.53 18.219687 20.429688 17.929688 20.429688 L 15 20.429688 z M 32.730469 21 C 36.630469 21 37.689609 24.039766 37.849609 24.759766 C 37.999609 25.489766 38 26.13 38 27 L 30.099609 27 C 30.099609 27.87 30.560625 29.830078 32.890625 29.830078 C 33.510625 29.830078 33.969453 29.680625 34.439453 29.390625 C 34.899453 29.100625 35.060938 28.819297 35.210938 28.529297 L 37.839844 28.529297 C 37.379844 29.679297 36.760078 30.550859 35.830078 31.130859 C 34.900078 31.710859 33.820078 32 32.580078 32 C 31.800078 32 31.03 31.850547 30.25 31.560547 C 29.63 31.270547 29.010781 30.840156 28.550781 30.410156 C 28.090781 29.970156 27.780703 29.389922 27.470703 28.669922 C 27.160703 28.089922 27 27.22 27 26.5 C 27 25.78 27.290469 21 32.730469 21 z M 32.730469 23.029297 C 30.470469 23.029297 30.099609 25.199844 30.099609 25.339844 L 35.060547 25.339844 C 34.900547 24.619844 34.250469 23.029297 32.730469 23.029297 z M 15 25.710938 L 15 29.570312 L 18.351562 29.570312 C 18.640563 29.570312 20.679688 29.480937 20.679688 27.710938 C 20.679687 25.950937 19.077562 25.710938 18.351562 25.710938 L 15 25.710938 z"></path>
        </svg>
      ),
    },
    {
      name: "Dribble",
      url: profile.dribble_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M3.5 6.63C4.38 5.25 5.58 4.1 7.01 3.3c2.07.68 4.32 2 6.05 3.97C10.16 8.33 6.76 8.34 3.5 6.63zM6.43 20.35c-2.71-1.79-4.5-4.86-4.5-8.35 0-1.26.23-2.47.67-3.58 2.11 1.1 4.27 1.59 6.36 1.59 1.88 0 3.69-.39 5.34-1.07.37.6.69 1.26.95 1.96-.95.34-1.89.79-2.78 1.34C9.4 14.16 7.24 17.06 6.43 20.35zM9.71 2.25C10.42 2.09 11.17 2 11.93 2c2.28 0 4.37.76 6.05 2.04-.85.92-1.88 1.73-3.03 2.37C13.47 4.57 11.59 3.19 9.71 2.25zM15.94 13.89c.46 4.66-1.6 7.53-1.85 7.87-.01 0-.01.01-.01.01C13.39 21.92 12.67 22 11.93 22c-1.3 0-2.53-.25-3.67-.7.59-2.98 2.49-5.64 5.26-7.36.73-.46 1.49-.83 2.27-1.11C15.85 13.17 15.9 13.53 15.94 13.89zM21.92 12.34c-.12 3.54-2.07 6.62-4.95 8.3.66-1.6 1.26-3.96.96-6.95-.05-.48-.12-.95-.21-1.4C19.16 12.01 20.59 12.02 21.92 12.34zM17.19 10.36c-.3-.82-.66-1.59-1.09-2.3 1.27-.73 2.41-1.63 3.34-2.66 1.19 1.35 2.02 3.02 2.34 4.87C20.3 10.01 18.74 10.04 17.19 10.36z"></path>
        </svg>
      ),
    },
    {
      name: "Pinterest",
      url: profile.pinterest_url,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="40"
          fill="#fff"
          viewBox="0 0 50 50"
        >
          <path d="M25,2C12.3178711,2,2,12.3178711,2,25c0,9.8841553,6.2675781,18.3302612,15.036377,21.5769653	c-0.2525635-2.2515869-0.2129517-5.9390259,0.2037964-7.7243652c0.3902588-1.677002,2.5212402-10.6871338,2.5212402-10.6871338	s-0.6433105-1.2883301-0.6433105-3.1911011c0-2.9901733,1.7324219-5.2211914,3.8898315-5.2211914	c1.8349609,0,2.7197876,1.3776245,2.7197876,3.0281982c0,1.8457031-1.1734619,4.6026611-1.78125,7.1578369	c-0.506897,2.1409302,1.0733643,3.8865356,3.1836548,3.8865356c3.821228,0,6.7584839-4.0296021,6.7584839-9.8453369	c0-5.147583-3.697998-8.7471924-8.9795532-8.7471924c-6.1167603,0-9.7072754,4.588562-9.7072754,9.3309937	c0,1.8473511,0.7111816,3.8286743,1.6000977,4.9069824c0.175293,0.2133179,0.2009277,0.3994141,0.1488647,0.6160278	c-0.1629028,0.678894-0.5250854,2.1392822-0.5970459,2.4385986c-0.0934448,0.3944702-0.3117676,0.4763184-0.7186279,0.2869263	c-2.685791-1.2503052-4.364502-5.1756592-4.364502-8.3295898c0-6.7815552,4.9268188-13.0108032,14.206543-13.0108032	c7.4588623,0,13.2547607,5.3138428,13.2547607,12.4179077c0,7.4100342-4.6729126,13.3729858-11.1568604,13.3729858	c-2.178894,0-4.2263794-1.132019-4.9267578-2.4691772c0,0-1.0783081,4.1048584-1.3404541,5.1112061	c-0.4524536,1.7404175-2.3892822,5.3460083-3.3615723,6.9837036C20.1704712,47.6074829,22.5397949,48,25,48	c12.6826172,0,23-10.3173828,23-23C48,12.3178711,37.6826172,2,25,2z"></path>
        </svg>
      ),
    },
  ].filter((link) => link.url);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleDownloadVCard(profile: any) {
    const vcf = generateVCard(profile);
    const blob = new Blob([vcf], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.name?.replace(/\s+/g, "_") || "contact"}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: "Check out my profile!",
        text: "See my profile on AwesomeApp.",
        url: window.location.href,
      });
    } else {
      // Fallback for unsupported browsers
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  }

  return (
    <div className="min-h-screen bg-[#1f2128] text-white mb-14">
      <div className="relative h-64 md:h-80 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f2128] z-10"></div>
        {profile.avatar_original ? (
          <Image
            src={profile.avatar_original || "/avatar.webp"}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[rgb(4,206,250)] to-[#1f2128]"></div>
        )}

        <Button
          variant="outline"
          className="bg-black border-white/20 text-white hover:bg-black/70 z-[9999] fixed bottom-6 left-2/4 -translate-x-2/4  flex items-center px-4 py-2 rounded-2xl hover:cursor-pointer"
          onClick={() => handleDownloadVCard(profile)}
        >
          <Download className="h-4 w-4 mr-2" />
          Save Contact
        </Button>

        {/* Profile Actions */}
        <div className="absolute top-4 right-4  flex space-x-2">
          <Button
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 flex items-center px-4 py-2 rounded-sm cursor-pointer"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          {/* <Button
            variant="outline"
            className="bg-black/50 border-white/20 text-white hover:bg-black/70 z-[9999] fixed bottom-6 left-2/4  flex items-center px-4 py-2"
            onClick={() => handleDownloadVCard(profile)}
          >
            <Download className="h-4 w-4 mr-2" />
            Save Contact
          </Button> */}
        </div>

        {/* View Counter */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center text-white/80 text-sm">
          <Eye className="h-4 w-4 mr-1" />
          {profile.views_count?.toLocaleString()} views
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-[#1f2128] overflow-hidden bg-[#282a33]">
              {profile.avatar ? (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                  {profile.name}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {profile.name}
            </h1>
            {profile.headline && (
              <p className="text-lg text-gray-300 mb-3">{profile.headline}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              {profile.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {profile.location}
                </div>
              )}
              {profile.company_name && (
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {profile.job_title} at {profile.company_name}
                </div>
              )}
            </div>
          </div>

          {profile.allow_contact_form && (
            <Button className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Me
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            {profile.bio && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-4">About</h2>
                <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
              </Card>
            )}

            {/* Skills Section */}
            {profile.skills?.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)] rounded-full text-sm border border-[rgba(4,206,250,0.3)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )}

            {/* Gallery Section */}
            {/* {profile.gallery.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-white">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {profile.gallery.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full hover:scale-105 transition-transform"
                      />
                    </div>
                  ))} */}
            {/* </div> */}
            {/* </Card>
            )} */}

            {/* Custom Links */}
            {profile.custom_links?.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-white">Links</h2>
                <div className="space-y-3">
                  {profile.custom_links.map(
                    (
                      link: { url: string; icon: string; label: string },
                      index: number
                    ) => (
                      <Link
                        key={index}
                        href={link.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-[#1f2128] rounded-lg hover:bg-[rgba(4,206,250,0.1)] transition-colors group"
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-3 text-white">
                            {link.icon}
                          </span>
                          <span className="font-medium text-white">
                            {link.label}
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[rgb(4,206,250)]" />
                      </Link>
                    )
                  )}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4 text-white">
                Contact Info
              </h2>
              <div className="space-y-4">
                {profile.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
                    <Link
                      href={`mailto:${profile.email}`}
                      className="text-gray-300 hover:text-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      {profile.email}
                    </Link>
                  </div>
                )}
                {profile.phone_number && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
                    <Link
                      href={`tel:${profile.phone_number}`}
                      className="text-gray-300 hover:text-white"
                    >
                      {profile.phone_number}
                    </Link>
                  </div>
                )}
                {profile.website_url && (
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
                    <Link
                      href={profile.website_url || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      Visit Website
                    </Link>
                  </div>
                )}
              </div>
            </Card>

            {/* Social Media */}
            {socialLinks.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-white">
                  Social Media
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks
                    .filter((social) => !!social.url)
                    .map((social, index) => (
                      <Link
                        key={index}
                        href={social.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center px-4 py-2 bg-[#1f2128] rounded-lg hover:bg-[rgba(4,206,250,0.1)] transition-colors "
                      >
                        <span className="text-lg mr-2 text-white">
                          {social.icon}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {social.name}
                        </span>
                      </Link>
                    ))}
                </div>
              </Card>
            )}

            {/* Download Actions */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white">Downloads</h2>
              <div className="space-y-3">
                <Button
                  className="w-full bg-[#1f2128] rounded-lg border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white px-4 py-2 flex items-center cursor-pointer"
                  onClick={() => handleDownloadVCard(profile)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download vCard
                </Button>
                {profile.pdf_resume_url && (
                  <Button className="w-full bg-[#1f2128] rounded-lg border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white px-4 py-2">
                    <Link
                      href={profile.pdf_resume_url || ""}
                      target="_blank"
                      className="flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      View Resume
                    </Link>
                  </Button>
                )}
              </div>
            </Card>

            {/* QR Code */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold mb-4 text-white">
                Share Profile
              </h2>
              <div className="w-32 h-32 mx-auto bg-white rounded-lg p-2 mb-4">
                <Image
                  src={
                    profile.qr_code_url ||
                    "/placeholder.svg?height=128&width=128"
                  }
                  alt="QR Code"
                  width={128}
                  height={128}
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-400">Scan to view this profile</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
