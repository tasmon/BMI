function toggleHeightFields() {
  const unit = document.getElementById('heightUnit').value;
  const cmField = document.getElementById('heightCm');
  const imperialFields = document.getElementById('imperialHeight');

  if (unit === "cm") {
    cmField.classList.remove('hidden');
    imperialFields.classList.add('hidden');
  } else {
    cmField.classList.add('hidden');
    imperialFields.classList.remove('hidden');
  }
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const weightUnit = document.getElementById('weightUnit').value;
  const heightUnit = document.getElementById('heightUnit').value;
  const result = document.getElementById('result');

  if (isNaN(weight) || weight <= 0) {
    result.textContent = "Please enter valid weight.";
    return;
  }

  // Convert weight to kilograms
  let weightKg = weight;
  if (weightUnit === "lb") {
    weightKg = weight * 0.453592;
  }

  // Convert height to meters
  let heightM;
  if (heightUnit === "cm") {
    const heightCm = parseFloat(document.getElementById('heightCm').value);
    if (isNaN(heightCm) || heightCm <= 0) {
      result.textContent = "Please enter valid height.";
      return;
    }
    heightM = heightCm / 100;
  } else {
    const heightFt = parseFloat(document.getElementById('heightFt').value);
    const heightIn = parseFloat(document.getElementById('heightIn').value);
    if ((isNaN(heightFt) || heightFt < 0) || (isNaN(heightIn) || heightIn < 0)) {
      result.textContent = "Please enter valid height.";
      return;
    }
    const totalInches = (heightFt * 12) + heightIn;
    heightM = totalInches * 0.0254; // inches → meters
  }

  // Calculate BMI
  const bmi = (weightKg / (heightM * heightM)).toFixed(2);

  // Determine category
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
