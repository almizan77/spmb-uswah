import React, { useState } from 'react';

const achievementSlides = [
  {
    id: 'mtq-1',
    image: 'public/mtq-1.jpg',
    alt: 'Poster prestasi Luthfi Putra Setiawan, Juara 2 MTQ cabang Hifdzil Quran 5 Juz',
    title: 'Juara 2 MTQ — Hifdzil Qur’an 5 Juz',
    description:
      'Luthfi Putra Setiawan meraih Juara 2 MTQ tingkat Kecamatan Tugu tahun 2026.',
  },
  {
    id: 'mtq-2',
    image: 'public/mtq-2.jpg',
    alt: 'Dokumentasi siswi membawa piala pada kegiatan MTQ di Kecamatan Tugu',
    title: 'Dokumentasi Prestasi MTQ',
    description:
      'Dokumentasi siswi MA Uswatun Hasanah Semarang dalam kegiatan Musabaqah Tilawatil Qur’an.',
  },
];

export const AchievementsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = achievementSlides[currentIndex];
  const totalSlides = achievementSlides.length;

  const handlePrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? totalSlides - 1 : previous - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((previous) => (previous + 1) % totalSlides);
  };

  return (
    <section
      id="prestasi"
      className="py-space-3xl bg-background"
    >
      <div className="max-w-container-max mx-auto px-4 sm:px-gutter-desktop">
        {/* Judul Bagian */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-secondary-fixed text-on-secondary-fixed text-xs sm:text-sm px-3.5 py-1 rounded-full font-bold inline-block mb-3">
            REKOR JUARA &amp; PRESTASI
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-on-background font-extrabold tracking-tight">
            Prestasi Membanggakan Siswa Kami
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Apresiasi atas semangat belajar dan pencapaian siswa-siswi
            MA Uswatun Hasanah Semarang dalam bidang keagamaan dan MTQ.
          </p>

          <div className="mt-6">
            <span className="inline-block px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-bold">
              Keagamaan &amp; MTQ
            </span>
          </div>
        </div>

        {/* Satu Kartu dengan Dua Slide */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Dokumentasi prestasi Keagamaan dan MTQ"
          className="max-w-2xl mx-auto bg-surface-container-lowest rounded-2xl border border-outline-variant/60 overflow-hidden shadow-lg"
        >
          <div
            id="achievement-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${currentIndex + 1} dari ${totalSlides}`}
          >
            {/* Gambar Utuh Tanpa Label atau Tombol di Atasnya */}
            <div className="w-full h-[420px] sm:h-[640px] bg-surface-container-low flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.alt}
                className="block w-full h-full object-contain"
              />
            </div>

            {/* Keterangan Slide */}
            <div className="p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-on-background">
                {currentSlide.title}
              </h3>

              <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">
                {currentSlide.description}
              </p>
            </div>
          </div>

          {/* Tombol Navigasi Slide */}
          <div className="px-4 sm:px-6 py-4 border-t border-outline-variant/40 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Tampilkan slide sebelumnya"
              aria-controls="achievement-slide"
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-primary text-on-primary text-xs sm:text-sm font-bold hover:opacity-90 transition cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span>Sebelumnya</span>
            </button>

            <span
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="text-xs sm:text-sm font-semibold text-on-surface-variant shrink-0"
            >
              <span className="sr-only">Slide </span>
              {currentIndex + 1} / {totalSlides}
            </span>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Tampilkan slide berikutnya"
              aria-controls="achievement-slide"
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-primary text-on-primary text-xs sm:text-sm font-bold hover:opacity-90 transition cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span>Berikutnya</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};