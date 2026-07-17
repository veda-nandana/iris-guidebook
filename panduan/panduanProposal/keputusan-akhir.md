# Keputusan Akhir Proposal

Setelah Reviewer memberikan penilaian dan rekomendasi, Admin perlu memberikan **Keputusan Akhir** atas proposal. Keputusan ini menentukan apakah penelitian dapat dilanjutkan ke tahap pelaksanaan atau tidak.

## Kapan Admin Memberikan Keputusan Akhir?

Keputusan Akhir diberikan setelah **semua Reviewer yang ditugaskan** telah menyelesaikan penilaian mereka. Admin akan mendapat notifikasi saat semua reviewer sudah menilai.

---

## Melihat Rekapitulasi Penilaian Reviewer

Sebelum memutuskan, Admin dapat melihat ringkasan penilaian dari semua reviewer:

1. Pada halaman **Dashboard** pilih proposal yang ingin diverifikasi
2. Klik **Detail & Verifikasi** pada proposal yang akan diputuskan
   ![](/admin/verifikasiProposal-admin.png)
3. Lihat bagian **Hasil Penilaian Reviewer**:
   ![](/admin/rekapNilai-admin.png)

| Informasi                | Keterangan                                             |
| ------------------------ | ------------------------------------------------------ |
| **Skor per Reviewer**    | Nilai akhir masing-masing reviewer (skala 0–100)       |
| **Rata-rata Skor**       | Rata-rata dari semua reviewer                          |
| **Rekomendasi Reviewer** | Keputusan yang disarankan: Diterima / Revisi / Ditolak |
| **Catatan Reviewer**     | Komentar dan masukan dari reviewer                     |

---

## Keputusan yang Tersedia

### ✅ Terima Proposal (`diterima`)

![](/admin/keputusanAkhir-admin.png)

Proposal disetujui untuk dilanjutkan ke fase pelaksanaan penelitian.

**Efek pada sistem:**

- Status proposal berubah menjadi `diterima`
- Pengusul mendapat notifikasi penerimaan
- Proposal masuk ke daftar **Penelitian Aktif** di menu Pelaksanaan
- Pengusul dapat mulai mengupload dokumen tahapan (Laporan Kemajuan, dst.)

### 🔄 Minta Revisi (`revisi`)

Reviewer merekomendasikan perbaikan sebelum proposal bisa diterima.

**Efek pada sistem:**

- Status proposal berubah menjadi `revisi`
- Pengusul mendapat notifikasi dan pesan dari reviewer
- Pengusul bisa mengedit dan mengajukan ulang (`diajukan_kembali`)
- Reviewer dapat menilai ulang setelah pengusul resubmit

### ❌ Tolak Proposal (`ditolak`)

Proposal tidak memenuhi standar dan tidak dapat dilanjutkan.

**Efek pada sistem:**

- Status proposal berubah menjadi `ditolak`
- Pengusul mendapat notifikasi penolakan
- Proposal tidak bisa diajukan ulang (final)

---

## Langkah Memberikan Keputusan

![](/admin/verifikasiProposal-admin.png)

1. Buka halaman **Dashboard** → klik **Detail & Verifikasi** proposal
2. Baca rekapitulasi skor dan rekomendasi reviewer
   ![](/admin/rekapNilai-admin.png)
3. Pilih keputusan akhir:
   - Klik **Terima Proposal** jika layak dilanjutkan
   - Klik **Minta Revisi** dan tulis pesan jika perlu perbaikan
   - Klik **Tolak Proposal** jika tidak memenuhi standar
4. Tulis **catatan keputusan** (wajib untuk diisi)
5. Klik **Simpan & Update Status**
   ![](/admin/simpanKeputusan-admin.png)
   ::: tip Pertimbangkan skor rata-rata
   Gunakan rata-rata skor sebagai panduan utama. Biasanya proposal dengan skor ≥ 350 dari 500 (skala berbobot) layak diterima, namun keputusan akhir tetap ada di tangan Admin.
   :::

---

## Pemberian Dana dan Nomor Kontrak

jika **Proposal Diterima** maka admin dapat melanjutkan untuk memberikan Dana dan Nomor Kontrak terhadap penelitian/PKM

### Pemberian Dana

1. Pada sidebar, klik **Proposal** lalu klik kategori **Penelitian** atau **Pengabdian(PKM)**
   ![](/admin/proposal-admin.png)
2. Cari proposal lalu klik **Input Dana** dengan ikon (💵)
   ![](/admin/pendanaan-admin.png)
3. Akan muncul pop-up form yang dapat diisi dengan nominal dana
   ![](/admin/formDana-admin.png)
4. klik **Simpan Data** untuk menyimpan
5. Perubahan dana dapat dilihat pada bagian **Detail Proposal**

### Memberikan Nomor Kontrak

1. Pada sidebar, klik **Proposal** lalu klik kategori **Penelitian** atau **Pengabdian(PKM)**
   ![](/admin/proposal-admin.png)
2. Cari proposal lalu klik **Input Nomor & Dokumen** dengan ikon (📝)
   ![](/admin/inputNomorDokumen-admin.png)
3. akan muncul pop-up form yang dapat diisi untuk mengubah nomor dokumen dan kontrak
   ![](/admin/formKontrak-admin.png)
4. klik **Simpan Data** untuk menyimpan
5. Perubahan nomor kontrak dapat dilihat pada bagian **Detail Proposal**

---

## Riwayat Keputusan

Semua keputusan yang diberikan tercatat otomatis di **Timeline Pengajuan** proposal dengan:
![](/pengusul/timelinePengajuan-pengusul.png)

- Nama Admin yang memutuskan
- Waktu keputusan
- Status sebelum dan sesudah
- Catatan/pesan keputusan

Riwayat ini dapat dilihat oleh semua pihak (Admin, Pengusul, Reviewer) di halaman detail proposal.

---


