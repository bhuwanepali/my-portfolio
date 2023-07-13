import React from 'react';
import { Document, Page } from 'react-pdf';

import CV from './file/BHUWAN-PARIYAR-cv.pdf';

export default function Test() {
    return (
        <Document file={CV}>
            <Page pageNumber={1} />
        </Document>
    );
}