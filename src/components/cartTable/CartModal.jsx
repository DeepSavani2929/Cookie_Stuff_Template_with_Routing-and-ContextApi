import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  getCartCourses,
  incrementQuantity,
  removeCourseFromTheCart,
} from "../../store/cart/cartSlice";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Avatar,
  Typography,
  Paper,
  TableSortLabel,
  TablePagination,
  TextField,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../payment/CheckoutForm";
import { toast } from "react-toastify";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CartModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);
  const [step, setStep] = useState("cart");

  const rowsPerPage = 5;

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    dispatch(getCartCourses());
  }, [dispatch]);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleDeleteClick = (id, courseType) => {
    setDeleteId({ id, courseType });
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(removeCourseFromTheCart(deleteId));
    setConfirmOpen(false);
    setDeleteId(null);
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setDeleteId(null);
  };

  const handleBuyCourses = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const body = { products: cartItems };

      const res = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/buyAllCartCourses/createCheckoutSession`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      if (res.data.success && res.data.clientSecret) {
        setClientSecret(res.data.clientSecret);
        setStep("Checkout");
      } else {
        toast.error("Failed to create Stripe checkout session.");
      }
    } catch (error) {
      toast.error(
        error.message || "Something went wrong while initiating checkout!"
      );
    }
  };

  const filteredItems = useMemo(() => {
    let items = [...cartItems];
    if (search.trim() !== "") {
      items = items.filter((item) =>
        item.courseTitle.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (orderBy) {
      items.sort((a, b) => {
        const aValue = orderBy === "total" ? a.amount * a.quantity : a[orderBy];
        const bValue = orderBy === "total" ? b.amount * b.quantity : b[orderBy];
        if (typeof aValue === "string") {
          return order === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        return order === "asc" ? aValue - bValue : bValue - aValue;
      });
    }
    return items;
  }, [cartItems, search, orderBy, order]);

  useEffect(() => {
    const maxPage = Math.max(
      0,
      Math.ceil(filteredItems.length / rowsPerPage) - 1
    );
    if (page > maxPage) setPage(maxPage);
  }, [filteredItems.length, page]);

  const paginatedItems = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredItems.slice(start, start + rowsPerPage);
  }, [filteredItems, page]);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle
          sx={{ fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" } }}
        >
          {step === "cart" ? "Your Cart" : "Checkout"}
        </DialogTitle>
        <DialogContent sx={{ maxHeight: "700px" }}>
          {step === "cart" && (
            <>
              {cartItems.length === 0 && !loading ? (
                <Box textAlign="center" py={4} fontSize={{ xs: 14, sm: 16 }}>
                  No items in cart.
                </Box>
              ) : (
                <Paper elevation={3} sx={{ p: { xs: 1, sm: 2 } }}>
                  <Box
                    mb={2}
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "stretch", sm: "center" }}
                    gap={1}
                  >
                    <TextField
                      size="small"
                      placeholder="Search Products..."
                      value={search}
                      fullWidth
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(0);
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ whiteSpace: "nowrap" }}
                      onClick={handleBuyCourses}
                      disabled={cartItems.length === 0}
                    >
                      Buy Courses
                    </Button>
                  </Box>

                  {/* Cart Table */}
                  <Box sx={{ overflowX: "auto" }}>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                          <TableCell>Image</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === "amount"}
                              direction={orderBy === "amount" ? order : "asc"}
                              onClick={() => handleSort("amount")}
                            >
                              Amount
                            </TableSortLabel>
                          </TableCell>
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === "originalAmount"}
                              direction={
                                orderBy === "originalAmount" ? order : "asc"
                              }
                              onClick={() => handleSort("originalAmount")}
                            >
                              Original Amount
                            </TableSortLabel>
                          </TableCell>
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === "quantity"}
                              direction={orderBy === "quantity" ? order : "asc"}
                              onClick={() => handleSort("quantity")}
                            >
                              Quantity
                            </TableSortLabel>
                          </TableCell>
                          <TableCell>
                            <TableSortLabel
                              active={orderBy === "total"}
                              direction={orderBy === "total" ? order : "asc"}
                              onClick={() => handleSort("total")}
                            >
                              Total
                            </TableSortLabel>
                          </TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {loading
                          ? [...Array(cartItems.length)].map((_, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <Skeleton
                                    variant="rectangular"
                                    width={60}
                                    height={60}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={100} />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={150} />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={50} />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={80} />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={60} />
                                </TableCell>
                                <TableCell>
                                  <Skeleton width={30} height={30} />
                                </TableCell>
                              </TableRow>
                            ))
                          : paginatedItems.map((item) => (
                              <TableRow
                                key={item.id}
                                sx={{
                                  "&:hover": { backgroundColor: "#fafafa" },
                                }}
                              >
                                <TableCell>
                                  <Avatar
                                    variant="square"
                                    src={`http://localhost:8000/images/${item.image}`}
                                    alt={item.name}
                                    sx={{
                                      width: { xs: 40, sm: 60 },
                                      height: { xs: 40, sm: 60 },
                                      borderRadius: 2,
                                    }}
                                  />
                                </TableCell>
                                <TableCell>{item.courseTitle}</TableCell>
                                <TableCell>${item.amount}</TableCell>
                                <TableCell>${item.originalAmount}</TableCell>
                                <TableCell>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <Button
                                      variant="outlined"
                                      size="small"
                                      onClick={() =>
                                        dispatch(
                                          decrementQuantity({
                                            id: item.courseId,
                                            courseType: item.courseType,
                                          })
                                        )
                                      }
                                    >
                                      -
                                    </Button>
                                    <Typography
                                      sx={{ minWidth: 20, textAlign: "center" }}
                                    >
                                      {item.quantity}
                                    </Typography>
                                    <Button
                                      variant="outlined"
                                      size="small"
                                      onClick={() =>
                                        dispatch(
                                          incrementQuantity({
                                            id: item.courseId,
                                            courseType: item.courseType,
                                          })
                                        )
                                      }
                                    >
                                      +
                                    </Button>
                                  </Box>
                                </TableCell>
                                <TableCell>
                                  ${item.amount * item.quantity}
                                </TableCell>
                                <TableCell>
                                  <IconButton
                                    onClick={() =>
                                      handleDeleteClick(
                                        item.courseId,
                                        item.courseType
                                      )
                                    }
                                    size="small"
                                  >
                                    <DeleteIcon
                                      color="error"
                                      fontSize="small"
                                    />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                      </TableBody>
                    </Table>
                  </Box>

                  {!loading && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 2,
                      }}
                    >
                      <TablePagination
                        component="div"
                        count={filteredItems.length}
                        page={page}
                        onPageChange={(e, newPage) => setPage(newPage)}
                        rowsPerPage={rowsPerPage}
                        labelRowsPerPage=""
                      />
                    </Box>
                  )}
                </Paper>
              )}
            </>
          )}

          {step === "checkout" && clientSecret && (
            <Box sx={{ mt: 2 }}>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm onSuccess={() => setOpen(false)} />
              </Elements>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button variant="outlined" onClick={() => setStep("cart")}>
                  Back to Cart
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={confirmOpen}
        onClose={handleCancelDelete}
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: { xs: 2, sm: 3 },
            minWidth: { xs: 280, sm: 360, md: 400 },
            textAlign: "center",
          },
        }}
      >
        <WarningAmberIcon
          sx={{ fontSize: 50, color: "warning.main", mx: "auto", mt: 2 }}
        />
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to remove this item?
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={handleCancelDelete}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartModal;
