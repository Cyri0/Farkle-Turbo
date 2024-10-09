import { useState } from 'react'

const Controls = () => {
  const [rolled, setRolled] = useState(false)

  return (
    <>
        {
            rolled?<>
            <button>STORE SELECTED & PASS</button>
            <button>STORE SELECTED & ROLL AGAIN</button>
            </>:
            <button>ROLL</button>
        }
    </>
  )
}

export default Controls