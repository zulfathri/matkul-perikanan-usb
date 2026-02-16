// --- KONFIGURASI LINK UTAMA ---
const mainLinks = {
    rps: "MASUKKAN_LINK_GDRIVE_RPS_DISINI", // Link File PDF RPS
    modul: "MASUKKAN_LINK_GDRIVE_MODUL_DISINI", // Link File PDF Modul
    kontrak: "MASUKKAN_LINK_GDRIVE_KONTRAK_DISINI", // Link File Kontrak
    uploadTugas: "MASUKKAN_LINK_GOOGLE_FORM_PENGUMPULAN_TUGAS" // Link Google Form
};

// --- DATA PERTEMUAN (Berdasarkan RPS) ---
const meetings = [
    {
        week: 1,
        title: "Pengantar Oseanografi",
        desc: "Sejarah ekspedisi laut, ruang lingkup, dan Kontrak Perkuliahan.",
        status: "Selesai", // Opsi: Selesai, Aktif, Terkunci
        link: "MASUKKAN_LINK_MATERI_1"
    },
    {
        week: 2,
        title: "Geologi Laut",
        desc: "Teori Tektonik Lempeng, Morfologi Dasar Laut (Shelf, Slope, Trench).",
        status: "Selesai",
        link: "MASUKKAN_LINK_MATERI_2"
    },
    {
        week: 3,
        title: "Suhu & Densitas Air Laut",
        desc: "Heat Budget, Distribusi Suhu Vertikal, dan Lapisan Termoklin.",
        status: "Aktif",
        link: "MASUKKAN_LINK_MATERI_3"
    },
    {
        week: 4,
        title: "Salinitas & Komposisi Kimia",
        desc: "Klorinitas, Salinitas, Diagram T-S (Temperature-Salinity).",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 5,
        title: "Interaksi Laut-Atmosfer",
        desc: "Sirkulasi Atmosfer, Angin Monsun, dan Siklus Hidrologi.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 6,
        title: "Sirkulasi Arus Laut",
        desc: "Gaya Coriolis, Arus Ekman, Arus Geostropik & ARLINDO.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 7,
        title: "Gelombang Laut",
        desc: "Gelombang laut dalam vs dangkal, Tsunami, dan Gelombang Pecah.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 8,
        title: "Ujian Tengah Semester (UTS)",
        desc: "Evaluasi materi pertemuan 1-7.",
        status: "Jadwal",
        link: "#"
    },
    {
        week: 9,
        title: "Pasang Surut",
        desc: "Teori Kesetimbangan, Tipe Pasut, Gaya Pembangkit.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 10,
        title: "Proses Pantai & Sedimentasi",
        desc: "Longshore current, Abrasi, Akresi, dan Profil Pantai.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 11,
        title: "Produktivitas Primer",
        desc: "Fotosintesis di laut, Siklus Nutrien, dan Rantai Makanan Pelagis.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 12,
        title: "Zona Pelagis (Nekton)",
        desc: "Adaptasi Ikan Pelagis, Renang, Buoyancy, dan Migrasi.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 13,
        title: "Zona Bentik & Laut Dalam",
        desc: "Adaptasi Biota Dasar Laut, Bioluminescene, Hidrotermal Vent.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 14,
        title: "Estuari & Mangrove",
        desc: "Dinamika percampuran air dan zonasi hutan mangrove.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 15,
        title: "Terumbu Karang & Lamun",
        desc: "Parameter lingkungan karang, Coral Bleaching, dan Padang Lamun.",
        status: "Terkunci",
        link: "#"
    },
    {
        week: 16,
        title: "Ujian Akhir Semester (UAS)",
        desc: "Evaluasi materi pertemuan 9-15.",
        status: "Jadwal",
        link: "#"
    }
];

// --- DATA PRAKTIKUM (Berdasarkan Modul) ---
const practicums = [
    {
        id: 1,
        topic: "Suhu Perairan",
        location: "Pantai/Laboratorium",
        status: "Open", // Open, Closed, Grading
        reportLink: mainLinks.uploadTugas
    },
    {
        id: 2,
        topic: "Salinitas",
        location: "Pantai/Laboratorium",
        status: "Upcoming",
        reportLink: "#"
    },
    {
        id: 3,
        topic: "Arus Laut",
        location: "Lapangan (Metode Layangan Arus)",
        status: "Upcoming",
        reportLink: "#"
    },
    {
        id: 4,
        topic: "Gelombang",
        location: "Lapangan",
        status: "Upcoming",
        reportLink: "#"
    },
    {
        id: 5,
        topic: "Pasang Surut",
        location: "Pengamatan 24 Jam",
        status: "Upcoming",
        reportLink: "#"
    }
];