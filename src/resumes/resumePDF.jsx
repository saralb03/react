import html2pdf from 'html2pdf.js';

const generatePDF = async (htmlContent) => {
  const pdfOptions = {
    margin: 10,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  const pdfPromise = html2pdf().from(htmlContent).set(pdfOptions).outputPdf();

  return pdfPromise;
};

export default generatePDF;
