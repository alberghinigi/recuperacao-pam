var App = {
        
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",App.inserir);  
    },

    inserir: function(){
        let cpeso = document.getElementById("txtPeso").value;
        let caltura = document.getElementById("txtAltura").value;
        let cdata = document.getElementById("txtData").value;

        let cimc = (cpeso/(caltura*caltura));
        var db = firebase.firestore();

		db.collection("historico").add({
    		peso: cpeso,
    		altura: caltura,
            imc: cimc,
            data: cdata,
		})
		.then((docRef) => {
    		console.log("Document written with ID: ", docRef.id);
            window.location.href = cordova.file.applicationDirectory + "www/historico.html";
		})
		.catch((error) => {
    		console.error("Error adding document: ", error);
		});
    }  
};

App.initialize();