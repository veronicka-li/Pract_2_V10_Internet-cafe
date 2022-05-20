import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({cafes})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {cafes.map(cafe => (
             <li key={cafe.id_cafe}>
               <Link href={`/cafe/${cafe.id_cafe}`}>
                 <a> {cafe.name_cafe}, {cafe.address}</a>
               </Link>             </li>           ))}
         </ul>
              </Card>
        </Grid>
            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/cafe/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>
        </MainLayout>    );}


Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/cafe')
  const cafes = await res.json()
  return { cafes }
}

