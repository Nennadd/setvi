import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPost, useUpdatePost, useDeletePost } from "../hooks/usePosts";
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
  id: number | undefined;
  title: string;
  body: string;
};

type UpdatePost = Omit<Post, "userId">;

const DetailsPage = () => {
  const { id } = useParams();
  const postId = id ? id : "";
  const { data: post } = useGetPost(postId);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const updateMutation = useUpdatePost();
  const deleteMutation = useDeletePost();

  const handleUpdatePost = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title || !body) {
      setMessage("All fields are required");
      setSeverity("error");
      setOpen(true);
      return;
    }

    const updatedPost: UpdatePost = { id: Number(postId), title, body };
    updateMutation(updatedPost);
    setMessage("Post has been updated");
    setSeverity("success");
    setOpen(true);
  };

  const handleDeletePost = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteMutation(+postId);
    setMessage("Post has been deleted");
    setSeverity("success");
    setOpen(true);
  };

  useEffect(() => {
    if (post !== undefined) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "30%",
          margin: "0 auto",
        }}
      >
        <h1>Details</h1>
        <div>
          <img
            style={{ maxWidth: "100%", height: "15rem" }}
            src="https://picsum.photos/700/300"
            alt="post"
          />
        </div>
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
            <Button onClick={(e) => handleUpdatePost(e)} variant="contained">
              Update
            </Button>
            <Button
              onClick={(e) => handleDeletePost(e)}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </Stack>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
export default DetailsPage;
