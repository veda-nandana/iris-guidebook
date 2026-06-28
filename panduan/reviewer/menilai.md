# Menilai Proposal

Sebagai Reviewer, tugas utama Anda adalah menilai proposal yang ditugaskan menggunakan kriteria dan rubrik yang sudah ditetapkan Admin.

## Membuka Daftar Proposal
![Proposal](/reviewer/proposal-reviewer.png)

Lihat bagian **Sidebar → Review Proposal** disini proposal dikelompokkan menjadi 2 yaitu; `Review Penelitian` dan `Review PKM` . Proposal yang belum dinilai ditandai dengan status `diproses` atau `diajukan_kembali`.

## Membuka Detail Proposal
![Metode Review](/reviewer/metode-reviewer.png)

Klik judul proposal untuk membuka halaman detail. Yang bisa Anda lihat tergantung pada **jenis review** yang ditetapkan Admin:

| Jenis Review     | Identitas Reviewer | Identitas Pengusul |
| ---------------- | ------------------ | ------------------ |
| **Open Review**  | ✅ Terlihat        | ✅ Terlihat        |
| **Single Blind** | ❌ Disembunyikan   | ✅ Terlihat        |
| **Double Blind** | ❌ Disembunyikan   | ❌ Disembunyikan   |

::: info Jenis review ditentukan Admin
Anda tidak bisa mengubah jenis review. Jika ada pertanyaan tentang jenis review yang ditetapkan, hubungi Admin.
:::

## View Dokumen

Jika jenis review mengizinkan akses dokumen, klik **View Dokumen** di halaman detail proposal untuk membaca isi proposal sebelum menilai.

---

## Mengisi Formulir Penilaian

### Kriteria Penilaian

Setiap proposal dinilai berdasarkan kriteria yang dikonfigurasi Admin untuk periode berjalan. Untuk setiap kriteria, pilih skor dari **1 sampai 5**:

::: tip Klik salah satu rubrik untuk melihat bobot dan rubrik penilaian.
:::

<details>
<summary> Tabel Rubrik Proposal </summary>

1. Rubrik Proposal Penelitian
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Perumusan Masalah</td>
      <td>25</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada rumusan masalah, tidak relevan, tanpa tujuan.</dd>
          <dt>2</dt><dd style="margin:0;">Masalah sangat umum, tujuan kabur/belum jelas.</dd>
          <dt>3</dt><dd style="margin:0;">Masalah cukup jelas tapi kurang tajam; tujuan terukur namun belum spesifik.</dd>
          <dt>4</dt><dd style="margin:0;">Masalah jelas, fokus, relevan; tujuan terukur & realistis.</dd>
          <dt>5</dt><dd style="margin:0;">Masalah sangat tajam, relevan dengan kebutuhan; tujuan spesifik dan terukur.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Manfaat Hasil dan Luaran</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak menjelaskan manfaat.</dd>
          <dt>2</dt><dd style="margin:0;">Manfaat lemah, terbatas internal; luaran di jurnal tidak bereputasi.</dd>
          <dt>3</dt><dd style="margin:0;">Manfaat cukup jelas, kontribusi terbatas; luaran di jurnal SINTA 3–6.</dd>
          <dt>4</dt><dd style="margin:0;">Manfaat nyata & relevan; ada luaran di jurnal SINTA 1–2 / prosiding Scopus.</dd>
          <dt>5</dt><dd style="margin:0;">Manfaat sangat signifikan & berdampak luas; luaran di jurnal internasional bereputasi, strategis & inovatif.</dd>
        </dl>
      </td>
    </tr>
      <td>Tinjauan Pustaka</td>
      <td>15</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada pustaka & state-of-the-art.</dd>
          <dt>2</dt><dd style="margin:0;">Referensi minim, tidak relevan/mutakhir, format salah; tanpa state-of-the-art & roadmap.</dd>
          <dt>3</dt><dd style="margin:0;">Referensi terbatas & lama, format kurang rapi; tanpa state-of-the-art & roadmap.</dd>
          <dt>4</dt><dd style="margin:0;">Referensi relevan, mutakhir, dari jurnal bereputasi; pustaka rapi, ada state-of-the-art namun tanpa roadmap.</dd>
          <dt>5</dt><dd style="margin:0;">Referensi relevan, mutakhir, dari jurnal bereputasi; pustaka rapi, ada state-of-the-art & roadmap.</dd>
        </dl>
      </td>
    <tr>
      <td>Metode</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada metode, diagram alir, & tugas anggota.</dd>
          <dt>2</dt><dd style="margin:0;">Hanya salah satu (metode/diagram/tugas anggota).</dd>
          <dt>3</dt><dd style="margin:0;">Metode dibahas minim; ada diagram alir tapi tugas anggota tidak jelas.</dd>
          <dt>4</dt><dd style="margin:0;">Metode lengkap & bertahap; ada diagram alir, tapi tanpa rincian tugas anggota.</dd>
          <dt>5</dt><dd style="margin:0;">Metode lengkap & bertahap; ada diagram alir & pembagian tugas anggota jelas.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Unsur Penunjang</td>
      <td>10</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada jadwal, pembagian tugas, & biaya.</dd>
          <dt>2</dt><dd style="margin:0;">Jadwal tidak realistis; tim tidak sesuai; biaya tidak wajar.</dd>
          <dt>3</dt><dd style="margin:0;">Jadwal cukup sesuai; tim mendukung sebagian; biaya cukup wajar.</dd>
          <dt>4</dt><dd style="margin:0;">Jadwal realistis; tim sesuai bidang; biaya wajar & rinci.</dd>
          <dt>5</dt><dd style="margin:0;">Jadwal sangat realistis & terukur; tim sesuai kebutuhan; biaya sangat wajar, rinci, & proporsional.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

