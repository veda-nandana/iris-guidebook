# User Flow IRIS: Semua Skenario End-to-End

Diagram ini menyatukan seluruh skenario pada pengujian `full-end-to-end.spec.ts`. Mulailah dari **Pengusul mengajukan proposal**, lalu ikuti cabang sesuai keputusan Admin dan Reviewer. Jalur berwarna hijau menunjukkan proses yang berlanjut; jalur merah menunjukkan proses berhenti; sedangkan jalur kuning mengembalikan proposal kepada Pengusul untuk diperbaiki.



## Alur per skenario

| Skenario | Kejadian | Langkah berikutnya |
| --- | --- | --- |
| Berkas belum lengkap | Admin mengembalikan berkas saat verifikasi. | Pengusul membaca alasan, memperbaiki data/dokumen, lalu mengajukan kembali. |
| Proposal diterima tanpa revisi | Kedua reviewer memberi penilaian; Admin menetapkan status **diterima**. | Kegiatan aktif dan Pengusul melanjutkan laporan kemajuan. |
| Proposal perlu revisi | Admin menetapkan status **revisi** berdasarkan hasil review. | Pengusul merevisi proposal; Reviewer menilai ulang; Admin membuat keputusan baru. Siklus ini dapat berulang. |
| Proposal ditolak setelah review | Reviewer dapat merekomendasikan penolakan dan Admin menetapkan **ditolak**. | Siklus proposal tersebut berakhir. |
| Proposal ditolak saat verifikasi | Admin mengembalikan atau menolak berkas sebelum reviewer ditugaskan. | Pengusul memperbaiki dan mengajukan kembali bila statusnya pengembalian; bila ditetapkan ditolak, siklus berakhir. |
| Kegiatan berjalan | Proposal diterima. | Pengusul dan Reviewer bergerak berurutan melalui laporan kemajuan, Monev, laporan akhir, dan diseminasi. |
| Penutupan kegiatan | Bukti publikasi telah diunggah setelah diseminasi. | Luaran terdokumentasi dan siklus kegiatan selesai. |

::: info Catatan pembagian tugas reviewer
Pengujian end-to-end menjalankan Reviewer 1 dan Reviewer 2 pada penilaian proposal, laporan kemajuan, Monev, laporan akhir, dan diseminasi. Penerapan di periode nyata tetap mengikuti konfigurasi penugasan dan kebijakan DRPM pada periode tersebut.
:::

## Cara memakai diagram ini

1. Tentukan peran Anda: Pengusul, Admin, atau Reviewer.
2. Temukan kotak tindakan terakhir yang sudah dilakukan.
3. Ikuti panah keluar dari kotak tersebut sesuai kondisi atau keputusan yang terjadi.
4. Buka [panduan sesuai peran](/alur-proposal#mulai-dari-peran-anda) untuk langkah teknisnya.
