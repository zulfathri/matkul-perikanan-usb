fetch('data/rps.json')
  .then(res=>res.json())
  .then(data=>renderRPS(data));

function renderRPS(rpsData){
  let html = `<table><thead><tr><th>Minggu</th><th>Sub-CPMK</th><th>Detail</th></tr></thead><tbody>`;
  rpsData.forEach((m,i)=>{
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
