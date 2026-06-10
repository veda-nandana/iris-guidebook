# Alur Proposal IRIS

Setiap proposal di IRIS melewati serangkaian tahap yang jelas. Semua perubahan status dicatat secara otomatis di **Riwayat Pengajuan** beserta nama pelaku, pesan, dan waktu kejadian.

## Diagram Alur Proposal

Berikut merupakan alur proposal hingga ke pelaksanaan tahap 1 untuk laporan kemajuan hingga diseminasi lihat [Tahapan Penelitian](/panduan/pengusul/penelitian#tahapan-penelitian)

![Diagram Alur Proposal](/diagram-proposal.svg)

## Status Proposal

### Status Utama

| Status             | Artinya                                         |
| ------------------ | ----------------------------------------------- |
| `diproses`         | Proposal telah diajukan dan sedang dalam proses |
| `revisi`           | Reviewer meminta perbaikan isi proposal         |
| `diajukan_kembali` | Pengusul telah mengirim ulang setelah revisi    |
| `diterima`         | Proposal diterima ✅                            |
| `ditolak`          | Proposal ditolak ❌                             |

### Status Admin

| Status Admin   | Artinya                                          |
| -------------- | ------------------------------------------------ |
| `pending`      | Menunggu verifikasi dokumen oleh admin           |
| `revisi_admin` | Admin meminta perbaikan dokumen                  |
| `lengkap`      | Dokumen terverifikasi, reviewer sudah ditetapkan |

## Jenis Review

Saat admin menyetujui proposal, admin memilih salah satu jenis review:

| Jenis            | Reviewer melihat identitas pengusul? | Reviewer bisa buka dokumen? |
| ---------------- | ------------------------------------ | --------------------------- |
| **Open Review**  | ✅ Ya                                | ✅ Ya                       |
| **Single Blind** | ❌ Disembunyikan                     | ✅ Ya                       |
| **Double Blind** | ❌ Disembunyikan                     | ❌ Tidak (dikunci sistem)   |

## Riwayat Pengajuan

Setiap perubahan status menghasilkan catatan riwayat yang memuat:

- **Pelaku** — siapa yang melakukan perubahan (admin, reviewer, atau pengusul)
- **Status sebelum & sesudah**
- **Pesan** — catatan opsional (wajib saat meminta revisi)
- **Waktu** — tanggal dan jam kejadian

Riwayat ini ditampilkan sebagai **timeline vertikal** di halaman detail proposal dan bisa dilihat oleh semua pihak yang terlibat.