2. Rubrik Proposal PKM
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Perumusan Masalah</td>
      <td>25</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada rumusan masalah, tidak relevan, tanpa tujuan.</dd>
          <dt>2</dt><dd style="margin:0;">Masalah sangat umum, tujuan kabur/belum jelas.</dd>
          <dt>3</dt><dd style="margin:0;">Masalah cukup jelas tapi kurang tajam; tujuan terukur namun belum spesifik.</dd>
          <dt>4</dt><dd style="margin:0;">Masalah jelas, fokus, relevan; tujuan terukur & realistis.</dd>
          <dt>5</dt><dd style="margin:0;">Masalah sangat tajam, relevan dengan kebutuhan; tujuan spesifik dan terukur.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Manfaat Hasil dan Luaran</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak menjelaskan manfaat.</dd>
          <dt>2</dt><dd style="margin:0;">Manfaat lemah, terbatas internal; luaran di jurnal tidak bereputasi.</dd>
          <dt>3</dt><dd style="margin:0;">Manfaat cukup jelas, kontribusi terbatas; luaran di jurnal SINTA 3–6.</dd>
          <dt>4</dt><dd style="margin:0;">Manfaat nyata & relevan; ada luaran di jurnal SINTA 1–2 / prosiding Scopus.</dd>
          <dt>5</dt><dd style="margin:0;">Manfaat sangat signifikan & berdampak luas; luaran di jurnal internasional bereputasi, strategis & inovatif.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Tinjauan Pustaka</td>
      <td>15</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada pustaka.</dd>
          <dt>2</dt><dd style="margin:0;">Referensi minim, tidak relevan/mutakhir, format salah.</dd>
          <dt>3</dt><dd style="margin:0;">Referensi terbatas & lama, format kurang rapi.</dd>
          <dt>4</dt><dd style="margin:0;">Referensi kurang relevan/mutakhir, dari jurnal bereputasi; pustaka rapi.</dd>
          <dt>5</dt><dd style="margin:0;">Referensi relevan/mutakhir, dari jurnal bereputasi; pustaka rapi.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Metode</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada metode, diagram alir, & tugas anggota.</dd>
          <dt>2</dt><dd style="margin:0;">Hanya salah satu (metode/diagram/tugas anggota).</dd>
          <dt>3</dt><dd style="margin:0;">Metode dibahas minim; ada gambaran IPTEKS tapi tugas anggota tidak jelas.</dd>
          <dt>4</dt><dd style="margin:0;">Metode lengkap & bertahap; ada gambaran IPTEKS, tapi tanpa rincian tugas anggota.</dd>
          <dt>5</dt><dd style="margin:0;">Metode lengkap & bertahap; ada gambaran IPTEKS & pembagian tugas anggota jelas.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Unsur Penunjang</td>
      <td>10</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada jadwal, pembagian tugas, & biaya.</dd>
          <dt>2</dt><dd style="margin:0;">Jadwal tidak realistis; tim tidak sesuai; biaya tidak wajar.</dd>
          <dt>3</dt><dd style="margin:0;">Jadwal cukup sesuai; tim mendukung sebagian; biaya cukup wajar.</dd>
          <dt>4</dt><dd style="margin:0;">Jadwal realistis; tim sesuai bidang; biaya wajar & rinci.</dd>
          <dt>5</dt><dd style="margin:0;">Jadwal sangat realistis & terukur; tim sesuai kebutuhan; biaya sangat wajar, rinci, & proporsional.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
