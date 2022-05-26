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
} from "@material-ui/core";

const OrderData3 = ({ prevStep, nextStep, handleChange, values }) => {
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
          ¿Cómo deseas tu torta?
        </Typography>
        <Typography component="h2" variant="h6">
          Detalle de Formulario de Pedido
        </Typography>
        <Grid item xs={12}>
          <Typography component="h3" variant="body1">
            De qué sabor quieres la torta
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={2}>
            {/* cake flavor */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sabor</FormLabel>
                <RadioGroup
                  aria-label="cake_flavor"
                  name="flavor1"
                  value={values.cake_flavor}
                  onChange={handleChange("cake_flavor")}
                >
                  <FormControlLabel
                    value="Vainilla"
                    control={<Radio />}
                    label="Vainilla"
                  />
                  <FormControlLabel
                    value="Chocolate"
                    control={<Radio />}
                    label="Chocolate"
                  />
                  <FormControlLabel
                    value="Naranja"
                    control={<Radio />}
                    label="Naranja"
                  />
                  <FormControlLabel
                    value="Coco-Vainilla"
                    control={<Radio />}
                    label="Coco-Vainilla"
                  />
                  <FormControlLabel
                    value="Red-velvet"
                    control={<Radio />}
                    label="Red-velvet"
                  />
                  <FormControlLabel
                    value="Envinada"
                    control={<Radio />}
                    label="Envinada"
                  />
                  <FormControlLabel
                    value="Zanahoria-banano"
                    control={<Radio />}
                    label="Zanahoria-banano"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* cake flavor other */}
            <Grid item xs={12}>
              <TextField
                placeholder="Other"
                label="Otro sabor"
                value={values.another_flavor}
                onChange={handleChange("another_flavor")}
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

export default OrderData3;
