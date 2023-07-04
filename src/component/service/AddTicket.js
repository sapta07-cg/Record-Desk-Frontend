import { useEffect, useState } from "react";
import "./styles/AddTicket.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createTicket,
  deleteTicket,
  getTicket,
} from "../../redux/features/ticketDetailSlice";
import Spinner from "../../common/Spinner";

const AddTicket = () => {
  const [ticket, setTicket] = useState({
    name: "",
    team_name: "",
    date: "",
    incidentNumber: "",
    status: "",
    entity: "",
    slot: "",
    remarks: "",
  });
  const dispatch = useDispatch();
  const { tickets, loading } = useSelector((state) => state.app);

  console.log("user details ", tickets);

  //get data from API

  useEffect(() => {
    dispatch(getTicket());
    // console.log("data received in home page");
  }, [dispatch]);

  // const getTicketData = (e) => {
  //   setTicket({ ...ticket, [e.target.name]: [e.target.value] });
  // };

  const inputEvent = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;

    console.log(value);

    setTicket((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket(ticket));
    console.log("checking inputs", ticket);
  };

  const handleDelete = (id) => {
    console.log("delete item id id", id);
    dispatch(deleteTicket(id));
    dispatch(getTicket());
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Welcome to ADDA Account</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="heading">
            <h1>ADD Ticket</h1>
          </div>
          <hr />
          <div>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Name"
                  name="name"
                  value={ticket.name}
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
                  value={ticket.team_name}
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
                  value={ticket.date}
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
                  value={ticket.incidentNumber}
                  //   pattern="[A-Z]{3}\d{7}"
                  //   maxLength="10"
                  //   minLength="10"
                  onChange={inputEvent}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Status</label>
                <select
                  id="team-select"
                  name="status"
                  value={ticket.status}
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
                  value={ticket.entity}
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
                  value={ticket.slot}
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
                  value={ticket.remarks}
                  onChange={inputEvent}
                />
              </div>
              <button type="submit" id="add-btn">
                ADD
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="heading">
            <h1>Ticket Deatils</h1>
          </div>
          <hr />
          <div>
            <table className="table table-striped">
              <thead id="table-heading">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Incident</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Entity</th>
                  <th scope="col">Slot</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tickets &&
                  tickets.map((ele) => (
                    <tr>
                      <td>{ele.id}</td>
                      <td>{ele.incidentNumber}</td>
                      <td>{ele.date}</td>
                      <td>{ele.status}</td>
                      <td>{ele.entity}</td>
                      <td>{ele.slot}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-warning"
                          id="editButton"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(ele.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
