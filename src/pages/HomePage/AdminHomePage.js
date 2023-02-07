
import ImageSlider from "./ImageSlider";
import AdminLogin from "../LoginPages/AdminLogin";

const AdminHomePage = () => {
  const slides = [
    { url: "https://i.ytimg.com/vi/Q86txrxs1nU/maxresdefault.jpg" },
    { url: "https://pbs.twimg.com/media/FIWN_zJVUAEuiOr.jpg" },
    { url: "https://i.ytimg.com/vi/Tf76e0HaKfw/maxresdefault.jpg" },
    {
      url: "https://www.axisbank.com/images/default-source/default-album/5-deciding-factors.jpg",
    },
  ];

  const containerStyles = {
    width: "80vh",
    height: "40vh",
    marginTop: "-1rem",
    align: "centre",
    display: "grid",
    gridTemplateColumns: "100vh 20vh",
    gridTemplateRows: "80vh",
    gap: "10vh",
  };

  const imgSlider = {
    width: "100%",
    marginTop: "-10px",
    marginRight: "-80px"
  }

  return (
    <div style={containerStyles}>
        <ImageSlider slides={slides} style={imgSlider} />
      <AdminLogin />
    </div>
  );
};

export default AdminHomePage;
