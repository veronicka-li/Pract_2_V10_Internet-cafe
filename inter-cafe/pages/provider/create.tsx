import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const router = useRouter()
    
    const name_provider = useInput('')

   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/provider', {
    name_provider:  name_provider.value,

  })

  router.push('/provider')

}
    
   
    return (
        <MainLayout>
            <Box p={2}>
            <TextField 
             {...name_provider}
            label = "Имя провайдера"
            fullWidth 
           
            />
            </Box>

                    <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

