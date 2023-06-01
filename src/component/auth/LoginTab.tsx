import {useState} from "react";
import {Alert, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography} from "@mui/material";
import {LoginFormDTO} from "@/api/dto/auth.dto";
import * as Api from '@/api'
import {setCookie} from "nookies";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useRouter} from "next/router";

const LoginTab = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlertError, setShowAlertError] = useState(false);
  const [showAlertErrorEmpty, setShowAlertErrorEmpty] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email != '' && password != '') {
      const LoginObj: LoginFormDTO = {
        email: email,
        password: password
      }
      try {
        const {token} = await Api.auth.login(LoginObj)
        setCookie(null, "_token", token, {
          path: "/"
        })
        setShowAlertSuccess(true)
        await router.push('/dashboard')
      } catch (e) {
        console.log(e)
        setShowAlertError(true);
      }
    } else setShowAlertErrorEmpty(true)
  };

  const handleCloseAlert = () => {
    setShowAlertError(false);
    setShowAlertSuccess(false)
    setShowAlertErrorEmpty(false)
  };

  const renderSnackbar = (isOpen, onClose, severity, message) => {
    return (
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={onClose}>
        <Alert severity={severity} onClose={onClose}>
          {message}
        </Alert>
      </Snackbar>
    )
  }

  return (
    <>
      <Box sx={{p: 2}}>
        <Typography variant="h6">Sign in</Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{mt: 2}}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{mt: 2}}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          InputProps={
            onFocus ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePasswordVisibility}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              ),
            } : {}
          }
        />
        <Button variant="contained" onClick={handleLogin} sx={{mt: 2}}>
          Sign in
        </Button>
      </Box>
      {renderSnackbar(showAlertError, handleCloseAlert, 'error', 'Invalid email or password.')}
      {renderSnackbar(showAlertErrorEmpty, handleCloseAlert, 'error', 'There are empty fields.')}
      {renderSnackbar(showAlertSuccess, handleCloseAlert, 'success', 'Authorization was successful.')}
    </>
  );
};

export default LoginTab