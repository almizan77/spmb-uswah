/**
 * ==============================================================================
 * MA USWATUN HASANAH SEMARANG - DATA TYPES & SCHEMAS
 * ==============================================================================
 * Berkas ini mendefinisikan seluruh kontrak data (TypeScript Interfaces)
 * yang digunakan di seluruh aplikasi secara terpusat, konsisten, dan aman (type-safe).
 */

// --------------------------------------------------------------------------
// 1. INFORMASI LEMBAGA & YAYASAN
// --------------------------------------------------------------------------

export interface SocialLinks {
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  subheadline: string;
  logoUrl: string;
  npsn: string;
  nsm: string;
  accreditation: string;
  accreditationSk: string;
  skKemenag: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  whatsappClean: string;
  email: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  socials: SocialLinks;
}

export interface VisionMission {
  vision: string;
  missions: string[];
}

export interface YayasanUnitTheme {
  badgeBg: string;
  badgeText: string;
  border: string;
  hoverBorder: string;
  glow: string;
  accentBtn: string;
}

export interface YayasanUnit {
  id: 'pondok' | 'ra' | 'mts' | 'ma';
  name: string;
  badge: string;
  shortTitle: string;
  level: string;
  description: string;
  features: string[];
  websiteUrl: string;
  isCurrentSite?: boolean;
  icon: string;
  stats: string;
  contactWa: string;
  colorTheme: YayasanUnitTheme;
}

export interface YayasanInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  units: YayasanUnit[];
}

// --------------------------------------------------------------------------
// 2. STATISTIK & KEUNGGULAN
// --------------------------------------------------------------------------

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  description: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

// --------------------------------------------------------------------------
// 3. PROGRAM, FASILITAS, PRESTASI & KEGIATAN
// --------------------------------------------------------------------------

export interface ProgramItem {
  id: string;
  title: string;
  tag: string;
  icon: string;
  image: string;
  images?: string[];
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  target: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  specs: string[];
}

export interface AchievementItem {
  id: string;
  competition: string;
  rank: string;
  level: 'Internasional' | 'Nasional' | 'Provinsi' | 'Kabupaten/Kota';
  year: string;
  studentName: string;
  category: 'Sains & Riset' | 'Keagamaan & MTQ' | 'Bahasa & Diplomasi' | 'Olahraga & Seni';
  photo: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  schedule: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Akademik' | 'Prestasi' | 'Kegiatan' | 'Pengumuman' | 'Keagamaan';
  date: string;
  author: string;
  thumbnail: string;
  summary: string;
  content: string[];
  featured?: boolean;
}

// --------------------------------------------------------------------------
// 4. DEWAN GURU & JEJAK ALUMNI
// --------------------------------------------------------------------------

export type TeacherCategory = 'pimpinan' | 'pai' | 'mipa' | 'ips' | 'bahasa' | 'umum';

export interface TeacherItem {
  id: string;
  name: string;
  nip?: string;
  position: string;
  subjects: string[];
  category: TeacherCategory;
  categoryLabel: string;
  education: string;
  photo: string;
  experience?: string;
  certifications?: string[];
  quote?: string;
  email?: string;
  birthPlaceDate?: string;
  address?: string;
  photoPosition?: string;
}

export interface AlumniItem {
  id: string;
  name: string;
  graduationYear: string;
  currentRole: string;
  institution: string;
  major: string;
  photo: string;
  quote: string;
  photoPosition?: string;
  photoScale?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  status: 'Alumni' | 'Siswa' | 'Orang Tua';
  avatarText: string;
  rating: number;
  quote: string;
  achievementBadge?: string;
}

// --------------------------------------------------------------------------
// 5. PENERIMAAN MURID BARU (SPMB)
// --------------------------------------------------------------------------

export interface SpmbTrack {
  id: string;
  name: string;
  badge: string;
  desc: string;
  benefits: string[];
  requirements: string[];
  icon: string;
  isPopular?: boolean;
}

export interface SpmbStep {
  step: number;
  title: string;
  desc: string;
  icon: string;
  duration: string;
}

export interface SpmbScheduleItem {
  event: string;
  wave1: string;
  wave2: string;
  note: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'SPMB' | 'Akademik' | 'Sarana & Fasilitas' | 'Biaya';
}

export interface PendaftaranFormData {
  namaLengkap: string;
  nisn: string;
  asalSekolah: string;
  jurusan: string;
  sistemBelajar: string;
  whatsapp: string;
  setuju: boolean;
}

export interface StatusCheckResult {
  nomorRegistrasi: string;
  namaSiswa: string;
  nisn: string;
  asalSekolah: string;
  jurusan: string;
  statusVerifikasi: 'TERVERIFIKASI' | 'MENUNGGU_VERIFIKASI' | 'PERLU_PERBAIKAN';
  jadwalTes: string;
  lokasiTes: string;
  gelombang: string;
}

export interface SpmbRegistrationRecord {
  regNumber: string;
  studentName: string;
  track: string;
  major: string;
  gender: string;
  nisn: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  schoolOrigin: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  memorizationJuz: string;
  raportAverage: string;
  date: string;
  time: string;
}
