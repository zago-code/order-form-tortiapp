import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const OrderData5 = ({ prevStep, nextStep, handleChange, values }) => {
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
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
  }));

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
        <Grid item xs={12}>
          <Typography component="h3" variant="body1">
            ¿Qué tipo de cubierta deseas?
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={2}>
            {/* cake_topping */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Cubierta</FormLabel>
                <RadioGroup
                  aria-label="cake_topping"
                  name="cake_topping"
                  value={
                    values.another_topping !== "" ? "" : values.cake_topping
                  }
                  onChange={handleChange("cake_topping")}
                >
                  <FormControlLabel
                    value="Crema"
                    control={<Radio />}
                    label="Crema"
                  />
                  <FormControlLabel
                    value="Mantequilla"
                    control={<Radio />}
                    label="Mantequilla"
                  />
                  <FormControlLabel
                    value="Fontant / Pastillaje"
                    control={<Radio />}
                    label="Fontant / Pastillaje"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.container} noValidate>
              <Card>
                <CardContent>
                  <Typography
                    className={classes.textField2}
                    component="p"
                    variant="body2"
                  >
                    *Doce Pastelería solo trabaja cubierta en crema o
                    mantequilla
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Another cake_topping */}
            <Grid item xs={12}>
              <TextField
                placeholder="Another"
                label="Otro tipo de cubierta"
                value={values.another_topping}
                onChange={handleChange("another_topping")}
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

export default OrderData5;
