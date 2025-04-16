document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadPDF');
    const invoice = document.getElementById('invoice');
    
    downloadBtn.addEventListener('click', function() {
        // Hide the controls temporarily
        const controls = document.querySelector('.controls');
        controls.style.display = 'none';
        
        // PDF generation options
        const options = {
            margin: 10,
            filename: 'patty_dub_invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate the PDF
        html2pdf().from(invoice).set(options).save().then(function() {
            // Show the controls again after PDF is generated
            controls.style.display = 'block';
        });
    });
});