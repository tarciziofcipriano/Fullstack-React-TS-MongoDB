import {
  Box,
  IconButton,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";
import api from "../service/Api";
import React from "react";
import { green } from "@mui/material/colors";

interface CardProps {
  data: any;
  handleDelete: (e: string) => void;
}

const Card = ({ data, handleDelete }: CardProps) => {
  const [changeNote, setChangeNote] = React.useState("");

  const handleEdit = async (e: any, notes: string) => {
    // Edita uma anotação
    if (changeNote && changeNote !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changeNote,
      });
    }
  };

  return (
    <Paper
      className="App"
      sx={{
        width: 320,
        height: 300,
        p: 2,
        backgroundColor: green[200],
        borderRadius: 3,
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          pb: 8,
        }}
      >
        <Box />
        <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
          {data.title}
        </Typography>
        <Tooltip title="Deletar card">
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(data._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <form onSubmit={(e) => handleEdit(e.target, data.notes)}>
        <TextField
          label="Anotação"
          variant={
            changeNote && changeNote !== data.notes ? "outlined" : "standard"
          }
          required
          defaultValue={data.notes}
          onChange={(e) => setChangeNote(e.target.value)}
        />
        <Tooltip title="Alterar card">
          <IconButton
            aria-label="delete"
            disabled={changeNote && changeNote !== data.notes ? false : true}
            sx={{ mt: 2, mb: 2, ml: 2 }}
            color="primary"
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
      </form>
    </Paper>
  );
};

export default Card;
