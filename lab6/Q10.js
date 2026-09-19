function passwordStrength(password) {
  let score = 0;

  const nums = "0123456789";
  const specialCharacters = "!@#$%^&*()-_+=[]{};:',.<>?/\\|`~";

  if (password.length >= 8) {
    score += 1;
  }

  for (let val of nums) {
    if (password.includes(val)) {
      score++;
      break;
    }
  }

  for (let ch of password) {
    if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
      score++;
      break;
    }
  }

  for (let sp of specialCharacters) {
    if (password.includes(sp)) {
      score++;
      break;
    }
  }

  if (score <= 1) {
    return "weak";
  } else if (score <= 3) {
    return "meduim";
  } else {
    return "Strong";
  }
}

console.log(passwordStrength("Hello123!"));
