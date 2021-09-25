import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
export function EditService() {
  let { _id } = useParams();
  const history = useHistory();
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [rec, SetRec] = useState({});

  function EditMyService() {
    fetch(`https://pk-bike-service.herokuapp.com/admin/editservice/${_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("admintoken")
      },
      body: JSON.stringify({
        img_src: src,
        service_name: name,
        service_price: price
      })
    })
      .then((data) => data.json())
      .then((data) => {
        alert(data.message);
        history.push("/createservice");
      });
  }

  function GetServiceData(_id) {
    fetch(`https://pk-bike-service.herokuapp.com/user/servicelist/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          localStorage.getItem("usertoken") ||
          localStorage.getItem("admintoken")
      }
    })
      .then((data) => data.json())
      .then((data) => SetRec(data));
  }

  useEffect(() => {
    GetServiceData(_id);
  }, []);
  return (
    <div>
      <div>
        <br />
        <br />
        {rec._id ? (
          <form className="Myform">
            <div className="form-group">
              <label for="exampleInputEmail2">Image url</label>
              <input
                type="text"
                onChange={(event) => setSrc(event.target.value)}
                className="form-control"
                defaultValue={rec.img_src}
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail3">SERVICE NAME</label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                defaultValue={rec.service_name}
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">SERVICE PRICE</label>
              <input
                type="text"
                onChange={(event) => setPrice(event.target.value)}
                defaultValue={rec.service_price}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={EditMyService}
            >
              UPDATE
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
