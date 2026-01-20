import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Dialog state
  const [openAdd, setOpenAdd] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form state
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    afm: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
   
  }, []);

  const fetchCustomers = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/customers", {
        headers: {
          "Content-Type": "application/json",
          ...AuthService.getAuthHeader(),
        },
      });

      if (!response.ok) {
        throw new Error("Σφάλμα κατά τη φόρτωση των πελατών");
      }

      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      setError(err.message || "Κάτι πήγε στραβά");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      afm: "",
    });
    setOpenAdd(true);
  };

  const handleCloseAdd = () => setOpenAdd(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCreateCustomer = async () => {
    setError("");

    
    if (!form.firstname || !form.lastname) {
      setError("Συμπλήρωσε τουλάχιστον Όνομα και Επώνυμο.");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("http://localhost:8080/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...AuthService.getAuthHeader(),
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const txt = await response.text().catch(() => "");
        throw new Error(txt || "Αποτυχία δημιουργίας πελάτη");
      }

      
      await fetchCustomers();
      setOpenAdd(false);
    } catch (err) {
      setError(err.message || "Σφάλμα δημιουργίας πελάτη");
    } finally {
      setSaving(false);
    }
  };

  
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 80, sortable: true },
      { field: "firstname", headerName: "Όνομα", flex: 1, sortable: true },
      { field: "lastname", headerName: "Επώνυμο", flex: 1, sortable: true },
      { field: "email", headerName: "Email", flex: 1.5, sortable: true },
      { field: "phone", headerName: "Τηλέφωνο", flex: 1, sortable: true },
      { field: "city", headerName: "Πόλη", flex: 1, sortable: true },
      { field: "afm", headerName: "ΑΦΜ", flex: 1, sortable: true },
    ],
    []
  );

  const handleRowDoubleClick = (params) => {
    
    navigate(`/history/${params.row.id}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Πελάτες</Typography>

      
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenAdd}
        >
          Προσθήκη
        </Button>

        
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ height: 520, width: "100%", mt: 2 }}>
      <Typography variant="body2" sx={{ mt: 1, opacity: 0.75 }}>
        !! Διπλό κλικ σε πελάτη για να δεις το ιστορικό του.
      </Typography>
        <DataGrid
          rows={customers}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          disableRowSelectionOnClick
          onRowDoubleClick={handleRowDoubleClick}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true, 
              quickFilterProps: { debounceMs: 400 },
            },
          }}
        />
      </Box>

      <Dialog open={openAdd} onClose={handleCloseAdd} fullWidth maxWidth="sm">
        <DialogTitle>Προσθήκη Πελάτη</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Όνομα"
                value={form.firstname}
                onChange={handleChange("firstname")}
                fullWidth
                required
              />
              <TextField
                label="Επώνυμο"
                value={form.lastname}
                onChange={handleChange("lastname")}
                fullWidth
                required
              />
            </Stack>

            <TextField
              label="Email"
              value={form.email}
              onChange={handleChange("email")}
              fullWidth
              type="email"
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Τηλέφωνο"
                value={form.phone}
                onChange={handleChange("phone")}
                fullWidth
              />
              <TextField
                label="ΑΦΜ"
                value={form.afm}
                onChange={handleChange("afm")}
                fullWidth
              />
            </Stack>

            <TextField
              label="Διεύθυνση"
              value={form.address}
              onChange={handleChange("address")}
              fullWidth
            />

            <TextField
              label="Πόλη"
              value={form.city}
              onChange={handleChange("city")}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} disabled={saving}>
            Άκυρο
          </Button>
          <Button
            onClick={handleCreateCustomer}
            variant="contained"
            disabled={saving}
          >
            {saving ? "Αποθήκευση..." : "Αποθήκευση"}
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default Customers;
