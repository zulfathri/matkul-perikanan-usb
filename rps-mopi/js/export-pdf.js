function exportPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p','mm','a4');

  doc.html(document.getElementById('content'), {
    callback: () => doc.save('RPS_MOPI_2025.pdf'),
    x:10,
    y:10,
    width:190
  });
}
