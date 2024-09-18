document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('outcome').textContent = "Please enter valid values.";
        return;
    }

    const heightInMeters = height;
    
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = '';
    let message = '';
    let diet_recommend = '';
    let ex_recommend = '';
    let food
    let cal = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        message = 'Increased risk of malnutrition, weakened immune system, bone density loss, and fertility issues.';
        diet_recommend = 'Diet: Focus on nutrient-dense, high-calorie foods such as nuts, avocados, whole grains, and lean proteins. Consider consulting a dietitian for a personalized plan.';
        ex_recommend = 'Exercise: Incorporate strength training exercises to build muscle mass, but ensure a balanced approach to avoid excessive calorie expenditure.';
        food = `<img src="img/grains.jpg" alt="grains" />
            <img src="img/milk.jpg" alt="milk" />
            <img src="img/meat.jpg" alt="meat" />`;
        cal = '';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        message = 'Generally considered to be at a lower risk for weight-related health issues, but overall health should still be monitored.';
        diet_recommend = 'Diet: Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains. Monitor portion sizes and overall caloric intake to stay within a healthy range.';
        ex_recommend = 'Exercise: Engage in regular physical activity, including a mix of aerobic exercises (like walking or cycling) and strength training (like weight lifting) to promote overall health and fitness.';
        food = `<img src="path/to/normal-food1.jpg" alt="Balanced Diet" />
            <img src="path/to/normal-food2.jpg" alt="Healthy Options" />`;
        cal = '';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        message = 'Higher risk of cardiovascular diseases, type 2 diabetes, high blood pressure, and certain cancers.';
        diet_recommend = 'Diet: Emphasize a balanced diet with a focus on whole, unprocessed foods. Reduce intake of sugary and high-fat foods. Consider portion control and mindful eating practices.';
        ex_recommend = 'Exercise: Aim for at least 150 minutes of moderate aerobic activity per week, combined with strength training exercises. Incorporate activities you enjoy to increase adherence.';
        food = `<img src="path/to/overweight-food1.jpg" alt="Whole Foods" />
            <img src="path/to/overweight-food2.jpg" alt="Mindful Eating" />`;
        cal = '';
    } else if (bmi >= 30) {
        category = 'Obesity';
        message = 'Elevated risk of serious health conditions including heart disease, stroke, type 2 diabetes, certain types of cancer, sleep apnea, and osteoarthritis.';
        diet_recommend = 'Diet: Work with a healthcare provider to create a structured, sustainable eating plan. Focus on reducing calorie intake while ensuring nutritional adequacy.';
        ex_recommend = 'Exercise: Gradually increase physical activity levels, aiming for at least 150 minutes of moderate aerobic exercise per week. Include strength training and consult with a fitness professional for personalized guidance.';
        food = `<img src="path/to/obesity-food1.jpg" alt="Structured Diet" />
            <img src="path/to/obesity-food2.jpg" alt="Sustainable Eating" />`;
        cal = '';
    }
    
    document.querySelector('.popup h1').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    document.querySelector('.popup h2').textContent = `You are in the ${category}.`;
    document.querySelector('.popup p').textContent = `${message}`;
    document.querySelector('.popup h3').textContent = `${diet_recommend}`;
    document.querySelector('.popup h4').textContent = `${ex_recommend}`;
    document.querySelector('.popup h5').innerHTML = food;
    document.querySelector('.popup h4').textContent = `${cal}`;
    
    openPopup();
});

function openPopup() {
    document.getElementById("popup").classList.add("open-popup");
}

function closePopup() {
    document.getElementById("popup").classList.remove("open-popup");
}
