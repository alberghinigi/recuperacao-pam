var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnListar").addEventListener("click",app.listar);
    },

    listar: function(){
        var db = firebase.firestore();
        var ag = db.collection("cadastro");

        ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.telefone, " => ", doc.data());
                $("#TableData").append("<tr>");
                $("#TableData").append("<td scope='col'>" + doc.data().nome + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().telefone + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().email + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().senha + "</td>");
                $("#TableData").append("<td scope='col'><a href='" + cordova.file.applicationDirectory + "www/editar.html?telefone=" + doc.data().telefone + "'>Editar</a></td>");
                $("#TableData").append("</tr>");
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

};

app.initialize();