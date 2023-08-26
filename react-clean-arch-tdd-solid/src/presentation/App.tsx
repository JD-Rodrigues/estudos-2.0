import Login from './pages/login/index.tsx'
import styles from './App-styles.module.scss'

const App = (): JSX.Element => {
  return (
    <>
      <p
        className={styles.teste}
      >{`Olá, pessoal!! O número da porta é este: ${process.env.PORT}.`}</p>
      <Login />
    </>
  )
}

export default App
