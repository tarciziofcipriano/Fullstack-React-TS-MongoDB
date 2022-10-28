import {
  Box,
  CssBaseline,
  Grid,
} from "@mui/material";
import React from "react";
import AppBar from "./components/AppBar";
import api from "./service/Api";
import AddCard from "./components/AddCard";
import Card from "./components/Card";

const Layout = () => {
  const [title, setTitle] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [allNotes, setAllNotes] = React.useState([]);


  const handleDelete = async (id: any) => {
    // Deleta uma anotação
    const deleteNote = await api.delete(`/annotations/${id}`);

    if (deleteNote) {
      setAllNotes(allNotes.filter((note: any) => note._id !== id));
    }
  };

  React.useEffect(() => {
    // Recebe as anotações
    const getAllNotes = async () => {
      const response = await api.get("/annotations");
      setAllNotes(response.data);
    };

    getAllNotes();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <Box className="App" sx={{ display: "flex", p: 10 }}>
        <Box sx={{ mr: 3 }}>
          <AddCard
            title={title}
            notes={notes}
            allNotes={allNotes}
            setTitle={(e) => setTitle(e)}
            setNotes={(e) => setNotes(e)}
            setAllNotes={setAllNotes}
          />
        </Box>
        <Grid container spacing={1} sx={{ placeContent: "center" }}>
          {allNotes.map((data, index) => (
            <Grid item key={index} p={2}>
              <Card data={data} handleDelete={(e) => handleDelete(e)} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
