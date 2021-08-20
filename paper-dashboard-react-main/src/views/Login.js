import React, {useState} from 'react';
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LockOutlined as LockIcon } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import fondo from '../assets/images/fondo.png'
import Dashboard from 'layouts/Admin';
import Inicio from "./Dashboard.js";
//import {useFirebaseApp} from 'reactfire'

/**
 * @author Karina Ortega
 * @function useStyles
 * Esta función me permite crear estilos hacemos usando los 
 * temas que retorna makeStyles
 */
const useStyles = makeStyles(theme => ({
    root: {
      backgroundImage: `url(${fondo})`,
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    },
    container:{
      opacity: '0.8',
      height: '60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400+theme.spacing(4)+ 2)]:{
        marginTop: 0,
        width: '100%',
        height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.success.main
    }, 
    form:{
      width: '100%',
      marginTop: theme.spacing(1)
    },
    button:{
      backgroundColor: '#4caf50',
      margin: theme.spacing(2,0,2)
      
    }
  }))


/**
 * @author Karina Ortega
 * @function Login
 * Esta función renderiza el contenido de la pantalla de Login 
 */

function Login(props) {
    /*
    const firebase = useFirebaseApp();
    console.log(firebase)
    */
    const [singUp,setSingUp] = useState({usuario: '', password: ''})
    const classes = useStyles()
    
    const handleChange = (event)=>{
      setSingUp({
        ...singUp,
        [event.target.name]: event.target.value
      })
    }

    const onSubmit =()=>{
      console.log(singUp)
      window.location = '/admin'
    }

    return (
        <Grid container components= 'main' className={classes.root} >
            <CssBaseline/>
            <Container component= {Paper} elevation= {5} maxWidth= 'xs' className={classes.container}>
              <div className={classes.div}>
                <Avatar className={classes.avatar}>
                  <LockIcon/>
                </Avatar>
                <Typography component= 'h3' variant='h6'>Bienvenido</Typography>
                <Typography component= 'h1' variant='h5'>Iniciar Sesión</Typography>
                <form className= {classes.form}>
                    <TextField
                    fullWidth
                    autoFocus 
                    margin= 'normal'
                    variant= 'outlined'
                    name= 'usuario'
                    value= {singUp.usuario}
                    label= 'Correo electrónico o Usuario'
                    onChange={handleChange}
                    />
                    <TextField
                    fullWidth
                    type='password' 
                    margin= 'normal'
                    variant= 'outlined'
                    name= 'password'
                    value={singUp.password}
                    label= 'Contraseña'
                    onChange={handleChange}/>
                    <Button className={classes.button}
                    fullWidth
                    variant='contained'
                    onClick={()=>onSubmit()}>Iniciar Sesión</Button>
                    <Link>Olvide mi Contraseña</Link>
                </form>
              </div>
            </Container>
             
    </Grid>
    );
  
}

export default Login;


