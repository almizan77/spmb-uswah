import type {
  SpmbTrack,
  SpmbStep,
  SpmbScheduleItem,
  TestimonialItem,
  FaqItem,
} from '../types';

export const spmbTracks: SpmbTrack[] = [
  {
    id: 'reguler',
    name: 'Jalur Reguler',
    badge: 'Tes Seleksi Mandiri',
    desc: 'Jalur seleksi berbasis tes potensi akademik komputer (CBT), tes kemampuan membaca Al-Qur’an (tahsin/tajwid), dan wawancara kepribadian calon siswa/siswi serta orang tua.',
    benefits: [
      'Pilihan jurusan: MIPA atau IPS',
      'Fasilitas laboratorium & pembelajaran modern terpadu',
      'DISKON 50% Infaq Gedung & Sarana bagi pendaftar Gelombang 1',
    ],
    requirements: [
      'Lulusan MTs / SMP sederajat tahun 2025 atau 2026',
      'Rapor semester 1 s.d 5 (nilai rata-rata minimal 75)',
      'Mengikuti rangkaian tes CBT dan wawancara',
    ],
    icon: 'edit_note',
  },
  {
    id: 'prestasi',
    name: 'Jalur Prestasi Unggulan',
    badge: 'Bebas Uang Pangkal Gedung',
    desc: 'Didedikasikan bagi siswa berprestasi di bidang sains (OSN/KSM), riset ilmiah (MYRES/OPSI), bahasa, maupun olahraga & seni tingkat kabupaten, provinsi, atau nasional.',
    benefits: [
      'Bebas biaya tes akademik (Langsung verifikasi berkas)',
      'Pembebasan 100% biaya Infaq Pembangunan Sarana Gedung',
      'Pembinaan khusus masuk tim olimpiade sains madrasah',
    ],
    requirements: [
      'Sertifikat Juara 1-3 resmi Kemenag, Kemendikbud, atau KONI',
      'Rapor semester 1 s.d 5 dengan nilai mapel terkait minimal 85',
      'Rekomendasi dari Kepala Sekolah / Madrasah asal',
    ],
    icon: 'military_tech',
    isPopular: true,
  },
  {
    id: 'tahfidz',
    name: 'Jalur Beasiswa Tahfidz Qur’an',
    badge: 'Bebas Biaya SPP s.d 100%',
    desc: 'Fasilitas beasiswa pendidikan bertingkat hingga gratis SPP penuh bagi penghafal Al-Qur’an yang lulus uji sima’an tashih dewan muhaffizh.',
    benefits: [
      'Hafal 5 - 9 Juz: Beasiswa SPP 50% selama 3 tahun',
      'Hafal 10 - 19 Juz: Beasiswa SPP 75% + Infaq Gedung 50%',
      'Hafal 20 - 30 Juz: Beasiswa Bebas Biaya SPP & Pendidikan Penuh 100%',
      'Bimbingan langsung sanad muttashil Al-Qur’an',
    ],
    requirements: [
      'Memiliki hafalan Al-Qur’an minimal 5 Juz mutqin',
      'Lulus uji sima’an langsung bersama Dewan Muhaffizh MAUH',
      'Surat keterangan / syahadah dari pesantren/rumah tahfidz',
    ],
    icon: 'auto_stories',
    isPopular: true,
  },
  {
    id: 'khusus',
    name: 'Jalur Afirmasi & Dhuafa Berprestasi',
    badge: 'Bantuan KIP & Mitra BAZNAS',
    desc: 'Skema pembiayaan khusus untuk memberikan kesempatan pendidikan madrasah berkualitas bagi siswa dan siswi berprestasi dari keluarga pemegang KIP / PKH.',
    benefits: [
      'Subsidi penuh biaya pendidikan melalui kemitraan BAZNAS',
      'Bantuan paket seragam dan buku modul pembelajaran',
      'Pembinaan pembekalan wirausaha dan life-skills',
    ],
    requirements: [
      'Memiliki Kartu Indonesia Pintar (KIP) / PKH / SKTM resmi',
      'Rapor semester 1 s.d 5 dengan rata-rata nilai minimal 80',
      'Lolos survei verifikasi faktual tim panitia',
    ],
    icon: 'handshake',
  },
];

