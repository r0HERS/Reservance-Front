import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import styles from './PerfilEstabelecimento.module.css';

function PerfilEstabelecimento() {
    const [profile, setProfile] = useState({
        nome: '',
        descricao: '',
        imagemPrincipal: null,
        imagemGaleria: [],
        localizacao: '',
        cep: '',
        telefone: '',
        horarioFuncionamento: '',
        website: '',
        redesSociais: ''
    });

    useEffect(() => {
        // Aqui você poderia carregar os dados antigos do perfil de uma API ou banco de dados.
        // Vou adicionar valores fictícios como exemplo:
        const perfilAntigo = {
            nome: 'Restaurante Exemplo',
            descricao: 'Um restaurante que oferece pratos incríveis.',
            imagemPrincipal: null, // Este campo geralmente ficaria vazio até o upload
            imagemGaleria: [],
            localizacao: 'Av. Paulista, 1234 - São Paulo, SP',
            cep: '01310-000',
            telefone: '(11) 1234-5678',
            horarioFuncionamento: 'Seg - Sex: 12:00 - 22:00',
            website: 'https://www.restauranteexemplo.com.br',
            redesSociais: 'https://facebook.com/restauranteexemplo, https://instagram.com/restauranteexemplo'
        };
        setProfile(perfilAntigo);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: file
        }));
    };

    const handleGalleryUpload = (e) => {
        const files = Array.from(e.target.files);
        setProfile(prevProfile => ({
            ...prevProfile,
            imagemGaleria: files
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o backend
        console.log(profile);
        alert('Perfil salvo com sucesso!');
    };

    return (
        <div className={styles.profileFormContainer}>
            <h1>Configurar Perfil do Estabelecimento</h1>
            <form onSubmit={handleSubmit} className={styles.profileForm}>
                <label className={styles.label}>
                    Nome do Estabelecimento: <span className={styles.requiredField}>*</span>
                    <input
                        type="text"
                        name="nome"
                        value={profile.nome}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styles.label}>
                    Descrição:
                    <textarea
                        name="descricao"
                        value={profile.descricao}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styles.label}>
                    Imagem Principal:
                    <input
                        type="file"
                        name="imagemPrincipal"
                        onChange={handleImageUpload}
                    />
                </label>

                <label className={styles.label}>
                    Galeria de Imagens:
                    <input
                        type="file"
                        name="imagemGaleria"
                        onChange={handleGalleryUpload}
                        multiple
                    />
                </label>

                <label className={styles.label}>
                    Localização: <span className={styles.requiredField}>*</span>
                    <input
                        type="text"
                        name="localizacao"
                        value={profile.localizacao}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styles.label}>
                    CEP: <span className={styles.requiredField}>*</span>
                    <InputMask
                        mask="99999-999"
                        name="cep"
                        value={profile.cep}
                        onChange={handleChange}
                        required
                    >
                        {(inputProps) => <input {...inputProps} type="text" />}
                    </InputMask>
                </label>

                <label className={styles.label}>
                    Telefone: <span className={styles.requiredField}>*</span>
                    <InputMask
                        mask="(99) 9999-9999"
                        name="telefone"
                        value={profile.telefone}
                        onChange={handleChange}
                        required
                    >
                        {(inputProps) => <input {...inputProps} type="text" />}
                    </InputMask>
                </label>

                <label className={styles.label}>
                    Horário de Funcionamento:
                    <input
                        type="text"
                        name="horarioFuncionamento"
                        value={profile.horarioFuncionamento}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    Website:
                    <input
                        type="url"
                        name="website"
                        value={profile.website}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    Redes Sociais:
                    <input
                        type="text"
                        name="redesSociais"
                        value={profile.redesSociais}
                        onChange={handleChange}
                        placeholder="Links separados por vírgula"
                    />
                </label>

                <button type="submit" className={styles.submitButton}>Salvar Perfil</button>
            </form>
        </div>
    );
}

export default PerfilEstabelecimento;
