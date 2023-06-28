import { useEffect, useState } from "react";

const Demo = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3002/employee")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setErr(err));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Employee details</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
          </tr>
        </thead>
        <tbody>
          {err ? (
            <h1>Something Went wrong</h1>
          ) : (
            data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.team}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
