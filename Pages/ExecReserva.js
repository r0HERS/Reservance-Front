import './ExecReserva.module.css';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';

function ExecReserva() {
    const { nome, setNome } = useState('');
    const [data, setData] = useState(new Date());
    const [nomeCliente, setNomeCliente] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [numeroPessoas, setNumeroPessoas] = useState('');
    const [outroNumero, setOutroNumero] = useState('');
    const [horario, setHorario] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [errors, setErrors] = useState({});

    const horariosDisponiveis = ['12:00', '12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00'];

    const handleReserva = () => {
        const pessoas = numeroPessoas === 'Outro' ? outroNumero : numeroPessoas;
        let newErrors = {};

        if (!nomeCliente) newErrors.nomeCliente = 'Nome é obrigatório.';
        if (!telefone) newErrors.telefone = 'Telefone é obrigatório.';
        if (!cpf) newErrors.cpf = 'CPF é obrigatório.';
        if (!pessoas) newErrors.numeroPessoas = 'Número de pessoas é obrigatório.';
        if (!horario) newErrors.horario = 'Horário é obrigatório.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            Alert.error('Erro', 'Por favor, preencha todos os campos obrigatórios.');
        } else {
            Alert.success('Reserva Confirmada', `Reserva para ${nomeCliente} confirmada no restaurante ${nome} para ${pessoas} pessoas às ${horario}.`);
            setErrors({});
        }
    };

    return (
        <div className="container">
            <h1 className="title">Reserva no {nome}</h1>
            <input
                className="form-control"
                placeholder="Nome"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
            />
            {errors.nomeCliente && <span className="text-danger">{errors.nomeCliente}</span>}
            <MaskedInput
                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="form-control"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />
            {errors.telefone && <span className="text-danger">{errors.telefone}</span>}
            <MaskedInput
                mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                className="form-control"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />
            {errors.cpf && <span className="text-danger">{errors.cpf}</span>}
            <div className="form-group">
                <label>Número de Pessoas:</label>
                <select
                    className="form-control"
                    value={numeroPessoas}
                    onChange={(e) => setNumeroPessoas(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="Outro">Outro</option>
                </select>
                {numeroPessoas === 'Outro' && (
                    <input
                        className="form-control"
                        placeholder="Digite o número de pessoas"
                        value={outroNumero}
                        onChange={(e) => setOutroNumero(e.target.value)}
                        type="number"
                    />
                )}
            </div>
            {errors.numeroPessoas && <span className="text-danger">{errors.numeroPessoas}</span>}
            <DatePicker
                selected={data}
                onChange={(date) => setData(date)}
                className="form-control"
                dateFormat="dd/MM/yyyy"
            />
            <div className="form-group">
                <label>Horário:</label>
                <select
                    className="form-control"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                >
                    {horariosDisponiveis.map((hora) => (
                        <option key={hora} value={hora}>{hora}</option>
                    ))}
                </select>
            </div>
            {errors.horario && <span className="text-danger">{errors.horario}</span>}
            <input
                className="form-control"
                placeholder="Observações"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
            />
            <button className="btn btn-danger" onClick={handleReserva}>Reservar</button>
        </div>
    );
}

export default ExecReserva;
