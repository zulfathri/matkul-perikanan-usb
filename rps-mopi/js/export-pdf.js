async function exportPDF(){
  // Paksa mode asesor
  document.body.classList.add('asesor');

  // Buka semua detail minggu
  document.querySelectorAll('.hidden').forEach(e=>{
    e.classList.remove('hidden');
  });

  const element = document.getElementById('content');

  // Tunggu render ulang DOM
  await new Promise(r => setTimeout(r, 500));

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    windowWidth: document.body.scrollWidth
  });

  const imgData = canvas.toDataURL('image/png');

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p','mm','a4');

  const pageWidth = 210;
  const pageHeight = 297;

  const imgWidth = pageWidth;
  const imgHeight = canvas.height * imgWidth / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save('RPS_MOPI_2025.pdf');
}
