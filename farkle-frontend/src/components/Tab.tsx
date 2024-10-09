import { useState } from "react"

export type TabProps = {
    targetNumber: number,
    player: string
}

const Tab = (props: TabProps) => {

    const [storedPoints, setStoredPoints] = useState<number>(0)
    const [roundPoints, setRoundsPoints] = useState<number>(0)
    const [selectedPoints, setSelectedPoints] = useState<number>(0)

  return (
    <div className="tab">
        <h1>{props.player}</h1>
        <h3>total / <span>{props.targetNumber}</span></h3>
        <div className="stored">
            <h2>{storedPoints}</h2>
        </div>
        <div>
            <label>round</label>
            <h2>{roundPoints}</h2>
        </div>
        <div>
            <label>selected</label>
            <h2>{selectedPoints}</h2>
        </div>
    </div>
  )
}

export default Tab