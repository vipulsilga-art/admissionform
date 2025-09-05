<!DOCTYPE html>
<html lang="gu">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>સ્પર્ધાત્મક પરીક્ષા માટે વિના મૂલ્યે તૈયારી</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
  <style>
  /* Keep admin-only controls hidden */
  [data-admin-only]{ display: none; }

  /* Show them only when toggled via JS (Ctrl+Shift+V) */
  body.is-admin [data-admin-only]{ display: inline-flex !important; }
</style>
  <style>
    :root {
      --primary-color-start: #4facfe;
      --primary-color-end: #00f2fe;
      --background-gradient-start: #667eea;
      --background-gradient-end: #764ba2;
      --text-light: #ffffff;
      --text-dark: #333333;
      --text-muted: #555555;
      --border-color: #dddddd;
      --error-color: #e74c3c;
      --success-color: #28a745;
      --warning-bg: #fff3cd;
      --warning-border: #ffeaa7;
      --container-bg: rgba(255, 255, 255, 0.97);
      --section-bg: #fafafa;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Gujarati', sans-serif;
      background: linear-gradient(135deg, var(--background-gradient-start) 0%, var(--background-gradient-end) 100%);
      min-height: 100vh;
      padding: 20px;
      line-height: 1.6;
      color: var(--text-dark);
    }
    .container {
      max-width: 1200px;
      margin: 20px auto;
      background: var(--container-bg);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      animation: slideIn 0.8s ease-out;
    }
    @keyframes slideIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .header {
      background: linear-gradient(135deg, var(--primary-color-start) 0%, var(--primary-color-end) 100%);
      padding: 30px;
      text-align: center;
      color: var(--text-light);
    }
    .header h1 {
      font-size: clamp(1.8rem, 4vw, 2.4rem);
      font-weight: 700;
      line-height: 1.3;
    }
    .form-container { padding: clamp(20px, 4vw, 40px); }
    .section {
      margin-bottom: 40px;
      padding: 30px;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
      background: var(--section-bg);
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .section:hover { border-color: var(--primary-color-start); box-shadow: 0 5px 20px rgba(79, 172, 254, 0.1); }
    .section-title {
      font-size: 1.6rem;
      color: var(--text-dark);
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 3px solid var(--primary-color-start);
      display: inline-block;
      font-weight: 600;
    }
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }
    .form-group { margin-bottom: 20px; }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: var(--text-muted);
      font-size: 1rem;
    }
    input, select, textarea {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid var(--border-color);
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: var(--text-light);
      font-family: 'Noto Sans Gujarati', sans-serif;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color-start);
      box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.2);
    }
    .checkbox-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin-top: 10px;
    }
    .checkbox-item {
      display: flex; align-items: center;
      padding: 12px; border: 2px solid #eee; border-radius: 8px;
      transition: all 0.3s ease; cursor: pointer; background: #fff;
    }
    .checkbox-item:hover { border-color: var(--primary-color-start); background: rgba(79, 172, 254, 0.05); }
    .checkbox-item input[type="checkbox"] { width: auto; margin-right: 12px; transform: scale(1.2); }
    .checkbox-item label { margin: 0; cursor: pointer; font-weight: 500; }
    .declaration {
      background: var(--warning-bg);
      border: 1px solid var(--warning-border);
      padding: 20px;
      border-radius: 10px;
      margin: 30px 0;
    }
    .declaration label { display: flex; align-items: flex-start; font-weight: 500; cursor: pointer; }
    .declaration input[type="checkbox"] { width: auto; margin-right: 15px; margin-top: 5px; transform: scale(1.3); }
    .button-container {
      text-align: center; margin-top: 30px;
      display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;
    }
    .btn {
      color: var(--text-light);
      padding: 15px 40px; border: none; border-radius: 50px;
      font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;
      font-family: 'Noto Sans Gujarati', sans-serif; background: #6b7280;
    }
    .btn-submit {
      background: linear-gradient(135deg, var(--primary-color-start) 0%, var(--primary-color-end) 100%);
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    }
    .btn-submit:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 6px 25px rgba(79, 172, 254, 0.4); }
    .btn-export-all {
      background: linear-gradient(135deg, var(--success-color) 0%, #20c997 100%);
      box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
    }
    .btn-export-all:hover { transform: translateY(-3px); box-shadow: 0 6px 25px rgba(40, 167, 69, 0.4); }
    .btn-clear {
      background: linear-gradient(135deg, var(--error-color) 0%, #ff6b6b 100%);
      box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    }
    .btn-clear:hover { transform: translateY(-3px); box-shadow: 0 6px 25px rgba(231, 76, 60, 0.4); }
    .btn:disabled { background: #ccc; cursor: not-allowed; transform: none; box-shadow: none; }
    .message {
      display: none; padding: 20px; border-radius: 10px; margin: 20px 0; animation: fadeIn 0.5s ease-out; text-align: center;
    }
    .success-message { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
    .error-message { color: var(--error-color); font-size: 0.9rem; margin-top: 5px; display: none; font-weight: 500; }
    input.error, select.error, textarea.error {
      border-color: var(--error-color) !important; box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2) !important;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .submitted-data-container {
      margin-top: 40px; padding: 30px; background: #f8f9fa; border-radius: 15px;
    }

    /* Hidden by default; shown after key combo */
    [data-admin-only]{ display: none; }
    body.is-admin [data-admin-only]{ display: inline-flex !important; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>સ્પર્ધાત્મક પરીક્ષા માટે વિના મૂલ્યે તૈયારી માટે ઇચ્છુક દીકરા દીકરી માટેનું ફોર્મ</h1>
    </div>

    <div class="form-container">
      <form id="admissionForm" novalidate>
        <!-- વ્યક્તિગત વિગતો -->
        <div class="section">
          <h2 class="section-title">વ્યક્તિગત વિગતો</h2>
          <div class="form-row">
            <div class="form-group">
              <label for="fullName">પૂરું નામ *</label>
              <input type="text" id="fullName" name="fullName" required />
              <div class="error-message">કૃપા કરીને તમારું પૂરું નામ દાખલ કરો</div>
            </div>
            <div class="form-group">
              <label for="email">ઇમેઇલ *</label>
              <input type="email" id="email" name="email" required />
              <div class="error-message">કૃપા કરીને સાચું ઇમેઇલ એડ્રેસ દાખલ કરો</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">ફોન નંબર *</label>
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
              <div class="error-message">કૃપા કરીને 10-અંકનો સાચો ફોન નંબર દાખલ કરો</div>
            </div>
            <div class="form-group">
              <label for="dob">જન્મ તારીખ *</label>
              <input type="date" id="dob" name="dob" required />
              <div class="error-message">કૃપા કરીને તમારી જન્મ તારીખ પસંદ કરો</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="gender">લિંગ *</label>
              <select id="gender" name="gender" required>
                <option value="">લિંગ પસંદ કરો</option>
                <option value="પુરુષ">પુરુષ</option>
                <option value="સ્ત્રી">સ્ત્રી</option>
                <option value="અન્ય">અન્ય</option>
              </select>
              <div class="error-message">કૃપા કરીને તમારું લિંગ પસંદ કરો</div>
            </div>
            <div class="form-group">
              <label for="district">જિલ્લો *</label>
              <select id="district" name="district" required></select>
              <div class="error-message">કૃપા કરીને તમારો જિલ્લો પસંદ કરો</div>
            </div>
          </div>

          <div class="form-group">
            <label for="address">સરનામું *</label>
            <textarea id="address" name="address" rows="3" required></textarea>
            <div class="error-message">કૃપા કરીને તમારું સરનામું દાખલ કરો</div>
          </div>
        </div>

        <!-- શૈક્ષણિક વિગતો -->
        <div class="section">
          <h2 class="section-title">શૈક્ષણિક વિગતો</h2>
          <div class="form-row">
            <div class="form-group">
              <label for="qualification">સર્વોચ્ચ શિક્ષણ *</label>
              <select id="qualification" name="qualification" required>
                <option value="">શિક્ષણ પસંદ કરો</option>
                <option value="10મું ધોરણ">10મું ધોરણ</option>
                <option value="12મું ધોરણ">12મું ધોરણ</option>
                <option value="ડિપ્લોમા">ડિપ્લોમા</option>
                <option value="સ્નાતક">સ્નાતક (Bachelor's)</option>
                <option value="અનુસ્નાતક">અનુસ્નાતક (Master's)</option>
                <option value="પીએચડી">પીએચડી</option>
              </select>
              <div class="error-message">કૃપા કરીને તમારું શિક્ષણ પસંદ કરો</div>
            </div>
            <div class="form-group">
              <label for="percentage">ટકાવારી / CGPA *</label>
              <input type="text" id="percentage" name="percentage" required />
              <div class="error-message">કૃપા કરીને ટકાવારી / CGPA દાખલ કરો</div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="passingYear">પાસ થયાનું વર્ષ *</label>
              <select id="passingYear" name="passingYear" required>
                <option value="">વર્ષ પસંદ કરો</option>
              </select>
              <div class="error-message">કૃપા કરીને પાસ થયાનું વર્ષ પસંદ કરો</div>
            </div>
          </div>
        </div>

        <!-- કોર્સ પસંદગી -->
        <div class="section">
          <h2 class="section-title">કોર્સ પસંદગી</h2>
          <div class="form-group">
            <label>તમે કયા કોર્સ માટે તૈયારી કરવા માંગો છો? (એક અથવા વધુ પસંદ કરો) *</label>
            <div class="checkbox-group">
              <label class="checkbox-item"><input type="checkbox" id="gpsc" name="courses" value="GPSC વર્ગ 1-2-3"><span>GPSC વર્ગ 1-2-3</span></label>
              <label class="checkbox-item"><input type="checkbox" id="police" name="courses" value="પોલીસ ભરતી"><span>પોલીસ ભરતી</span></label>
              <label class="checkbox-item"><input type="checkbox" id="gsssb1" name="courses" value="GSSSB ગ્રૂપ A અને B"><span>GSSSB ગ્રૂપ A અને B</span></label>
              <label class="checkbox-item"><input type="checkbox" id="tet-tat" name="courses" value="TET/TAT"><span>TET/TAT</span></label>
              <label class="checkbox-item"><input type="checkbox" id="talati" name="courses" value="તલાટી"><span>તલાટી</span></label>
              <label class="checkbox-item"><input type="checkbox" id="other" name="courses" value="અન્ય"><span>અન્ય</span></label>
              <label class="checkbox-item"><input type="checkbox" id="gsssb2" name="courses" value="GSSSB ગ્રૂપ A અને B"><span>GSSSB ગ્રૂપ A અને B</span></label>
            </div>
            <div class="error-message" id="coursesError">કૃપા કરીને ઓછામાં ઓછો એક કોર્સ પસંદ કરો</div>
          </div>
        </div>

        <!-- તૈયારીનું સ્થળ -->
        <div class="section">
          <h2 class="section-title">તૈયારીનું સ્થળ</h2>
          <div class="form-group">
            <label for="preparationPlace">તૈયારી માટે પસંદગીનું સ્થળ *</label>
            <select id="preparationPlace" name="preparationPlace" required></select>
            <div class="error-message">કૃપા કરીને તૈયારી માટેનું સ્થળ પસંદ કરો</div>
          </div>
        </div>

        <!-- કટોકટીનો સંપર્ક -->
        <div class="section">
          <h2 class="section-title">કટોકટીનો સંપર્ક</h2>
          <div class="form-row">
            <div class="form-group">
              <label for="emergencyName">સંપર્ક વ્યક્તિનું નામ *</label>
              <input type="text" id="emergencyName" name="emergencyName" required />
              <div class="error-message">કૃપા કરીને સંપર્ક વ્યક્તિનું નામ દાખલ કરો</div>
            </div>
            <div class="form-group">
              <label for="emergencyRelationship">સંબંધ *</label>
              <select id="emergencyRelationship" name="emergencyRelationship" required>
                <option value="">સંબંધ પસંદ કરો</option>
                <option value="પિતા">પિતા</option>
                <option value="માતા">માતા</option>
                <option value="વાલી">વાલી</option>
                <option value="પતિ/પત્ની">પતિ/પત્ની</option>
                <option value="ભાઈ/બહેન">ભાઈ/બહેન</option>
                <option value="અન્ય">અન્ય</option>
              </select>
              <div class="error-message">કૃપા કરીને સંબંધ પસંદ કરો</div>
            </div>
          </div>
          <div class="form-group">
            <label for="emergencyPhone">સંપર્ક ફોન નંબર *</label>
            <input type="tel" id="emergencyPhone" name="emergencyPhone" pattern="[0-9]{10}" required />
            <div class="error-message">કૃપા કરીને 10-અંકનો સાચો ફોન નંબર દાખલ કરો</div>
          </div>
        </div>

        <!-- મહત્વપૂર્ણ લિંક્સ -->
        <div class="section">
          <h2 class="section-title">મહત્વપૂર્ણ લિંક્સ</h2>
          <p>વધારાની માહિતી અને નિયમો માટે, કૃપા કરીને નીચેની લિંક્સનો સંદર્ભ લો.</p>
        </div>

        <!-- ઘોષણા -->
        <div class="declaration">
          <label for="declaration">
            <input type="checkbox" id="declaration" name="declaration" required />
            <span>હું આથી જાહેર કરું છું કે મારા દ્વારા આપવામાં આવેલી તમામ માહિતી મારા શ્રેષ્ઠ જ્ઞાન અને માન્યતા મુજબ સાચી અને સાચી છે. હું સમજું છું કે કોઈપણ ખોટી માહિતી મારી અરજી રદ કરવા તરફ દોરી શકે છે.</span>
          </label>
          <div class="error-message">કૃપા કરીને આગળ વધવા માટે ઘોષણા સ્વીકારો</div>
        </div>

        <!-- Success Message -->
        <div id="successMessage" class="message success-message">
          <h3>🎉 તમારું ફોર્મ સફળતાપૂર્વક સબમિટ થઈ ગયું છે!</h3>
          <p>તમારી માહિતી લોકલમાં સાચવાઈ છે. આભાર!</p>
        </div>

        <!-- Buttons -->
        <div class="button-container">
            <button type="button" id="exportAllBtn" class="btn btn-export-all" data-admin-only>
  બધી એન્ટ્રીઓ Excelમાં એક્સપોર્ટ કરો
</button>
<button type="button" id="clearDataBtn" class="btn btn-clear" data-admin-only>
  બધો ડેટા સાફ કરો
</button>
          <!-- Visible to everyone -->
          <button type="submit" id="submitBtn" class="btn btn-submit">ફોર્મ સબમિટ કરો</button>

          <!-- Hidden until key combo -->
          <button type="button" id="exportAllBtn" class="btn btn-export-all" data-admin-only>બધી એન્ટ્રીઓ Excelમાં એક્સપોર્ટ કરો</button>
          <button type="button" id="clearDataBtn" class="btn btn-clear" data-admin-only>બધો ડેટા સાફ કરો</button>
        </div>
      </form>

      <!-- Local Storage Data Display -->
      <div id="submittedDataContainer" class="submitted-data-container" style="display: none;">
        <h2 class="section-title">સ્થાનિક રીતે સાચવેલી એન્ટ્રીઓ</h2>
        <div id="dataList"></div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // 0) Remove any potential document upload fields (defensive)
      function removeUploadInputs() {
        const uploadSelectors = [
          'input[type="file"]',
          '.file-upload',
          '[data-upload]',
          'label[for*="file"]',
          'button[onclick*="upload"]'
        ];
        document.querySelectorAll(uploadSelectors.join(',')).forEach(el => {
          const container = el.closest('.section, .form-group, .field, .form-row, .row, .col, label, .input-group') || el;
          container.remove();
        });
      }
      removeUploadInputs();

      // 1) Populate dropdowns
      const gujaratDistricts = [
        "અમદાવાદ","અમરેલી","આણંદ","અરવલ્લી","બનાસકાંઠા","ભરૂચ","ભાવનગર","બોટાદ","છોટાઉદેપુર","દાહોદ","ડાંગ","દેવભૂમિ દ્વારકા","ગાંધીનગર","ગીર સોમનાથ","જામનગર","જૂનાગઢ","કચ્ચ","ખેડા","મહીસાગર","મહેસાણા","મોરબી","નર્મદા","નવસારી","પંચમહાલ","પાટણ","પોરબંદર","રાજકોટ","સાબરકાંઠા","સુરત","સુરેન્દ્રનગર","તાપી","વડોદરા","વલસાડ"
      ];
      function populateDropdown(selectElement, options, placeholder) {
        selectElement.innerHTML = `<option value="">${placeholder}</option>`;
        options.forEach(option => { selectElement.innerHTML += `<option value="${option}">${option}</option>`; });
      }
      const districtSelect = document.getElementById('district');
      const prepPlaceSelect = document.getElementById('preparationPlace');
      populateDropdown(districtSelect, gujaratDistricts, 'જિલ્લો પસંદ કરો');
      populateDropdown(prepPlaceSelect, gujaratDistricts, 'સ્થળ પસંદ કરો');

      const passingYearSelect = document.getElementById('passingYear');
      const currentYear = new Date().getFullYear();
      for (let year = currentYear; year >= 1980; year--) {
        const option = document.createElement('option');
        option.value = year; option.textContent = year;
        passingYearSelect.appendChild(option);
      }

      // 2) Form validation + save
      const form = document.getElementById('admissionForm');
      const successMessage = document.getElementById('successMessage');
 form.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the normal form submit

  if (validateForm()) { // Only continue if the form is valid
    const data = getFormData(); // Collect all the form data

    // Send the data to your server using fetch
    fetch('http://localhost:3000/submit', { // Change to your server URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data) // Convert data to JSON
    })
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        successMessage.style.display = 'block'; // Show success
        form.reset(); // Reset the form
        setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
      } else {
        alert('Submission failed!');
      }
    })
    .catch(err => {
      alert('Error submitting form!');
      console.error(err);
    });
  }
});   
      
      
      
      //form.addEventListener('submit', function(e) {
      //  e.preventDefault();
      //  if (validateForm()) {
      //    const data = getFormData();
       //   saveToLocalStorage(data);
       //   successMessage.style.display = 'block';
       //   form.reset();
       //   displayStoredData();
       //   setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
       // }
     // });

      function validateForm() {
        let isValid = true;
        const fields = form.querySelectorAll('[required]');
        fields.forEach(field => {
          const group = field.closest('.form-group, .declaration');
          const err = group ? group.querySelector('.error-message') : null;
          field.classList.remove('error'); if (err) err.style.display = 'none';

          let ok = true;
          if (field.type === 'checkbox') { ok = field.checked; }
          else if (!field.value.trim()) { ok = false; }
          else if (field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value)) { ok = false; }
          else if (field.type === 'tel' && !/^[0-9]{10}$/.test(field.value)) { ok = false; }

          if (!ok) { isValid = false; field.classList.add('error'); if (err) err.style.display = 'block'; }
        });

        const coursesChecked = document.querySelectorAll('input[name="courses"]:checked').length;
        const coursesError = document.getElementById('coursesError');
        if (coursesChecked === 0) { isValid = false; coursesError.style.display = 'block'; }
        else { coursesError.style.display = 'none'; }
        return isValid;
      }

      function getFormData() {
        const courses = Array.from(document.querySelectorAll('input[name="courses"]:checked'))
          .map(cb => cb.value).join(', ');
        return {
          'પૂરું નામ': document.getElementById('fullName').value,
          'ઇમેઇલ': document.getElementById('email').value,
          'ફોન નંબર': document.getElementById('phone').value,
          'જન્મ તારીખ': document.getElementById('dob').value,
          'લિંગ': document.getElementById('gender').value,
          'જિલ્લો': document.getElementById('district').value,
          'સરનામું': document.getElementById('address').value,
          'સર્વોચ્ચ શિક્ષણ': document.getElementById('qualification').value,
          'ટકાવારી / CGPA': document.getElementById('percentage').value,
          'પાસ થયાનું વર્ષ': document.getElementById('passingYear').value,
          'પસંદ કરેલ કોર્સ': courses,
          'તૈયારીનું સ્થળ': document.getElementById('preparationPlace').value,
          'EMERGENCY સંપર્ક નામ': document.getElementById('emergencyName').value,
          ' સંબંધ': document.getElementById('emergencyRelationship').value,
          'EMERGENCY ફોન નંબર': document.getElementById('emergencyPhone').value,
          'સબમિશન સમય': new Date().toLocaleString('en-IN')
        };
      }

      // 3) Storage + display
      function saveToLocalStorage(data) {
        const entries = getFromLocalStorage();
        entries.push(data);
        localStorage.setItem('admissionEntries', JSON.stringify(entries));
      }
      function getFromLocalStorage() {
        try { return JSON.parse(localStorage.getItem('admissionEntries') || '[]'); }
        catch { return []; }
      }
      function displayStoredData() {
        const container = document.getElementById('submittedDataContainer');
        const listDiv = document.getElementById('dataList');
        const entries = getFromLocalStorage();
        listDiv.innerHTML = '';
        if (entries.length > 0) {
          container.style.display = 'block';
          entries.forEach((entry, index) => {
            const item = document.createElement('div');
            item.style.cssText = "padding:15px; border:1px solid #ddd; border-radius:8px; margin-bottom:10px; background:white;";
            item.innerHTML = `<strong>${index + 1}. ${entry['પૂરું નામ']}</strong> (${entry['પસંદ કરેલ કોર્સ'] || ''})`;
            listDiv.appendChild(item);
          });
        } else {
          container.style.display = 'none';
        }
      }
      displayStoredData();

      // 4) Export helpers
      function getTimestamp() {
        const d = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
      }
      function exportToExcel(data, filename) {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Admissions");
        XLSX.writeFile(workbook, filename);
      }

      // 5) Hidden admin actions (shown only after key combo)
      const exportAllBtn = document.getElementById('exportAllBtn');
      const clearDataBtn = document.getElementById('clearDataBtn');

      exportAllBtn?.addEventListener('click', function() {
        const allData = getFromLocalStorage();
        if (allData.length > 0) {
          exportToExcel(allData, `all-admissions-${getTimestamp()}.xlsx`);
        } else {
          alert('નિકાસ કરવા માટે કોઈ સાચવેલી એન્ટ્રીઓ નથી.');
        }
      });

      clearDataBtn?.addEventListener('click', function() {
        if (confirm('શું તમે ખાતરીપૂર્વક બધો સાચવેલો ડેટા સાફ કરવા માંગો છો?')) {
          localStorage.removeItem('admissionEntries');
          displayStoredData();
          alert('બધો ડેટા સફળતાપૂર્વક સાફ થઈ ગયો છે.');
        }
      });

      // 6) Keyboard shortcuts
      function setAdminMode(on) {
        document.body.classList.toggle('is-admin', !!on);
        // Persist last state (handy during refresh)
        localStorage.setItem('admission_admin_mode', on ? '1' : '0');
      }
      function toggleAdminMode() {
        setAdminMode(!document.body.classList.contains('is-admin'));
      }
      // Restore last state
      setAdminMode(localStorage.getItem('admission_admin_mode') === '1');

      window.addEventListener('keydown', (e) => {
        const ctrlOrMeta = e.ctrlKey || e.metaKey;
        const key = (e.key || '').toLowerCase();

        // Toggle visibility: Ctrl/Cmd + Shift + E
        if (ctrlOrMeta && e.shiftKey && key === 'e') {
          e.preventDefault();
          toggleAdminMode();
          return;
        }

        // Direct export: Ctrl/Cmd + Shift + X
        if (ctrlOrMeta && e.shiftKey && key === 'x') {
          e.preventDefault();
          const allData = getFromLocalStorage();
          if (allData.length) {
            exportToExcel(allData, `all-admissions-${getTimestamp()}.xlsx`);
          } else {
            alert('નિકાસ કરવા માટે કોઈ સાચવેલી એન્ટ્રીઓ નથી.');
          }
          return;
        }

        // Clear all: Ctrl/Cmd + Shift + L
        if (ctrlOrMeta && e.shiftKey && key === 'l') {
          e.preventDefault();
          if (confirm('શું તમે ખાતરીપૂર્વક બધો સાચવેલો ડેટા સાફ કરવા માંગો છો?')) {
            localStorage.removeItem('admissionEntries');
            displayStoredData();
            alert('બધો ડેટા સફળતાપૂર્વક સાફ થઈ ગયો છે.');
          }
          return;
        }
      });
    });
  </script>
  <script>
document.addEventListener('DOMContentLoaded', () => {
  // Toggle visibility of admin-only controls via Ctrl + Shift + V
  (function() {
    function setAdminUI(on) {
      document.body.classList.toggle('is-admin', !!on);
    }
    function toggleAdminUI() {
      setAdminUI(!document.body.classList.contains('is-admin'));
    }

    // Always start hidden on load (no persistence)
    setAdminUI(false);

    // Shortcut: Ctrl + Shift + V
    window.addEventListener('keydown', (e) => {
      const key = (e.key || '').toLowerCase();
      if (e.ctrlKey && e.shiftKey && key === 'v') {
        e.preventDefault();
        e.stopPropagation();
        toggleAdminUI();
      }
    }, true);
  })();

  // Optional safety: if your buttons aren’t marked, mark them now
  document.getElementById('exportAllBtn')?.setAttribute('data-admin-only', '');
  document.getElementById('clearDataBtn')?.setAttribute('data-admin-only', '');
});
</script>
</body>
</html>

