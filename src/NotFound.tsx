import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Well, this is awkward...</h1>
            <p>
                The page you're looking for couldn't be found or doesn't exist.
            </p>
            <p>
                Make sure you typed the URL correctly, or click the button below
                to return to the homepage
            </p>
            <Button // @ts-ignore
                as={Link}
                variant="primary"
                to="/"
            >
                Go to Home
            </Button>
        </div>
    );
}
