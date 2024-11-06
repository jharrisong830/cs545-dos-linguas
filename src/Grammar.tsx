import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Grammar() {
    return (
        <main>
            <div className="py-4">
                <h1 className="display-4 fw-medium">Grammar</h1>
                <p className="lead fw-medium">
                    Select a lesson or quiz to get started.
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <Button // @ts-ignore
                        as={Link}
                        to="/study?type=grammar&category=regular"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Regular Verbs
                    </Button>
                </div>
            </div>
        </main>
    );
}
