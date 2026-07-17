# Kelola Periode

**Periode** adalah jendela waktu aktif di mana Pengusul dapat mengajukan proposal. Semua pengaturan jadwal, kriteria, dan konfigurasi laporan terikat pada periode tertentu.
![Navigasi Periode](/admin/periode-admin.png)

Akses melalui **Sidebar → Periode**.

## Membuat Periode Baru
![Tambah Periode](/admin/tambahPeriode-admin.png)
1. Klik **Tambah Periode**
![Form Periode](/admin/formPeriode-admin.png)
2. Isi informasi berikut:

Kolom dan Keterangan
| Kolom | Keterangan |
|-------|-----------|
| Nama Periode | Contoh: "2025/2026" |
| Deskripsi | Isi deskripsi dari kegiatan (opsional) |
| Tanggal Mulai & Berakhirnya Periode | 10/24/2025 & 07/31/2026 |

Pengisian Periode
| Kolom | Tanggal Mulai | Tanggal Batas |
|-----|------|------|
| Pengajuan Proposal | 09/04/2025 | 10/01/2026 |
| Review Proposal | 10/06/2025 | 10/01/2026 |
| Pengumpulan Laporan Kemajuan | 12/17/2025 | 01/17/2026 |
| Monitoring & Evaluasi | 03/16/2026 | 03/20/2026 |
| Pengumpulan Laporan Akhir | 04/26/2026 | 05/26/2026 |
| Pengajuan Diseminasi | 06/20/2026 | 07/20/2026 |
| Pelaksanaan Diseminasi | 07/24/2026 | - |

3. Klik **Simpan**

::: tip Kriteria otomatis dibuat
Saat periode baru disimpan, sistem secara otomatis membuat **kriteria penilaian default** untuk jenis proposal terkait. Anda bisa langsung menyesuaikannya di menu [Kriteria & Rubrik](/panduan/admin/kriteria).
:::

## Fase-Fase dalam Periode

Setiap periode memiliki fase sebagai berikut:

```
Pengajuan Proposal  → Review Proposal → Laporan Kemajuan →  Review Laporan Kemajuan  →  Monitoring & Evaluasi  → Pengajuan Laporan Akhir → Review Laporan Akhir → Pengajuan Diseminasi →  Diseminasi
```

Tanggal setiap fase ditampilkan di kalender dashboard untuk semua pengguna.

## Mengubah Periode
![Ubah Periode](/admin/editPeriode-admin.png)
1. Klik nama periode di daftar
2. Edit kolom yang perlu diubah
3. Klik **Simpan Perubahan**

::: warning Periode yang sudah berjalan
Mengubah tanggal periode yang sudah aktif dapat berdampak pada proposal yang sedang berjalan. Lakukan perubahan hanya jika benar-benar diperlukan.
:::

## Menutup / Mengarsipkan Periode

Setelah semua proposal selesai diproses, periode dapat diarsipkan agar tidak muncul sebagai periode aktif. Klik **Arsipkan** pada baris periode yang bersangkutan.

## Menyalin Kriteria Antar Periode

Jika periode baru menggunakan kriteria yang sama dengan periode sebelumnya, Anda dapat menyalinnya langsung. Lihat cara lengkapnya di [Kriteria & Rubrik → Menyalin Kriteria](/panduan/admin/kriteria#menyalin-kriteria-dari-periode-lain).
