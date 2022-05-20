import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function servicePage({service})  {
 const router = useRouter()


 const cafe_id = useInput('')
 const tar_id = useInput('')
 const provider_id = useInput('')


 
    const update = () => {
       axios.put(`http://localhost:5000/service/${service.id_service}`, {
         cafe_id : cafe_id .value,
         tar_id: tar_id.value,
         provider_id: provider_id.value
        })
 
     router.push('/service')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/service/${service.id_service}`)

         router.push('/service')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
             <h4> ID кафе: {service.cafe_id}</h4>
             <h4> ID тарифа: {service.tar_id}</h4>    
             <h4> ID провайдера: {service. provider_id}</h4>       
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/service')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
    

            <Box p={2}>
            <TextField 
            {...cafe_id}
            label = " ID кафе"
            type="number"
            fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...tar_id}
            label = "ID тарифа"
            type="number"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...provider_id}
            label = "ID провайдера"
            fullWidth
            type="number"
            />      
             
             </Box>      
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



servicePage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/service/'+ ctx.query.id)
  const service = await res.json()
  return { service }
}

