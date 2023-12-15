import ButtonAppBar from "../components/Navbar";

const NotFoundPage = () => {
  return (
    <>
      <ButtonAppBar />
      <div style={{ width: "40%", margin: "3rem auto" }}>
        <h1>Page Not Found</h1>
        <div>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src="https://cdn.pixabay.com/photo/2016/10/25/23/54/not-found-1770320_1280.jpg"
            alt="not-found"
          />
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
