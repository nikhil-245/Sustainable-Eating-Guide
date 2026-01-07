const exploreButton = document.getElementById("exploreBtn");

if (exploreButton) {
    exploreButton.addEventListener("click", () => {
        document.querySelector(".dashboard").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Calculator functionality (only runs on calculator page)
const calculateBtn = document.getElementById('calculateBtn');

if (calculateBtn) {
    calculateBtn.addEventListener('click', function() {
        // Get input values
        const meat = parseInt(document.getElementById('meat').value) || 0;
        const dairy = parseInt(document.getElementById('dairy').value) || 0;
        const vegetables = parseInt(document.getElementById('vegetables').value) || 0;
        const grains = parseInt(document.getElementById('grains').value) || 0;

        // Validate that at least one field has a value
        if (meat === 0 && dairy === 0 && vegetables === 0 && grains === 0) {
            document.getElementById('result').innerHTML = `
                <p style="color: #d32f2f; font-weight: 500;">⚠️ Please enter at least one value to calculate your carbon footprint.</p>
            `;
            return;
        }

        // Calculate CO2 emissions (kg CO2 per serving)
        // Based on average environmental impact data
        const meatCO2 = meat * 6.6;      // Red meat has high impact
        const dairyCO2 = dairy * 1.3;    // Dairy moderate impact
        const vegCO2 = vegetables * 0.4;  // Vegetables low impact
        const grainCO2 = grains * 0.9;   // Grains low-moderate impact

        const total = meatCO2 + dairyCO2 + vegCO2 + grainCO2;

        // Determine impact level and recommendation
        let impactLevel = '';
        let impactColor = '';
        let recommendation = '';
        let emoji = '';

        if (total < 20) {
            impactLevel = 'Low Impact';
            impactColor = '#2e7d32';
            emoji = '🌱';
            recommendation = 'Great job! Your food choices have a relatively low carbon footprint. Keep up the sustainable eating habits!';
        } else if (total < 50) {
            impactLevel = 'Moderate Impact';
            impactColor = '#f57c00';
            emoji = '🌾';
            recommendation = 'You\'re doing okay! Consider reducing meat consumption and adding more plant-based meals to lower your impact.';
        } else {
            impactLevel = 'High Impact';
            impactColor = '#c62828';
            emoji = '🌍';
            recommendation = 'There\'s room for improvement. Try replacing some meat servings with plant-based proteins like beans, lentils, or tofu.';
        }

        // Display results with enhanced formatting
        document.getElementById('result').innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <h3 style="font-size: 1.6rem; margin-bottom: 10px;">Your Weekly Carbon Footprint</h3>
                <div style="font-size: 3rem; margin: 15px 0;">${emoji}</div>
                <p style="font-size: 2rem; font-weight: 700; color: #1b4332; margin: 10px 0;">
                    ${total.toFixed(2)} kg CO<sub>2</sub>
                </p>
                <p style="font-size: 1.2rem; font-weight: 600; color: ${impactColor}; margin: 10px 0;">
                    ${impactLevel}
                </p>
            </div>
            
            <div style="border-top: 2px solid #95d5b2; padding-top: 20px; margin-top: 20px;">
                <h4 style="color: #1b4332; margin-bottom: 15px; font-size: 1.1rem;">Breakdown by Category:</h4>
                <div style="display: grid; gap: 10px;">
                    ${meat > 0 ? `<p><strong>🥩 Meat:</strong> ${meatCO2.toFixed(2)} kg CO<sub>2</sub> (${meat} servings)</p>` : ''}
                    ${dairy > 0 ? `<p><strong>🥛 Dairy:</strong> ${dairyCO2.toFixed(2)} kg CO<sub>2</sub> (${dairy} servings)</p>` : ''}
                    ${vegetables > 0 ? `<p><strong>🥬 Vegetables:</strong> ${vegCO2.toFixed(2)} kg CO<sub>2</sub> (${vegetables} servings)</p>` : ''}
                    ${grains > 0 ? `<p><strong>🌾 Grains:</strong> ${grainCO2.toFixed(2)} kg CO<sub>2</sub> (${grains} servings)</p>` : ''}
                </div>
            </div>

            <div style="background-color: rgba(82, 183, 136, 0.1); padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #52b788;">
                <h4 style="color: #1b4332; margin-bottom: 10px; font-size: 1.05rem;">💡 Recommendation:</h4>
                <p style="line-height: 1.6; margin: 0;">${recommendation}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #95d5b2;">
                <p style="font-size: 0.85rem; color: #666; font-style: italic; margin: 0;">
                    Annual estimate: ~${(total * 52).toFixed(0)} kg CO<sub>2</sub> per year
                </p>
            </div>
        `;
    });

    // Add Enter key support for inputs
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('calculateBtn').click();
            }
        });
    });

    // Add input validation to prevent negative numbers
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
}
// Login page functionality
var showPasswordBtn = document.getElementById('showPassword');
var passwordInput = document.getElementById('password');

if (showPasswordBtn && passwordInput) {
    showPasswordBtn.onclick = function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.textContent = '??';
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.textContent = '???';
        }
    };
}

var messageBox = document.getElementById('message');

if (messageBox) {
    var url = window.location.href;
    
    if (url.indexOf('error=invalid') > -1) {
        messageBox.className = 'message error';
        messageBox.textContent = '? Wrong username or password!';
    }
    
    if (url.indexOf('error=empty') > -1) {
        messageBox.className = 'message error';
        messageBox.textContent = '?? Please fill in all fields!';
    }
    
    if (url.indexOf('login=success') > -1) {
        messageBox.className = 'message success';
        messageBox.textContent = '? Login successful! Redirecting...';
        setTimeout(function() {
            window.location.href = 'Index.html';
        }, 1500);
    }
}
