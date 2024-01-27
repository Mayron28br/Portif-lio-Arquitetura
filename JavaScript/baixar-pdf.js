function baixarPDF() {
    var urlPDF = 'PDF/suite-presidencial.pdf';
  
    var link = document.createElement('a');
    link.href = urlPDF;
    link.download = 'nome_do_arquivo.pdf';
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);

    var visualizarPDF = window.open('visualizar_pdf.html', '_blank');
    visualizarPDF.document.write('<embed width="100%" height="100%" src="' + urlPDF + '" type="application/pdf">');
  }