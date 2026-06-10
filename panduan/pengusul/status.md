# Melacak Status Proposal

Setelah mengajukan proposal, Anda dapat memantau perkembangan setiap saat melalui halaman **Riwayat Proposal**.

## Membuka Daftar Proposal

![Riwayat Pengusul](/pengusul/riwayat-pengusul.png)
Klik **Sidebar → Proposal Saya → Riwayat Proposal** untuk melihat semua proposal yang pernah Anda ajukan, beserta status terkininya.

## Membaca Status Proposal
![Status Proposal](/pengusul/statusProposal-pengusul.png)
Setiap proposal memiliki dua kolom status:

| Kolom | Artinya |
|-------|---------|
| **Status** | Status utama proposal dalam alur review |
| **Status Dokumen** | Status verifikasi dokumen oleh Admin |

### Status Utama

| Status | Artinya | Tindakan yang diperlukan |
|--------|---------|--------------------------|
| `diproses` | Proposal sedang berjalan | Tidak ada — tunggu proses |
| `revisi` | Reviewer meminta perbaikan | Perbaiki & kirim ulang |
| `diajukan_kembali` | Sudah dikirim ulang, menunggu review | Tidak ada — tunggu review |
| `diterima` | 🎉 Proposal diterima | Tidak ada |
| `ditolak` | Proposal ditolak | Lihat catatan di riwayat |

### Status Dokumen (Admin)

| Status Dokumen | Artinya | Tindakan yang diperlukan |
|----------------|---------|--------------------------|
| `pending` | Menunggu verifikasi Admin | Tidak ada — tunggu Admin |
| `revisi_admin` | Admin meminta perbaikan dokumen | Perbaiki dokumen & kirim ulang |
| `lengkap` | Dokumen terverifikasi ✅ | Tidak ada |

---

## Melihat Riwayat Pengajuan (Timeline)
![Timeline Pengajuanm](/pengusul/timelinePengajuan-pengusul.png)
Klik judul proposal untuk membuka halaman detail. Di sana Anda akan menemukan **Timeline Riwayat Pengajuan** yang mencatat seluruh perjalanan proposal:

```
🕐 [Tanggal & Waktu]  Anda mengajukan proposal
   Status berubah: — → diproses

🕐 [Tanggal & Waktu]  Admin: "Dokumen sudah lengkap, reviewer telah ditetapkan"
   Status berubah: pending → lengkap

🕐 [Tanggal & Waktu]  Reviewer meminta revisi
   Status berubah: diproses → revisi
   Pesan: "Bagian metodologi perlu diperjelas..."

🕐 [Tanggal & Waktu]  Anda mengirim ulang proposal
   Status berubah: revisi → diajukan_kembali

🕐 [Tanggal & Waktu]  Reviewer menerima proposal
   Status berubah: diajukan_kembali → diterima
```

Timeline ini membantu Anda memahami posisi proposal saat ini dan apa yang terjadi di setiap tahap.

---

## Mengunduh Dokumen

Di halaman detail proposal, Anda bisa mengunduh ulang dokumen yang pernah Anda upload dengan klik **Unduh Dokumen**.

---

## Kapan Harus Bertindak?

Anda hanya perlu melakukan sesuatu ketika status proposal menunjukkan:

- **`revisi_admin`** → Admin meminta perbaikan dokumen → [Cara merevisi & kirim ulang](/panduan/pengusul/revisi)
- **`revisi`** → Reviewer meminta perbaikan isi → [Cara merevisi & kirim ulang](/panduan/pengusul/revisi)

Di semua status lain, Anda cukup menunggu proses berjalan.
