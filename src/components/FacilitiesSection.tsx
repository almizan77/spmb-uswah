import React, { useState } from 'react';
import { facilitiesData } from '../data/schoolData';
import type { FacilityItem } from '../data/schoolData';

export const FacilitiesSection: React.FC = () => {
  const [activeFacility, setActiveFacility] =
    useState<FacilityItem | null>(null);

  return (
    <section
      id="fasilitas"
      className="py-space-3xl bg-surface-container-lowest border-y border-outline-variant/40"
    >
      <div className="max-w-container-max mx-auto px-gutter-desktop">
        {/* Judul Bagian */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary font-label-md text-label-md px-3.5 py-1 rounded-full font-bold inline-block mb-3">
            SARANA &amp; PRASARANA
          </span>

          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-extrabold tracking-tight">
            Fasilitas Pendukung Pembelajaran
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            Kampus terpadu dilengkapi sarana belajar modern &amp; komputasi memadai, perpustakaan digital, serta sarana
            ibadah representatif.
          </p>
        </div>

        {/* Daftar Fasilitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <div
              key={facility.id}
              className="group bg-background rounded-2xl border border-outline-variant/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Foto Fasilitas */}
              <button
                type="button"
                onClick={() => setActiveFacility(facility)}
                aria-label={`Lihat foto ${facility.title}`}
                className="relative block h-56 w-full shrink-0 overflow-hidden bg-surface-container cursor-pointer"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent pointer-events-none" />
              </button>

              {/* Informasi Fasilitas */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-background group-hover:text-primary transition-colors">
                    <button
                      type="button"
                      onClick={() => setActiveFacility(facility)}
                      className="text-left cursor-pointer"
                    >
                      {facility.title}
                    </button>
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    {facility.caption}
                  </p>
                </div>

                {/* Spesifikasi Fasilitas */}
                <div className="mt-5 pt-4 border-t border-outline-variant/40">
                  <div className="flex flex-wrap gap-1.5">
                    {facility.specs.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="bg-surface-container-low text-on-surface text-[11px] font-semibold px-2 py-0.5 rounded border border-outline-variant/30"
                      >
                        {spec}
                      </span>
                    ))}

                    {facility.specs.length > 3 && (
                      <span className="text-[11px] text-primary font-bold px-1 py-0.5">
                        +{facility.specs.length - 3} lainnya
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Pratinjau Fasilitas */}
      {activeFacility && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="facility-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-background/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="bg-surface-container-lowest max-w-3xl w-full rounded-2xl border border-outline-variant overflow-hidden shadow-2xl relative max-h-[95vh] flex flex-col">
            {/* Judul Popup */}
            <div className="flex items-center justify-between p-4 border-b border-outline-variant/60 bg-surface-container-low">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-on-primary font-bold text-xs px-2.5 py-1 rounded">
                  {activeFacility.category}
                </span>

                <h3
                  id="facility-modal-title"
                  className="font-headline-sm font-bold text-on-background"
                >
                  {activeFacility.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveFacility(null)}
                aria-label="Tutup pratinjau"
                className="w-9 h-9 rounded-lg border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-surface-container cursor-pointer transition"
              >
                <span className="material-symbols-outlined text-[22px]">
                  close
                </span>
              </button>
            </div>

            {/* Foto Popup */}
            <div className="relative h-80 sm:h-96 w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Deskripsi dan Spesifikasi */}
            <div className="p-6 bg-surface-container-lowest space-y-4 overflow-y-auto">
              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                {activeFacility.caption}
              </p>

              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/40">
                <h4 className="font-label-lg font-bold text-primary mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">
                    tune
                  </span>
                  <span>Spesifikasi &amp; Fasilitas Ruangan:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeFacility.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        check_circle
                      </span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tombol Tutup */}
            <div className="p-4 bg-surface-container-low border-t border-outline-variant/60 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveFacility(null)}
                className="px-5 py-2 rounded-lg bg-on-background text-surface-container-lowest font-bold text-sm hover:bg-on-surface transition cursor-pointer"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};