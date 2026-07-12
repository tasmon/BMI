function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const weightUnit = document.getElementById('weightUnit').value;
  const heightUnit = document.getElementById('heightUnit').value;
  const result = document.getElementById('result');

  if (!weight || !height) {
    result.textContent = "Please enter valid values.";
    return;
  }

  // Convert to metric
  let weightKg = weight;
  let heightM = height;

  if (weightUnit === "lb") {
    weightKg = weight * 0.453592; // pounds to kg
  }

  if (heightUnit === "ft") {
    heightM = height * 0.3048; // feet to meters
  } else {
    heightM = height / 100; // cm to meters
  }

  const bmi = (weightKg / (heightM * heightM)).toFixed(2);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  result.textContent = `Your BMI: ${bmi} (${category})`;
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}
