import './styles.scss'

import logo from '@images/raw-logo.png'
// eslint-disable-next-line import/no-unresolved
import fonte from '@images/fonte.png'
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import { ReactComponent as Envelope } from '@images/envelope.svg'
// eslint-disable-next-line import/no-duplicates, import/no-unresolved
import envelope from '@images/envelope.svg'

const App: React.FC = () => {
  return (
    <>
      <p className="teste">{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <img alt="" src={logo} />
      <img alt="" src={envelope} />
      {/* svg path inserted in src img attribute */}
      <img alt="" src={fonte} />
      <Envelope /> {/* svg inserted as React Component */}
    </>
  )
}

export default App
