document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Set Link Dokumen Utama
    document.getElementById('link-rps').href = mainLinks.rps;
    document.getElementById('link-modul').href = mainLinks.modul;
    document.getElementById('link-kontrak').href = mainLinks.kontrak;

    // 2. Render Daftar Pertemuan
    const meetingContainer = document.getElementById('meeting-container');
    
    meetings.forEach(meet => {
        // Tentukan warna badge status
        let badgeColor = 'bg-secondary';
        let btnClass = 'btn-secondary disabled';
        let btnText = '<i class="fas fa-lock me-2"></i>Terkunci';

        if (meet.status === 'Selesai') {
            badgeColor = 'bg-success';
            btnClass = 'btn-success';
            btnText = '<i class="fas fa-check-circle me-2"></i>Materi Selesai';
        } else if (meet.status === 'Aktif') {
            badgeColor = 'bg-primary';
            btnClass = 'btn-primary';
            btnText = '<i class="fas fa-download me-2"></i>Download Materi';
        } else if (meet.status === 'Jadwal') {
            badgeColor = 'bg-warning text-dark';
            btnClass = 'btn-warning';
            btnText = '<i class="fas fa-calendar me-2"></i>Lihat Jadwal';
        }

        const cardHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="p-3 bg-white shadow-sm d-flex flex-column h-100 meeting-card position-relative rounded">
                    <span class="badge ${badgeColor} status-badge">${meet.status}</span>
                    <div>
                        <p class="fs-5 fw-bold text-dark mb-1">Pertemuan ${meet.week}</p>
                        <p class="fs-6 text-muted mb-2">${meet.title}</p>
                        <p class="small text-secondary" style="min-height: 40px;">${meet.desc}</p>
                    </div>
                    <div class="mt-auto pt-3">
                        <a href="${meet.link}" class="btn ${btnClass} btn-sm w-100">${btnText}</a>
                    </div>
                </div>
            </div>
        `;
        meetingContainer.innerHTML += cardHTML;
    });

    // 3. Render Tabel Praktikum
    const practicumBody = document.getElementById('practicum-body');

    practicums.forEach(prac => {
        let statusBadge = `<span class="badge bg-secondary">Closed</span>`;
        let actionBtn = `<button class="btn btn-sm btn-secondary disabled">Tutup</button>`;

        if (prac.status === 'Open') {
            statusBadge = `<span class="badge bg-success">Open</span>`;
            actionBtn = `<a href="${prac.reportLink}" class="btn btn-sm btn-primary">Upload Laporan</a>`;
        } else if (prac.status === 'Upcoming') {
            statusBadge = `<span class="badge bg-warning text-dark">Upcoming</span>`;
            actionBtn = `<button class="btn btn-sm btn-light disabled">Belum Mulai</button>`;
        }

        const rowHTML = `
            <tr>
                <th scope="row">${prac.id}</th>
                <td>${prac.topic}</td>
                <td>${prac.location}</td>
                <td>${statusBadge}</td>
                <td>${actionBtn}</td>
            </tr>
        `;
        practicumBody.innerHTML += rowHTML;
    });

    // 4. Toggle Sidebar (Interaktivitas Menu)
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");

    toggleButton.onclick = function () {
        el.classList.toggle("toggled");
    };
});