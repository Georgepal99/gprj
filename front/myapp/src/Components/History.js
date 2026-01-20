import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../services/AuthService";

const History = () => {

  const TYPE_OPTIONS = [
    { value: "CALL", label: "Κλήση" },
    { value: "MEETING", label: "Ραντεβού" },
    { value: "EMAIL", label: "Email" },
    { value: "FOLLOW_UP", label: "Follow-up" },
    { value: "COMPLAINT", label: "Παράπονο" },
  ];


  const { customerId } = useParams();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Dialog state
  const [openAdd, setOpenAdd] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form state (ταιριάζει με τα πεδία της history table σου)
  const [form, setForm] = useState({
    datetime: "",     // π.χ. "2026-01-12T12:30"
    comtype: "",      // π.χ. "CALL"
    comstate: "",     // π.χ. "DONE"
    typehistory: "",  // π.χ. "FOLLOW_UP"
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);

  const fetchHistory = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/history/customer/${customerId}`,
        {
          headers: {
            "Content-Type": "application/json",
            ...AuthService.getAuthHeader(),
          },
        }
      );

      if (!response.ok) {
        const txt = await response.text().catch(() => "");
        throw new Error(txt || "Σφάλμα κατά τη φόρτωση ιστορικού");
      }

      const data = await response.json();
      setRows(data);
    } catch (err) {
      setError(err.message || "Κάτι πήγε στραβά");
    } finally {
      setLoading(false);
    }
  };

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 80, sortable: true },
      { field: "datetime", headerName: "Ημ/νία", flex: 1.1, sortable: true },
      { field: "comtype", headerName: "Τύπος", flex: 0.8, sortable: true },
      { field: "comstate", headerName: "Κατάσταση", flex: 1, sortable: true },
      { field: "typehistory", headerName: "Κατηγορία", flex: 1, sortable: true },
      { field: "title", headerName: "Τίτλος", flex: 1.2, sortable: true },
      { field: "description", headerName: "Περιγραφή", flex: 2, sortable: false },
    ],
    []
  );

  const handleOpenAdd = () => {
    setForm({
      datetime: "",
      comtype: "",
      comstate: "",
      typehistory: "",
      title: "",
      description: "",
    });
    setOpenAdd(true);
  };

  const handleCloseAdd = () => setOpenAdd(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleCreateHistory = async () => {
    setError("");

    // basic validation
    if (!form.title) {
      setError("Συμπλήρωσε τουλάχιστον Τίτλο.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        ...form,
       
        datetime: form.datetime ? form.datetime : new Date().toISOString(),
      };

      const response = await fetch(
        `http://localhost:8080/api/history/customer/${customerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...AuthService.getAuthHeader(),
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const txt = await response.text().catch(() => "");
        throw new Error(txt || "Αποτυχία προσθήκης ιστορικού");
      }

      

      await fetchHistory();
      setOpenAdd(false);
    } catch (err) {
      setError(err.message || "Σφάλμα προσθήκης ιστορικού");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">
          Ιστορικό Πελάτη #{customerId}
        </Typography>

        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenAdd}>
          Προσθήκη
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ height: 540, width: "100%", mt: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 400 },
            },
          }}
        />
      </Box>

      {/* Add History Dialog */}
      <Dialog open={openAdd} onClose={handleCloseAdd} fullWidth maxWidth="sm">
        <DialogTitle>Προσθήκη Ιστορικού</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Ημερομηνία/Ώρα (προαιρετικό)"
              type="datetime-local"
              value={form.datetime}
              onChange={handleChange("datetime")}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
              select
                label="Τύπος"
                value={form.comtype}
                onChange={handleChange("comtype")}
                fullWidth
                >
                  <MenuItem value="">
                  <em>Διάλεξε τύπο</em>
                </MenuItem>
                <MenuItem key="COMPLAIN" value="COMPLAIN">
                  COMPLAIN
                </MenuItem>
                <MenuItem key="ORDER" value="ORDER">
                  ORDER
                </MenuItem>
                </TextField>
              
              <TextField
              select
                label="Κατάσταση"
                value={form.comstate}
                onChange={handleChange("comstate")}
                fullWidth
              >
                  <MenuItem value="">
                  <em>Διάλεξε Κατάσταση</em>
                </MenuItem>
                <MenuItem key="PENDING" value="PENDING">
                  PENDING
                </MenuItem>
                <MenuItem key="COMPLETED" value="COMPLETED">
                COMPLETED
                </MenuItem>
              </TextField>
            </Stack>

            <TextField
              select
              label="Κατηγορία"
              value={form.typehistory}
              onChange={handleChange("typehistory")}
              fullWidth
            >
              <MenuItem value="">
                  <em>Διάλεξε κατηγορία</em>
                </MenuItem>
              {TYPE_OPTIONS.map((opt) => (
                
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Τίτλος"
              value={form.title}
              onChange={handleChange("title")}
              fullWidth
              required
            />

            <TextField
              label="Περιγραφή"
              value={form.description}
              onChange={handleChange("description")}
              fullWidth
              multiline
              minRows={3}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} disabled={saving}>
            Άκυρο
          </Button>
          <Button onClick={handleCreateHistory} variant="contained" disabled={saving}>
            {saving ? "Αποθήκευση..." : "Αποθήκευση"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default History;
