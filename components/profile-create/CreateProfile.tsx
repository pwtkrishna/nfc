"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Briefcase,
  MapPin,
  Share2,
  Settings,
  ImageIcon,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { ProfileData } from "@/types/profile.interface";
import ProfileCreateHeader from "@/components/profile-create/ProfileCreateHeader";
import ProfileProgressSteps from "@/components/profile-create/ProfileProgressSteps";
import { StepsType } from "@/types/profile-steps";
import Steps from "@/components/profile-create/Steps";

const CreateProfile = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    username: "",
    email: "",
    email_verified: false,
    phone: "",
    whatsapp_number: "",
    avatar: "",
    avatar_original: "",
    user_type: "",
    about: "",
    status: "",
    state: "",
    country: "",
    city: "",
    area: "",
    website_url: "",
    headline: "",
    bio: "",
    company_name: "",
    job_title: "",
    industry: "",
    skills: [],
    services: [],
    linkedin_url: "",
    instagram_url: "",
    facebook_url: "",
    twitter_url: "",
    youtube_url: "",
    tiktok_url: "",
    snapchat_url: "",
    github_url: "",
    behance_url: "",
    dribbble_url: "",
    pinterest_url: "",
    threads_url: "",
    custom_links: [],
    vcard_url: "",
    pdf_resume_url: "",
    gallery: [],
    slug: "",
    profile_type: "",
    is_public: true,
    allow_contact_form: false,
    dark_mode_enabled: false,
    custom_theme_color: "",
    qr_code_url: "",
    seo_title: "",
    seo_description: "",
  });

  const [newSkill, setNewSkill] = useState("");
  const [newService, setNewService] = useState("");

  // const [siteUrl, setSiteUrl] = useState<string | null>(null);

  const steps: StepsType = [
    { number: 1, title: "Basic Info", icon: User },
    { number: 2, title: "Professional", icon: Briefcase },
    { number: 3, title: "Location & Contact", icon: MapPin },
    { number: 4, title: "Social Media", icon: Share2 },
    { number: 5, title: "Settings", icon: Settings },
    { number: 6, title: "Media & Files", icon: ImageIcon },
  ];

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Prepare the payload
      const payload = {
        ...profileData,
        status: true,
        // If the API expects these as JSON strings, uncomment below:
        custom_links: JSON.stringify(profileData.custom_links),
        skills: JSON.stringify(profileData.skills),
        services: JSON.stringify(profileData.services),
        gallery: JSON.stringify(profileData.gallery),
      };

      const res = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create profile");
      }

      const result = await res.json();

      // Redirect to the created profile (use username or slug)
      router.push(`/profile/${result.data.username || result.data.slug}`);
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("There was an error creating your profile.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#1f2128] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6">
        <ProfileCreateHeader />
        {/* Progress Steps */}
        <ProfileProgressSteps steps={steps} step={step} />

        <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-8 rounded-xl">
          <Steps
            step={step}
            setProfileData={setProfileData}
            profileData={profileData}
            newSkill={newSkill}
            setNewSkill={setNewSkill}
            newService={newService}
            setNewService={setNewService}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <Button
              onClick={prevStep}
              disabled={step === 1}
              variant="outline"
              className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white disabled:opacity-50 flex items-center px-4 py-2 hover:cursor-pointer"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {step < 6 ? (
              <Button
                onClick={nextStep}
                className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white flex items-center px-4 py-2 hover:cursor-pointer"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white flex items-center px-4 py-2"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Profile...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Create Profile
                  </span>
                )}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateProfile;
