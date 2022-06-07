
        function validar() {
          var nome = document.getElementById("nome");
          var idade = document.getElementById("idade");
          var email = document.getElementById("email");
          var telefone = document.getElementById("telefone");
          var cep = document.getElementById("cep");
          var sexo = document.getElementById("sexo");
          var estado = document.getElementById("estado");
          var cidade = document.getElementById("cidade");

          if (nome.value == "") {
            alert("Nome não informado");
            nome.focus();
            return;
          }
          if (idade.value == "") {
              alert("Idade não informada");
              idade.focus();
              return;
          }
          else if (idade<0 && idade>150) {
              alert("Idade inválida");
              idade.focus();
              return;
          }
          if (email.value == "") {
            alert("E-mail não informado");
            email.focus();
            return;
          }
          if (telefone.value == "") {
            alert("Telefone não informado");
            telefone.focus();
            return;
          }
          if (cep.value == "") {
            alert("CEP não informado");
            cep.focus();
            return;
          }
          if (sexo.value == "") {
            alert("Sexo não informado");
            sexo.focus();
            return;
          }
          if (estado.value == "") {
            alert("Estado não informado");
            estado.focus();
            return;
          }
          if (cidade.value == "") {
            alert("Cidade não informada");
            cidade.focus();
            return;
          }
          if (estado.value == "Amazonas" && cidade.value != "Manaus") {
              alert("A cidade informada não pertence ao Amazonas");
              estado.focus();
              return;
          }
          if (estado.value == "Maranhão" && cidade.value != "São Luís") {
              alert("A cidade informada não pertence ao Maranhão");
              return;
          }
          if (estado.value == "São Paulo" && cidade.value != "São Paulo") {
              alert("A cidade informada não pertence a São Paulo");
              return;
          }
          if (estado.value == "Tocantins" && cidade.value != "Palmas") {
              alert("A cidade informada não pertence ao Tocantins");
              return;
          }
          alert("Formulário enviado!");

          //formulario.submit();
        }
