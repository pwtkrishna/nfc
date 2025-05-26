"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ChevronRight,
  ChevronLeft,
  User,
  Briefcase,
  MapPin,
  Share2,
  Settings,
  ImageIcon,
  Upload,
  X,
  Plus,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";

export interface ProfileData {
  name: string;
  username: string;
  email: string;
  email_verified?: boolean;
  phone: string;
  whatsapp_number?: string | null;
  avatar: string;
  avatar_original?: string;
  user_type?: string;
  about: string;
  status?: string;
  state: string;
  country: string;
  city: string;
  area: string;
  website_url: string;
  headline: string;
  bio: string;
  company_name: string;
  job_title: string;
  industry: string;
  skills: string[];
  linkedin_url: string;
  instagram_url: string;
  facebook_url: string;
  twitter_url: string;
  youtube_url: string;
  tiktok_url: string;
  snapchat_url: string;
  github_url: string;
  behance_url: string;
  dribbble_url: string;
  pinterest_url: string;
  threads_url: string;
  custom_links: Array<{ label: string; url: string; icon: string }>;
  vcard_url?: string;
  pdf_resume_url?: string;
  gallery: string[];
  nfc_card_id?: number;
  slug?: string;
  profile_type: string;
  is_public: boolean;
  allow_contact_form: boolean;
  dark_mode_enabled: boolean;
  custom_theme_color: string;
  qr_code_url?: string;
  seo_title: string;
  seo_description: string;
}

