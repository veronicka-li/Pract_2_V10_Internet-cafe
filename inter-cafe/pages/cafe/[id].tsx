import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function CafePage({cafe})  {
 const router = useRouter()
 const name_cafe = useInput('')
 const address = useInput('')
 const bank_account = useInput('')
 const pan = useInput('')
   
 
    const update = () => {
       axios.put(`http://localhost:5000/cafe/${cafe.id_cafe}`, {
          name_cafe:  name_cafe.value,
          address: address.value,
          bank_account:  bank_account.value,
          pan: pan.value
        })
 
     router.push('/cafe')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/cafe/${cafe.id_cafe}`)

         router.push('/cafe')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
        <h1> {cafe.name_cafe} </h1>
          
           <h4> Адрес: {cafe.address} </h4> 
                  <h4> Банковский счет: {cafe.bank_account}</h4>
             <h4> ИНН:  {cafe.pan}</h4>          
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/cafe')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
            <Box p={2}>
            <TextField 
            {...name_cafe}
            label = "Название кафе"
            defaultValue={cafe.name_cafe}
            fullWidth
            />
            </Box>

            <Box p={2}>
            <TextField
             label = "Адрес кафе"
             fullWidth
             defaultValue={cafe.address} 
            {...address}
        />
             </Box>

        <Box p={2}>
            <TextField 
            {...bank_account}
            label = "Банковский счет кафе"
            type="number"
            fullWidth
            defaultValue={cafe.bank_account}
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...pan}
            label = "ИНН кафе"
            type="number"
            fullWidth
            defaultValue={cafe.pan}
            />      
             </Box>      
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



CafePage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/cafe/'+ ctx.query.id)
  const cafe = await res.json()
  return { cafe }
}

