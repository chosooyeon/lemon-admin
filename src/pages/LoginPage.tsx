import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField, Box } from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";


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
        if(passwordRef.current === data.password){
            console.log(data);
            console.log(passwordRef.current);
            navigate("/user")
        }
    }

    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div>Sign to Account</div>
                <form autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        size="large"
                    >
                        Sign in
                    </Button>
                </form>
            </Box>
        </>
    )
}
export default LoginPage
