catch (error) {

    console.error("FULL ERROR:", error);

    loadingMessage.textContent = "";

    errorMessage.textContent =
        "Unable to fetch weather data. Please check your internet connection and try again.";

    weatherCard.classList.add("hidden");
}