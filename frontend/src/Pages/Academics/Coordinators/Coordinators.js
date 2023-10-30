import "./Coordinator.css";

const data = [
  {
    name: "Dr. Shabir Ahmad Sofi",
    responsibility: "Spoken Tutorials Coordinator",
    email: "shabir@nitsri.ac.in",
  },
  {
    name: "Dr. Iqra Altaf",
    responsibility: "Time Table Coordinator",
    email: "iqraaltaf@nitsri.ac.in",
  },
  {
    name: "Dr. Prabal Verma",
    responsibility: "4th Year Coordinator",
    email: "prabal.verma@nitsri.net",
  },
  {
    name: "Dr. Janibul Bashir",
    responsibility: "1st Year Coordinator,Examination Coordinator",
    email: "Janibbashir@nitsri.ac.in",
  },
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Responsibility</th>
          <th>Email</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} className="table-row">
              <td>{val.name}</td>
              <td>{val.responsibility}</td>
              <td>{val.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

function Page() {
  return (
    <div className="coordinator_class">
      <h1>Faculty Coordinator</h1>
      <App />
    </div>
  );
}

export default Page;
