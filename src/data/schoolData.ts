/**
 * School Data Master Export (Barrel Exporter)
 * 
 * Modul ini berfungsi sebagai pusat integrasi data MA Uswatun Hasanah Semarang.
 * Data dipecah menjadi modul-modul independen agar mudah dipahami, dipelihara,
 * dan terstruktur secara bersih:
 * 
 * - types.ts             : Seluruh definisi tipe & interface TypeScript
 * - schoolInfo.ts        : Profil sekolah, Yayasan, Visi-Misi, Statistik, Program, & Fasilitas
 * - teachers.ts          : Data guru dan tenaga kependidikan
 * - alumni.ts            : Data profil dan testimoni alumni
 * - activitiesAndNews.ts : Prestasi juara, kegiatan ekstrakurikuler, dan berita
 * - spmb.ts              : Jalur pendaftaran SPMB, alur seleksi, jadwal, testimoni, & FAQ
 */

// 1. Ekspor seluruh tipe data
export * from '../types';

// 2. Ekspor data profil sekolah dan fasilitas
export * from './schoolInfo';

// 3. Ekspor data pendidik dan staf
export * from './teachers';

// 4. Ekspor data alumni
export * from './alumni';

// 5. Ekspor data kegiatan, prestasi, dan berita
export * from './activitiesAndNews';

// 6. Ekspor data penerimaan murid baru (SPMB)
export * from './spmb';
