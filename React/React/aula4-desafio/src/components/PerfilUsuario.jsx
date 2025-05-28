import React, { useState } from "react";
import './PefilUsuario.css'


function PerfilUsuario({ imagem, nome, bio }) { // Estabelecendo as propriedades recebidas
    const [novoNome, setNovoNome] = useState(nome); //inicializa o estado com valor recebido
    const [novBio, setNovoBio] = useState(bio); //inicializa o estado com valor recebido


    // Criar uma com nome "Seguir" só para atribuir um evento para o botão
    const handleClick = () => {
        alert(`Voce esta seguindo ${novoNome} `);
    };

    // Função para atualizar o estado quando os inputs forem alterados
    const handleNomeChange = (e) => {
        setNovoNome(e.target.value); // targer é o elemento que dispora com o valor do input atribuido
    }

    const handleBioChange = (e) => {
        setNovoBio(e.target.value); // targer é o elemento que dispora com o valor do input atribuido
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dados salvos:\nNome: ${novoNome}\nBio: ${novBio}`)
    }

    return (
        <div className="perfil-container">
            <img src={imagem} alt={`Foto de ${novoNome}`}
                style={{ borderRadius: '50%', border: '3px solid #888', width: '150px', height: '150px' }}
            />
            <h2 className="titulo-nome">{novoNome}</h2>
            <p className="bio">{novBio}</p>

            <button
                onClick={handleClick}
                style={{
                    backgroundColor: '#4CAF50', padding: '10px 20px', color: '#fff', border: 'none',
                    borderRadius: '5px', cursor: 'pointer'
                }}>
                    Seguir
            </button>

            <form
                onSubmit={handleSubmit}
                className="form-atualizar"
            >
                <input type="text"
                    placeholder="Novo nome"
                    value={novoNome}
                    onChange={handleNomeChange}
                    className="input-perfil"
                />
                <textarea
                    placeholder="Nova bio"
                    value={novBio}
                    onChange={handleBioChange}
                    className="textarea-perfil"
                >
                </textarea>
                <button type="submit" className="btn-submit">
                    Salvar
                </button>

            </form>


        </div>
    )

}

export default PerfilUsuario;