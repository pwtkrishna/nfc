// import { StepConfig } from "@/types/steps-config";
// import { Briefcase, User } from "lucide-react";

// const steps: StepConfig[] = [
//   {
//     key: 1,
//     title: "Basic Info",
//     icon: User,
//     render: () => (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="name" className="text-white">
//             Full Name *
//           </Label>
//           <Input
//             id="name"
//             value={profileData.name}
//             onChange={(e) => handleInputChange("name", e.target.value)}
//             placeholder="John Doe"
//             className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="username">Username *</Label>
//           <div className="relative">
//             {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
//               {siteUrl ? `${siteUrl}/profile/` : ""}
//             </span> */}
//             <Input
//               id="username"
//               value={profileData.username}
//               onChange={(e) =>
//                 handleInputChange(
//                   "username",
//                   e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "")
//                 )
//               }
//               placeholder="johndoe"
//               className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white pl-36"
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="email">Email Address *</Label>
//           <Input
//             id="email"
//             type="email"
//             value={profileData.email}
//             onChange={(e) => handleInputChange("email", e.target.value)}
//             placeholder="john@example.com"
//             className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input
//             id="phone"
//             value={profileData.phone}
//             onChange={(e) => handleInputChange("phone", e.target.value)}
//             placeholder="+1 (555) 123-4567"
//             className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
//           />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label>Profile Picture</Label>
//         <div className="flex items-center space-x-4">
//           <div className="w-20 h-20 rounded-full bg-[#1f2128] border-2 border-gray-700 flex items-center justify-center overflow-hidden">
//             {profileData.avatar ? (
//               <Image
//                 src={profileData.avatar || "/placeholder.svg"}
//                 alt="Profile"
//                 width={80}
//                 height={80}
//                 className="object-cover"
//               />
//             ) : (
//               <User className="h-8 w-8 text-gray-400" />
//             )}
//           </div>
//           <Button
//             variant="outline"
//             className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
//           >
//             <Upload className="mr-2 h-4 w-4" />
//             Upload Photo
//           </Button>
//         </div>
//       </div>),
//   },
//   {
//     key: 2,
//     title: "Professional",
//     icon: Briefcase,
//     render: () => <div>{/* Your Professional JSX here */}</div>,
//   },
//   // ...more steps
// ];
