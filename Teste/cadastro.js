

function capturar(){
    function Persona (nome,email,cpf,endereco,estado, cep, cidade, tipoCartao, nomeCartao, mes, ano, numeroCartao, cseguranca){
        this.nome=nome;
        this.email=email;
        this.cpf=cpf;
        this.endereco=endereco;
        this.estado=estado;
        this.cep=cep;
        this.cidade=cidade;
        this.tipoCartao=tipoCartao;
        this.nomeCartao=nomeCartao;
        this.mes=mes;
        this.ano=ano;
        this.numeroCartao=numeroCartao;
        this.cseguranca=cseguranca;
    }

    var nombre= document.getElementById("nome").value;
    var correo = document.getElementById("email").value;
    var documentocpf = document.getElementById("cpf").value;
    var direccion = document.getElementById("endereco").value;
    var lugestado = document.getElementById("estado").value;
    var documentocep = document.getElementById("cep").value;
    var ciudad = document.getElementById("cidade").value;
    var tipocarton = document.getElementsByName("tp").value;
    var nombrecarton = document.getElementById("nomecarton").value;
    var elmes = document.getElementById("mes").value;
    var elano = document.getElementById("ano").value;
    var numerocarton = document.getElementById("numero").value;
    var codigoSeguro = document.getElementById("cseguransa").value;
    

     newPerson = new Persona(nombre,correo, documentocpf, direccion, lugestado, documentocep,ciudad, tipocarton, nombrecarton, elmes,elano,numerocarton,codigoSeguro);

   agregar();


}

var basedados = [];
function agregar(){

        basedados.push(newPerson);
        var fechaCriado = new Date();
        documento.getElementById("tabla").innerHTML += '<tr><td>'+newPerson.nombre+'</td><td>'+newPerson.correo+'</td><td>'+newPerson.documentocpf+'</td><td>'+fechaCriado+'</td></tr>';
};


