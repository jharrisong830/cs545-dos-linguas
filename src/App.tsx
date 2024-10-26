import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";

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
                    <Button
                        href="/vocab"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Vocabulary
                    </Button>
                    <Button
                        href="/grammar"
                        variant="success"
                        size="lg"
                        className="mx-2"
                    >
                        Grammar & Verbs
                    </Button>
                    <Button
                        href="/conversations"
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
