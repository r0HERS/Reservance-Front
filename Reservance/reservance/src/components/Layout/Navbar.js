import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logosemfundo.png'
import Container from './Container'
import Cardapio from '../Pages/Cardapio'

function Navbar(){

    return(

      <nav className={styles.navbar}>
        <Container>
        <li >
            <Link to="/"><img src={logo} alt="Reservance"/></Link>
          </li>
          <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li >
          <li className={styles.item}>
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/CriarProjeto">CriarProjeto</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Addprato">Addprato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/ExecReserva">Reserva</Link>
          </li>
          <li className={styles.item}>
            <Link to="/ViewReservas">Ver Reservas</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Entrar">Entrar</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Cardapio">Cardapio</Link>
          </li>
          </ul>
          </Container>
      </nav>

    )
}

export default Navbar