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
      {
        text: "Panduan",
        items: [
          { text: "🛡️ Admin", link: "/panduan/admin/dashboard" },
          { text: "📝 Pengusul", link: "/panduan/pengusul/dashboard" },
          { text: "🔍 Reviewer", link: "/panduan/reviewer/dashboard" },
        ],
      },
      { text: "Alur Proposal", link: "/alur-proposal" },
    ],

    sidebar: {
      "/panduan/admin/": [
        {
          text: "🛡️ Panduan Admin",
          items: [
            { text: "Dashboard", link: "/panduan/admin/dashboard" },
            { text: "Kelola Pengguna", link: "/panduan/admin/pengguna" },
            { text: "Kelola Periode", link: "/panduan/admin/periode" },
            { text: "Kriteria & Rubrik", link: "/panduan/admin/kriteria" },
            { text: "Verifikasi Proposal", link: "/panduan/admin/verifikasi" },
            {
              text: "Kelola Fakultas & Prodi",
              link: "/panduan/admin/fakultas-prodi",
            },
            {
              text: "Manajemen Dosen & Mahasiswa",
              link: "/panduan/admin/manajemen-data",
            },
            {
              text: "Memantau Penelitian & PKM",
              link: "/panduan/admin/penelitian",
            },
            {
              text: "Keputusan Akhir Admin",
              link: "/panduan/admin/keputusan-akhir",
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
              link: "/panduan/pengusul/mengajukan",
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
            }
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
