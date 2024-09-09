import {
  AccountCircle,
  Language,
  NotificationsOutlined,
  Roofing,
} from "@mui/icons-material";
import {
  AppBar as MUIAppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchBar from "./SearchBar";
import { useState } from "react";

const AppBar = () => {
  const [langAnchorEl, setLangAnchorEl] = useState(null as null | HTMLElement);

  const onLangButtonClick = (el: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(el.currentTarget);
  };

  const onMenuClose = () => {
    setLangAnchorEl(null);
  };

  return (
    <MUIAppBar>
      <Toolbar>
        <Box sx={{ display: "flex" }}>
          <Roofing></Roofing>
          <Typography
            sx={{
              mr: 2,
              ml: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            propertyOne
          </Typography>
        </Box>
        <SearchBar />
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <Box>
            <StyledIconButton onClick={onLangButtonClick}>
              <Language sx={{ width: 30, height: 30 }} />
            </StyledIconButton>
            <Menu
              open={Boolean(langAnchorEl)}
              onClose={onMenuClose}
              anchorEl={langAnchorEl}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem>English</MenuItem>
              <MenuItem>French</MenuItem>
              <MenuItem>Thai</MenuItem>
            </Menu>
          </Box>

          <StyledIconButton>
            <NotificationsOutlined sx={{ width: 30, height: 30 }} />
          </StyledIconButton>
          <StyledIconButton>
            <AccountCircle sx={{ width: 30, height: 30 }} />
          </StyledIconButton>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
};

const StyledIconButton = styled(IconButton)({
  color: "white",
});

export default AppBar;
