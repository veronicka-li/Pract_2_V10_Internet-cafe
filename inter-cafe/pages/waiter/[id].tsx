import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function waiterPage({waiter})  {
 const router = useRouter()

 const full_name = useInput('')
 const address = useInput('')
 const passport = useInput('')
 const cafe_id = useInput('')


 
    const update = () => {
       axios.put(`http://localhost:5000/waiter/${waiter.id_waiter}`, {
            full_name: full_name.value,
    address: address.value,
    passport: passport.value,
    cafe_id: cafe_id.value
        })
 
     router.push('/waiter')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/waiter/${waiter.id_waiter}`)

         router.push('/waiter')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
        <h1> {waiter.full_name} </h1>
          
           <h4> Адрес: {waiter.address} </h4> 
                  <h4> Номер паспорта: {waiter.passport}</h4>
             <h4> ID кафе: {waiter.cafe_id}</h4>        
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/waiter')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
         <Box p={2}>
            <TextField 
             {...full_name}
            label = "ФИО официанта"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
            {...address}
            label = "Адрес прописки"
            fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...passport}
            label = "Паспорт"
            type="number"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...cafe_id}
            label = "ID кафе в котором работает"
            fullWidth
            type="number"
            />      
      
             </Box>      
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



waiterPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/waiter/'+ ctx.query.id)
  const waiter = await res.json()
  return { waiter }
}

