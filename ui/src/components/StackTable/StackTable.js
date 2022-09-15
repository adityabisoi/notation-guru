import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData=(id, token, stack, output, comment)=>{
  return { id, token, stack, output, comment}
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function StackTable(props){
  var rows=[]
  var c=0
  for(var el of props.data) {
    const row=createData(c, el[0],el[1],el[2],el[3])
    rows.push(row)
    c+=1
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Token</StyledTableCell>
            <StyledTableCell align="center">Stack</StyledTableCell>
            <StyledTableCell align="center">Output</StyledTableCell>
            <StyledTableCell align="left">Comment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center" component="th" scope="row">
                {row.token}
              </StyledTableCell>
              <StyledTableCell align="center">{row.stack}</StyledTableCell>
              <StyledTableCell align="center" style={{width:'15%'}}>{row.output}</StyledTableCell>
              <StyledTableCell align="left">{row.comment}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StackTable