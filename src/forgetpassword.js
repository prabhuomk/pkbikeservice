import { useState } from "react";

export function ForgetPassword() {
  const [emailid, setEmailId] = useState("");

  function GotForget(event) {
    event.preventDefault();
    fetch("https://pk-bike-service.herokuapp.com/user/myforgetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email_id: emailid })
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
        setEmailId("");
      });
  }

  return (
    <div>
      <br />
      <br />
      <form className="Myform">
        <div className="form-group">
          <label for="exampleInputEmail1">Email_Id</label>
          <input
            type="email"
            onChange={(event) => setEmailId(event.target.value)}
            className="form-control"
            value={emailid}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={GotForget}>
          Submit
        </button>
      </form>
    </div>
  );
}
