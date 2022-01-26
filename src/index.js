//import inquirer
const inquirer = require("inquirer");

// declare questions
const questions = [
  {
    type: "number",
    message: "Enter the length of your password:",
    name: "lengthOfPassword",
  },
  {
    type: "confirm",
    message: "Would you like to add lowercase characters?",
    name: "isLowercase",
  },
  {
    type: "confirm",
    message: "Would you like to add uppercase characters?",
    name: "isUppercase",
  },
  {
    type: "confirm",
    message: "Would you like to add numeric characters?",
    name: "isNumeric",
  },
  {
    type: "confirm",
    message: "Would you like to add special characters?",
    name: "isSpecialCharacters",
  },
];

// declare retry question

const retryQuestion = {
  type: "confirm",
  message: "Would you like to retry? ",
  name: "retry",
};

// declare verification function
const validateAnswers = (answers) => {
  if (answers.lenthOfPassword < 10) {
    return false;
  }

  const acceptedChoices = [
    answers.isLowercase,
    answers.isUppercase,
    answers.isNumeric,
    answers.isSpecialCharacters,
  ].filter((choice) => {
    return choice;
  });

  if (acceptedChoices.length < 2) {
    return false;
  }

  return true;
};

// declare a password generatePassword
const generatePassword = (answers) => {
  return "password123!";
};

// declare async start function
const start = async () => {
  let inProgress = true;
  while (inProgress) {
    // prompt questions and store answer
    const answers = await inquirer.prompt(questions);

    // call validate answers function
    const isValid = validateAnswers(answers);

    if (isValid) {
      // if answer isValid generate password
      const password = generatePassword(answers);

      console.log(`Your random password is ${password}`);
      inProgress = false;
    } else {
      console.log(
        "\n\nPlease ensure you select a minimum of 2 criteria and a password length greater than 8 characters\n\n"
      );

      // else prompt retry question
      const retryAnswer = await inquirer.prompt(retryQuestion);

      if (!retryAnswer.retry) {
        inProgress = false;
      }
    }
  }
};

// call start function
start();
