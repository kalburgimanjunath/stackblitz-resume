import React, { useState, useRef } from 'react';
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// import filePDF from '../../assets/sample.pdf';
export default function index() {
  const books = [
    {
      id: 1,
      title: 'Reactjs',
      description: 'react-beginners-handbook',
      pdfurl: './sample.pdf',
      type: 'programming',
    },
  ];

  return (
    <div className="p-24 flex grid grid-cols-2 md:grid-cols-2">
      <h1 className="font-bold">mybooks</h1>
      {books &&
        books.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.description}</div>
              {/* <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                  <div id="pdfviewer">
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </> */}
            </div>
          );
        })}
    </div>
  );
}
