fetch('data/rps.json')
  .then(res => res.json())
  .then(data => {
    renderIdentitas(data.identitas);
    renderDeskripsi(data.deskripsi);
    renderCPL(data.cpl_prodi);
    renderCPMK(data.cpmk);
    renderRPS(data.rps_mingguan);
  });

function renderIdentitas(id){
  let html = '';
  for (const key in id) {
    html += `<tr><th>${key.replace(/_/g,' ')}</th><td>${id[key]}</td></tr>`;
  }
  document.getElementById('identitasContent').innerHTML = html;
}

function renderDeskripsi(text){
  document.getElementById('deskripsiContent').innerText = text;
}

function renderCPL(cpl){
  document.getElementById('cplContent').innerHTML =
    cpl.map(i => `<li>${i}</li>`).join('');
}

function renderCPMK(cpmk){
  document.getElementById('cpmkContent').innerHTML =
    cpmk.map(i => `<li>${i}</li>`).join('');
}

function renderRPS(rps){
  let html = `<table>
    <thead>
      <tr><th>Minggu</th><th>Sub-CPMK</th><th>Detail</th></tr>
    </thead><tbody>`;

  rps.forEach((m,i)=>{
    html += `
      <tr class="week" onclick="toggle(${i})">
        <td>${m.minggu}</td>
        <td>${m.subcpmk}</td>
        <td>Klik untuk detail</td>
      </tr>
      <tr id="detail${i}" class="hidden">
        <td colspan="3">
          <strong>Materi:</strong> ${m.materi}<br>
          <strong>Metode:</strong> ${m.metode}<br>
          <strong>Penilaian:</strong> ${m.penilaian}
        </td>
      </tr>`;
  });

  html += '</tbody></table>';
  document.getElementById('rpsTable').innerHTML = html;
}

function toggle(i){
  document.getElementById('detail'+i).classList.toggle('hidden');
}