</details>

<details>
<summary> Tabel Rubrik Laporan Kemajuan </summary>

1. Rubrik Laporan Kemajuan Penelitian
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kesesuaian Pelaksanaan dengan Proposal</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak sesuai dengan usulan; kegiatan tidak relevan.</dd>
          <dt>2</dt><dd style="margin:0;">Sebagian sesuai; banyak penyimpangan dari rencana.</dd>
          <dt>3</dt><dd style="margin:0;">Cukup sesuai; ada modifikasi tanpa penjelasan.</dd>
          <dt>4</dt><dd style="margin:0;">Sesuai dengan usulan; ada penyesuaian logis.</dd>
          <dt>5</dt><dd style="margin:0;">Sepenuhnya sesuai; kegiatan relevan dan konsisten dengan tujuan.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas..</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">MCapaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
      <td>Kejelasan Rencana Berikutnya</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada rencana tindak lanjut.</dd>
          <dt>2</dt><dd style="margin:0;">Rencana sangat umum dan tidak realistis.</dd>
          <dt>3</dt><dd style="margin:0;">Ada rencana, namun belum jelas atau terukur.</dd>
          <dt>4</dt><dd style="margin:0;">Rencana jelas, realistis, dan mendukung keberlanjutan.</dd>
          <dt>5</dt><dd style="margin:0;">Rencana terarah, konkret, dan berpotensi memperluas dampak.</dd>
        </dl>
      </td>
    <tr>
      <td>Keterlibatan Anggota Peneliti dan Mahasiswa</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada keterlibatan.</dd>
          <dt>2</dt><dd style="margin:0;">Keterlibatan minim dan tidak aktif.</dd>
          <dt>3</dt><dd style="margin:0;">Terlibat, namun belum merata atau signifikan.</dd>
          <dt>4</dt><dd style="margin:0;">Aktif sesuai peran yang direncanakan.</dd>
          <dt>5</dt><dd style="margin:0;">Seluruh anggota dan mahasiswa aktif dan berkontribusi nyata.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Bahasa dan Sistematika Laporan</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Bahasa tidak baku; banyak kesalahan; sistematika tidak sesuai.</dd>
          <dt>2</dt><dd style="margin:0;">Bahasa cukup komunikatif; banyak kesalahan; sistematika belum lengkap.</dd>
          <dt>3</dt><dd style="margin:0;">Bahasa baku dan cukup runtut; ada sedikit kesalahan; sistematika umumnya sesuai.</dd>
          <dt>4</dt><dd style="margin:0;">Bahasa jelas dan logis; sistematika sesuai ketentuan; tidak menggunakan AI.</dd>
          <dt>5</dt><dd style="margin:0;">Bahasa akademis; sistematika lengkap dan tersusun logis; tidak menggunakan AI.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

