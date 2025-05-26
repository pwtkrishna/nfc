export interface CustomLink {
  label: string;
  url: string;
  icon: string;
}

export interface UserProfile {
  // Basic Info
  name: string;
  username: string;
  email: string;
  email_verified: boolean;
  phone: string;
  whatsapp_number: string | null;
  avatar: string;
  avatar_original: string;
  user_type: string;
  about: string;
  gender: string;
  dob: string;
  state: string;
  country: string;
  city: string;
  area: string;

  // Professional
  website_url: string;
  headline: string;
  bio: string;
  company_name: string;
  job_title: string;
  industry: string;
  skills: string[];

  // Social Media
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

  // Custom Links
  custom_links: CustomLink[];

  // Media & Files
  vcard_url: string;
  pdf_resume_url: string;
  gallery: string[];
  nfc_card_id: number;
  slug: string;
  profile_type: string;
  is_public: boolean;
  allow_contact_form: boolean;
  dark_mode_enabled: boolean;
  custom_theme_color: string;
  qr_code_url: string;
  seo_title: string;
  seo_description: string;
}
