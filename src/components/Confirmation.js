import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
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
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone Number" secondary={phone_number} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Costumer Address" secondary={address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Order Date" secondary={order_date} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Reference Point"
              secondary={reference_point}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cake Portions" secondary={cake_portions} />
          </ListItem>
          <ListItem>
            <ListItemText primary="What Celebration" secondary={what_celebration} />
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
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Confirmation;
