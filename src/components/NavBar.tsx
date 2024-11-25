import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ButtonAppBar() {
    return (
        <Box>
            <AppBar position='fixed' sx={{backgroundColor: 'white'}}>
                <Toolbar sx={{display : 'flex', justifyContent: 'space-between'}}>
                    <Box sx={{display : 'flex'}}>
                        <Typography variant="h6" component="div" sx={{color: 'black'}}>
                            <MenuIcon sx={{ color: 'gray', marginTop: 0.3 }} />
                        </Typography>
                        <Typography variant="h6" component="div" sx={{display:'flex', marginLeft: 2 }}>
                            <Typography variant='h6' component='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' sx={{width: "74px", height: "24px", marginTop:0.6}}></Typography>
                            <Typography variant='h6' component='span' sx={{marginLeft: 1, color: 'gray'}}>Translate</Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="div" sx={{ color: 'black'}}>
                            <SettingsIcon sx={{ color: 'gray', marginRight: 3  }} />
                            <AppsIcon sx={{ color: 'gray'}} />
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
