fetch('data/rps.json')
  .then(r => r.json())
  .then(d => {
    renderIdentitas(d.identitas);
    renderText('deskripsiContent', d.deskripsi);
    renderList('cplContent', d.cpl_prodi);
    renderList('cpmkContent', d.cpmk);
    renderList('bahanContent', d.bahan_kajian);
    renderRPS(d.rps_mingguan);
    renderPenilaian(d.penilaian);
    renderList('referensiContent', d.referensi, true);
  });

function renderIdentitas(o){
  document.getElementById('identitasContent').innerHTML =
    Object.entries(o).map(([k,v]) =>
      `<tr><th>${k.replace(/_/g,' ')}</th><td>${v}</td></tr>`
    ).join('');
}

function renderText(id, text){
  document.getElementById(id).innerText = text;
}

function renderList(id, arr, ordered=false){
  document.getElementById(id).innerHTML =
    arr.map(i => `<li>${i}</li>`).join('');
}

function renderRPS(rps){
  let h = `<table><tr><th>Minggu</th><th>Sub-CPMK</th><th>Detail</th></tr>`;
  rps.forEach((m,i)=>{
    h += `
      <tr class="week" onclick="toggle(${i})">
        <td>${m.minggu}</td><td>${m.subcpmk}</td><td>Klik</td>
      </tr>
      <tr id="d${i}" class="hidden">
        <td colspan="3">
          <b>Materi:</b> ${m.materi}<br>
          <b>Metode:</b> ${m.metode}<br>
          <b>Penilaian:</b> ${m.penilaian}
        </td>
      </tr>`;
  });
  document.getElementById('rpsTable').innerHTML = h + '</table>';
}

function renderPenilaian(p){
  document.getElementById('penilaianContent').innerHTML =
    '<tr><th>Komponen</th><th>Bobot (%)</th></tr>' +
    p.map(i => `<tr><td>${i.komponen}</td><td>${i.bobot}</td></tr>`).join('');
}

function toggle(i){
  document.getElementById('d'+i).classList.toggle('hidden');
}

function toggleAsesor(){
  document.body.classList.toggle('asesor');
  document.querySelectorAll('.hidden').forEach(e=>e.classList.remove('hidden'));
}
