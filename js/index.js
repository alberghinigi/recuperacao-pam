var App = {
  
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",App.inserir); 
    },

    inserir: function(){

        
        let cnome = document.getElementById("txtNome").value;
        let ctelefone = document.getElementById("txtTelefone").value;
        let cemail = document.getElementById("txtEmail").value;
        let csenha = document.getElementById("txtSenha").value;
        var db = firebase.firestore();

		db.collection("cadastro").add({
    		nome: cnome,
    		telefone: ctelefone,
    		email: cemail,
    		senha: csenha,
		})
		.then((docRef) => {
    		console.log("Document written with ID: ", docRef.id);
            window.location.href = cordova.file.applicationDirectory + "www/historico.html";
		})
		.catch((error) => {
    		console.error("Error adding document: ", error);
    });
    
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("txtEmail").value, document.getElementById("txtSenha").value)
  .then(function(user) {
    alert("foi");
    // Signed in
	auth = user;
	window.location.href = "historico.html";
    // ...
  })
  .catch(function(error){
    alert("ERRO");
  });
    }  
};

App.initialize();