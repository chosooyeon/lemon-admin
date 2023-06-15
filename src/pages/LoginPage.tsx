import { useForm } from "react-hook-form";
import { Button, TextField, Box } from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const LoginPage = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const submitForm = (data) => {
        console.log(data);
        console.log('3333')
    };

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
                <form autoComplete="off" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        type="email"
                        id="email"
                        label="Username"
                        autoComplete="email"
                        {...register("email", { required: true, maxLength: 10 })}
                    />
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        type="password"
                        id="password"
                        label="Password"
                        autoComplete="current-password"
                        {...register("password", { required: true, maxLength: 10 })}
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
