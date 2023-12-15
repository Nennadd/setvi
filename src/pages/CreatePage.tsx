import React, { useState } from "react";
import { useAddPost } from "../hooks/usePosts";
import ButtonAppBar from "../components/Navbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const CreatePage = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const mutate = useAddPost();

  const handleAddPost = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title || !body) {
      setMessage("All fields are required");
      setSeverity("error");
      setOpen(true);
      return;
    }
    const post: Omit<Post, "id" | "userId"> = { title, body };
    mutate(post);
    setMessage("New post has been created");
    setSeverity("success");
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor | undefined>("success");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonAppBar />
      <h1 style={{ marginTop: "5rem" }}>Add New Post</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "30%",
          margin: "3rem auto",
          padding: "1rem",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0, width: "100%" },
          }}
          autoComplete="off"
        >
          <div style={{ width: "100%" }}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
          </div>

          <div style={{ width: "100%", margin: "2rem 0 0 0" }}>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              fullWidth
              multiline
              maxRows={8}
            />
          </div>
        </Box>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Stack spacing={2} direction="row">
            <Button onClick={(e) => handleAddPost(e)} variant="contained">
              ADd Post
            </Button>
          </Stack>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default CreatePage;
