import { Chip, Container, Paper } from "@mui/material";
import { Snowboarding } from "@mui/icons-material";

const CategoryBar = () => {
  return (
    <Container disableGutters sx={{ marginTop: "64px" }} maxWidth={false}>
      <Paper sx={{ padding: 1 }}>
        <Chip label="Snow Resort" avatar={<Snowboarding />}></Chip>
      </Paper>
    </Container>
  );
};

export default CategoryBar;
