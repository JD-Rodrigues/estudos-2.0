import Login from './pages/login/index.tsx'

const App: React.FC = () => {
  return (
    <>
      <p className="teste">{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <Login />
    </>
  )
}

export default App
