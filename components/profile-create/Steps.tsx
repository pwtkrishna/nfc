import {
  Briefcase,
  ImageIcon,
  MapPin,
  Plus,
  Settings,
  Share2,
  // Upload,
  User,
  X,
} from "lucide-react";
import Button from "../Button";

import Input from "../Input";
import { Label } from "@radix-ui/react-label";
// import { Checkbox } from "@radix-ui/react-checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ProfileData } from "@/types/profile.interface";
import { useState } from "react";
import { CustomLink } from "@/types/profile-custom-link";
import ImageUploadSection from "./ImageUploadSection";

type Props = {
  step: number;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  newSkill: string;
  setNewSkill: React.Dispatch<React.SetStateAction<string>>;
};

const Steps = ({
  setProfileData,
  profileData,
  newSkill,
  setNewSkill,
  step,
}: Props) => {
  const [newCustomLink, setNewCustomLink] = useState({
    label: "",
    url: "",
    icon: "",
  });
  const [profilePic, setProfilePic] = useState<File | string | null>(null);
  // State for cover photo
  const [coverPhoto, setCoverPhoto] = useState<File | string | null>(null);

  const handleInputChange = (field: keyof ProfileData, value: unknown) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const addSkill = () => {
    const skill = newSkill.trim();
    if (skill) {
      setProfileData((prev) => {
        if (prev.skills.includes(skill)) return prev;
        return {
          ...prev,
          skills: [...prev.skills, skill],
        };
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(
        (skill: string) => skill !== skillToRemove
      ),
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
      custom_links: profileData.custom_links.filter(
        (_: unknown, i: number) => i !== index
      ),
    });
  };
  return (
    <>
      {/* Step 1: Basic Information */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <User className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white mb-2 inline-block">
                Full Name *
              </Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-white mb-2 inline-block"
              >
                Username *
              </Label>
              <div className="relative">
                {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                      {siteUrl ? `${siteUrl}/profile/` : ""}
                    </span> */}
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
                  className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white mb-2 inline-block">
                Email Address *
              </Label>
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
              <Label htmlFor="phone" className="text-white mb-2 inline-block">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
          </div>

          <ImageUploadSection
            label="Profile Picture"
            value={profilePic}
            onChange={(file) => setProfilePic(file)}
            // Optionally, pass a user icon as placeholderIcon
          />
        </div>
      )}

      {/* Step 2: Professional Details */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <Briefcase className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
            Professional Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="company_name"
                className="text-white mb-2 inline-block"
              >
                Company Name
              </Label>
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
              <Label
                htmlFor="job_title"
                className="text-white mb-2 inline-block"
              >
                Job Title
              </Label>
              <Input
                id="job_title"
                value={profileData.job_title}
                onChange={(e) => handleInputChange("job_title", e.target.value)}
                placeholder="Senior Software Engineer"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="industry"
                className="text-white mb-2 inline-block"
              >
                Industry
              </Label>
              <Input
                id="industry"
                value={profileData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                placeholder="Technology"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="headline" className="text-white mb-2 inline-block">
              Headline
            </Label>
            <Input
              id="headline"
              value={profileData.headline}
              onChange={(e) => handleInputChange("headline", e.target.value)}
              placeholder="Digital Marketer | Engineer | Entrepreneur"
              className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
            />
          </div>

          <div className="space-y-2 flex flex-col">
            <Label htmlFor="bio" className="text-white mb-2 inline-block">
              About / Bio
            </Label>
            <textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => handleInputChange("bio", e.target.value)}
              placeholder="Tell people about yourself, your experience, and what you do..."
              rows={4}
              className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white resize-none p-2"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white mb-2 inline-block">Skills</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {profileData.skills.map((skill: string, index: number) => (
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
                onKeyUp={(e) => e.key === "Enter" && addSkill()}
              />
              <Button
                onClick={addSkill}
                variant="outline"
                className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white cursor-pointer"
              >
                <Plus className="h-4 w-7" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Location & Contact */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
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

          <div className="space-y-2 flex flex-col">
            <Label htmlFor="area" className="text-white">
              Full Address
            </Label>
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
            <Label
              htmlFor="website_url"
              className="text-white inline-block mb-3"
            >
              Website URL
            </Label>
            <Input
              id="website_url"
              value={profileData.website_url}
              onChange={(e) => handleInputChange("website_url", e.target.value)}
              placeholder="https://yourwebsite.com"
              className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
            />
          </div>
        </div>
      )}

      {/* Step 4: Social Media */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <Share2 className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
            Social Media Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="linkedin_url"
                className="text-white inline-block mb-2"
              >
                LinkedIn
              </Label>
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
              <Label
                htmlFor="instagram_url"
                className="text-white inline-block mb-2"
              >
                Instagram
              </Label>
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
              <Label
                htmlFor="facebook_url"
                className="text-white inline-block mb-2"
              >
                Facebook
              </Label>
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
              <Label
                htmlFor="twitter_url"
                className="text-white inline-block mb-2"
              >
                Twitter / X
              </Label>
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
              <Label
                htmlFor="youtube_url"
                className="text-white inline-block mb-2"
              >
                YouTube
              </Label>
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
              <Label
                htmlFor="tiktok_url"
                className="text-white inline-block mb-2"
              >
                TikTok
              </Label>
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
              <Label
                htmlFor="github_url"
                className="text-white inline-block mb-2"
              >
                GitHub
              </Label>
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
              <Label
                htmlFor="behance_url"
                className="text-white inline-block mb-2"
              >
                Behance
              </Label>
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
            <div className="space-y-2">
              <Label
                htmlFor="snapchat_url"
                className="text-white inline-block mb-2"
              >
                Snapchat
              </Label>
              <Input
                id="snapchat_url"
                value={profileData.snapchat_url}
                onChange={(e) =>
                  handleInputChange("snapchat_url", e.target.value)
                }
                placeholder="https://snapchat.net/username"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="threads_url"
                className="text-white inline-block mb-2"
              >
                Threads
              </Label>
              <Input
                id="threads_url"
                value={profileData.threads_url}
                onChange={(e) =>
                  handleInputChange("threads_url", e.target.value)
                }
                placeholder="https://threads.net/username"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="pinterest_url"
                className="text-white inline-block mb-2"
              >
                Pinterest
              </Label>
              <Input
                id="pinterest_url"
                value={profileData.pinterest_url}
                onChange={(e) =>
                  handleInputChange("pinterest_url", e.target.value)
                }
                placeholder="https://pinterest.net/username"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="dribbble_url"
                className="text-white inline-block mb-2"
              >
                Dribble
              </Label>
              <Input
                id="dribbble_url"
                value={profileData.dribbble_url}
                onChange={(e) =>
                  handleInputChange("dribbble_url", e.target.value)
                }
                placeholder="https://dribble.net/username"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Settings */}
      {step === 5 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <Settings className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
            Profile Settings
          </h2>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-white">Profile Type</Label>
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
                      <RadioGroupItem
                        value={type}
                        id={type}
                        className="text-white cursor-pointer"
                      />
                      <Label
                        htmlFor={type}
                        className="capitalize cursor-pointer text-white"
                      >
                        {type}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            {/* <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_public"
                  checked={profileData.is_public}
                  onCheckedChange={(checked) =>
                    handleInputChange("is_public", checked)
                  }
                />
                <Label htmlFor="is_public" className="text-white">
                  Make profile public
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="allow_contact_form"
                  checked={profileData.allow_contact_form}
                  onCheckedChange={(checked) =>
                    handleInputChange("allow_contact_form", checked)
                  }
                />
                <Label htmlFor="allow_contact_form" className="text-white">
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
                <Label htmlFor="dark_mode_enabled" className="text-white">
                  Enable dark mode by default
                </Label>
              </div>
            </div> */}

            {/* <div className="space-y-2">
              <Label htmlFor="custom_theme_color" className="text-white">
                Custom Theme Color
              </Label>
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
            </div> */}
          </div>
        </div>
      )}

      {/* Step 6: Media & Files */}
      {step === 6 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
            <ImageIcon className="mr-3 h-6 w-6 text-[rgb(4,206,250)]" />
            Media & Files
          </h2>

          <div className="space-y-6">
            <ImageUploadSection
              label="Cover Photo"
              value={coverPhoto}
              onChange={(file) => setCoverPhoto(file)}
              width={400}
              height={128}
              rounded={false}
              // Optionally, pass a cover icon as placeholderIcon
            />

            {/* <div className="space-y-2">
              <Label className="text-white">Cover Photo</Label>
              <div className="w-full h-32 bg-[#1f2128] border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center">
                {profileData.profile_photo_path ? (
                  <Image
                    src={profileData.profile_photo_path || "/placeholder.svg"}
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
            </div> */}

            {/* <div className="space-y-2">
              <Label htmlFor="pdf_resume_url" className="text-white">
                Resume/CV (PDF)
              </Label>
              <Input
                id="pdf_resume_url"
                value={profileData.pdf_resume_url}
                onChange={(e) =>
                  handleInputChange("pdf_resume_url", e.target.value)
                }
                placeholder="Upload or paste URL to your resume"
                className="bg-[#1f2128] border-gray-700 focus:border-[rgb(4,206,250)] text-white"
              />
            </div> */}

            <div className="space-y-4">
              <Label className="text-white">Custom Links</Label>
              {profileData.custom_links.map(
                (link: CustomLink, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-[#1f2128] rounded border border-gray-700"
                  >
                    <span className="text-sm text-white">{link.label}</span>
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
                )
              )}

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
                  className="border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
