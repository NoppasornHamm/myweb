function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // ตรวจสอบกรณีที่ข้อมูลไม่ครบหรือไม่ถูกต้อง
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('bmiResult').textContent = "ผล BMI: --";
      document.getElementById('bmiCategory').textContent = "หมวดหมู่: --";
      document.getElementById('bmiAdvice').textContent = "คำแนะนำ: --";
      return;
    }
  
    // เปลี่ยนส่วนสูงจากเซนติเมตรเป็นเมตร
    const heightInMeters = height / 100;
  
    // คำนวณค่า BMI
    const bmi = weight / (heightInMeters * heightInMeters);
  
    // แสดงผล BMI
    document.getElementById('bmiResult').textContent = `ผล BMI: ${bmi.toFixed(2)}`;
  
    // ตรวจสอบหมวดหมู่ BMI และคำแนะนำ
    let category = "";
    let advice = "";
    if (bmi < 18.5) {
      category = "น้ำหนักน้อยเกินไป";
      advice = "เพิ่มน้ำหนักหน่อยนะคนเก่ง กินของอร่อยเยอะๆ enjoy eating!";
    } else if (bmi >= 18.5 && bmi < 22.9) {
      category = "น้ำหนักปกติ สมส่วน";
      advice = "สุขภาพดีสุดๆ เก่งมาก! ทำแบบนี้ต่อไปนะ";
    } else if (bmi >= 23 && bmi < 24.9) {
      category = "น้ำหนักเกิน";
      advice = "ต่อจากนี้ก็ลดอาหารหรืออกกำลังกายเพิ่มขึ้นนิดนึงนะคะ!";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "เสี่ยงโรคอ้วน";
      advice = "ควรควบคุมอาหารและออกกำลังกายอย่างสม่ำเสมอหน่อยนะ แต่เธอทำได้อยู่แล้ว!";
    } else {
      category = "โรคอ้วน";
      advice = "ต้องปรับเปลี่ยนพฤติกรรมการกินและออกกำลังกายร่วมด้วย เพื่อสุขภาพของตัวเองนะ!";
    }
  
    document.getElementById('bmiCategory').textContent = `หมวดหมู่: ${category}`;
    document.getElementById('bmiAdvice').textContent = `คำแนะนำ: ${advice}`;
  }
  