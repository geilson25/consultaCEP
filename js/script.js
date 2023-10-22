// Função para lidar com a consulta do CEP
document.getElementById('consultButton').addEventListener('click', async () => {
    const cep = document.getElementById('cepInput').value;
    if (!cep) {
      alert('Digite um CEP válido.');
      return;
    }
  
    try {
      // Faz uma solicitação para a API do ViaCEP com o CEP fornecido
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.status === 200) {
        // Se a resposta for bem-sucedida, exibe os dados do endereço
        const data = await response.json();
        document.getElementById('resultado').innerHTML = `
          <p>Logradouro: ${data.logradouro}</p>
          <p>Bairro: ${data.bairro}</p>
          <p>Cidade: ${data.localidade}</p>
          <p>Estado: ${data.uf}</p>
        `;
      } else {
        // Se o CEP não for encontrado, exibe uma mensagem apropriada
        document.getElementById('resultado').innerHTML = 'CEP não encontrado.';
      }
    } catch (error) {
      // Em caso de erro na consulta, exibe uma mensagem de erro
      console.error(error);
      document.getElementById('resultado').innerHTML = 'Erro na consulta.';
    }
  });
  