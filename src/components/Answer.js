import { useState, useEffect } from "react"

const Answer = ({ answer, isActive }) => {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (isActive) setClicked(!clicked)
    }, [clicked])

    return (
        <a
            onClick={() => setClicked(!clicked)}
            className={`answer ${clicked ? "active" : ""}`}
        >
            {answer}
        </a>
    )
}

export default Answer