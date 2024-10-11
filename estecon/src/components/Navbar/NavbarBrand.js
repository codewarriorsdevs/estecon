import React from 'react'
import EsteconLogo from '../../img/logo2.svg'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();



/*
 Contém o logo e o nome da marca
 */
const NavbarBrand = () => {
    return (
        <div >
            <a className='absolute z-10 flex items-center gap-5 text-white bottom-100 top-6' href="/">
                <img className='w-[90px] h-[90px] ' src={EsteconLogo} alt="" />


                <ThemeProvider theme={theme}>
                    <Typography variant='h5' fontSize={30} >
                        Estecon
                    </Typography>
                </ThemeProvider>

            </a>
        </div >
    )
}

export default NavbarBrand