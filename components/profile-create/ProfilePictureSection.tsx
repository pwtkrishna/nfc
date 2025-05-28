import { useRef } from "react";
import { Label } from "../ui/label";
import Image from "next/image";
import { Upload, User } from "lucide-react";
import Button from "../Button";
import { ProfileData } from "@/types/profile.interface";

type ProfilePictureSectionProps = {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
};

export default function ProfilePictureSection({
  profileData,
  setProfileData,
}: ProfilePictureSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData((prev) => ({
        ...prev,
        avatar: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      <Label className="text-white mb-2 inline-block">Profile Picture</Label>
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-[#1f2128] border-2 border-gray-700 flex items-center justify-center overflow-hidden">
          {profileData.avatar ? (
            <Image
              src={profileData.avatar}
              alt="Profile"
              width={80}
              height={80}
              className="object-cover"
            />
          ) : (
            <User className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <Button
          variant="outline"
          className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white flex items-center px-4 py-2 hover:cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          type="button"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Photo
        </Button>
      </div>
    </div>
  );
}
