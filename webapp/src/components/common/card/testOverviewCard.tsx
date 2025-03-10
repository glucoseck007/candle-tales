import { Card, Col, Row } from "react-bootstrap";

export interface OverviewElement {
    testModule: string;
    correctAnswers: number;
    totalScore: number;
    score: {
        moduleName: string;
        totalQuestions: number;
        correctAnswer: number;
    }[];
}

const TestOverviewCard: React.FC<OverviewElement> = ({
    testModule,
    correctAnswers,
    totalScore,
    score
}) => {
    return (
        <Card className="p-3 border rounded-4 shadow-sm">
            <Row>
                {/* Left Side Content */}
                <Col md={8}>
                    <h5 className="fw-bold">{testModule}</h5>
                    <h4 className="text-primary fw-bold">
                        {correctAnswers} <span className="text-dark fw-normal">/ {totalScore}</span>
                    </h4>
                    {score.map((item, index) => (
                        <ul className="list-unstyled mt-2" key={index}>
                            <li className="text-black">
                                • {item.moduleName}{" "}
                                <span className="text-primary fw-bold">
                                    {item.correctAnswer} / {item.totalQuestions}
                                </span>
                            </li>
                        </ul>
                    ))}
                    {/* Frequent Mistakes */}
                    <div className="mt-3">
                        <span className="text-primary fw-bold">Frequent Mistakes:</span>
                        <ul className="list-unstyled">
                            <li>• Abcxyz</li>
                            <li>• zzzzzzz</li>
                        </ul>
                    </div>
                </Col>

                {/* Right Side Circle Content */}
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <div
                        className="border rounded-circle d-flex flex-column justify-content-center align-items-center"
                        style={{
                            width: "100px",
                            height: "100px",
                            borderWidth: "2px",
                            borderColor: "black",
                        }}
                    >
                        <span className="fw-bold">
                            {correctAnswers}/{score.reduce((sum, item) => sum + item.totalQuestions, 0)}
                        </span>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default TestOverviewCard;
