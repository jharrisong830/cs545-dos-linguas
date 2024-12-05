import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import {Route, Link, Routes} from 'react-router-dom';

// renders with state "regular-conjugartions-intro"

export default function WorkVocab({
    setState
}: {
    setState: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
    return (
        <main>
            <div className="py-4">
                <p className="display-3 fw-semibold">
                    Workplace Vocabulary
                </p>
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
                <th>la llamada</th>
                    <th>Phone call</th>
                </tr>
                <tr>
                <th>llamada de Zoom</th>
                    <th>Zoom call</th>
                    
                </tr>
                <tr>
                <th>la presentación</th>
                    <th>Presentation</th>
                    
                    
                </tr>
                <tr>
                <th>el jefe (male), la jefa (female)</th>
                    <th>Boss</th>
                    
                    
                </tr>
                <tr>
                <th>el/la colega </th>
                    <th>Colleagues</th>
                    
                    
                </tr>
                <tr>
                    <th>estamos contratando </th>
                    <th>We are hiring</th>
                    
                </tr>
                <tr>
                    <th>Entrevista </th>
                    <th>Interview</th>
                    
                </tr>
                <tr>
                    <th>Abogado </th>
                    <th>Lawyer</th>
                    
                </tr>
                <tr>
                    <th>Maestro  </th>
                    <th>Teacher</th>
                    
                </tr>
                <tr>
                    <th>Enfermero</th>
                    <th>Nurse</th>
                    
                </tr>
                <tr>
                    <th>Cocinero </th>
                    <th>Cook</th>
                    
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
            onClick={() =>
                setState("work-quiz")
            }
            variant="success"
            size="lg"
            className="mx-2"
        >
            Test Your Knowledge
        </Button>   
        </main>
    );
}
