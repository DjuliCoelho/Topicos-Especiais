<?php
// Configurações de conexão com o banco de dados
$servername = "localhost/3306";
$username = "Local instance MySQL80";
$password = "djuli";
$dbname = "seu_banco_de_dados";

// Criar uma nova conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se ocorreu um erro na conexão
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Verificar o tipo de solicitação
$method = $_SERVER['REQUEST_METHOD'];

// Lidar com a solicitação
switch ($method) {
  case 'POST':
    criarRegistro();
    break;
  case 'GET':
    recuperarRegistros();
    break;
  default:
    // Método não suportado
    http_response_code(405);
    echo json_encode(array("message" => "Método não suportado."));
    break;
}

// Função para criar um registro no banco de dados
function criarRegistro() {
  // Obter os dados enviados no corpo da solicitação
  $nome = $_POST['nome'];
  $cpf = $_POST['cpf'];

  // Inserir os dados no banco de dados
  global $conn;
  $sql = "INSERT INTO tabela (nome, cpf) VALUES ('$nome', '$cpf')";
  if ($conn->query($sql) === TRUE) {
    http_response_code(201); // Registro criado com sucesso
    echo json_encode(array("message" => "Registro criado com sucesso."));
  } else {
    // Erro ao criar o registro
    http_response_code(500);
    echo json_encode(array("message" => "Erro ao criar o registro: " . $conn->error));
  }
}

// Função para recuperar os registros do banco de dados
function recuperarRegistros() {
  // Consultar os registros no banco de dados
  global $conn;
  $sql = "SELECT * FROM tabela";
  $result = $conn->query($sql);

  // Verificar se existem registros
  if ($result->num_rows > 0) {
    // Converter os registros em um array
    $registros = array();
    while ($row = $result->fetch_assoc()) {
      $registros[] = $row;
    }
    echo json_encode($registros);
  } else {
    // Não foram encontrados registros
    http_response_code(404);
    echo json_encode(array("message" => "Nenhum registro encontrado."));
  }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>