2. Rubrik Laporan Kemajuan PKM
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kesesuaian Pelaksanaan dengan Proposal</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak sesuai dengan usulan; kegiatan tidak relevan.</dd>
          <dt>2</dt><dd style="margin:0;">Sebagian sesuai; banyak penyimpangan dari rencana.</dd>
          <dt>3</dt><dd style="margin:0;">Cukup sesuai; ada modifikasi tanpa penjelasan.</dd>
          <dt>4</dt><dd style="margin:0;">Sesuai dengan usulan; ada penyesuaian logis.</dd>
          <dt>5</dt><dd style="margin:0;">Sepenuhnya sesuai; kegiatan relevan dan konsisten dengan tujuan.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas.</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">Capaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
      <td>Kejelasan Rencana Berikutnya</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada rencana tindak lanjut.</dd>
          <dt>2</dt><dd style="margin:0;">Rencana sangat umum dan tidak realistis.</dd>
          <dt>3</dt><dd style="margin:0;">Ada rencana, namun belum jelas atau terukur.</dd>
          <dt>4</dt><dd style="margin:0;">Rencana jelas, realistis, dan mendukung keberlanjutan.</dd>
          <dt>5</dt><dd style="margin:0;">Rencana terarah, konkret, dan berpotensi memperluas dampak.</dd>
        </dl>
      </td>
    <tr>
      <td>Keterlibatan Anggota Pengabdian dan Mahasiswa</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada keterlibatan.</dd>
          <dt>2</dt><dd style="margin:0;">Keterlibatan minim dan tidak aktif.</dd>
          <dt>3</dt><dd style="margin:0;">Terlibat, namun belum merata atau signifikan.</dd>
          <dt>4</dt><dd style="margin:0;">Aktif sesuai peran yang direncanakan.</dd>
          <dt>5</dt><dd style="margin:0;">Seluruh anggota dan mahasiswa aktif dan berkontribusi nyata.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Bahasa dan Sistematika Laporan</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Bahasa tidak baku; banyak kesalahan; sistematika tidak sesuai.</dd>
          <dt>2</dt><dd style="margin:0;">Bahasa cukup komunikatif; banyak kesalahan; sistematika belum lengkap.</dd>
          <dt>3</dt><dd style="margin:0;">Bahasa baku dan cukup runtut; ada sedikit kesalahan; sistematika umumnya sesuai.</dd>
          <dt>4</dt><dd style="margin:0;">Bahasa jelas dan logis; sistematika sesuai ketentuan; tidak menggunakan AI.</dd>
          <dt>5</dt><dd style="margin:0;">Bahasa akademis; sistematika lengkap dan tersusun logis; tidak menggunakan AI.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
</details>

<details>
<summary> Rubrik Monev Proposal </summary>

1. Rubrik Monev Penelitian
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>50</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas.</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">Capaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td rowspan="13">Status Luaran Publikasi Pengabdian kepada Masyarakat</td>
      <td>50</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada draft luaran.</dd>
          <dt>2</dt><dd style="margin:0;">Terdapat draft luaran.</dd>
          <dt>3</dt><dd style="margin:0;">Status luaran telah di submit.</dd>
          <dt>4</dt><dd style="margin:0;">Status luaran telah mendapat LoA.</dd>
          <dt>5</dt><dd style="margin:0;">Status luaran telah publish.</dd>
          <dt></dt><dd style="margin:0;">Jenis Luaran (Centang)</dd>
          <dt></dt><dd style="margin:0;">Jurnal Internasional.</dd>
          <dt></dt><dd style="margin:0;">Jurnal Nasional Terakreditasi SINTA.</dd>
          <dt></dt><dd style="margin:0;">Prosiding Internasional.</dd>
          <dt></dt><dd style="margin:0;">Prosiding Nasional.</dd>
          <dt></dt><dd style="margin:0;">Artikel Media Masa.</dd>
          <dt></dt><dd style="margin:0;">Hak Kekayaan Intelektual (HKI).</dd>
          <dt></dt><dd style="margin:0;">Teknologi Tepat Guna (TTG) / Prototype / Karya Seni.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

2. Rubrik Monev PKM
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Keterangan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>50</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas.</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">Capaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td rowspan="13">Status Luaran Publikasi Pengabdian kepada Masyarakat</td>
      <td>50</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada draft luaran.</dd>
          <dt>2</dt><dd style="margin:0;">Terdapat draft luaran.</dd>
          <dt>3</dt><dd style="margin:0;">Status luaran telah di submit.</dd>
          <dt>4</dt><dd style="margin:0;">Status luaran telah mendapat LoA.</dd>
          <dt>5</dt><dd style="margin:0;">Status luaran telah publish.</dd>
          <dt></dt><dd style="margin:0;">Jenis Luaran (Centang)</dd>
          <dt></dt><dd style="margin:0;">Jurnal Internasional.</dd>
          <dt></dt><dd style="margin:0;">Jurnal Nasional Terakreditasi SINTA.</dd>
          <dt></dt><dd style="margin:0;">Prosiding Internasional.</dd>
          <dt></dt><dd style="margin:0;">Prosiding Nasional.</dd>
          <dt></dt><dd style="margin:0;">Artikel Media Masa.</dd>
          <dt></dt><dd style="margin:0;">Hak Kekayaan Intelektual (HKI).</dd>
          <dt></dt><dd style="margin:0;">Teknologi Tepat Guna (TTG) / Prototype / Karya Seni.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
