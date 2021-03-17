import { Container } from "react-bootstrap";
import SemanticSearch from "./components/SemanticSearch";

function App() {
    return (
        <Container>
            <div className="App text-center display-1">Trying GPT-3</div>
            <SemanticSearch />
        </Container>
    );
}

export default App;
