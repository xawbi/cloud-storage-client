import {useState} from "react";
import {Alert, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography} from "@mui/material";
import {RegistrationFormDTO} from "@/api/dto/auth.dto";
import {setCookie} from "nookies";
import * as Api from '@/api'
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useRouter} from "next/router";

const RegistrationTab = () => {
  const router = useRouter()
  const [fullName, setFullName] = useState('');
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

  const handleRegistration = async () => {
    if (fullName != '' && email != '' && password != '') {
      const RegistrationObj: RegistrationFormDTO = {
        fullName: fullName,
        email: email,
        password: password
      }
      try {
        const {token} = await Api.auth.registration(RegistrationObj)
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
  }

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
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Sign up</Typography>
        <TextField
          label="Username"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
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
        <Button variant="contained" onClick={handleRegistration} sx={{ mt: 2 }}>
          Sign up
        </Button>
      </Box>
      {renderSnackbar(showAlertError, handleCloseAlert, 'error', 'Registration error.')}
      {renderSnackbar(showAlertErrorEmpty, handleCloseAlert, 'error', 'There are empty fields.')}
      {renderSnackbar(showAlertSuccess, handleCloseAlert, 'success', 'Registration was successful.')}
    </>
  );
};

export default RegistrationTab