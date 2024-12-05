import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Route, Link, Routes } from "react-router-dom";

// renders with state "regular-conjugartions-intro"

export default function TravelVocab({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">Travel Vocabulary</p>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Spanish</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Passport</th>
                        <th>el pasaporte</th>
                    </tr>
                    <tr>
                        <th>Suitcase</th>
                        <th>la maleta</th>
                    </tr>
                    <tr>
                        <th>Airport</th>
                        <th>el aeropuerto</th>
                    </tr>
                    <tr>
                        <th>Airplane</th>
                        <th>el avióno</th>
                    </tr>
                    <tr>
                        <th>Train</th>
                        <th>el tren</th>
                    </tr>
                    <tr>
                        <th>Hotel</th>
                        <th>el hotel</th>
                    </tr>
                    <tr>
                        <th>Reservation</th>
                        <th>la reserva</th>
                    </tr>
                    <tr>
                        <th>Directions</th>
                        <th>las indicaciones</th>
                    </tr>
                    <tr>
                        <th>Transportation</th>
                        <th>el transporte/la transportación</th>
                    </tr>
                    <tr>
                        <th>Where</th>
                        <th>dónde</th>
                    </tr>
                    <tr>
                        <th>North, South, East, West</th>
                        <th>norte, sur, este, oeste</th>
                    </tr>
                </tbody>
            </Table>
            <Button // @ts-ignore
                as={Link}
                to="/"
                variant="primary"
                size="lg"
                className="mx-2"
            >
                Back to Home
            </Button>
            <Button // @ts-ignore
                onClick={() => setState("travel-quiz")}
                variant="success"
                size="lg"
                className="mx-2"
            >
                Test Your Knowledge
            </Button>
        </main>
    );
}
