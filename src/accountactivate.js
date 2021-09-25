import { useHistory, useParams } from "react-router-dom";

export function Activate() {
  const history = useHistory();
  const { email_id } = useParams();
  const { token } = useParams();

  function Account(event) {
    event.preventDefault();
    fetch(
      `https://pk-bike-service.herokuapp.com/user/activate_account/${email_id}/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify()
      }
    )
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
        history.push("/login");
      });
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://www.kindpng.com/picc/m/169-1697033_motorcycle-bike-work-illustration-bike-mechanic-logo-png.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh"
      }}
    >
      <br />
      <br />
      <br />
      <button type="button" className="btn btn-primary" onClick={Account}>
        Click to Activate your Account
      </button>
    </div>
  );
}
