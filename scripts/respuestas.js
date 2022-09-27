function getBotResponse(input) {

    // Simple responses
    if (input == "hola") {
        return "¡Hola!";
    } else if (input == "Adios") {
        return "¡Gracias por tus preguntas!";
    } else {
        return "¡Intenta hacer una pregunta!";
    }
}