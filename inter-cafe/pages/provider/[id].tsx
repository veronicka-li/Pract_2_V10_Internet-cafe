import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function providerPage({provider})  {
 const router = useRouter()

 const name_provider = useInput('')
 
   
 
    const update = () => {
       axios.put(`http://localhost:5000/provider/${provider.id_provider}`, {
          name_provider:  name_provider.value,
          
        })
 
     router.push('/provider')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/provider/${provider.id_provider}`)

         router.push('/provider')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
        <h1> {provider.name_provider} </h1>
          
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/provider')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
            <Box p={2}>
            <TextField 
            {...name_provider}
            label = "Имя провайдера"
            defaultValue={provider.name_provider}
            fullWidth
            />
            </Box>
     
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



providerPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/provider/'+ ctx.query.id)
  const provider = await res.json()
  return { provider }
}

