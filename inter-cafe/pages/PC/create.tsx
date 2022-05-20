import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {

    const cafe_id = useInput('')
    const number = useInput('')


    const router = useRouter()
   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/PC', {
       number: number.value,   
         cafe_id : cafe_id .value,

  })

  router.push('/PC')

}
    
   
    return (
        <MainLayout>
                <Box p={2}>
            <TextField 
             {...number}
            label = "Номер ПК"
            type="number"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
            {...cafe_id}
            label = "ID кафе"
            type="number"
            fullWidth
            />
             </Box>

            <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

