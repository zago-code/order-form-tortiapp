import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@material-ui/core";

const Confirmation = ({ prevStep, nextStep, values }) => {
  // console.log(values.preview_sent);
  if(values.another_topping!=="")
    values.cake_topping = ""
  const {
    firstName,
    lastName,
    email,
    phone_number,
    address,
    order_date,
    reference_point,
    cake_portions,
    what_celebration,
    cake_flavor,
    another_flavor,
    do_have_fill,
    filling,
    another_filling,
    cake_topping,
    another_topping,
    preview_sent,
    detaills,
  } = values;
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
          Confirmación de Pedido
        </Typography>
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Apellido" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Correo" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Número de Teléfono"
              secondary={phone_number}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dirección" secondary={address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fecha del pedido" secondary={order_date} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Punto de referencia"
              secondary={reference_point}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="¿Cuántas porciones?"
              secondary={cake_portions}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Celebración" secondary={what_celebration} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Sabor de torta"
              secondary={cake_flavor !== "" ? cake_flavor : another_flavor}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Con relleno" secondary={do_have_fill} />
            {do_have_fill === "Yes" && (
              <ListItemText
                primary="Con relleno"
                secondary={filling !== "" ? filling : another_filling}
              />
            )}
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Cubierta"
              secondary={cake_topping !== "" ? cake_topping : another_topping}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Nombre de archivo de foto muestra"
              secondary={preview_sent.name}
            />
            {preview_sent !== "" && (
              <ListItemText
                primary="Detalle de aspectos"
                secondary={detaills}
              />
            )}
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
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
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Confirmation;
