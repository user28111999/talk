import { useState } from "react"
import styled from "styled-components"
import Answer from "./Answer"

const Container = styled.div`
    width: 100%;
    border-radius: 1px dotted green;
`

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: #5E6060;
    margin: 1.75rem 0;
`

const AnswersWrapper = styled.ul`
    display: flex;
    list-style: none;
    width: fit-content;
    margin: 0;
    padding: 0;
`

const Question = ({ question, answers, onAnswer }) => {
    if (answers.length === 0) throw new Error("answers must be an array of strings")
    if (typeof question !== "string") throw new Error("question must be a string")

    const [clicked, setClicked] = useState(false)

    return (
        <Container>
            <Title>{question}</Title>
            <AnswersWrapper>
                {answers.map((answer, index) => (
                    <li
                        key={index}
                        onClick={answer === "Non" ? () => onAnswer(false) : () => onAnswer(true)}
                    >
                        <Answer
                            answer={answer}
                            isActive={clicked}
                            onClick={() => setClicked(!clicked)}
                        />
                    </li>
                ))}
            </AnswersWrapper>
        </Container>
    )
}


export default Question