import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import api from "../service/Api";

interface AddCardProps {
  title: string;
  notes: string;
  allNotes: any[];
  setTitle: (e: string) => void;
  setNotes: (e: string) => void;
  setAllNotes: any;
}

const AddCard = ({
  title,
  notes,
  allNotes,
  setTitle,
  setNotes,
  setAllNotes,
}: AddCardProps) => {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Altera as anotações
    const response = await api.post("/annotations", {
      title,
      notes,
    });

    // Atualizar automático a página sem precisar dar um refresh nela
    setAllNotes([...allNotes, response.data]);
  };

  return (
    <Paper className="App" sx={{ width: 400, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Adicionar um card
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Titulo da anotação"
          variant="outlined"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Anotação"
          variant="outlined"
          required
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Box>
          <Button variant="contained" sx={{ mt: 2, mb: 2 }} type="submit">
            Salvar
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AddCard;
