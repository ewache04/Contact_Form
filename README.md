<<<<<<< HEAD
# Contact Form Application

=======
>>>>>>> d1e64b4729bc15810542c8bff77f530aabad6c11
This project is a simple **Contact Form** built using HTML, CSS, JavaScript (with jQuery), and a responsive design approach. 
It includes a modal feature that displays user inputs after form submission.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Deployment](#setup-and-deployment)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)
  
## Features

- **Responsive Design:** Adjusts the layout of form fields based on screen size.
- **Form Validation:** Uses HTML5 form validation to ensure required fields are completed.
- **Modal Display:** Shows a modal with the submitted form data on successful submission.
- **Form Reset:** Clears the form and closes the modal after submission.

## Technologies

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla + jQuery)**
- **Bootstrap (for layout)**

## Setup and Deployment

To run this project on your local machine, follow these steps:

### Prerequisites

1. Make sure you have **Git** and a modern web browser installed.
2. Optionally, set up a local server such as [XAMPP](https://www.apachefriends.org/index.html), [MAMP](https://www.mamp.info/en/), or [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for serving the HTML files.

### Installation Steps

1. **Clone the repository:**

<<<<<<< HEAD
    ```bash
    git clone <repository-url goes here>
    ```

2. **Navigate to the project folder:**

    ```bash
    cd <project-folder name goes here>
    ```

3. **Open the `index.html` file in a browser:**

    If using a local server like XAMPP or MAMP, move the project folder to the server’s `htdocs` or relevant directory and access it through your browser. Example:

    ```
    http://localhost/contact-form/
    ```
=======
    
bash
    git clone <repository-url goes here>


2. **Navigate to the project folder:**

    
bash
    cd <project-folder name goes here>


3. **Open the index.html file in a browser:**

    If using a local server like XAMPP or MAMP, move the project folder to the server’s htdocs or relevant directory and access it through your browser. Example:

    
http://localhost/contact-form/

>>>>>>> d1e64b4729bc15810542c8bff77f530aabad6c11

### Project Structure
WebDesign_Project1/ │ ├── README.md # Project documentation ├── template/ │ └── index.html # Main HTML template file ├── css/ │ └── styles.css # CSS styles for the project └── js/ └── script.js # JavaScript logic for the project

## Usage

1. Fill out the contact form by entering the required fields: first name, last name, email, and message.
2. Choose the type of query (General Enquiry or Subject Request).
3. Click the **Submit** button.
4. A modal will appear with a summary of the submitted information.
5. Close the modal to reset the form and enter a new query.

## Code Overview

### HTML (index.html)

- The form contains input fields for first name, last name, email, and a message.
- A radio button group allows users to select the query type.
- Includes a checkbox for user consent and a submit button.

### CSS (styles.css)

<<<<<<< HEAD
- The layout uses a flexible grid system (`col-6` and `col-12` classes) to ensure responsiveness.
- Custom styles are defined for form elements, modal, and buttons.
- A basic reset (`margin: 0; padding: 0; box-sizing: border-box`) is applied for consistent styling.
=======
- The layout uses a flexible grid system (col-6 and col-12 classes) to ensure responsiveness.
- Custom styles are defined for form elements, modal, and buttons.
- A basic reset (margin: 0; padding: 0; box-sizing: border-box) is applied for consistent styling.
>>>>>>> d1e64b4729bc15810542c8bff77f530aabad6c11

### JavaScript (script.js)

- The form submission is intercepted to display the entered data in a modal.
- **adjustColumns()**: Adjusts the form layout based on screen width.
- **handleFormSubmit()**: Gathers form data and displays it in the modal.
- **closeModal()**: Hides the modal and resets the form.
- Event listeners handle form submission, modal closing, and window resizing.

## Contributing

Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to the branch.
4. Open a Pull Request and describe the changes you’ve made.

Please ensure your code follows best practices and includes proper comments and commit messages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<<<<<<< HEAD
Cheers! 🎉👨‍💻👩‍💻


=======
Cheers! 🎉👨‍💻👩‍💻
>>>>>>> d1e64b4729bc15810542c8bff77f530aabad6c11
