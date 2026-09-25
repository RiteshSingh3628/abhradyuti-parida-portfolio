export const actor = {
  name: "Abhradyuti Parida",
  title: "Actor",
  tagline: "Crafting character-driven stories across films, web series and short films.",
  location: "Hyderabad, Telangana",
  nativePlace: "Sambalpur, Odisha",
  email: "abhradyutiparida99@gmail.com",
  phone: "+91 85988 11088",
  phoneHref: "tel:+918598811088",
  instagram: "https://www.instagram.com/abhradyutiparida?stkn=MTM5NGwzNWN1c296ZQ%3D%3D&utm_source=qr",
  instagramHandle: "@abhradyutiparida",
  bio: [
    "Abhradyuti Parida is an actor based in Hyderabad, Telangana, originally from Sambalpur, Odisha.",
  ],
};

export const physicalAttributes = [
  { label: "Height", value: "5'8\" · 174cm" },
  { label: "Weight", value: "75kg" },
  { label: "Age Range", value: "22 – 27" },
  { label: "Hair", value: "Dark Brown" },
  { label: "Eyes", value: "Dark Brown" },
  { label: "Skin Tone", value: "Medium-Tan" },
  { label: "Undertone", value: "Warm-Neutral" },
  { label: "Location", value: "Hyderabad, Telangana" },
  { label: "Languages", value: "Odia · Hindi · English · Telugu" },
];

export const languages = [
  { name: "Odia", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Telugu", level: "Intermediate" },
];

export const training = [
  {
    title: "Diploma in Acting",
    place: "Ramanaidu Film School, Hyderabad",
  },
];

export const skills = ["Dancing"];

export type Credit = {
  id: string;
  title: string;
  year: number;
  type: string;
  role: string;
  director: string;
  link: string;
  /** YouTube video id, or playlist id when isPlaylist is true. */
  youtubeId: string;
  isPlaylist?: boolean;
};

export const credits: Credit[] = [
  {
    id: "ghanteswari-8km",
    title: "Ghanteswari 8km",
    year: 2026,
    type: "Short Film",
    role: "Lead Role",
    director: "Abhradyuti Parida",
    link: "https://youtu.be/_1EoYYljLo8",
    youtubeId: "_1EoYYljLo8",
  },
  {
    id: "anand-63",
    title: "Anand 63%",
    year: 2026,
    type: "Short Film",
    role: "Key Role",
    director: "Jatoth Sai Venkat",
    link: "https://youtu.be/XNw78yQnyTQ",
    youtubeId: "XNw78yQnyTQ",
  },
  {
    id: "chehera",
    title: "Chehera",
    year: 2025,
    type: "Short Film",
    role: "Co-Lead Role",
    director: "Ayush Kumar",
    link: "https://youtu.be/yBkHW31Fd2E",
    youtubeId: "yBkHW31Fd2E",
  },
  {
    id: "tentel-paayen",
    title: "Tentel Paayen",
    year: 2024,
    type: "Short Film",
    role: "Key Role",
    director: "Aryaman Padhee",
    link: "https://youtu.be/wW8VV4uAt0g",
    youtubeId: "wW8VV4uAt0g",
  },
  {
    id: "prolife-diagnostics",
    title: "Prolife Diagnostics",
    year: 2024,
    type: "Advertisement",
    role: "Lead Role",
    director: "Dev Meher",
    link: "https://youtu.be/EQmRSO_PcGI",
    youtubeId: "EQmRSO_PcGI",
  },
  {
    id: "aa-bhi-jaa",
    title: "Aa Bhi Jaa",
    year: 2024,
    type: "Music Video",
    role: "Co-Lead Role",
    director: "Ram Kumar",
    link: "https://youtu.be/O8j32xWPVuM",
    youtubeId: "O8j32xWPVuM",
  },
  {
    id: "ummeed",
    title: "Ummeed: Adhuri Bhi Aur Puri Bhi",
    year: 2023,
    type: "Web Series",
    role: "Lead Role",
    director: "Ram Kumar",
    link: "https://youtu.be/z9hswLPtjmo",
    youtubeId: "z9hswLPtjmo",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// The two-up feature row that opens the gallery.
export const galleryFeature: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-01-full-body-walk.jpg",
    alt: "Abhradyuti Parida in a black tuxedo, mid-stride, studio portrait",
    width: 1336,
    height: 2000,
  },
  {
    src: "/images/gallery/gallery-02-headshot-tie.jpg",
    alt: "Abhradyuti Parida adjusting his tie, formal close portrait",
    width: 1202,
    height: 1800,
  },
];

// A single full-bleed break between the feature row and the masonry set.
export const galleryBreakout: GalleryImage = {
  src: "/images/gallery/gallery-06-blue-mood.jpg",
  alt: "Abhradyuti Parida seated, cool blue-toned mood portrait",
  width: 1200,
  height: 1800,
};

// Freeform masonry grid, in natural aspect ratio.
export const galleryMasonry: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-03-full-body-tux.jpg",
    alt: "Abhradyuti Parida in a black tuxedo, full body studio portrait",
    width: 1336,
    height: 2000,
  },
  {
    src: "/images/gallery/gallery-08-camera-candid.jpg",
    alt: "Abhradyuti Parida holding a camera outdoors, candid moment",
    width: 819,
    height: 1800,
  },
  {
    src: "/images/gallery/gallery-04-dramatic-close.jpg",
    alt: "Abhradyuti Parida, dramatic close portrait with watch and ring detail",
    width: 1202,
    height: 1800,
  },
  {
    src: "/images/gallery/gallery-09-reading-candid.jpg",
    alt: "Abhradyuti Parida reading a book, candid seated portrait",
    width: 1800,
    height: 1202,
  },
  {
    src: "/images/gallery/gallery-05-glasses-tie.jpg",
    alt: "Abhradyuti Parida in glasses and a loosened tie, studio portrait",
    width: 1202,
    height: 1800,
  },
  {
    src: "/images/gallery/gallery-07-candid-laugh.jpg",
    alt: "Abhradyuti Parida, candid laughing portrait",
    width: 1202,
    height: 1800,
  },
  {
    src: "/images/gallery/gallery-10-pensive.jpg",
    alt: "Abhradyuti Parida, pensive close portrait",
    width: 1202,
    height: 1800,
  },
];