export default function CreateProfilePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    username: "",
    email: "",
    // email_verified?: boolean,
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
  const [newCustomLink, setNewCustomLink] = useState({
    label: "",
    url: "",
    icon: "",
  });

  const steps = [
    { number: 1, title: "Basic Info", icon: User },
    { number: 2, title: "Professional", icon: Briefcase },
    { number: 3, title: "Location & Contact", icon: MapPin },
    { number: 4, title: "Social Media", icon: Share2 },
    { number: 5, title: "Settings", icon: Settings },
    { number: 6, title: "Media & Files", icon: ImageIcon },
  ];

  const handleInputChange = (field: keyof ProfileData, value: unknown) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const addCustomLink = () => {
    if (newCustomLink.label.trim() && newCustomLink.url.trim()) {
      setProfileData({
        ...profileData,
        custom_links: [...profileData.custom_links, { ...newCustomLink }],
      });
      setNewCustomLink({ label: "", url: "", icon: "" });
    }
  };

  const removeCustomLink = (index: number) => {
    setProfileData({
      ...profileData,
      custom_links: profileData.custom_links.filter((_, i) => i !== index),
    });
  };

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
        // If the API expects these as JSON strings, uncomment below:
        // custom_links: JSON.stringify(profileData.custom_links),
        // skills: JSON.stringify(profileData.skills),
        // gallery: JSON.stringify(profileData.gallery),
      };

      const res = await fetch("https://nfc.aardana.com/users", {
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
      router.push(`/users/${result.data.username || result.data.slug}`);
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Create Your NFC Profile
          </h1>
          <div className="h-1 w-20 bg-[rgb(4,206,250)] mx-auto mb-6"></div>
          <p className="text-gray-300">
            Build your digital business card in just a few steps
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {steps.map((stepItem, index) => (
              <div key={stepItem.number} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    step >= stepItem.number
                      ? "bg-[rgba(4,206,250,0.2)] border-2 border-[rgb(4,206,250)] text-[rgb(4,206,250)]"
                      : "bg-[#282a33] border-2 border-gray-600 text-gray-400"
                  }`}
                >
                  <stepItem.icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-xs font-medium ${
                    step >= stepItem.number
                      ? "text-[rgb(4,206,250)]"
                      : "text-gray-400"
                  }`}
                >
                  {stepItem.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mt-2 ${
                      step > stepItem.number
                        ? "bg-[rgb(4,206,250)]"
                        : "bg-gray-600"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 p-8 rounded-xl">
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username *</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                      yourdomain.com/u/
                    </span>
                    <Input
                      id="username"
                      value={profileData.username}
                      onChange={(e) =>
                        handleInputChange(
                          "username",
                          e.target.value.toLowerCase().replace(/[^a-z0-9]/g, "")
                        )
                      }
                      placeholder="johndoe"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white pl-32"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Profile Picture</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-[#1f2128] border-2 border-gray-700 flex items-center justify-center overflow-hidden">
                    {profileData.avatar ? (
                      <Image
                        src={profileData.avatar || "/placeholder.svg"}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Professional Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input
                    id="company_name"
                    value={profileData.company_name}
                    onChange={(e) =>
                      handleInputChange("company_name", e.target.value)
                    }
                    placeholder="Acme Corporation"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job_title">Job Title</Label>
                  <Input
                    id="job_title"
                    value={profileData.job_title}
                    onChange={(e) =>
                      handleInputChange("job_title", e.target.value)
                    }
                    placeholder="Senior Software Engineer"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    value={profileData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    placeholder="Technology"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="headline">Headline</Label>
                <Input
                  id="headline"
                  value={profileData.headline}
                  onChange={(e) =>
                    handleInputChange("headline", e.target.value)
                  }
                  placeholder="Digital Marketer | Engineer | Entrepreneur"
                  className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About / Bio</Label>
                <textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Tell people about yourself, your experience, and what you do..."
                  rows={4}
                  className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label>Skills</Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profileData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)] border border-[rgba(4,206,250,0.3)]"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 hover:text-red-400"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button
                    onClick={addSkill}
                    variant="outline"
                    className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location & Contact */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Location & Contact
              </h2>

              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profileData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="San Francisco, CA, USA"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp_number">WhatsApp Number</Label>
                  <Input
                    id="whatsapp_number"
                    value={profileData.whatsapp_number}
                    onChange={(e) =>
                      handleInputChange("whatsapp_number", e.target.value)
                    }
                    placeholder="+1 (555) 123-4567"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>
              </div> */}

              <div className="space-y-2">
                <Label htmlFor="area">Full Address</Label>
                <textarea
                  id="area"
                  value={profileData.area}
                  onChange={(e) => handleInputChange("area", e.target.value)}
                  placeholder="123 Main Street, Suite 100, San Francisco, CA 94103"
                  rows={3}
                  className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website_url">Website URL</Label>
                <Input
                  id="website_url"
                  value={profileData.website_url}
                  onChange={(e) =>
                    handleInputChange("website_url", e.target.value)
                  }
                  placeholder="https://yourwebsite.com"
                  className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                />
              </div>
            </div>
          )}

          {/* Step 4: Social Media */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Share2 className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Social Media Links
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url">LinkedIn</Label>
                  <Input
                    id="linkedin_url"
                    value={profileData.linkedin_url}
                    onChange={(e) =>
                      handleInputChange("linkedin_url", e.target.value)
                    }
                    placeholder="https://linkedin.com/in/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram_url">Instagram</Label>
                  <Input
                    id="instagram_url"
                    value={profileData.instagram_url}
                    onChange={(e) =>
                      handleInputChange("instagram_url", e.target.value)
                    }
                    placeholder="https://instagram.com/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="facebook_url">Facebook</Label>
                  <Input
                    id="facebook_url"
                    value={profileData.facebook_url}
                    onChange={(e) =>
                      handleInputChange("facebook_url", e.target.value)
                    }
                    placeholder="https://facebook.com/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter_url">Twitter / X</Label>
                  <Input
                    id="twitter_url"
                    value={profileData.twitter_url}
                    onChange={(e) =>
                      handleInputChange("twitter_url", e.target.value)
                    }
                    placeholder="https://twitter.com/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="youtube_url">YouTube</Label>
                  <Input
                    id="youtube_url"
                    value={profileData.youtube_url}
                    onChange={(e) =>
                      handleInputChange("youtube_url", e.target.value)
                    }
                    placeholder="https://youtube.com/@username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tiktok_url">TikTok</Label>
                  <Input
                    id="tiktok_url"
                    value={profileData.tiktok_url}
                    onChange={(e) =>
                      handleInputChange("tiktok_url", e.target.value)
                    }
                    placeholder="https://tiktok.com/@username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub</Label>
                  <Input
                    id="github_url"
                    value={profileData.github_url}
                    onChange={(e) =>
                      handleInputChange("github_url", e.target.value)
                    }
                    placeholder="https://github.com/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="behance_url">Behance</Label>
                  <Input
                    id="behance_url"
                    value={profileData.behance_url}
                    onChange={(e) =>
                      handleInputChange("behance_url", e.target.value)
                    }
                    placeholder="https://behance.net/username"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Settings */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Settings className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Profile Settings
              </h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Profile Type</Label>
                  <RadioGroup
                    value={profileData.profile_type}
                    onValueChange={(value) =>
                      handleInputChange("profile_type", value)
                    }
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    {["professional", "creative", "business", "personal"].map(
                      (type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <RadioGroupItem value={type} id={type} />
                          <Label
                            htmlFor={type}
                            className="capitalize cursor-pointer"
                          >
                            {type}
                          </Label>
                        </div>
                      )
                    )}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="is_public"
                      checked={profileData.is_public}
                      onCheckedChange={(checked) =>
                        handleInputChange("is_public", checked)
                      }
                    />
                    <Label htmlFor="is_public">Make profile public</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="allow_contact_form"
                      checked={profileData.allow_contact_form}
                      onCheckedChange={(checked) =>
                        handleInputChange("allow_contact_form", checked)
                      }
                    />
                    <Label htmlFor="allow_contact_form">
                      Allow contact form
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="dark_mode_enabled"
                      checked={profileData.dark_mode_enabled}
                      onCheckedChange={(checked) =>
                        handleInputChange("dark_mode_enabled", checked)
                      }
                    />
                    <Label htmlFor="dark_mode_enabled">
                      Enable dark mode by default
                    </Label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom_theme_color">Custom Theme Color</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="custom_theme_color"
                      value={profileData.custom_theme_color}
                      onChange={(e) =>
                        handleInputChange("custom_theme_color", e.target.value)
                      }
                      placeholder="#04cefa"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white max-w-32"
                    />
                    <div
                      className="w-10 h-10 rounded border-2 border-gray-700"
                      style={{
                        backgroundColor: profileData.custom_theme_color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Media & Files */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <ImageIcon className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
                Media & Files
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Cover Photo</Label>
                  <div className="w-full h-32 bg-[#1f2128] border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
                    {profileData.avatar_original ? (
                      <Image
                        src={profileData.avatar_original || "/placeholder.svg"}
                        alt="Cover"
                        width={400}
                        height={128}
                        className="object-cover rounded"
                      />
                    ) : (
                      <div className="text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400">Upload cover photo</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pdf_resume_url">Resume/CV (PDF)</Label>
                  <Input
                    id="pdf_resume_url"
                    value={profileData.pdf_resume_url}
                    onChange={(e) =>
                      handleInputChange("pdf_resume_url", e.target.value)
                    }
                    placeholder="Upload or paste URL to your resume"
                    className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                  />
                </div>

                <div className="space-y-4">
                  <Label>Custom Links</Label>
                  {profileData.custom_links.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-[#1f2128] rounded border border-gray-700"
                    >
                      <span className="text-sm">{link.label}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-sm text-[rgb(4,206,250)]">
                        {link.url}
                      </span>
                      <button
                        onClick={() => removeCustomLink(index)}
                        className="ml-auto text-red-400 hover:text-red-300"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Input
                      value={newCustomLink.label}
                      onChange={(e) =>
                        setNewCustomLink({
                          ...newCustomLink,
                          label: e.target.value,
                        })
                      }
                      placeholder="Link label"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                    <Input
                      value={newCustomLink.url}
                      onChange={(e) =>
                        setNewCustomLink({
                          ...newCustomLink,
                          url: e.target.value,
                        })
                      }
                      placeholder="https://example.com"
                      className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                    />
                    <Button
                      onClick={addCustomLink}
                      variant="outline"
                      className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Link
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <Button
              onClick={prevStep}
              disabled={step === 1}
              variant="outline"
              className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white disabled:opacity-50"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            {step < 6 ? (
              <Button
                onClick={nextStep}
                className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white"
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
}
