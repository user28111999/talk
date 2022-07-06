import { useState } from "react"
import styled from "styled-components"
import Question from "./components/Question"
import Wall from "./wall.png"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const FormContainer = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  color: #232525;
`

const FormWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
`

const FormTitle = styled.div`
  font-weight: bold;
  display: flex;

  span {
    font-size: 2.5rem;
  }

  h2 {
    margin: auto 6px;
    font-size: 3.5rem;
    white-space: nowrap;
  }
`

const FormSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  opacity: .75
`

const Cover = styled.div`
  width: 50%;
  height: 100vh;
  background: url(${Wall});
  background-repeat: no-repeat;
  background-size: cover;
`

const NextBtn = styled.button`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: #232525;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    background: #e0e0e0;
    color: #a9a9a9;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`

const BackBtn = styled.button`
  background: transparent;
  color: #a9a9a9;
  cursor: pointer;
  border: none;
  font-size: 0.85rem;
  font-weight: bold;
  margin: 24px 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`

const App = () => {
  const [activeBtn, setActiveBtn] = useState(false)
  const [restaurant, setRestaurant] = useState(false)

  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <FormTitle>
            <span>🛏️</span>
            <h2>Votre établissement</h2>
          </FormTitle>
          <FormSubtitle>
            Ces informations important serviront à mieux connaître votre établissement et à adapter notre communication en fonction de vos réponses.
          </FormSubtitle>
          <Question
            question="Combien de chambres avez-vous dans votre hôtel ?"
            answers={["1-10", "10-50", "50-100", "100-200", "200+"]}
            onAnswer={() => setActiveBtn(false)}
          />
          <Question
            question="Avez-vous un restaurant ?"
            answers={["Oui", "Non"]}
            onAnswer={setRestaurant}
          />
          {restaurant && (
            <Question
              question="Combien de places avez-vous dans votre restaurant ?"
              answers={["1-10", "10-25", "25-50", "50+"]}
              onAnswer={() => setActiveBtn(!activeBtn)}
            />
          )}
        </FormWrapper>
        <NextBtn
          disabled={!activeBtn}
          onClick={() => alert("Merci pour votre participation !")}
        >Étape suivante &#8594;</NextBtn>
        <BackBtn>&#8592; Retour</BackBtn>
      </FormContainer>
      <Cover />
    </Container>
  )
}

export default App