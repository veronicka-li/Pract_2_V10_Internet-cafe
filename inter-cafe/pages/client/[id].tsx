import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function clientPage({client})  {
 const router = useRouter()

 const name_client = useInput('')
 
   
 
    const update = () => {
       axios.put(`http://localhost:5000/client/${client.id_client}`, {
          name_client:  name_client.value,
          
        })
 
     router.push('/client')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/client/${client.id_client}`)

         router.push('/client')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
        <h1> {client.name_client} </h1>
          
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/client')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
            <Box p={2}>
            <TextField 
            {...name_client}
            label = "Имя клиента"
            defaultValue={client.name_client}
            fullWidth
            />
            </Box>
     
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



clientPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/client/'+ ctx.query.id)
  const client = await res.json()
  return { client }
}

