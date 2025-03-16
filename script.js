function checkNationalCode() {
      const nationalCode = document.getElementById('national-code').value;
      const resultDiv = document.getElementById('result');
  
      // بررسی طول کد ملی
      if (nationalCode.length !== 10 || isNaN(nationalCode)) {
          resultDiv.innerText = 'لطفاً یک کد ملی معتبر وارد کنید.';
          return;
      }
  
      // محاسبه رقم کنترلی
      let sum = 0;
      for (let i = 0; i < 9; i++) {
          sum += parseInt(nationalCode[i]) * (10 - i);
      }
  
      let remainder = sum % 11;
      let checkDigit = remainder < 2 ? remainder : 11 - remainder;
  
      // بررسی صحت کد ملی
      if (checkDigit === parseInt(nationalCode[9])) {
          resultDiv.innerText = 'کد ملی صحیح است.';
      } else {
          resultDiv.innerText = 'کد ملی ناصحیح است.';
      }
  }