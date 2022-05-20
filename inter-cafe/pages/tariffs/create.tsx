import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const name_tar = useInput('')
    const price = useInput('')
    const data = useInput('')
   
    const router = useRouter()
   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/tariffs', {
        name_tar : name_tar .value,
         price : price .value,
         data: data.value
  })

  router.push('/tariffs')

}
    
   
    return (
        <MainLayout>
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
           
            <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

