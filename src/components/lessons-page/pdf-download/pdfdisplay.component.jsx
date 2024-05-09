import React from "react";
import PDFViewer from "../../PDFViewer.component";
import introPDF from "../../../pdf/intro.pdf";
import styled from "styled-components"; 


export const PDFContainer = styled.div `

    padding: 1rem;
    display: flex;
    justify-content: space-around;
    
`

export const PdfDisplay= ()=> {
  return (
      <div>
          <PDFContainer>
               <PDFViewer file={introPDF} />

          </PDFContainer>
          
         
      
    </div>
  )
}; 
