import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "react-pdf/dist/esm/Page/TextLayer.css";

// Directly load PDF.js worker as a workaround for webpack build issue.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); // Start with the first page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} scale={1.5} />
            </Document>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
                    Previous
                </button>
                <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PDFViewer;