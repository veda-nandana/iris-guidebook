# Kelola Pengguna

Admin bertanggung jawab atas seluruh akun pengguna di IRIS. Menu ini dapat diakses dari **admin/users**.

## Melihat Daftar Pengguna

![](/admin/users-admin.png)
Halaman Pengguna menampilkan tabel seluruh akun yang terdaftar, beserta:
- Nama lengkap
- Email
- Peran (Admin / Pengusul / Reviewer)
- Status akun
## Peran Pengguna

IRIS memiliki tiga peran:
![](/admin/userRole-admin.png)
| Peran | Hak Akses |
|-------|-----------|
| **Admin** | Akses penuh ke seluruh manajemen sistem |
| **Pengusul** | Mengajukan dan mengelola proposal sendiri |
| **Reviewer** | Menilai proposal yang ditugaskan |

::: info Pengguna dengan beberapa peran
Jika satu pengguna memiliki lebih dari satu peran (misalnya Admin sekaligus Reviewer), sistem akan menampilkan **halaman pilih peran** saat login. Pengguna bisa berpindah peran kapan saja melalui menu di sudut kanan atas → **Ganti Peran**.
:::

## Menambah Pengguna

1. Klik tombol **Tambah Pengguna**
![](/admin/tambahUser-admin.png)
2. Isi nama lengkap, alamat email, dan pilih peran
![](/admin/formUser-admin.png)
3. Klik **Simpan**

Pengguna baru akan mendapatkan email undangan (jika dikonfigurasi) atau dapat login menggunakan SSO universitas.

## Mengubah Peran Pengguna

1. Cari nama pengguna kemudian klik **Edit User**
![](/admin/editUser-admin.png)
2. Ubah peran sesuai kebutuhan
![](/admin/formEditUser-admin.png)
3. Klik **Simpan Perubahan**

::: warning Perhatian
Mengubah peran pengguna akan langsung berpengaruh pada hak akses mereka. Pastikan perubahan ini disengaja sebelum menyimpan.
:::

## Menghapus Pengguna

Jika akun perlu dihapus (misalnya staf yang sudah tidak aktif):
1. Klik nama pengguna
2. Klik tombol **Hapus User**
3. Konfirmasi tindakan

Pengguna yang dihapus tidak dapat login dan data akan terhapus.