export const spmbSteps: SpmbStep[] = [
  {
    step: 1,
    title: 'Isi Formulir Online',
    desc: 'Lengkapi biodata calon siswa, pilihan jurusan, jalur masuk, serta nomor kontak WhatsApp aktif orang tua / wali murid.',
    icon: 'app_registration',
    duration: '15 Menit',
  },
  {
    step: 2,
    title: 'Unggah Berkas Persyaratan',
    desc: 'Unggah pindaian (scan) Kartu Keluarga, Rapor semester 1-5, NISN, dan sertifikat prestasi penunjang jalur.',
    icon: 'upload_file',
    duration: 'Format PDF/JPG',
  },
  {
    step: 3,
    title: 'Verifikasi Berkas Panitia',
    desc: 'Panitia SPMB memeriksa keabsahan dokumen dan menerbitkan Kartu Tanda Peserta Ujian beserta jadwal tes.',
    icon: 'fact_check',
    duration: '1-2 Hari Kerja',
  },
  {
    step: 4,
    title: 'Asesmen & Tes Seleksi',
    desc: 'Pelaksanaan ujian potensi akademik komputer (CBT), tes baca tahsin Al-Qur’an, dan wawancara calon siswa/siswi serta wali murid.',
    icon: 'psychology',
    duration: 'Online / Tatap Muka',
  },
  {
    step: 5,
    title: 'Pengumuman Kelulusan',
    desc: 'Hasil seleksi diumumkan secara transparan melalui portal SPMB website dan notifikasi resmi WhatsApp.',
    icon: 'campaign',
    duration: 'Sesuai Kalender',
  },
  {
    step: 6,
    title: 'Daftar Ulang & Pengukuran Seragam',
    desc: 'Penyerahan berkas fisik, administrasi daftar ulang, pengukuran seragam, dan masa ta’aruf siswa baru (MATSAMA).',
    icon: 'verified_user',
    duration: 'Resmi Menjadi Siswa Baru',
  },
];

