import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const router = useRouter()
    
    const name_client = useInput('')

   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/client', {
    name_client:  name_client.value,

  })

  router.push('/client')

}
    
   
    return (
        <MainLayout>
            <Box p={2}>
            <TextField 
             {...name_client}
            label = "Имя клиента"
            fullWidth 
           
            />
            </Box>

                    <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

