import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const OrderData2 = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Formulario de Pedido
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* reference point */}
            <Grid item xs={12}>
              <TextField
                placeholder="Reference Point"
                label="Reference Point"
                onChange={handleChange("reference_point")}
                defaultValue={values.reference_point}
                fullWidth
              />
            </Grid>
            {/* cake portions */}
            <Grid item xs={12}>
              <TextField
                placeholder="How Many Cake Portions"
                label="How Many Cake Portions"
                onChange={handleChange("cake_portions")}
                defaultValue={values.cake_portions}
                fullWidth
              />
            </Grid>

            {/* what celebration */}
            <Grid item xs={12}>
              <TextField
                placeholder="What celebration"
                label="What celebration"
                onChange={handleChange("what_celebration")}
                defaultValue={values.what_celebration}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Continue}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default OrderData2;
