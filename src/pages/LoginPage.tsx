import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField, Box, Typography, Stack, Link } from '@mui/material/';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '@/assets/logo_lemonhc_text.png'

interface UserValue {
  email: string
  password: string
}

const LoginPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserValue>()
  const navigate = useNavigate();
  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch("password")

  const onSubmitHandler: SubmitHandler<UserValue> = (data) => {
    if (passwordRef.current === data.password) {
      console.log(data);
      console.log(passwordRef.current);
      navigate("/user")
    }
  }

  return (
    <>
      <div className='fixed bg-white z-50 w-[100%] p-8'>
        {/* <Header /> */}
        <img width={200} src={logo} />
      </div>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '200px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Sign to Account
              </Typography>
            </Stack>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
              <Stack spacing={3}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="email"
                  id="email"
                  label="Username"
                  autoComplete="email"
                  {...register("email", { required: true, pattern: { value: /^\S+@\S+$/i, message: "이메일만 가능합니다." } })}
                />
                {errors?.email?.message}
                <TextField
                  required
                  autoFocus
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  autoComplete="current-password"
                  {...register("password", { required: true, validate: (value) => value === passwordRef.current })}
                />
                <Link
                  href="#"
                  underline="hover"
                  variant="subtitle2"
                >
                  Forgot Password ?
                </Link>
              </Stack>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Sign in
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}
export default LoginPage