</details>
<details>
<summary> Tabel Rubrik Laporan Akhir </summary>

3. Rubrik Laporan Akhir Penelitian
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kesesuaian Pelaksanaan dengan Proposal</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak sesuai dengan usulan; kegiatan tidak relevan.</dd>
          <dt>2</dt><dd style="margin:0;">Sebagian sesuai; banyak penyimpangan dari rencana.</dd>
          <dt>3</dt><dd style="margin:0;">Cukup sesuai; ada modifikasi tanpa penjelasan.</dd>
          <dt>4</dt><dd style="margin:0;">Sesuai dengan usulan; ada penyesuaian logis.</dd>
          <dt>5</dt><dd style="margin:0;">Sepenuhnya sesuai; kegiatan relevan dan konsisten dengan tujuan.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas.</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">Capaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
      <td>Keterlibatan Anggota Peneliti dan Mahasiswa</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada keterlibatan.</dd>
          <dt>2</dt><dd style="margin:0;">Keterlibatan minim dan tidak aktif.</dd>
          <dt>3</dt><dd style="margin:0;">Terlibat, namun belum merata atau signifikan.</dd>
          <dt>4</dt><dd style="margin:0;">Aktif sesuai peran yang direncanakan.</dd>
          <dt>5</dt><dd style="margin:0;">Seluruh anggota dan mahasiswa aktif dan berkontribusi nyata.</dd>
        </dl>
      </td>
    <tr>
      <td>Bahasa dan Sistematika Laporan</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Bahasa tidak baku; banyak kesalahan; sistematika tidak sesuai.</dd>
          <dt>2</dt><dd style="margin:0;">Bahasa cukup komunikatif; banyak kesalahan; sistematika belum lengkap.</dd>
          <dt>3</dt><dd style="margin:0;">Bahasa baku dan cukup runtut; ada sedikit kesalahan; sistematika umumnya sesuai.</dd>
          <dt>4</dt><dd style="margin:0;">Bahasa jelas dan logis; sistematika sesuai ketentuan; tidak menggunakan AI.</dd>
          <dt>5</dt><dd style="margin:0;">Bahasa akademis; sistematika lengkap dan tersusun logis; tidak menggunakan AI.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

4. Rubrik Laporan Kemajuan PKM
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Kesesuaian Pelaksanaan dengan Proposal</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak sesuai dengan usulan; kegiatan tidak relevan.</dd>
          <dt>2</dt><dd style="margin:0;">Sebagian sesuai; banyak penyimpangan dari rencana.</dd>
          <dt>3</dt><dd style="margin:0;">Cukup sesuai; ada modifikasi tanpa penjelasan.</dd>
          <dt>4</dt><dd style="margin:0;">Sesuai dengan usulan; ada penyesuaian logis.</dd>
          <dt>5</dt><dd style="margin:0;">Sepenuhnya sesuai; kegiatan relevan dan konsisten dengan tujuan.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Capaian yang Telah Dilaksanakan (Berdasarkan Jadwal)</td>
      <td>30</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada hasil; kegiatan tidak menghasilkan luaran apapun.</dd>
          <dt>2</dt><dd style="margin:0;">Capaian sangat rendah; sebagian besar target tidak tercapai.</dd>
          <dt>3</dt><dd style="margin:0;">Capaian sedang; sebagian besar kegiatan terlaksana dengan hasil terbatas.</dd>
          <dt>4</dt><dd style="margin:0;">Capaian sesuai target; hasil jelas, terukur, dan dapat diverifikasi.</dd>
          <dt>5</dt><dd style="margin:0;">Capaian melebihi target; hasil berdampak nyata dan menunjukkan keberlanjutan program.</dd>
        </dl>
      </td>
    </tr>
      <td>Keterlibatan Anggota Pengabdian dan Mahasiswa</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada keterlibatan.</dd>
          <dt>2</dt><dd style="margin:0;">Keterlibatan minim dan tidak aktif.</dd>
          <dt>3</dt><dd style="margin:0;">Terlibat, namun belum merata atau signifikan.</dd>
          <dt>4</dt><dd style="margin:0;">Aktif sesuai peran yang direncanakan.</dd>
          <dt>5</dt><dd style="margin:0;">Seluruh anggota dan mahasiswa aktif dan berkontribusi nyata.</dd>
        </dl>
      </td>
    <tr>
      <td>Bahasa dan Sistematika Laporan</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Bahasa tidak baku; banyak kesalahan; sistematika tidak sesuai.</dd>
          <dt>2</dt><dd style="margin:0;">Bahasa cukup komunikatif; banyak kesalahan; sistematika belum lengkap.</dd>
          <dt>3</dt><dd style="margin:0;">Bahasa baku dan cukup runtut; ada sedikit kesalahan; sistematika umumnya sesuai.</dd>
          <dt>4</dt><dd style="margin:0;">Bahasa jelas dan logis; sistematika sesuai ketentuan; tidak menggunakan AI.</dd>
          <dt>5</dt><dd style="margin:0;">Bahasa akademis; sistematika lengkap dan tersusun logis; tidak menggunakan AI.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
