import React from 'react';

export const NewsSection: React.FC = () => {
  return (
    <section id="berita" className="py-space-3xl bg-background">
      <div className="max-w-container-max mx-auto px-gutter-desktop">
        {/* Judul Bagian */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 text-primary font-label-md text-label-md px-3.5 py-1 rounded-full font-bold inline-block mb-3">
            WARTA &amp; INFORMASI
          </span>

          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-extrabold tracking-tight">
            Berita &amp; Informasi Terbaru
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            Kabar prestasi, agenda madrasah, pengumuman SPMB, serta artikel
            inspiratif seputar dunia pendidikan Islam.
          </p>
        </div>

        {/* Tiga Wadah Berita Kosong */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-hidden="true"
        >
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 overflow-hidden shadow-xs flex flex-col"
            >
              {/* Ruang Isi Kosong */}
              <div className="h-[360px] sm:h-[420px]" />

              {/* Bagian Bawah Kosong */}
              <div className="h-16 border-t border-outline-variant/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};