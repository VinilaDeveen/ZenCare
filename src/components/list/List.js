import React from 'react';
import "./List.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        patientImg: "/images/patient.jpg",
        patientName: "Sachintha Rashen",
        meditation: "Acupuncture needles",
        studentImg: "/images/student.jpg",
        studentName: "M M S R Bandara",
        equipment: "Needles",
        amount: 300,
        date: "18th July",
        time: "15:33",
    },
    {
        patientImg: "/images/patient.jpg",
        patientName: "Chinthaka Lakshan",
        meditation: "Acupuncture Therapy",
        studentImg: "/images/student.jpg",
        studentName: "M J C D Lakshan",
        equipment: "Ice Bag",
        amount: 100,
        date: "18th July",
        time: "14:58",
    },
    {
        patientImg: "/images/patient.jpg",
        patientName: "Vinila Deveen",
        meditation: "Acupuncture Pottani",
        studentImg: "/images/student.jpg",
        studentName: "M M V Deveen",
        equipment: "Pottani",
        amount: 500,
        date: "18th July",
        time: "14:34",
    },
    {
        patientImg: "/images/patient.jpg",
        patientName: "Yashoda Shyaminda",
        meditation: "Acupuncture Pills",
        studentImg: "/images/student.jpg",
        studentName: "M P Y S Bandara",
        equipment: "Pills",
        amount: 120,
        date: "18th July",
        time: "14:13",
    },
    {
        patientImg: "/images/patient.jpg",
        patientName: "Hasitha Dilshan",
        meditation: "Acupuncture Masks",
        studentImg: "/images/student.jpg",
        studentName: "O C D Wijewardhana",
        equipment: "Mask",
        amount: 150,
        date: "18th July",
        time: "14:05",
    },
];

const List = () => {
  return (
    <div className='list'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Patient Name</TableCell>
            <TableCell className='tableCell'>Meditation</TableCell>
            <TableCell className='tableCell'>Student Name</TableCell>
            <TableCell className='tableCell'>Medical Equipment</TableCell>
            <TableCell className='tableCell'>Amount(LKR)</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.patientImg} alt='' className='image'/>
                  {row.patientName}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.meditation}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.studentImg} alt='' className='image'/>
                  {row.studentName}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.equipment}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List;