import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Vocab() {
    return (
        <main>
            <div className="py-4">
                <h1 className="display-4 fw-medium">Vocabulary</h1>
                <p className="lead fw-medium">
                    Select a lesson or quiz to get started.
                </p>
            </div>

            <div className="py-4">
                <div className="container">
                    <Button // @ts-ignore
                        as={Link}
                        to="/study?type=vocab&category=dining"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Food & Dining
                    </Button>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    <Button // @ts-ignore
                        as={Link}
                        to="/study?type=vocab&category=work"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Workplace
                    </Button>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    <Button // @ts-ignore
                        as={Link}
                        to="/study?type=vocab&category=travel"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Travel
                    </Button>
                </div>
            </div>
        </main>
    );
}
