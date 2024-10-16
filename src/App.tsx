import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
    return (
        <div>
            <h1>Dos Línguas</h1>
            <h3>
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
            </h3>
        </div>
    );
}

export default App;
