import type {
  YayasanInfo,
  SchoolInfo,
  VisionMission,
  StatisticItem,
  ProgramItem,
  AdvantageItem,
  FacilityItem,
} from '../types';

export const yayasanInfo: YayasanInfo = {
  name: 'Yayasan Darul Husna',
  legalName: 'Yayasan Pendidikan Islam Darul Husna Semarang',
  tagline: 'Menaungi Pendidikan Islam Terpadu: Pondok Pesantren, RA, MTs, dan MA',
  description:
    'Yayasan Darul Husna adalah payung kelembagaan pendidikan Islam yang membina dan menaungi empat pilar unit pendidikan terintegrasi di Mangkang Wetan, Semarang: Pondok Pesantren, RA (Raudhatul Athfal), MTs (Madrasah Tsanawiyah), dan MA (Madrasah Aliyah).',
  address: 'Jl. Raya Mangkang Wetan, Kec. Tugu',
  city: 'Kota Semarang, Jawa Tengah',
  units: [
    {
      id: 'pondok',
      name: 'Pondok Pesantren Darul Husna',
      badge: 'Pondok Pesantren',
      shortTitle: 'Pondok',
      level: 'Pesantren & Tahfidz 30 Juz',
      description:
        'Pusat pendalaman kajian kitab kuning (kutubut turats), tahfidzul Qur’an mutqin 30 juz bersanad, asrama putra-putri, dan pembentukan karakter akhlak santri yang mandiri serta berjiwa kepemimpinan.',
      features: [
        'Tahfidz Al-Qur’an Mutqin 30 Juz',
        'Kajian Kitab Kuning (Turats) Lengkap',
        'Asrama Putra & Putri Representatif',
        'Bilingual Language Area (Arab & Inggris)',
      ],
      websiteUrl: 'https://pondok.darulhusna.sch.id',
      icon: 'mosque',
      stats: 'Tahfidz 30 Juz & Asrama',
      contactWa: '6281276171829',
      colorTheme: {
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        badgeText: 'text-emerald-300',
        border: 'border-emerald-500/30 hover:border-emerald-400',
        hoverBorder: 'hover:shadow-emerald-900/40',
        glow: 'from-emerald-950/70 via-emerald-900/40 to-black/70',
        accentBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white',
      },
    },
    {
      id: 'ra',
      name: 'RA Darul Husna',
      badge: 'Raudhatul Athfal (RA)',
      shortTitle: 'RA',
      level: 'Pendidikan Anak Usia Dini (TK Islam)',
      description:
        'Pendidikan usia dini berbasis fitrah Islami, pembiasaan hafalan surat pendek, doa harian, adab santun, serta stimulasi motorik dan kreativitas ceria dalam suasana belajar yang menyenangkan.',
      features: [
        'Sentra Bermain & Kreativitas Anak',
        'Hafalan Juz ‘Amma & Doa Harian Ceria',
        'Penanaman Adab & Akhlak Sejak Dini',
        'Tenaga Pendidik Ramah & Tersertifikasi',
      ],
      websiteUrl: 'https://ra.darulhusna.sch.id',
      icon: 'child_care',
      stats: 'Usia 4 - 6 Tahun (PAUD/TK)',
      contactWa: '6281276171829',
      colorTheme: {
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        badgeText: 'text-amber-300',
        border: 'border-amber-500/30 hover:border-amber-400',
        hoverBorder: 'hover:shadow-amber-900/40',
        glow: 'from-amber-950/70 via-amber-900/40 to-black/70',
        accentBtn: 'bg-amber-600 hover:bg-amber-500 text-white',
      },
    },
    {
      id: 'mts',
      name: 'MTs Uswatun Hasanah',
      badge: 'Madrasah Tsanawiyah (MTs)',
      shortTitle: 'MTs',
      level: 'Pendidikan Menengah Pertama (Setara SMP)',
      description:
        'Madrasah Tsanawiyah unggulan berbasis kurikulum Kemenag dan penguatan riset dasar, tahfidz berkelanjutan, pembiasaan sains teknologi, dan kepanduan pramuka berprestasi.',
      features: [
        'Kelas Riset Sains & Robotik Dasar',
        'Program Tahfidz Berkelanjutan',
        'Laboratorium Komputer & IPA Modern',
        'Pembinaan Minat Bakat & Ekstrakurikuler',
      ],
      websiteUrl: 'https://mts.darulhusna.sch.id',
      icon: 'school',
      stats: 'Terakreditasi A • Jenjang MTs',
      contactWa: '6281276171829',
      colorTheme: {
        badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
        badgeText: 'text-cyan-300',
        border: 'border-cyan-500/30 hover:border-cyan-400',
        hoverBorder: 'hover:shadow-cyan-900/40',
        glow: 'from-cyan-950/70 via-cyan-900/40 to-black/70',
        accentBtn: 'bg-cyan-600 hover:bg-cyan-500 text-white',
      },
    },
    {
      id: 'ma',
      name: 'MA Uswatun Hasanah',
      badge: 'Madrasah Aliyah (MA)',
      shortTitle: 'MA',
      level: 'Pendidikan Menengah Atas (Setara SMA)',
      description:
        'Madrasah Aliyah berprestasi nasional di bidang riset (MYRES/KSM), pembinaan intensif tembus PTN & beasiswa luar negeri, tahfidz Al-Qur’an 30 juz, serta penanaman karakter Iman, Ilmu, dan Amal.',
      features: [
        'Peminatan MIPA Riset & IPS Keagamaan',
        'Juara Nasional KSM & Riset Kemenag',
        'Kampus Hijau 3 Lantai Representatif',
        '94% Lulusan Diterima di PTN/Luar Negeri',
      ],
      websiteUrl: 'https://ma.darulhusna.sch.id',
      isCurrentSite: true,
      icon: 'domain',
      stats: 'Website Aktif Saat Ini',
      contactWa: '6281276171829',
      colorTheme: {
        badgeBg: 'bg-primary/25 text-primary-fixed border-primary/50',
        badgeText: 'text-secondary-fixed',
        border: 'border-primary/50 hover:border-primary',
        hoverBorder: 'hover:shadow-primary/40',
        glow: 'from-primary/40 via-primary-container/30 to-black/80',
        accentBtn: 'bg-primary hover:bg-primary-container text-white',
      },
    },
  ],
};

