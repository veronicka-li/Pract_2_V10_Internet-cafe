import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const cafe_id = useInput('')
    const tar_id = useInput('')
    const provider_id = useInput('')
   
    const router = useRouter()
   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/service', {
        cafe_id : cafe_id .value,
        tar_id: tar_id.value,
        provider_id: provider_id.value
  })

  router.push('/service')

}
    
   
    return (
        <MainLayout>
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
           
            <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

