# Kelola Mahasiswa dan Dosen
![Manajemen Data](/admin/manajemenData-admin.png)
Admin bertanggung jawab atas seluruh akun pengguna di IRIS — mulai dari dosen, reviewer, hingga mahasiswa. Semua pengelolaan pengguna dapat diakses dari **Sidebar → Manajemen Data** admin dapat memilih untuk mengelola **Data Mahasiswa** atau **Data Dosen**.

---

## Kelola Dosen

Data dosen digunakan saat Pengusul menambahkan anggota tim ke proposal. Admin mengelola data dosen melalui **Sidebar → Data Dosen**.

## Import Dosen dari File Excel

Untuk mengimport data dosen sudah dilakukan secara otomatis dan terkoneksi kepada SSO (Single Sign-On) Primakara.

## Menghapus Data Dosen

1. Klik ikon hapus user di baris pengguna
![](/admin/hapusDosen-admin.png)
2. Konfirmasi penghapusan

::: danger Tidak bisa menghapus akun sendiri
Admin tidak dapat menghapus akun yang sedang digunakan untuk login..
:::

## Mengubah Data Dosen

1. Klik ikon edit (✏️) di baris pengguna
2. Ubah peran sesuai kebutuhan
![](/admin/formEditDosen-admin.png)
   - Nama, email, NIDN
   - Peran
   - Program Studi
   - Password baru (kosongkan jika tidak ingin mengubah password)
3. Klik **Simpan Perubahan**

::: danger Tidak bisa menghapus akun sendiri
Admin tidak dapat menghapus akun yang sedang digunakan untuk login..
:::
---

## Kelola Mahasiswa

Data mahasiswa digunakan saat Pengusul menambahkan anggota tim ke proposal. Admin mengelola data mahasiswa melalui **Sidebar → Data Mahasiswa**.
![](/admin/manajemenMahasiswa-admin.png)

### Melihat Daftar Mahasiswa

Tabel menampilkan semua mahasiswa terdaftar beserta NIM, nama lengkap, dan program studi.

### Import Mahasiswa dari Excel

Data mahasiswa tidak bisa ditambah satu per satu — harus melalui **import Excel**.

#### Format File Excel

File harus dalam format `.xlsx`, atau `.xls`. Header tabel dimulai di **baris ke-7** dengan kolom wajib:

| Nama Kolom (Header) | Isi |
|--------------------|-----|
| `nim` | NIM mahasiswa pada Kolom B|
| `nama` | Nama lengkap pada Kolom C|
| `prodi` | Nama program studi |

::: warning Header harus di baris ke-7
Sistem membaca header dari baris ke-7. Baris 1–6 bisa digunakan untuk informasi institusi atau keterangan lain.
:::

#### Cara Import

1. Klik tombol **Import Excel**
![](/admin/importMahasiswa-admin.png)
2. Pilih file Excel mahasiswa
![](/admin/formUploadMahasiswa-admin.png)
3. Klik **Upload**

#### Logika Import Mahasiswa

- Jika NIM sudah ada → data **diperbarui** (nama dan prodi)
- Jika NIM belum ada → data **ditambahkan** sebagai baru
- Nama prodi harus sama persis dengan data di IRIS; jika tidak cocok, prodi dikosongkan

### Menghapus Data Mahasiswa
![](/admin/hapusMahasiswa-admin.png)
Klik ikon 🗑️ di baris mahasiswa lalu konfirmasi.

::: danger Tidak bisa menghapus mahasiswa yang tergabung dalam proposal aktif
Jika mahasiswa sudah menjadi anggota tim di proposal yang sedang berjalan, penghapusan akan gagal. Hapus keanggotaan tim terlebih dahulu dari halaman proposal terkait.
:::
