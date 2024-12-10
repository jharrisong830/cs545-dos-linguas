import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
    return (
        <main>
            <div className="py-4">
                <h1 className="display-3 fw-semibold">Dos Línguas</h1>
                <p className="lead fw-semibold">
                    <TypeAnimation
                        sequence={[
                            "Learning Spanish for beginners.",
                            10000,
                            "Aprender español para principiantes.",
                            10000
                        ]}
                        repeat={Infinity}
                        cursor={true}
                    />
                </p>
            </div>

            <div className="py-4">
                <h2 className="pb-2">
                    Get started with a simple, intuitive lesson.
                </h2>
                <div className="container">
                    <Button // @ts-ignore
                        as={Link}
                        to="/vocab"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Vocabulary
                    </Button>
                    <Button // @ts-ignore
                        as={Link}
                        to="/grammar"
                        variant="success"
                        size="lg"
                        className="mx-2"
                    >
                        Grammar & Verbs
                    </Button>
                    <Button // @ts-ignore
                        as={Link}
                        to="/study?type=convo"
                        variant="danger"
                        size="lg"
                        className="mx-2"
                    >
                        Conversations
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default App;
