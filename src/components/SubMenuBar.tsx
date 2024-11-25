import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TranslateIcon from '@mui/icons-material/Translate';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import TabOutlinedIcon from '@mui/icons-material/TabOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

function SubMenuBar() {
    return (
        <>
            <Container maxWidth='lg' sx={{ display: 'flex', gap: 2, marginTop: 10 }}>
                <Button variant="text" sx={{ border: 1, borderColor: 'gray', padding: 1, width: 100, height: 38, color: "rgb(25,103,210)", fontSize: 12, fontWeight: 'bold', gap:1}}><TranslateIcon sx={{fontSize: 20}}/>Text</Button>
                <Button variant="text" sx={{ border: 1, borderColor: 'gray', padding: 1, width: 100, height: 38, color: "rgb(25,103,210)", fontSize: 12, fontWeight: 'bold', gap:1}}><ImageSearchOutlinedIcon sx={{fontSize: 20}}/>Images</Button>
                <Button variant="text" sx={{ border: 1, borderColor: 'gray', padding: 1, width: 130, height: 38, color: "rgb(25,103,210)", fontSize: 12, fontWeight: 'bold', gap:1}}><TabOutlinedIcon sx={{fontSize: 20}}/>Documents</Button>
                <Button variant="text" sx={{ border: 1, borderColor: 'gray', padding: 1, width: 130, height: 38, color: "rgb(25,103,210)", fontSize: 12, fontWeight: 'bold', gap:1}}><WebOutlinedIcon sx={{fontSize: 20}}/>Web Sites </Button>
            </Container>
        </>
    )
}

export default SubMenuBar