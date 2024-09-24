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
    let food = '';
    let foodDescription = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        message = 'Increased risk of malnutrition, weakened immune system, bone density loss, and fertility issues.';
        diet_recommend = 'Diet: Focus on calorie-dense foods like avocados, nuts, and healthy oils, along with high-quality proteins such as meat, fish, and dairy.';
        ex_recommend = 'Exercise: Focus on programs that increase muscle mass. Weight training like dumbbells or barbells.';
        food = `<img src="img/Avocado.jpg" alt="avocado" />
            <img src="img/milk.jpg" alt="milk" />
            <img src="img/meat.jpg" alt="meat" />`;
        foodDescription = `<p>These foods provide essential nutrients and calories to help gain weight healthily.</p>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        message = 'Generally considered to be at a lower risk for weight-related health issues, but overall health should still be monitored.';
        diet_recommend = 'Diet: Maintain a balanced diet rich in fruits, vegetables, lean proteins, and whole grains. Monitor portion sizes and overall caloric intake to stay within a healthy range.';
        ex_recommend = 'Exercise: Engage in regular physical activity, including a mix of aerobic exercises (like walking or cycling) and strength training (like weight lifting) to promote overall health and fitness.';
        food = `<img src="img/Fruits.jpg" alt="fruits" />
            <img src="img/Fish_Meat.jpg" alt="fish" />
            <img src="img/WholeWheat_Bread.jpg" alt="whole-wheat-bread" />`;
        foodDescription = `<p>These foods are part of a balanced diet that supports overall health.</p>`;
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        message = 'Higher risk of cardiovascular diseases, type 2 diabetes, high blood pressure, and certain cancers.';
        diet_recommend = 'Diet: Emphasize a balanced diet with a focus on whole, unprocessed foods. Reduce intake of sugary and high-fat foods. Consider portion control and mindful eating practices.';
        ex_recommend = 'Exercise: Aim for at least 150 minutes of moderate aerobic activity per week, combined with strength training exercises. Incorporate activities you enjoy to increase adherence.';
        food = `<img src="img/Grilled_fish.jpg" alt="grilled-fish" />
            <img src="img/Vegetables.jpg" alt="vegetables" />
            <img src="img/Tofu.jpg" alt="tofu" />`;
        foodDescription = `<p>These foods can help manage weight while providing necessary nutrients.</p>`;
    } else if (bmi >= 30 && bmi < 35) {
        category = 'Obesity';
        message = 'Elevated risk of serious health conditions including heart disease, stroke, type 2 diabetes, certain types of cancer, sleep apnea, and osteoarthritis.';
        diet_recommend = 'Diet: Work with a healthcare provider to create a structured, sustainable eating plan. Focus on reducing calorie intake while ensuring nutritional adequacy.';
        ex_recommend = 'Exercise: Gradually increase physical activity levels, aiming for at least 150 minutes of moderate aerobic exercise per week. Include strength training and consult with a fitness professional for personalized guidance.';
        food = `<img src="img/Beans.jpg" alt="beans" />
            <img src="img/Vegetables.jpg" alt="vegetables" />
            <img src="img/Lean_chicken_meat.jpg" alt="lean-chicken" />`;
        foodDescription = `<p>These foods should be part of a calorie-controlled eating plan.</p>`;
    } else if (bmi >= 35) {
        category = 'Overobesity';
        message = 'Higher risk of Cardiovascular Disease, High Cholesterol, Fatty Liver Disease and type 2 diabetes';
        diet_recommend = 'Focus on Nutrient-Dense Foods: Choose fresh fruits, vegetables, whole grains, and lean proteins (like fish, chicken, eggs, and legumes) and Limit Processed Foods';
        ex_recommend = 'Low-intensity cardio: Such as slow walking, swimming, or light cycling, starting from 10-15 minutes a day and gradually increasing time';
        food = `<img src="img/Green_Leafy_Vegetable.jpg" alt="green-vegy" />
        <img src="img/Apple.jpg" alt="apple" />
        <img src="img/Tofu.jpg" alt="tofu" />`;
        foodDescription = `<p>These foods should be part of a calorie-controlled eating plan.</p>`;
    }
    
    document.querySelector('.popup h1').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    document.querySelector('.popup h2').textContent = `${category}`;
    document.querySelector('.popup p').textContent = `${message}`;
    document.querySelector('.popup h3').textContent = `${diet_recommend}`;
    document.querySelector('.popup h4').textContent = `${ex_recommend}`;
    document.querySelector('.popup h5').innerHTML = food;
    document.querySelector('.popup .food-description').innerHTML = foodDescription;
    
    openPopup();
});

function openPopup() {
    document.getElementById("popup").classList.add("open-popup");
}

function closePopup() {
    document.getElementById("popup").classList.remove("open-popup");
}


//manage scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const scrollPadding = parseInt(this.getAttribute('data-scroll-padding') || '0', 10);
        
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - scrollPadding;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
