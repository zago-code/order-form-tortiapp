import {
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

const OrderData4 = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  // console.log(`value filling after: ${values.filling}`);

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
            ¿Desea con relleno la torta?
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={2}>
            {/* do_have_fill */}
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="do_have_fill"
                  value={values.do_have_fill}
                  onChange={handleChange("do_have_fill")}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {values.do_have_fill === "Yes" && (
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="filling"
                    value={values.filling}
                    onChange={handleChange("filling")}
                  >
                    <FormControlLabel
                      value="Arequipe"
                      control={<Radio />}
                      label="Arequipe"
                    />
                    <FormControlLabel
                      value="Chocolate"
                      control={<Radio />}
                      label="Chocolate"
                    />
                    <FormControlLabel
                      value="Crema vainilla"
                      control={<Radio />}
                      label="Crema vainilla"
                    />
                    <FormControlLabel
                      value="Frutos rojos"
                      control={<Radio />}
                      label="Frutos rojos"
                    />
                    <FormControlLabel
                      value="Queso crema"
                      control={<Radio />}
                      label="Queso crema"
                    />
                    <FormControlLabel
                      value="Crema de maracuya"
                      control={<Radio />}
                      label="Crema de maracuya"
                    />
                    <FormControlLabel
                      value="Crema de aveyanas"
                      control={<Radio />}
                      label="Crema de aveyanas"
                    />
                    <FormControlLabel
                      value="Crema de coco"
                      control={<Radio />}
                      label="Crema de coco"
                    />
                  </RadioGroup>
                </FormControl>
                {/* another_fill */}
                <TextField
                  placeholder="Other"
                  label="Otro relleno"
                  value={values.another_filling}
                  onChange={handleChange("another_filling")}
                  fullWidth
                />
                {
                  /* {values.another_filling !== ""
                  ? (values.filling = "")
                  : ""
                } */
                  values.another_filling !== "" && (values.filling = "")
                }
                {/* {console.log(`value filling: ${values.filling}`)} */}
              </Grid>
            )}
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

export default OrderData4;