</details>
<details>
<summary> Tabel Rubrik Diseminasi </summary>

5. Rubrik Diseminasi Penelitian
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Status Luaran Publikasi</td>
      <td>40</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada luaran; belum ada naskah atau dokumen publikasi.</dd>
          <dt>2</dt><dd style="margin:0;">Naskah dalam tahap awal penyusunan; belum siap dikirim untuk publikasi.</dd>
          <dt>3</dt><dd style="margin:0;">Naskah telah dikirim dan sedang dalam proses review pada jurnal/prosiding/buku nasional.</dd>
          <dt>4</dt><dd style="margin:0;">Telah diterima atau terbit pada jurnal/prosiding/buku nasional bereputasi atau proses publikasi internasional.</dd>
          <dt>5</dt><dd style="margin:0;">Telah terbit di jurnal/prosiding/buku internasional bereputasi atau memiliki ISBN resmi.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Jenis Publikasi</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Artikel Ilmiah SINTA 5/6.</dd>
          <dt>2</dt><dd style="margin:0;">Artikel Ilmiah SINTA 4.</dd>
          <dt>3</dt><dd style="margin:0;">Artikel Ilmiah SINTA 3.</dd>
          <dt>4</dt><dd style="margin:0;">Artikel Ilmiah SINTA 1-2.</dd>
          <dt>5</dt><dd style="margin:0;">Artikel Ilmiah di Jurnal Internasional Bereputasi.</dd>
        </dl>
      </td>
    </tr>
      <td>Keberlanjutan dan Pemanfaatan Hasil</td>
      <td>15</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada pemanfaatan hasil; belum ada upaya menghasilkan luaran tambahan.</dd>
          <dt>2</dt><dd style="margin:0;">Hasil dimanfaatkan terbatas; rencana luaran tambahan belum jelas atau belum diajukan.</dd>
          <dt>3</dt><dd style="margin:0;">Hasil dimanfaatkan sebagian oleh mitra; sedang proses luaran tambahan.</dd>
          <dt>4</dt><dd style="margin:0;">Hasil dimanfaatkan aktif oleh mitra/masyarakat; telah mengajukan luaran tambahan.</dd>
          <dt>5</dt><dd style="margin:0;">Hasil dimanfaatkan luas dan berkelanjutan; luaran tambahan telah terbit/publish/granted.</dd>
        </dl>
      </td>
    <tr>
      <td>Kesiapan dan Kemampuan Mempresentasikan Hasil</td>
      <td>25</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak siap mempresentasikan; penyampaian tidak sistematis.</dd>
          <dt>2</dt><dd style="margin:0;">Presentasi kurang jelas; penguasaan materi rendah.</dd>
          <dt>3</dt><dd style="margin:0;">Presentasi cukup jelas; penguasaan materi sedang; komunikasi kurang lancar.</dd>
          <dt>4</dt><dd style="margin:0;">Presentasi baik; penguasaan materi cukup kuat dan penyampaian terstruktur.</dd>
          <dt>5</dt><dd style="margin:0;">Presentasi sangat baik; penguasaan materi tinggi, komunikatif, dan meyakinkan.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

