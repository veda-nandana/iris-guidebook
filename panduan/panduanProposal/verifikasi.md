# Verifikasi Proposal
Setelah Pengusul mengajukan proposal, Admin harus memverifikasi kelengkapan dokumen sebelum proposal bisa masuk ke tahap penilaian.
![Cek Proposal](/admin/proposal-admin.png)

Akses melalui **Sidebar → Proposal** dimana ada 2 Kategori Penelitian dan Pengabdian (PKM).

## Melihat Daftar Proposal Masuk
![Gambar Proposal](/admin/daftarProposal-admin.png)

Halaman Proposal menampilkan semua proposal yang masuk, dengan informasi:
- Judul proposal
- Nama pengusul & NIDN
- Kategori (Wajib / Tambahan)
- Status Admmin & Status Review
- Aksi

Gunakan **filter status** untuk melihat hanya proposal yang masuk dengan status `pending`.

## Membuka Detail Proposal
![Detail Proposal Admin](/admin/detailProposal-admin.png)
Klik detail proposal (👁️) untuk melihat:
- Informasi lengkap proposal (judul, abstrak, tujuan, dll.)
- Data tim mahasiswa
- Dokumen yang diupload
- Riwayat pengajuan (timeline)

## Mengunduh/View Dokumen
![Unduh Proposal](/admin/unduh-admin.png)
Klik tombol **Unduh/View Dokumen** untuk membuka atau melihat file proposal (PDF) yang diajukan Pengusul.

---

## Keputusan Verifikasi

### ✅ Menyetujui Proposal (Dokumen Lengkap)

![Setujui Proposal](/admin/setujuiProposal-admin.png)

Jika dokumen sudah lengkap dan valid:
1. Isi Checklist Kelengkapan
2. Pilih **Reviewer** dari daftar yang tersedia
3. Tetapkan **batas waktu review**
4. Pilih **Metode Penilaian**:

   | Metode Penilaian | Keterangan |
   |--------------|-----------|
   | **Open Review** | Reviewer dan Pengusul dapat melihat identitas satu sama lain|
   | **Single Blind** | Identitas Reviewer disembunyikan tetapi identitas Pengusul diperlihatkan |
   | **Double Blind** | Reviewer dan Pengusul tidak bisa melihat identitas satu sama lain |

5. Isi catatan Admin/Feedback
6. Klik **Setujui & Plotting** atau **Tolak Berkas**

**Hasil:** `status_admin` berubah menjadi `lengkap`, `status_review` berubah menjadi `diproses`, Reviewer mendapat notifikasi tugas baru.

---

### 🔄 Meminta Perbaikan Dokumen

Jika dokumen tidak lengkap atau tidak sesuai:

1. Klik **Minta Perbaikan Dokumen**
2. Tulis pesan yang menjelaskan apa yang perlu diperbaiki
3. Klik **Kirim**

**Hasil:** `status_admin` berubah menjadi `revisi_admin`. Pengusul akan mendapat notifikasi dan bisa memperbaiki dokumennya.

::: tip Tulis pesan yang jelas
Pengusul akan membaca pesan Anda langsung di riwayat proposal mereka. Sebutkan secara spesifik dokumen atau bagian mana yang bermasalah agar mereka bisa segera memperbaikinya.
:::

---

## Setelah Verifikasi

Setelah disetujui, proposal masuk ke antrian Reviewer yang ditugaskan. Admin perlu melakukan tindakan lagi saat memberikan **Keputusan Akhir** saat kedua reviewer sudah memberikan rekomendasi.

Langkah setelah verifikasi dapat dilihat pada [Keputusan Akhir](/panduan/admin/keputusan akhir).
Semua tindakan Admin (menyetujui atau meminta perbaikan) tercatat otomatis di **Riwayat Pengajuan** proposal.
