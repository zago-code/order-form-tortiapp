import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  makeStyles,
  IconButton,
  TextareaAutosize,
} from "@material-ui/core";

const OrderData6 = ({
  prevStep,
  nextStep,
  handleChange,
  handleChangeFile,
  values,
}) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
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
        <form encType="multipart/form-data">
          <Grid container spacing={2}>
            {/* preview_sent */}
            <Grid item xs={12} sm={12}>
              <Typography component="h3" variant="body1">
                ¿Tienes una muestra de torta?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
                name={values.preview_sent}
                onChange={handleChangeFile("preview_sent")}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
            {values.preview_sent !== "" && (
              <Grid item xs={12} className={classes.container} noValidate>
                <Card>
                  <CardContent>
                    <Typography
                      className={classes.textField2}
                      component="p"
                      variant="body2"
                    >
                      *Detalla los aspectos importantes que debo tener partiendo
                      de la muestra enviada
                    </Typography>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={6}
                      placeholder="Detalle"
                      value={values.detaills}
                      onChange={handleChange("detaills")}
                    />
                  </CardContent>
                </Card>
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

export default OrderData6;
