import React from 'react';
import { schoolInfo } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="kontak"
      className="py-space-3xl bg-surface-container-lowest border-y border-outline-variant/40"
    >
      <div className="max-w-container-max mx-auto px-gutter-desktop">
        {/* Judul Bagian */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary font-label-md text-label-md px-3.5 py-1 rounded-full font-bold inline-block mb-3">
            HUBUNGI KAMI
          </span>

          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-extrabold tracking-tight">
            Kontak &amp; Lokasi Madrasah
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
            Kami siap menyambut kunjungan silaturahmi calon siswa dan orang
            tua di kampus MA Uswatun Hasanah setiap hari kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Informasi Kontak */}
          <div className="lg:col-span-5 space-y-6">
            {/* Alamat */}
            <div className="bg-background p-6 rounded-2xl border border-outline-variant/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  location_on
                </span>
              </div>

              <div>
                <h4 className="font-headline-sm font-bold text-on-background mb-1">
                  Alamat Kampus Terpadu
                </h4>

                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {schoolInfo.address}, {schoolInfo.city},{' '}
                  {schoolInfo.province} {schoolInfo.postalCode}
                </p>

                <div className="mt-2 text-xs text-primary font-semibold">
                  NPSN: {schoolInfo.npsn} • NSM: {schoolInfo.nsm}
                </div>
              </div>
            </div>



            {/* Email dan Jam Layanan */}
            <div className="bg-background p-6 rounded-2xl border border-outline-variant/60 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  mail
                </span>
              </div>

              <div>
                <h4 className="font-headline-sm font-bold text-on-background mb-1">
                  Email &amp; Jam Layanan
                </h4>

                <p className="font-body-sm text-sm text-on-surface-variant">
                  {schoolInfo.email}
                  <br />
                  Senin - Sabtu: 07.30 - 16.00 WIB
                </p>
              </div>
            </div>

            {/* Media Sosial */}
            <div className="bg-background p-6 rounded-2xl border border-outline-variant/60 shadow-xs">
              <h4 className="font-headline-sm font-bold text-on-background mb-3">
                Ikuti Media Sosial Kami
              </h4>

             <div className="flex items-center gap-3">
  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@pps..uswatunhasanah.smg"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Buka TikTok"
    title="TikTok"
    className="w-12 h-12 rounded-xl bg-surface-container-low hover:bg-primary/10 flex items-center justify-center transition"
  >
    <img
      src="/tiktok.png"
      alt="TikTok"
      className="w-7 h-7 object-contain"
    />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@mauswatunhasanah2859"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Buka YouTube"
    title="YouTube"
    className="w-12 h-12 rounded-xl bg-surface-container-low hover:bg-primary/10 flex items-center justify-center transition"
  >
    <img
      src="/youtube.png"
      alt="YouTube"
      className="w-7 h-7 object-contain"
    />
  </a>
</div>
              
            </div>
          </div>

          {/* Kolom Peta */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-outline-variant/60 shadow-md bg-surface-container h-72 sm:h-80 relative">
              <iframe
                title="Peta Lokasi MA Uswatun Hasanah"
                src={schoolInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-bold text-on-background shadow-xs">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};