import "./styles/AddTicket.css";

const AddTicket = () => {
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
            <form>
              <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Name"
                  name="name"
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
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="date"
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
                  pattern="[A-Z]{3}\d{7}"
                  maxLength="10"
                  minLength="10"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Status</label>
                <select id="team-select" name="status">
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
                <select id="team-select" name="entity">
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
                <select id="team-select" name="slot">
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
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTicket;