export const schoolInfo: SchoolInfo = {
  name: 'MA Uswatun Hasanah Semarang',
  shortName: 'MAUH',
  tagline: 'Membentuk Generasi Berkarakter dengan Iman, Ilmu dan Amal',
  logoUrl: '/images/logo-mauh.png',
  subheadline:
    "Membangun generasi Qur'ani yang berakhlak mulia, berprestasi, dan siap menghadapi masa depan berlandaskan Iman, Ilmu, dan Amal di bawah naungan Yayasan Darul Husna Semarang.",
  npsn: '20363212',
  nsm: '131233740008',
  accreditation: 'B (Baik)',
  accreditationSk: '044/BANSM-JTG/SK/X/2018',
  skKemenag: 'B-1422/Kw.11.2/PP.00.5/2021',
  address: 'Jl. Raya Mangkang Wetan, Kec. Tugu',
  city: 'Kota Semarang',
  province: 'Jawa Tengah',
  postalCode: '50156',
  phone: '(024) 76171829',
  whatsapp: '+62 812-7617-1829',
  whatsappClean: '6281276171829',
  email: 'info@mauh-semarang.sch.id',
  mapsUrl: 'https://maps.google.com/?q=MA+Uswatun+Hasanah+Mangkang+Wetan+Semarang',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.485304671404!2d110.301375!3d-6.969145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fb555555555%3A0x1234567890abcdef!2sMangkang%20Wetan%2C%20Tugu%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  socials: {
    instagram: 'https://instagram.com/ma_uswatunhasanah_smg',
    facebook: 'https://facebook.com/mauswatunhasanahsmg',
    youtube: 'https://youtube.com/@mauswatunhasanahsemarang',
  },
};

