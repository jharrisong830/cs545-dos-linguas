import { generateConjugations, Verb } from "../../../data/verbs";
import { Table } from "react-bootstrap";

export default function ConjugationTable({
    sampleVerbs
}: {
    sampleVerbs: Array<Verb>;
}) {
    sampleVerbs = generateConjugations(sampleVerbs);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Subject</th>
                    {sampleVerbs.map((v) => (
                        <th>{v.infinitive}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>yo</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.yo}</td>
                    ))}
                </tr>
                <tr>
                    <th>tu</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.tu}</td>
                    ))}
                </tr>
                <tr>
                    <th>el/ella/usted</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.elEllaUsted}</td>
                    ))}
                </tr>
                <tr>
                    <th>nosotros</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.nosotros}</td>
                    ))}
                </tr>
                <tr>
                    <th>ellos/ellas/ustedes</th>
                    {sampleVerbs.map((v) => (
                        <td>{v.ellosEllasUstedes}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );
}
