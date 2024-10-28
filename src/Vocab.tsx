import { Button } from "react-bootstrap";

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
                    <Button
                        href="/study?type=vocab&category=dining"
                        variant="primary"
                        size="lg"
                        className="mx-2"
                    >
                        Food & Dining
                    </Button>
                </div>
            </div>
        </main>
    );
}
