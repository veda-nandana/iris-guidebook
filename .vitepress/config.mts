import { text } from "node:stream/consumers";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "IRIS Guidebook",
  description:
    "Panduan Pengguna Sistem Informasi Penelitian dan PKM — Primakara University",
  lang: "id-ID",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,

    nav: [
      { text: "Beranda", link: "/" },
      { text: "Perkenalan IRIS", link: "/introduction" },
      { text: "Proposal Lifecycle", link: "/user-flow" },
      { text: "DRPM Resmi", link: "https://drpm.primakara.ac.id/" },
      {text: "IRIS", link: "https://iris.primakara.ac.id/"},
    ],

    sidebar: {
      "/": [
        {
          items: [
            { text: "Beranda", link: "/" },
            { text: "Perkenalan IRIS", link: "/introduction" },
            { text: "Proposal Lifecycle", link: "/alur-proposal" },
            { text: "User Flow Role", link: "/user-flow" }, 
            {
              text: "Admin Membuat Periode & Kriteria",
              items: [
                { text: "Menambah Periode", link: "/periode" },
                { text: "Menambah Kriteria", link: "/kriteria" },
              ],
            },

            {
              text: "Tahap 1: Panduan Tahap Proposal",
              items: [
                {
                  text: "Pengusul Mengajukan Proposal",
                  link: "/panduan/panduanProposal/mengajukan",
                },
                {
                  text: "Admin Melakukan Verifikasi",
                  link: "/panduan/panduanPropoal/verifikasi",
                },
                {
                  text: "Reviewer Menilai Proposal",
                  link: "/panduan/panduanProposal/menilai",
                },
                {
                  text: "Admin Memberikan Keputusan Akhir",
                  link: "/panduan/panduanProposal/keputusan-akhir",
                },
                {
                  text: "Reviewer Melakukan Revisi",
                  link: "/panduan/panduanProposal/revisi",
                },
              ],
            },
            {
              text: "Tahap 2: Panduan Penelitian",
              items: [
                { text: "Laporan Penelitian Pengusul", link: "panduan/laporanKemajuan/penelitian" },
                { text: "Menilai Laporan Penelitian Reviewer", link: "laporanKemajuan/reviewerMenilai"},
              ],
            },
            {
              text: "Tahap 3: Diseminasi & Publikasi",
              items: [
                { text: "Diseminasi & Publikasi Pengusul", link: "panduan/diseminasiPublikasi/diseminasi-publikasi" },
                { text: "Tahapan Diseminasi Reviewer", link: "panduan/diseminasiPublikasi/diseminasi"},
              ],
            },
          ],
        },
      ],
      "/panduan/pengusul/": [
        {
          text: "📝 Panduan Pengusul",
          items: [
            { text: "Dashboard", link: "/panduan/pengusul/dashboard" },
            {
              text: "Mengajukan Proposal",
              link: "/panduan/panduanProposal/mengajukan",
            },
            {
              text: "Melacak Status Proposal",
              link: "/panduan/pengusul/status",
            },
            {
              text: "Revisi & Mengajukan Ulang",
              link: "/panduan/pengusul/revisi",
            },
            {
              text: "Tahapan Penelitian & PKM",
              link: "/panduan/pengusul/penelitian",
            },
            {
              text: "Diseminasi dan Publikasi",
              link: "/panduan/pengusul/diseminasi-publikasi",
            },
          ],
        },
      ],
      "/panduan/reviewer/": [
        {
          text: "🔍 Panduan Reviewer",
          items: [
            { text: "Dashboard", link: "/panduan/reviewer/dashboard" },
            { text: "Menilai Proposal", link: "/panduan/reviewer/menilai" },
            { text: "Keputusan Review", link: "/panduan/reviewer/keputusan" },
            {
              text: "Pelaksanaan Diseminasi",
              link: "/panduan/reviewer/diseminasi",
            },
            {
              text: "Tahapan Penelitian",
              link: "/panduan/reviewer/penelitian",
            },
          ],
        },
      ],
    },

    search: { provider: "local" },

    footer: {
      copyright: "Hak Cipta © 2026 Primakara University",
    },

    outline: {
      label: "Di halaman ini",
      level: [2, 3],
    },

    docFooter: {
      prev: "Halaman Sebelumnya",
      next: "Halaman Berikutnya",
    },

    lastUpdated: {
      text: "Terakhir diperbarui",
    },
  },
});
