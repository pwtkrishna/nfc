/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomLink, UserProfile } from "@/types/user-profile";

function formatCustomLinks(custom_links: CustomLink[]) {
  if (!custom_links || !Array.isArray(custom_links)) return [];
  return custom_links
    .map((link) =>
      link.url && link.label
        ? `URL;TYPE=${link.label.replace(/\s+/g, "")}:${link.url}`
        : ""
    )
    .filter(Boolean);
}

export function generateVCard(profile: UserProfile): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name || ""}`,
    `N:${profile.name || ""}`,
    profile.company_name ? `ORG:${profile.company_name}` : "",
    profile.job_title ? `TITLE:${profile.job_title}` : "",
    profile.email ? `EMAIL;TYPE=INTERNET:${profile.email}` : "",
    profile.phone ? `TEL;TYPE=CELL:${profile.phone}` : "",
    profile.whatsapp_number
      ? `TEL;TYPE=WHATSAPP:${profile.whatsapp_number}`
      : "",
    profile.website_url ? `URL:${profile.website_url}` : "",
    profile.linkedin_url ? `URL;TYPE=LinkedIn:${profile.linkedin_url}` : "",
    profile.instagram_url ? `URL;TYPE=Instagram:${profile.instagram_url}` : "",
    profile.facebook_url ? `URL;TYPE=Facebook:${profile.facebook_url}` : "",
    profile.twitter_url ? `URL;TYPE=Twitter:${profile.twitter_url}` : "",
    profile.youtube_url ? `URL;TYPE=YouTube:${profile.youtube_url}` : "",
    profile.github_url ? `URL;TYPE=GitHub:${profile.github_url}` : "",
    profile.behance_url ? `URL;TYPE=Behance:${profile.behance_url}` : "",
    profile.dribbble_url ? `URL;TYPE=Dribbble:${profile.dribbble_url}` : "",
    profile.pinterest_url ? `URL;TYPE=Pinterest:${profile.pinterest_url}` : "",
    profile.threads_url ? `URL;TYPE=Threads:${profile.threads_url}` : "",
    profile.tiktok_url ? `URL;TYPE=TikTok:${profile.tiktok_url}` : "",
    profile.snapchat_url ? `URL;TYPE=Snapchat:${profile.snapchat_url}` : "",
    ...formatCustomLinks(profile.custom_links),
    profile.area || profile.city || profile.state || profile.country
      ? `ADR;TYPE=HOME:;;${[
          profile.area,
          profile.city,
          profile.state,
          profile.country,
        ]
          .filter(Boolean)
          .join(", ")}`
      : "",
    profile.bio ? `NOTE:${profile.bio}` : "",
    profile.headline ? `TITLE:${profile.headline}` : "",
    profile.industry ? `ROLE:${profile.industry}` : "",
    profile.skills && profile.skills.length
      ? `CATEGORIES:${profile.skills.join(",")}`
      : "",
    profile.vcard_url ? `URL;TYPE=VCARD:${profile.vcard_url}` : "",
    profile.pdf_resume_url ? `URL;TYPE=RESUME:${profile.pdf_resume_url}` : "",
    profile.qr_code_url ? `PHOTO;VALUE=URI:${profile.qr_code_url}` : "",
    profile.avatar ? `PHOTO;VALUE=URI:${profile.avatar}` : "",
    profile.seo_title ? `TITLE:${profile.seo_title}` : "",
    profile.seo_description ? `NOTE:${profile.seo_description}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");
}
