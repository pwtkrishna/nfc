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
  // ExternalLink,
  Briefcase,
  Eye,
} from "lucide-react";
import Button from "../Button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserProfilePage({ profile }: any) {
  const socialLinks = [
    { name: "LinkedIn", url: profile.linkedin_url, icon: "💼" },
    { name: "Instagram", url: profile.instagram_url, icon: "📷" },
    { name: "Facebook", url: profile.facebook_url, icon: "👥" },
    { name: "Twitter", url: profile.twitter_url, icon: "🐦" },
    { name: "YouTube", url: profile.youtube_url, icon: "📺" },
    { name: "GitHub", url: profile.github_url, icon: "💻" },
  ].filter((link) => link.url);

  return (
    <div className="min-h-screen bg-[#1f2128] text-white">
      {/* Cover Photo */}
      <div className="relative h-64 md:h-80 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f2128] z-10"></div>
        {profile.cover_photo ? (
          <Image
            src={profile.cover_photo || "/placeholder.svg"}
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[rgb(4,206,250)] to-[#1f2128]"></div>
        )}

        {/* Profile Actions */}
        <div className="absolute top-4 right-4 z-20 flex space-x-2">
          <Button
            variant="outline"
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button
            variant="outline"
            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
          >
            <Download className="h-4 w-4 mr-2" />
            Save Contact
          </Button>
        </div>

        {/* View Counter */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center text-white/80 text-sm">
          <Eye className="h-4 w-4 mr-1" />
          {profile.views_count.toLocaleString()} views
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-[#1f2128] overflow-hidden bg-[#282a33]">
              {profile.profile_picture ? (
                <Image
                  src={profile.profile_picture || "/placeholder.svg"}
                  alt={profile.full_name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                  {profile.full_name}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {profile.full_name}
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
                <h2 className="text-xl font-bold mb-4">About</h2>
                <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
              </Card>
            )}

            {/* Skills Section */}
            {profile.skills.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {/* {profile.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[rgba(4,206,250,0.1)] text-[rgb(4,206,250)] rounded-full text-sm border border-[rgba(4,206,250,0.3)]"
                    >
                      {skill}
                    </span>
                  ))} */}
                </div>
              </Card>
            )}

            {/* Gallery Section */}
            {profile.gallery.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* {profile.gallery.map((image: string, index: number) => (
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
                </div>
              </Card>
            )}

            {/* Custom Links */}
            {profile.custom_links.length > 0 && (
              <Card className="bg-[#282a33] border-none p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Links</h2>
                <div className="space-y-3">
                  {/* {profile.custom_links.map(
                    (
                      link: { url: string; icon: string; label: string },
                      index: number
                    ) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-[#1f2128] rounded-lg hover:bg-[rgba(4,206,250,0.1)] transition-colors group"
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-3">{link.icon}</span>
                          <span className="font-medium">{link.label}</span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[rgb(4,206,250)]" />
                      </Link>
                    )
                  )} */}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <div className="space-y-4">
                {profile.email && (
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[rgb(4,206,250)] mr-3 flex-shrink-0" />
                    <Link
                      href={`mailto:${profile.email}`}
                      className="text-gray-300 hover:text-white"
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
                      href={profile.website_url}
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
                <h2 className="text-xl font-bold mb-4">Social Media</h2>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 bg-[#1f2128] rounded-lg hover:bg-[rgba(4,206,250,0.1)] transition-colors"
                    >
                      <span className="text-lg mr-2">{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </Link>
                  ))}
                </div>
              </Card>
            )}

            {/* Download Actions */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Downloads</h2>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
                >
                  <Link href={profile.vcard_url} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download vCard
                  </Link>
                </Button>
                {profile.pdf_resume_url && (
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
                  >
                    <Link href={profile.pdf_resume_url} target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      View Resume
                    </Link>
                  </Button>
                )}
              </div>
            </Card>

            {/* QR Code */}
            <Card className="bg-[#282a33] border-none p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold mb-4">Share Profile</h2>
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
