import './styles.scss'

import logo from '@images/raw-logo.png'
import fonte from '@images/fonte.png'
import { ReactComponent as Envelope } from '@images/envelope.svg'
import envelope from '@images/envelope.svg'
import Instruction from './Instruction/index.tsx' 

const App: React.FC = () => {
  return (
    <>
      <p className="teste">{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <Instruction />
      <img alt="" src={logo} />
      <img alt="" src={envelope} />
      {/* svg path inserted in src img attribute */}
      <img alt="" src={fonte} />
      <Envelope /> {/* svg inserted as React Component */}
    </>
  )
}

export default App
