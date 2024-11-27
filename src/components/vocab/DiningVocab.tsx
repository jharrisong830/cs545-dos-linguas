import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// renders with state "regular-conjugartions-intro"

export default function DiningVocab({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Dining Vocabulary
                </p>
            </div>

            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Spanish to English</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>desayuno</th>
                    <th>breakfast</th>
                </tr>
                <tr>
                    <th>almuerzo</th>
                    <th>lunch</th>
                </tr>
                <tr>
                    <th>cena</th>
                    <th>dinner</th>
                    
                </tr>
                <tr>
                    <th>Una caña</th>
                    <th>A beer</th>
                    
                </tr>
                <tr>
                    <th>Una copa de vino blanco/ vino tinto</th>
                    <th>A glass of white wine / red wine</th>
                    
                </tr>
                <tr>
                    <th>Un café (con leche) </th>
                    <th>A coffee (with milk)</th>
                    
                </tr>
                <tr>
                    <th>Gazpacho </th>
                    <th>Cold vegetable soup</th>
                    
                </tr>
                <tr>
                    <th>Jamón y queso  </th>
                    <th>Ham and cheese</th>
                    
                </tr>
                <tr>
                    <th>Pescaíto frito  </th>
                    <th>Little fried fish</th>
                    
                </tr>
                <tr>
                    <th>Pimientos de padrón </th>
                    <th>Padrón peppers</th>
                    
                </tr>
                <tr>
                    <th>Pincho de tortilla </th>
                    <th>A piece of tortilla</th>
                    
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
        </main>
    );
}
