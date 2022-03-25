import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const CostumerDetails = ({ nextStep, handleChange, values }) => {
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Formulario de Pedido
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* firstName */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="FirstName"
                label="FirstName"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                // variant="outlined"
                autoComplete="firstName"
                fullWidth
              />
            </Grid>
            {/* lastName */}
            <Grid item xs={12} sm={6}>
              <TextField
                placeholder="LastName"
                label="LastName"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                // variant="outlined"
                autoComplete="lastName"
                fullWidth
              />
            </Grid>
            {/* email address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Email Address"
                label="Email Address"
                onChange={handleChange("email")}
                defaultValue={values.email}
                // variant="outlined"
                autoComplete="email"
                fullWidth
              />
            </Grid>
            {/* phone_number */}
            <Grid item xs={12}>
              <TextField
                placeholder="PhoneNumber"
                label="PhoneNumber"
                onChange={handleChange("phone_number")}
                defaultValue={values.phone_number}
                // variant="outlined"
                autoComplete="username"
                fullWidth
              />
            </Grid>
          </Grid>
          <br />
          <Button
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CostumerDetails;
