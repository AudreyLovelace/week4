import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div id="container">
      <Weather city="new york" />
      <p>
        <a href="https://github.com/AudreyLovelace/week4">Open-source code</a>,
        by{" "}
        <a href="https://www.facebook.com/profile.php?id=100055656144920">
          Audrey Lovelace
        </a>{" "}
        from <a href="https://www.shecodes.io/">SheCodes</a>
      </p>
    </div>
  );
}

export default App;
