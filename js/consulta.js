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
        var ag = db.collection("historico");

        ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                $("#TableData").append("<tr>");
                $("#TableData").append("<td scope='col'>" + doc.data().peso + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().altura + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().imc + "</td>");
                $("#TableData").append("<td scope='col'>" + doc.data().data + "</td>");
                $("#TableData").append("<td scope='col'><a href='" + cordova.file.applicationDirectory + "www/excluir.html?imc=" + doc.data().telefone + "'>Excluir</a></td>");
                $("#TableData").append("</tr>");
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

};

app.initialize();