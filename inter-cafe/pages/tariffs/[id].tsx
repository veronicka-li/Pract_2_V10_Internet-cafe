import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function tariffsPage({tariffs})  {
 const router = useRouter()


 const name_tar = useInput('')
 const price = useInput('')
 const data = useInput('')


 
    const update = () => {
       axios.put(`http://localhost:5000/tariffs/${tariffs.id_tar}`, {
         name_tar : name_tar .value,
         price : price .value,
         data: data.value
        })
 
     router.push('/tariffs')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/tariffs/${tariffs.id_tar}`)

         router.push('/tariffs')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
             <h1> {tariffs.name_tar}</h1>
             <h4> Цена: {tariffs.price}</h4>    
             <h4> Срок: {tariffs. data}</h4>       
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/tariffs')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
    

            <Box p={2}>
            <TextField 
            {...name_tar}
            label = "Название"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...price}
            label = "Цена"
            type="number"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...data}
            label = "Срок"
            fullWidth
            type="number"
            />      
             
             </Box>      
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



tariffsPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/tariffs/'+ ctx.query.id)
  const tariffs = await res.json()
  return { tariffs }
}