export const spmbSchedule: SpmbScheduleItem[] = [
  {
    event: 'Pendaftaran Online & Unggah Berkas',
    wave1: '1 Jan - 31 Mar 2026',
    wave2: '1 Apr - 15 Jun 2026',
    note: 'Melalui portal spmb.uswatunhasanah.sch.id',
  },
  {
    event: 'Verifikasi Administrasi Berkas',
    wave1: 'Setiap Hari Kerja',
    wave2: 'Setiap Hari Kerja',
    note: 'Notifikasi via WhatsApp pendaftar',
  },
  {
    event: 'Pelaksanaan Tes Seleksi (CBT & Tahfidz)',
    wave1: 'Sabtu, 11 April 2026',
    wave2: 'Sabtu, 20 Juni 2026',
    note: 'Tatap muka di kampus / online Zoom luar pulau',
  },
  {
    event: 'Pengumuman Kelulusan',
    wave1: 'Rabu, 15 April 2026',
    wave2: 'Rabu, 24 Juni 2026',
    note: 'Pengumuman di web & portal akun pendaftar',
  },
  {
    event: 'Daftar Ulang & Pengukuran Seragam',
    wave1: '16 - 25 April 2026',
    wave2: '25 - 30 Juni 2026',
    note: 'Sekretariat Panitia SPMB MAUH',
  },
  {
    event: 'Awal Masuk & MATSAMA (Orientasi Siswa Baru)',
    wave1: '13 Juli 2026',
    wave2: '13 Juli 2026',
    note: 'Serentak bersama siswa-siswi baru 2026/2027',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Drs. H. Rachmat Hidayat',
    role: 'Wali Murid M. Fikri (Alumni 2024 - Mahasiswa FK UNAIR)',
    status: 'Orang Tua',
    avatarText: 'RH',
    rating: 5,
    quote:
      'Alhamdulillah, putra kami tidak hanya menuntaskan hafalan 15 Juz selama di MA Uswatun Hasanah, tapi juga lulus SNBT masuk Fakultas Kedokteran Unair. Pembinaan karakternya tertib, guru-gurunya membimbing layaknya orang tua kandung.',
    achievementBadge: 'Anak Lolos FK UNAIR & Hafidz 15 Juz',
  },
  {
    id: 'testi-2',
    name: 'Hj. Siti Nurkhalifah, S.Pd.',
    role: 'Wali Siswa Aisyah (Kelas XI Program MIPA Riset)',
    status: 'Orang Tua',
    avatarText: 'SN',
    rating: 5,
    quote:
      'Sistem pelaporan progres belajar digitalnya memudahkan kami yang berada di luar kota untuk memantau setoran hafalan dan nilai ujian putri kami setiap pekan. Lingkungannya aman, bersih, dan sangat kondusif bagi muslimah.',
    achievementBadge: 'Sistem Monitoring Belajar Transparan',
  },
  {
    id: 'testi-3',
    name: 'Ahmad Zaki Mubarak, Lc.',
    role: 'Alumni 2022 - Mahasiswa Fakultas Ushuluddin Univ. Al-Azhar Kairo Mesir',
    status: 'Alumni',
    avatarText: 'AZ',
    rating: 5,
    quote:
      'Penguasaan Bahasa Arab di MA Uswatun Hasanah sangat ditekankan dengan metode praktis. Berkat rekomendasi para asatidz madrasah dan sertifikat TOAFL, saya bisa lolos beasiswa penuh studi ke Mesir tanpa kendala adaptasi bahasa.',
    achievementBadge: 'Penerima Beasiswa Al-Azhar Mesir',
  },
  {
    id: 'testi-4',
    name: 'Nadia Azzahra',
    role: 'Siswi Kelas XII - Juara 1 MYRES Kemenag Bidang MST 2024',
    status: 'Siswa',
    avatarText: 'NA',
    rating: 5,
    quote:
      'Di madrasah ini minat riset saya difasilitasi penuh. Laboratorium komputernya lengkap, bimbingan para guru sangat sabar hingga kami bisa memenangkan medali emas penelitian ilmiah tingkat nasional.',
    achievementBadge: 'Peneliti Muda Berprestasi Nasional',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'Siapa saja yang dapat mendaftar di SPMB MA Uswatun Hasanah?',
    answer:
      'Seluruh siswa-siswi yang saat ini berada di kelas IX (sembilan) atau telah lulus dari jenjang MTs / SMP / Pesantren sederajat negeri maupun swasta di seluruh Indonesia, serta memenuhi kriteria sehat jasmani dan rohani.',
    category: 'SPMB',
  },
  {
    question: 'Apa saja dokumen persyaratan yang harus diunggah?',
    answer:
      'Pindaian (scan) Kartu Keluarga (KK), Akta Kelahiran, NISN yang valid, Rapor semester 1 s.d 5 yang dilegalisir, pas foto terbaru berpakaian rapi dengan latar belakang merah/biru, serta sertifikat prestasi bagi peminat Jalur Prestasi/Tahfidz.',
    category: 'SPMB',
  },
  {
    question: 'Apakah ada program beasiswa untuk siswa berprestasi dan penghafal Qur’an?',
    answer:
      'Ya, kami menyediakan Beasiswa Tahfidz Qur’an (bebas SPP 50% hingga 100% untuk siswa dan siswi hafal 5 s.d 30 Juz mutqin), Beasiswa Prestasi Juara KSM/OSN (pembebasan uang pangkal gedung), serta Jalur Afirmasi bekerjasama dengan BAZNAS untuk dhuafa berprestasi.',
    category: 'Biaya',
  },
  {
    question: 'Bagaimana jam kegiatan belajar mengajar harian di MA Uswatun Hasanah?',
    answer:
      'Pembelajaran reguler berlangsung hari Senin hingga Jumat mulai pukul 07.00 s.d 15.30 WIB, diawali dengan pembiasaan tadarus Al-Qur’an dan salat Dhuha bersama, dilanjutkan kurikulum akademik terpadu, praktikum laboratorium, dan ekstrakurikuler.',
    category: 'Akademik',
  },
  {
    question: 'Bagaimana pelaksanaan tes seleksi bagi pendaftar dari luar kota atau luar provinsi?',
    answer:
      'Bagi calon pendaftar yang berdomisili di luar wilayah Kota Semarang / Jawa Tengah, pelaksanaan ujian potensi akademik berbasis komputer (CBT), tes sima’an tahfidz, dan wawancara dapat difasilitasi secara online melalui platform video conference Zoom interaktif.',
    category: 'SPMB',
  },
  {
    question: 'Apakah ijazah MA Uswatun Hasanah diakui untuk seleksi Kedinasan, Akmil/Akpol, dan PTN?',
    answer:
      'Sangat diakui secara penuh. Ijazah resmi Madrasah Aliyah MA Uswatun Hasanah memiliki kedudukan hukum dan kurikulum yang setara dengan SMA/SMK Negeri untuk seleksi SNBP, SNBT, STAN, IPDN, Akpol, Akmil, serta universitas luar negeri.',
    category: 'Akademik',
  },
  {
    question: 'Berapa rincian biaya pendaftaran dan tahapan daftar ulang?',
    answer:
      'Pendaftaran akun formulir SPMB online sepenuhnya GRATIS (Rp 0). Biaya administrasi daftar ulang bagi siswa dan siswi yang dinyatakan lulus seleksi diumumkan secara transparan dengan skema cicilan hingga 3 kali, dan terdapat potongan subsidi bagi pendaftar Gelombang 1.',
    category: 'Biaya',
  },
];
