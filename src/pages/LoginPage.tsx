import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Typography, Stack, Link } from '@mui/material/';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '@/assets/logo_lemonhc_text.png'
import { Box, Button } from '@mui/joy';
import { SelectComponent } from '@/components/atoms/SelectComponent';

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
                <SelectComponent />
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
               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                     <Button size="lg" fullWidth type="submit" sx={{ mt: 3 }}>로그인</Button>
              </Box>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}
export default LoginPage
