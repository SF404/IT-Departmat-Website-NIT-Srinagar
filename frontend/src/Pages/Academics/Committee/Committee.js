import "./Committee.css";

const data = [
  {
    name: "Dr. G. R. Baig",
    Role: "Head/Chairperson",
    email: "grbegh@nitsri.net",
  },
  {
    name: "Dr. Shabir Ahmad Sofi",
    Role: "Member",
    email: "shabir@nitsri.ac.in",
  },
  { name: "Dr. Shaima Qureshi", Role: "Member", email: "shaima@nitsri.net" },
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} className="table-row">
              <td>{val.name}</td>
              <td>{val.Role}</td>
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
    <div className="committe_class">
      <h1>Departmental Purchasing Committee</h1>
      <App />
    </div>
  );
}

export default Page;