export const visionMissionData: VisionMission = {
  vision:
    'TERWUJUDNYA PESERTA DIDIK YANG BERIMAN, BERAKHLAKUL KARIMAH, UNGGUL DALAM PRESTASI, TERAMPIL, MANDIRI, BERWAWASAN EKOLOGI, CAKAP MEMANFAATKAN TEKNOLOGI, SERTA MELESTARIKAN NILAI-NILAI BUDAYA BANGSA.',
  missions: [
    'Meningkatkan prestasi akademik maupun non akademik.',
    'Menyelenggarakan pembelajaran berbasis teknologi.',
    'Membangun karakter peserta didik yang religius.',
    'Meningkatkan partisipasi dalam menjaga kebersihan serta kelestarian lingkungan.',
    'Mengimplementasikan sistem pengelolaan sampah 3R (Reduce, Reuse, Recycle).',
    'Membangun budaya kepedulian antar siswa sehingga tercipta lingkungan pergaulan yang saling menjaga, mendukung dan waspada terhadap ancaman narkotika.',
  ],
};

export const statisticsData: StatisticItem[] = [
  {
    id: 'students',
    value: 540,
    suffix: '+',
    label: 'Siswa & Siswi Aktif',
    icon: 'groups',
    description: 'Terbagi dalam kelas peminatan MIPA dan IPS',
  },
  {
    id: 'teachers',
    value: 19,
    suffix: '',
    label: 'Guru & Tenaga Pendidik',
    icon: 'school',
    description: '100% S1/S2 lulusan PTN ternama & Universitas Timur Tengah bersertifikat',
  },
  {
    id: 'achievements',
    value: 128,
    suffix: '+',
    label: 'Prestasi Juara',
    icon: 'military_tech',
    description: 'Tingkat Nasional (KSM, MYRES, OPSI), Provinsi, & Daerah',
  },
  {
    id: 'programs',
    value: 24,
    suffix: '+',
    label: 'Program & Ekstrakurikuler',
    icon: 'palette',
    description: 'Mewadahi bakat sains, bahasa, kepanduan, olahraga, & seni Islami',
  },
  {
    id: 'ptn',
    value: 94,
    suffix: '%',
    label: 'Lulusan Tembus PTN/LN',
    icon: 'stars',
    description: 'Diterima melalui SNBP, SNBT, Kedinasan, & Beasiswa Univ. Al-Azhar Mesir',
  },
];

