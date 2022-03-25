import {
  Container,
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const OrderData = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Formulario de Pedido
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Costumer Address"
                label="Costumer Address"
                onChange={handleChange("address")}
                defaultValue={values.address}
                autoComplete="address"
                fullWidth
              />
            </Grid>
            {/* order date */}
            <Grid item xs={12} className={classes.container} noValidate>
              <TextField
                placeholder="Order Date"
                label="Order Date"
                onChange={handleChange("order_date")}
                defaultValue={values.order_date}
                autoComplete="Order Date"
                fullWidth
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
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

export default OrderData;
