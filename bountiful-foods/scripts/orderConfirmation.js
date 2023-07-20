window.addEventListener("DOMContentLoaded", function() {
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    var fname = params.get("fname");
    var email = params.get("email");
    var cellphone = params.get("cellphone");

    // Get the selected fruit values from the drop-down lists
    var fruit1 = params.get("fruit1");
    var fruit2 = params.get("fruit2");
    var fruit3 = params.get("fruit3");

    // Add the selected fruits to an array (if selected)
    var selectedFruits = [fruit1, fruit2, fruit3].filter(Boolean);

    var description = params.get("description");
    var OTW = params.getAll("OTW");

    var confirmationMessage = document.getElementById("confirmation-message");
    var orderDetails = document.getElementById("order-details");
    var currentDate = new Date();

    // Calculate the time 15 minutes from now
    var fifteenMinutesFromNow = new Date(currentDate.getTime() + 15 * 60000); // 15 minutes in milliseconds

    confirmationMessage.textContent = "Thank you for your order, " + fname + "! Your order will be ready at " + fifteenMinutesFromNow.toLocaleTimeString() + ". If there is an issue with your order, please call (719) 867-5309.";

    orderDetails.innerHTML = "<h2>Order Details:</h2>" +
        "<p>Current Date: " + currentDate.toDateString() + "</p>" +
        "<p>First Name: " + fname + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Cell Phone: " + cellphone + "</p>" +
        "<p>Fruit Options: " + (selectedFruits.length > 0 ? selectedFruits.join(", ") : "None") + "</p>" +
        "<p>Special Instructions: " + (description ? description : "None") + "</p>";

    if (OTW.includes("OD")) {
        orderDetails.innerHTML += "<p>Smoothie of the Week: Orange Dreamsicle</p>";

        // Add made-up nutritional report for Smoothie of the Week
        var smoothieOfTheWeekNutrition = {
            "calories": 200,
            "fat": 2.5,
            "sugar": 30,
            "carbohydrates": 40,
            "protein": 5
        };

        orderDetails.innerHTML += "<h2>Smoothie of the Week Nutritional Report:</h2>" +
            "<p>Calories: " + smoothieOfTheWeekNutrition.calories + "</p>" +
            "<p>Fat: " + smoothieOfTheWeekNutrition.fat + "g</p>" +
            "<p>Sugar: " + smoothieOfTheWeekNutrition.sugar + "g</p>" +
            "<p>Carbohydrates: " + smoothieOfTheWeekNutrition.carbohydrates + "g</p>" +
            "<p>Protein: " + smoothieOfTheWeekNutrition.protein + "g</p>";
    }

    var totalCarbohydrates = 0;
    var totalProtein = 0;
    var totalFat = 0;
    var totalSugar = 0;
    var totalCalories = 0;

    if (!OTW.includes("OD")) {
        orderDetails.innerHTML += "<h2>Nutrition Information:</h2>";
        // Fetch the JSON file
        fetch("./data/fruits.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(fruitData) {
                selectedFruits.forEach(function(fruit) {
                    var selectedFruit = fruitData.find(function(item) {
                        return item.name === fruit;
                    });

                    if (selectedFruit) {
                        totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
                        totalProtein += selectedFruit.nutritions.protein;
                        totalFat += selectedFruit.nutritions.fat;
                        totalSugar += selectedFruit.nutritions.sugar;
                        totalCalories += selectedFruit.nutritions.calories;

                        orderDetails.innerHTML += "<p>" + selectedFruit.name + " - Carbohydrates: " + selectedFruit.nutritions.carbohydrates +
                            "g, Protein: " + selectedFruit.nutritions.protein +
                            "g, Fat: " + selectedFruit.nutritions.fat +
                            "g, Sugar: " + selectedFruit.nutritions.sugar +
                            "g, Calories: " + selectedFruit.nutritions.calories + "</p>";
                    }
                });

                orderDetails.innerHTML += "<p>Total - Carbohydrates: " + totalCarbohydrates +
                    "g, Protein: " + totalProtein +
                    "g, Fat: " + totalFat +
                    "g, Sugar: " + totalSugar +
                    "g, Calories: " + totalCalories + "</p>";
            })
            .catch(function(error) {
                console.log("Error fetching fruits data:", error);
            });
    }
});
