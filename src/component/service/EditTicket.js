import { useParams, useNavigate } from "react-router-dom";
import "./styles/EditTicket.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateTicket } from "../../redux/features/ticketDetailSlice";

const EditTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id from url is ", id);
  const dispatch = useDispatch();

  const [updateTicketDetails, setUpdateTicketDetails] = useState({
    name: "",
    team_name: "",
    date: "",
    incidentNumber: "",
    status: "",
    entity: "",
    slot: "",
    remarks: "",
  });

  const { tickets, users } = useSelector((state) => state.app);
  console.log("all tickets are", tickets);

  useEffect(() => {
    if (id) {
      setUpdateTicketDetails(
        tickets.filter((ele) => ele.id === parseInt(id))[0]
      );
    }
  }, []);
  console.log("updated ticket details is", updateTicketDetails);

  const inputEvent = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;

    console.log(value);

    setUpdateTicketDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log("button clicked");
    console.log("server input", updateTicketDetails);
    console.log("id passed", id);
    dispatch(updateTicket(updateTicketDetails));
    // console.log("data updated");
    // navigate("/");

    console.log("update ticket details from user", users);
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Please update your ticket details</h1>
        </div>
        <div className="form-content">
          <form>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Name"
                name="name"
                value={updateTicketDetails.name}
                onChange={inputEvent}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Team Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Team Name"
                name="team_name"
                value={updateTicketDetails.team_name}
                onChange={inputEvent}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Date</label>
              <input
                type="date"
                class="form-control"
                id="exampleInputPassword1"
                name="date"
                value={updateTicketDetails.date}
                onChange={inputEvent}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Incident Number</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter incident number"
                name="incidentNumber"
                value={updateTicketDetails.incidentNumber}
                onChange={inputEvent}
                //   pattern="[A-Z]{3}\d{7}"
                //   maxLength="10"
                //   minLength="10"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Status</label>
              <select
                id="team-select"
                name="status"
                value={updateTicketDetails.status}
                onChange={inputEvent}
              >
                <option value="">--Please choose an option--</option>
                <option value="Pending Customer">Pending Customer</option>
                <option value="Work in Progress">Work in Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Pending Bugfix">Pending Provider</option>
                <option value="Duplicate">Duplicate</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Entity Name</label>
              <select
                id="team-select"
                name="entity"
                value={updateTicketDetails.entity}
                onChange={inputEvent}
              >
                <option value="">--Please choose an option--</option>
                <option value="DOH">DOH</option>
                <option value="ADAFSA">ADAFSA</option>
                <option value="FDF">FDF</option>
                <option value="DED">DED</option>
                <option value="ADCA">ADCA</option>
                <option value="ZHO">ZHO</option>
                <option value="EAD">EAD</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                Slot(1-Before 12AM, 2-12AM to 4PM,3-After 4PM)
              </label>
              <select
                id="team-select"
                name="slot"
                value={updateTicketDetails.slot}
                onChange={inputEvent}
              >
                <option value="">--Please choose an option--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Remarks</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="enter remarks"
                name="remarks"
                value={updateTicketDetails.remarks}
                onChange={inputEvent}
              />
            </div>
            <button type="button" id="add-btn" onClick={handleSubmit}>
              UPDATE
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => navigate("/")}
            >
              BACK
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTicket;
