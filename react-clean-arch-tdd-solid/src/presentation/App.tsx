const App: React.FC = () => {
  return (
    <>
      <p className="teste">{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
    </>
  )
}

export default App