6. Rubrik Diseminasi PKM
<table>
  <thead>
    <tr>
      <th>Kriteria</th>
      <th>Bobot</th>
      <th>Rubrik Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Status Luaran Publikasi</td>
      <td>40</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada luaran; belum ada naskah atau dokumen publikasi.</dd>
          <dt>2</dt><dd style="margin:0;">Naskah dalam tahap awal penyusunan; belum siap dikirim untuk publikasi.</dd>
          <dt>3</dt><dd style="margin:0;">Naskah telah dikirim dan sedang dalam proses review pada jurnal/prosiding/buku nasional.</dd>
          <dt>4</dt><dd style="margin:0;">Telah diterima atau terbit pada jurnal/prosiding/buku nasional bereputasi atau proses publikasi internasional.</dd>
          <dt>5</dt><dd style="margin:0;">Telah terbit di jurnal/prosiding/buku internasional bereputasi atau memiliki ISBN resmi.</dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>Jenis Publikasi</td>
      <td>20</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Artikel Ilmiah SINTA 5/6.</dd>
          <dt>2</dt><dd style="margin:0;">Artikel Ilmiah SINTA 4.</dd>
          <dt>3</dt><dd style="margin:0;">Artikel Ilmiah SINTA 3.</dd>
          <dt>4</dt><dd style="margin:0;">Artikel Ilmiah SINTA 1-2.</dd>
          <dt>5</dt><dd style="margin:0;">Artikel Ilmiah di Jurnal Internasional Bereputasi.</dd>
        </dl>
      </td>
    </tr>
      <td>Keberlanjutan dan Pemanfaatan Hasil</td>
      <td>15</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak ada pemanfaatan hasil; belum ada upaya menghasilkan luaran tambahan.</dd>
          <dt>2</dt><dd style="margin:0;">Hasil dimanfaatkan terbatas; rencana luaran tambahan belum jelas atau belum diajukan.</dd>
          <dt>3</dt><dd style="margin:0;">Hasil dimanfaatkan sebagian oleh mitra; sedang proses luaran tambahan.</dd>
          <dt>4</dt><dd style="margin:0;">Hasil dimanfaatkan aktif oleh mitra/masyarakat; telah mengajukan luaran tambahan.</dd>
          <dt>5</dt><dd style="margin:0;">Hasil dimanfaatkan luas dan berkelanjutan; luaran tambahan telah terbit/publish/granted.</dd>
        </dl>
      </td>
    <tr>
      <td>Kesiapan dan Kemampuan Mempresentasikan Hasil</td>
      <td>25</td>
      <td>
        <dl style="margin:0; display:grid; grid-template-columns: 20px 1fr; gap: 6px 12px;">
          <dt>1</dt><dd style="margin:0;">Tidak siap mempresentasikan; penyampaian tidak sistematis.</dd>
          <dt>2</dt><dd style="margin:0;">Presentasi kurang jelas; penguasaan materi rendah.</dd>
          <dt>3</dt><dd style="margin:0;">Presentasi cukup jelas; penguasaan materi sedang; komunikasi kurang lancar.</dd>
          <dt>4</dt><dd style="margin:0;">Presentasi baik; penguasaan materi cukup kuat dan penyampaian terstruktur.</dd>
          <dt>5</dt><dd style="margin:0;">Presentasi sangat baik; penguasaan materi tinggi, komunikatif, dan meyakinkan.</dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>
</details>

### Perhitungan Skor Akhir

Sistem menghitung skor akhir secara otomatis menggunakan rumus:

```
Skor Akhir = skor_kriteria × bobot_kriteria
```

**Contoh:**

| Kriteria           | Bobot | Skor Anda | Kontribusi |
| ------------------ | ----- | --------- | ---------- |
| Perumusan Masalah  | 25%   | 4         | 100        |
| Manfaat Penelitian | 20%   | 3         | 60         |
| Kajian Pustaka     | 15%   | 4         | 60         |
| Metode Penelitian  | 30%   | 5         | 150        |
| Faktor Penunjang   | 10%   | 3         | 30         |
| **Skor Akhir**     |       |           | **400**    |

Skor akhir ditampilkan secara langsung di formulir seiring Anda mengisi nilai.

---

## Sebelum Menyimpan

Pastikan semua kriteria sudah diberi skor sebelum mengirim keputusan. Lanjutkan ke halaman [Keputusan Review](/panduan/reviewer/keputusan) untuk mengetahui langkah berikutnya.
