import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function PCPage({PC})  {
 const router = useRouter()

 const cafe_id = useInput('')
 const number = useInput('')

 
    const update = () => {
       axios.put(`http://localhost:5000/PC/${PC.id_PC}`, {
         number: number.value,   
         cafe_id : cafe_id .value,
        })
 
     router.push('/PC')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/PC/${PC.id_PC}`)

         router.push('/PC')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
         <h1> Номер ПК: {PC.number} </h1> 
         <h4> ID кафе: {PC.cafe_id}</h4>    
     
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/PC')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
         <Box p={2}>
            <TextField 
             {...number}
            label = "Номер ПК"
            type="number"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
            {...cafe_id}
            label = "ID кафе"
            type="number"
            fullWidth
            />
             </Box>

             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



PCPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/PC/'+ ctx.query.id)
  const PC = await res.json()
  return { PC }
}

