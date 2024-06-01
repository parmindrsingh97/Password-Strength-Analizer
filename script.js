    <script>
        const passwordInput = document.getElementById("password");
        const togglePasswordButton = document.getElementById("toggle-password");
        const passwordStrengthMeter = document.querySelector(".password-strength-meter-fill");
        const passwordStrengthDescription = document.querySelector(".password-strength-description");
        const passwordFeedback = document.getElementById("password-feedback");

        passwordInput.addEventListener("input", updatePasswordStrength);
        togglePasswordButton.addEventListener("click", togglePasswordVisibility);

        function updatePasswordStrength() {
            const password = passwordInput.value;
            const strength = calculatePasswordStrength(password);
            const strengthPercentage = (strength / 4) * 100;
            passwordStrengthMeter.style.width = `${strengthPercentage}%`;
            passwordStrengthMeter.style.backgroundColor = getPasswordStrengthColor(strength);
            passwordStrengthDescription.textContent = getPasswordStrengthDescription(strength);
            updatePasswordFeedback(strength);
        }

        function calculatePasswordStrength(password) {
            let strength = 0;
            if (password.length >= 8) strength++;
            if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
            if (/\d/.test(password)) strength++;
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
            return strength;
        }

        function getPasswordStrengthDescription(strength) {
            switch (strength) {
                case 0: return "Very Weak";
                case 1: return "Weak";
                case 2: return "Moderate";
                case 3: return "Strong";
                case 4: return "Very Strong";
                default: return "";
            }
        }

        function getPasswordStrengthColor(strength) {
            switch (strength) {
                case 0: return "#FF0000"; // Red
                case 1: return "#FF4500"; // OrangeRed
                case 2: return "#FFD700"; // Gold
                case 3: return "#32CD32"; // LimeGreen
                case 4: return "#008000"; // Green
                default: return "";
            }
        }

        function updatePasswordFeedback(strength) {
            if (strength <= 1) {
                passwordFeedback.style.display = "block";
                passwordFeedback.textContent = "Weak: Please enter a stronger password.";
            } else {
                passwordFeedback.style.display = "none";
            }
        }

        function togglePasswordVisibility() {
            const type = passwordInput.getAttribute("type");
            if (type === "password") {
                passwordInput.setAttribute("type", "text");
                togglePasswordButton.textContent = "Hide";
            } else {
                passwordInput.setAttribute("type", "password");
                togglePasswordButton.textContent = "Show";
            }
        }
    </script>
