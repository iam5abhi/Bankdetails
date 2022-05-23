import React,{useRef} from 'react';
 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow';
 import Paper from '@mui/material/Paper';
 import './index.css'
 import { useReactToPrint } from "react-to-print";
 import Button from '@mui/material/Button';
 



 function createData(id, date, effective_date, cheque_ref, branch, description,withdrawalamout,despositamout,blance
    ) {
     return { date, effective_date, cheque_ref, branch, description,withdrawalamout,despositamout,blance};
   }

 const rows = [
     createData(1,'11/5/2020', '11/5/2020','','','BY SALARY M/O APR','','56,500.00','4,06,908.00'),
     createData(2,'02/05/2020', '02/05/2020','','','IMPS -024519351745-BAJAJ INSTALMENT','5,655.00','','4,01,253.00'),
     createData(3,'07/05/2020',  '07/05/2020','',1213,'CASH DEPOSIT','','5,000.00','4,06,253.00'),
     createData(4,'14/05/2020', '14/05/2020','',1498,'WTHDRL,CLG/000001/DEEPAK KUMAR','10,000.00','','3,96,253.00'),
     createData(5,'19/05/2020','19/05/2020','',1000,'DEPOSIT-IMPS/006214325320/DEEPAk  KUMAR/ICICI  Bank/XXXXXXXX0014/Friends,14/05/2020-141927','','5,000.00','4,01,253.00'),
     createData(6,'24/05/2020', '24/05/2020','',1000,'DEPOSIT-IMPS/006214325320/DEEPAk  KUMAR/ICICI  Bank/XXXXXXXX0014/NA,19/05/2020-151631','','30,000.00','4,31,253.00'),
     createData(7,'24/05/2020','24/05/2020','0012',1213,'CLG. ANIL KUMAR','16,205.00','','4,15,048.00'),
     createData(8,'29/05/2020','29/05/2020','0011',1213,'FEE CHG, DBCrd:5089XXXXXXXX3004','177.00','','4,14,871.00'),
     createData(9,'29/05/2020', '29/05/2020','',1000,'IMPS P2P 02456718491 MIR 020535186467','','1,988.55','4,16,859.55'),
     createData(10,'29/05/2020', '29/05/2020','',1213,'NEFT SBI GLOBAL LINK','','15,600.38','4,32,459.93'),
     createData(11,'01/06/2020', '01/06/2020','',1000,'DEPOSIT-IMPS/017515442025/CHAIN  SINGH/Jammu And   Bank/XXXXXXXX0014/ffff,29/05/2020-151536','','1,700.00','4,34,159.93'),

     createData(12,'02/06/2020', '02/06/2020','',1498,'BY SALARY M/O MAY','','56,500.00','4,90,659.93'),
     createData(13,'07/06/2020','07/06/2020','',1213,'NT CREDIT','','1988.55','4,92,648.48'),
     createData(4,'11/06/2020','11/06/2020','0013',1213,'ATM WDL 5220000499XXXX PNB/+G ','10,000.00','','4,82,648.48'),
     createData(5,'15/06/2020','15/06/2020','',1498,'SELF','20,000.00','4,62,648.48',),

     createData(15,'17/06/2020', '17/06/2020','',1000,'POS 559404XXXXXXXX0995 TANEJAPETROLEUM','2,200','','4,60,448.48'),
     createData(16,'19/06/2020','19/06/2020','0014',1498,'CASH DEPOSIT','','3,000.00','4,63,448.48'),
     createData(17,'21/06/2020','21/06/2020','',1213,'CLG. SUKHWINDER 09876531 HDFC97_','15,028.19','','4,48,420.29'),

     createData(18,'26/06/2020', '26/06/2020','MIR2052584',1000,'POS 559404XXXXXXXX0995 LIFE INSURANCE C','1,406.00','','4,47,014.29'),
     createData(19,'29/06/2020','29/06/2020','','0005617','DEBIT CARD INSURANCE FEE ISSUE 050920 MIR','885','','4,46,129.29'),
     createData(20,'30/06/2020','30/06/2020','0015',1213,'FUND TRANSFER VINOD MAHAJAN BANDAN','','13,000.00','4,59,129.29'),
     createData(5,'01/07/2020','01/07/2020','','','SELF','35,000.00','','4,24,129.29'),

     createData(21,'03/07/2020','03/07/2020','MIR2081875','MEGA MART CLOTH MIR208753678','','56,500.00','4,80,629.29'),
     createData(22,'06/07/2020','06/07/2020','','ATM WDL5220000499XXXX ICIC00345','15,395.44','','4,65,233.85'),
     createData(23,'08/07/2020', '08/07/2020','','00000','CASH TO BIKRAM CHQ PAID MOHALI','5,195.64','','4,60,038.21'),
     createData(24,'11/07/2020','11/07/2020','0017','00001761','SMS CHRG FOR 01/06','10,000.00','','4,50,038.21'),
     createData(25,'14/07/2020','14/07/2020','','00000','SMS CHRG FOR 01/06','7,000.00','','4,43,038.21'),

     createData(26,'19/07/2020','19/07/2020','0016',1213,'SELF','34.70','4,43,003.51'),
     createData(27,'23/07/2020','23/07/2020','82143',1213,'','20,000.00','','4,23,003.51'),
     createData(28,'28/07/2020', '28/07/2020','','','','','21,000.00','4,44,003.51'),

   ];

 const Bankdetails =()=>{
  
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

     return (
         <div >
                
             <br/>
                <Button variant="contained">Add Amonut</Button> &nbsp; 
                <Button variant="contained">withrwal Amout</Button>&nbsp; &nbsp; 
               <Button variant="contained" color="success" onClick={handlePrint}>
                 Print
               </Button>
             <br/><br/><br/><br/>
         <TableContainer component={Paper} ref={componentRef}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
           <TableRow className="tableRow">
             <TableCell className ='tablecell'  align ="left">Date</TableCell>
             <TableCell  className ='tablecell' align="left">Effective<br/>Date</TableCell>    
             <TableCell className ='tablecell'  align="left">Cheque/SequenceNumber </TableCell>
             <TableCell className ='tablecell' align="left">Branch</TableCell>
             <TableCell className ='tablecell' align="left">Description</TableCell>
             <TableCell className ='tablecell'  align="left">Withdrawal<br/>Amt.</TableCell>
             <TableCell className ='tablecell' align="left">Deposit Amt</TableCell>
             <TableCell className ='tablecell' align="left">Balance</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map((row) => (
             <TableRow
               key={row.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">
                 {row.date}
               </TableCell>
               <TableCell className ='tablecell' align="left">{row.effective_date}</TableCell>
               <TableCell className ='tablecell' align="left">{row.cheque_ref}</TableCell>
               <TableCell className ='tablecell' align="left">{row.branch}</TableCell>
               <TableCell className ='tablecell' align="left">{row.description}</TableCell>
               <TableCell className ='tablecell' align="left">{row.withdrawalamout}</TableCell>
               <TableCell className ='tablecell' align="left">{row.despositamout}</TableCell>
               <TableCell className ='tablecell'     align="left">{row.blance}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>  
  
     </div>
     ) 
 }



 export default Bankdetails
