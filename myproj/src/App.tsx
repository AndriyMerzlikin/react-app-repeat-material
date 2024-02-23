import "./App.css";
import { Footer } from "./Footer";
// import { UserCard } from "./UserCard/UserCard";
import { ChooseUser } from "./ChooseUser/ChooseUser";

const user = { username: "Andrew" };

const App = () => (
  <div className="App">
    <h1>hello world {user.username}</h1>
    <div>
      <ChooseUser />
    </div>
    <Footer copyright="C" />
  </div>
);

export default App;

// firstName="Andrew"
//         shortBiography="fullstack developer"
//         publicContacts={{
//           email: "andrew@example.com",
//           phone: 1234567890,
//           linkedin: "https://www.linkedin.com/in/andrew",
//         }}
