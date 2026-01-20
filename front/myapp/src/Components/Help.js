import {
    Box,
    Card,
    CardContent,
    Container,
    Typography,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
function Help()
{

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
             <Card elevation={4}>
             <CardContent>
             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
             <InfoOutlinedIcon color="primary" sx={{ mr: 1 }} />
             <Typography variant="h5">
              Σχετικά με την Εφαρμογή
            </Typography>
             </Box>
            
            
            <Typography variant="paragraph" >
            Η παρούσα εφαρμογή αποτελεί ένα <strong>απλό πρότυπο CRM</strong>,
            σχεδιασμένο για την οργάνωση και τη βασική διαχείριση πελατών.
            Στόχος της είναι να προσφέρει μια καθαρή και φιλική εμπειρία χρήσης,
            κατάλληλη για εκπαιδευτικούς σκοπούς ή ως βάση για μελλοντική ανάπτυξη.
            </Typography>
            
            
           
            <Typography variant="body1"  sx={{mt:2}}>
            Το σύστημα μπορεί να επεκταθεί ώστε να περιλαμβάνει λειτουργίες όπως
            καταχώρηση πελατών, ιστορικό επικοινωνίας, βασική ανάλυση δεδομένων
            και έλεγχο πρόσβασης χρηστών.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{mt:2}}>
            Τεχνολογίες που χρησιμοποιούνται: React, Material UI και React Router, JAVA Swing, PostgreSQL.
          </Typography>
                
            </CardContent>
        </Card>
        </Container>

    )

}

export default Help;