export const featuredPrograms: ProgramItem[] = [
  {
    id: 'tahfidz',
    title: 'Amaliyah Aswaja Annahdliyyah',
    tag: 'Keagamaan Unggulan',
    icon: 'menu_book',
    image: '/images/aswaja-apel.jpg',
    images: [
      '/images/aswaja-apel.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwRBV9k1SVX-vkF27M1Dww6H_tmA8FIl-kbruO_0Y90f--tc-suM221bgFV36Y84OiwAR-TULUBw9IdREL5L9KkzUYd7p8zDqaRyL0NfZeMGRxXQjq_R30GrToyMCksqD_KC6jR14POnWvnsdGZir-oE82J03S8GaIS7ub2nOrpaeBcr8X4tsAPAKA8NOkrFwXKSrnj-V9HUARp4CudRC1YVUmROOTwQc6Eh56eXzru7u7Jd8yYxb3',
      '/images/hero-building.jpg',
    ],
    shortDesc:
      "Pengamalan dan pembiasaan amaliyah Ahlussuannah wal jama'ah An-Nahdiyyah: Istighotsah, Sholat duha, tahlil dan do'a",
    fullDesc:
      'Program unggulan pembiasaan tradisi dan amaliyah Ahlussunnah wal Jama’ah (Aswaja) An-Nahdliyyah untuk menumbuhkan kecintaan pada Rasulullah SAW, para sahabat, ulama salafus shalih, dan memupuk spiritualitas siswa-siswi berkarakter tawassuth, tawazun, i’tidal, dan tasamuh.',
    highlights: [
      'Pembiasaan Istighotsah & Tahlil rutin',
      'Kajian amaliah Aswaja Annahdliyyah & Fikrah Nahdliyyah',
      'Pembacaan Shalawat Diba’, Simthudduror, & Ratib Al-Haddad',
      'Peringatan Hari Besar Islam & ziarah maqbarah auliya’',
    ],
    target: 'Karakter Siswa-Siswi Aswaja Annahdliyyah',
  },
  {
    id: 'karakter',
    title: 'Ngaji Kitab Kuning',
    tag: 'Turats Pesantren',
    icon: 'auto_stories',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwRBV9k1SVX-vkF27M1Dww6H_tmA8FIl-kbruO_0Y90f--tc-suM221bgFV36Y84OiwAR-TULUBw9IdREL5L9KkzUYd7p8zDqaRyL0NfZeMGRxXQjq_R30GrToyMCksqD_KC6jR14POnWvnsdGZir-oE82J03S8GaIS7ub2nOrpaeBcr8X4tsAPAKA8NOkrFwXKSrnj-V9HUARp4CudRC1YVUmROOTwQc6Eh56eXzru7u7Jd8yYxb3',
    shortDesc:
      'Kajian kitab kuning (kutubut turats) berbasis metode sorogan dan bandongan: nahwu, sharaf, fiqih, aqidah, akhlak, dan tasawuf dibimbing asatidz berkompeten.',
    fullDesc:
      'Pendalaman khazanah keilmuan Islam klasik melalui pembelajaran kitab kuning standar pesantren salaf. Peserta didik dilatih membaca, menerjemahkan gandul/makna pegon, memahami kaidah gramatika bahasa Arab (Nahwu & Sharaf), serta menggali dalil hukum fiqih mazhab Syafi’i.',
    highlights: [
      'Metode pembelajaran sorogan, bandongan, & musyawarah',
      'Kajian kitab Jurumiyyah, Imrithi, Safinatun Najah, Fathul Qorib',
      'Penguasaan makna pegon dan gramatika bahasa Arab',
      'Sanad keilmuan mu’tabar dari masyayikh pesantren',
    ],
    target: 'Mutafaqqih Fiddin & Mahir Turats',
  },
  {
    id: 'minatbakat',
    title: 'Pengembangan Bakat, Seni & Olahraga',
    tag: 'Eksplorasi Potensi',
    icon: 'sports_soccer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCtOFdgwlQ29aF6S4_jQEADnDOB25uGJL2XtjS_fhh9GW9-uPXKPYh6cX8_wjD9PNyx4O4MPEGtEj5n_7rg4qS-yYQGk42tSf6jS6bbXchteNKYAPhjGdxWBO1tRUpYLxS4N8ubVMvvlL9I7Tmk2Vh2Du5Ez8nzWG-U8H5D7qybQovF2_wifIoeeN5qegQTmY2AVLrr5W-V1UZRsJSlZqG6y14ZU8uFZa3Osjg9iRKee0G244yajVj',
    shortDesc:
      'Wadah ekspresi siswa dan siswi di bidang seni tilawah Qur’an, kaligrafi, jurnalistik media, kepanduan Pramuka, serta cabang olahraga unggulan seperti futsal, badminton, dan bela diri silat.',
    fullDesc:
      'Setiap bakat siswa dan siswi dihargai dan dibimbing oleh pelatih profesional. Kami menyediakan fasilitas sarana olahraga indoor/outdoor dan studio multimedia untuk memacu prestasi non-akademik di tingkat daerah hingga nasional.',
    highlights: [
      'Ekskul Futsal, Badminton, Tenis Meja, & Pencak Silat',
      'Klub Seni Kaligrafi Islam & Qari/Qariah MTQ',
      'Tim Jurnalistik & Broadcast Siswa Kreatif',
      'Gugus Depan Pramuka Berprestasi',
    ],
    target: 'Podium Kejuaraan O2SN & Seni',
  },
];

