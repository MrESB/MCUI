'use client';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

export default function about() {
    const param = useParams();
    const newsId = param?.id; 
    return(
        <Container maxWidth='lg'>
            <Typography>
                {'News Detail loaded with id: ${newsId}'}
            </Typography>
            
        </Container>
    );
}