$("button").click(function Calculate() {
    var note = 0;
    let appreciation = "";

    $("#form1 input[type=number]").each(function() {
        note += parseFloat($(this).val(), 10);
      //  alert(note);
    });
    
    let average = Math.floor(note/5);
    // alert(average);

    if ((average >= 0) && (average < 10)) {
        appreciation = "En dessous de la moyenne";
    } else if (average < 13) {
        appreciation = "Moyen";
    } else if (average < 16) {
        appreciation = "Bien";
    } else if (average < 20) {
        appreciation = "Très bien";
    } else if (average == 20) {
        appreciation = "Excellent";
    } else {
        appreciation = "Erreur";
    }

    // alert(appreciation);
    p = $("<p />"); 
    p.text("La moyenne est de " + average + " : " + appreciation);
    p.appendTo("body");

})