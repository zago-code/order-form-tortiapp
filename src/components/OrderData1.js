import {
  Container,
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  textField2: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
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
          ¿Cómo deseas tu torta?
        </Typography>
        <Typography component="h2" variant="h6">
          Detalle de Formulario de Pedido
        </Typography>
        <form>
          <Grid container spacing={2}>
            {/* address */}
            <Grid item xs={12}>
              <TextField
                placeholder="Costumer Address"
                label="Dirección"
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
                label="Fecha de Entrega"
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
            <Grid item xs={12} className={classes.container} noValidate>
              <Card>
                <CardContent>
                  <Typography
                    className={classes.textField2}
                    component="p"
                    variant="body2"
                  >
                    *Esta pastelera solo acepta pedidos con mínimo 5 días de
                    anticipación a la fecha de entrega
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Anterior
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
                Siguiente
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default OrderData;
