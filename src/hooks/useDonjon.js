import {useContext} from "react"
import {DonjonContext} from "../contexts/DonjonProvider"

export const useDonjon = () => {
    const context = useContext(DonjonContext)

    if (!context) throw new Error("useDonjon context must be use inside DonjonProvider")

    return context
}

export default useDonjon
