import ProjectForm from '../Project/ProjectForm'
import styles from './CriarProjeto.module.css'

function CriarProjeto(props){

    return(

        <div className={styles.criarprojeto_container}>
            
            <ProjectForm btnText="Criar Projeto"/>

        </div>
    )

}

export default CriarProjeto
