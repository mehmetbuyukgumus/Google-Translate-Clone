import { Grid2, Container, Button } from '@mui/material';
import '../style/style.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MyComponent() {
    const [translateText, setTranslateText] = useState('')
    const [willTranslateText, setWillTranslateText] = useState('')
    const [firstLanguage, setFirstLanguage] = useState('tr')
    const [secondLanguage, setSecondLanguage] = useState('en')
    const writtenValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTranslateText(event.target.value)
    }
    const selectLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.textContent == 'Turkish') {
            setFirstLanguage('tr')
            setSecondLanguage('en')

        }
        else if (event.currentTarget.textContent == 'English') {
            setFirstLanguage('en')
            setSecondLanguage('tr')
        } 
    }

    useEffect(() => {
        const translateData = async () => {
            const options = {
                method: 'POST',
                url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_APP_API_KEY,
                    'x-rapidapi-host': import.meta.env.VITE_APP_API_HOST,
                    'Content-Type': 'application/json'
                },
                data: {
                    q: translateText,
                    source: firstLanguage,
                    target: secondLanguage
                }
            };
            try {
                const response = await axios.request(options);
                setWillTranslateText(response.data.data.translations.translatedText)
            } catch (error) {
            }
        }
        translateData()
    }, [translateText, firstLanguage])


    return (
        <>
            <Container>
                <Grid2 container spacing={3} >
                    <Grid2 size={{ sm: 12, lg: 6 }}>
                        <Grid2 size={12}>
                            <Button onClick={selectLanguage} sx={{
                                color: 'gray',
                                fontFamily: 'Google',
                                borderBottom: firstLanguage === 'tr' ? '1px solid blue' : 'none'
                            }}>Turkish</Button>
                            <Button onClick={selectLanguage} sx={{
                                color: 'gray',
                                fontFamily: 'Google',
                                borderBottom: firstLanguage === 'en' ? '1px solid blue' : 'none'
                            }}>English</Button>
                        </Grid2>
                        <textarea name="" id="outlined-basic" className='will-translate' onChange={writtenValue} />
                    </Grid2>
                    <Grid2 size={{ sm: 12, lg: 6 }}>
                        <Grid2 size={12}>
                            <Button onClick={selectLanguage} sx={{
                                color: 'gray',
                                fontFamily: 'Google',
                                borderBottom: firstLanguage === 'en' ? '1px solid blue' : 'none'
                            }}>Turkish</Button>
                            <Button onClick={selectLanguage} sx={{
                                color: 'gray',
                                fontFamily: 'Google',
                                borderBottom: firstLanguage === 'tr' ? '1px solid blue' : 'none'
                            }}>English</Button>
                        </Grid2>
                        <textarea disabled id="outlined-basic" className='translated' value={willTranslateText} />
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}