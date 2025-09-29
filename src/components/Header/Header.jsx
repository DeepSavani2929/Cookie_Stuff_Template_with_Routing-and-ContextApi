import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge, Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../cartTable/CartModal.jsx";
import { clearCart, getCartCourses } from "../../store/cart/cartSlice.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  useEffect(() => {
    dispatch(getCartCourses());
  }, [dispatch]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
  console.log(isLoggedIn);
  const handleProfileClick = (event) => setOpenProfile(event.currentTarget);
  const handleProfileClose = () => setOpenProfile(null);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(clearCart());
    handleProfileClose();
    navigate("/signIn");
  };

  return (
    <>
      <header className="main">
        <div className="mainhead">
          <div className="image">
            <NavLink to="/">
              <img src={logo} alt="Logo" onClick={() => setMenuOpen(false)} />
            </NavLink>
          </div>

          <div>
            <nav className={`navbar header-menu ${menuOpen ? "active" : ""}`}>
              <ul id="sections">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "deactive"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      isActive ? "active" : "deactive"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    All Course
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                      isActive ? "active" : "deactive"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/posts"
                    className={({ isActive }) =>
                      isActive ? "active" : "deactive"
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    Posts
                  </NavLink>
                </li>
              </ul>

              <div className="navbarsearch">
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{
                    padding: "6px",
                    "& .MuiBadge-badge": {
                      fontSize: 20,
                      minWidth: 16,
                      height: 16,
                    },
                  }}
                >
                  <Badge
                    badgeContent={cartItems.length}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#f99106",
                        color: "white",
                      },
                    }}
                  >
                    <ShoppingCartIcon sx={{ fontSize: 30, color: "black" }} />
                  </Badge>
                </IconButton>

                {isLoggedIn ? (
                  <>
                    <IconButton onClick={handleProfileClick}>
                      <Avatar alt="Profile" src="/path/to/profile.jpg" />
                    </IconButton>
                    <Menu
                      anchorEl={openProfile}
                      open={Boolean(openProfile)}
                      onClose={handleProfileClose}
                    >
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <div>
                      <Link to="/signIn" style={{ textDecoration: "none" }}>
                        <p
                          className="signinhere"
                          onClick={() => setMenuOpen(false)}
                        >
                          Sign In
                        </p>
                      </Link>
                    </div>
                    <div id="headerbtn">
                      <Link to="/signUp">
                        <button onClick={() => setMenuOpen(false)}>
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </nav>
          </div>

          <div className="sign">
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                padding: "6px",
                "& .MuiBadge-badge": {
                  fontSize: 20,
                  minWidth: 16,
                  height: 16,
                },
              }}
            >
              <Badge
                badgeContent={cartItems.length}
                sx={{
                  "& .MuiBadge-badge": {
                    padding: "10px 5px",
                    backgroundColor: "#f99106",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ fontSize: 30, color: "black" }} />
              </Badge>
            </IconButton>

            {isLoggedIn ? (
              <>
                <IconButton onClick={handleProfileClick}>
                  <Avatar alt="Profile" src="/path/to/profile.jpg" />
                </IconButton>
                <Menu
                  anchorEl={openProfile}
                  open={Boolean(openProfile)}
                  onClose={handleProfileClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <div>
                  <Link to="/signIn" style={{ textDecoration: "none" }}>
                    <p
                      className="signinhere"
                      onClick={() => setMenuOpen(false)}
                    >
                      Sign In
                    </p>
                  </Link>
                </div>
                <div id="headerbtn">
                  <Link to="/signUp">
                    <button onClick={() => setMenuOpen(false)}>Sign Up</button>
                  </Link>
                </div>
              </>
            )}
          </div>

          <div
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
          >
            <span className={`bar ${menuOpen ? "bar1" : ""}`}></span>
            <span className={`bar ${menuOpen ? "bar2" : ""}`}></span>
            <span className={`bar ${menuOpen ? "bar3" : ""}`}></span>
          </div>
        </div>
      </header>

      <Box>
        <CartModal open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Header;