export const whyChooseUs: AdvantageItem[] = [
  {
    id: 'lingkungan',
    title: 'Lingkungan Islami dan Nyaman',
    desc: 'Kampus asri berhawa sejuk yang menenangkan jiwa dan memacu konsentrasi belajar.',
    icon: 'mosque',
  },
  {
    id: 'guru',
    title: 'Guru Kompeten dan Berpengalaman',
    desc: 'Didukung oleh pendidik berijazah magister dan sarjana, lulusan perguruan tinggi terkemuka terakreditasi nasional.',
    icon: 'psychology',
  },
  {
    id: 'seimbang',
    title: 'Program Akademik & Keagamaan Seimbang',
    desc: 'Mengintegrasikan kurikulum nasional Kemendikbudristek/Kemenag dengan kurikulum kepesantrenan.',
    icon: 'balance',
  },
  {
    id: 'bakat',
    title: 'Pengembangan Bakat & Minat Terarah',
    desc: 'Extrakulikuler Olahraga Dan Seni',
    icon: 'emoji_events',
  },
  {
    id: 'karakter',
    title: 'Pembinaan Karakter & Akhlak Mulia',
    desc: 'Sistem pengasuhan dengan pendekatan keteladanan yang membentuk pribadi beradab, berbakti, dan mandiri.',
    icon: 'verified_user',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    id: 'gedung-kampus',
    title: 'Gedung Kampus Hijau 3 Lantai',
    category: 'Kampus Terpadu',
    image: '/images/hero-building1 (2).jpg',
    caption:
      'Gedung pembelajaran 3 lantai representatif MA Uswatun Hasanah Semarang yang dilengkapi ruang kelas modern, laboratorium riset, serta lingkungan asri sejuk berwawasan Islami.',
    specs: ['Gedung 3 Lantai Representatif', 'Ruang Kelas Nyaman & Interaktif', 'Halaman & Taman Asri Hijau', 'Akses Strategis Kota Semarang'],
  },
  {
    id: 'lab-komputer',
    title: 'Lapangan Olahraga',
    category: 'Olahraga & Jasmani',
    image:
      'public/Lapangan.jpg',
    caption:
      'Sarana lapangan olahraga multiguna terbuka dan representatif untuk kegiatan olahraga siswa-siswi, senam pagi, latihan ketangkasan, dan apel upacara madrasah.',
    specs: ['Lapangan Terbuka Luas', 'Kegiatan Olahraga & Senam', 'Area Apel & Upacara', 'Fasilitas Kebugaran Siswa'],
  },
  {
    id: 'smart-class',
    title: 'Laboratorium Komputer',
    category: 'TIK & Komputasi',
    image:
      'public/lab.jpg',
    caption:
      'Laboratorium komputer modern berpendingin ruangan dengan perangkat PC terkini, koneksi internet berkecepatan tinggi, serta server mandiri untuk praktikum teknologi dan ujian berbasis komputer (CBT).',
    specs: ['Unit PC yang memadai', 'Jaringan Internet Cepat', 'Ruangan memiliki AC', 'Server Ujian CBT Mandiri'],
  },
  {
    id: 'perpustakaan-digital',
    title: 'Mushola',
    category: 'Sarana Ibadah',
    image:
      'public/musholla.jpg',
    caption:
      'Mushola madrasah yang bersih, nyaman, dan representatif untuk pelaksanaan sholat fardhu berjamaah, sholat Dhuha, tadarus Al-Qur’an.',
    specs: ['Tempat Wudhu Bersih & Terpisah', 'Pembiasaan Sholat Berjamaah'],
  },
];
