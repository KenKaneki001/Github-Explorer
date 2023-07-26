
# Github Explorer

GitHub Explorer is a web application that simplifies the process of exploring GitHub repositories and users. With this tool, users can easily find users using there username and exploror their repositories and can fork them.



##### Table of Contents
1. [Key Features](#Key-Features) 
2. [Technologies/Languages Used](#Technologies/Languages-Used)  
3. [Installation](#Installation)
4. [Features](#Features)
5. [Contributors](#Contributors)
6. [Contributing](#Contributing)
7. [Acknowledgements](#Acknowledgements)


  





##  Key Features

- **User Profile Analysis**: Enter a GitHub username to view a  summary of their repositories, followers and following.

- **User Authentication**: User authentication system using github login.


## Technologies/Languages Used:

GitHub Exploror is built using the following technologies and languages:

Front-end: HTML, CSS, JavaScript 
           
 Back-end: Django
 
GitHub API: Utilizes GitHub's API to fetch repository and user data
## Installation
### running locally:-

Clone the Repository

```bash
  git clone https://github.com/KenKaneki001/IITISoC.git
```


Install dependencies

```bash
~ Install python latest version from official website
~ pip install django
~ pip install django-allauth
~ python manage.py migrate
 ```
  Download Link:
   [ python version 3.11.4](https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe)

Start the server

```bash
~ python manage.py runserver localhost:8000
```


## Features
 
- **User Authentication System:**
   
    Uses Github login to authenticate a user, retreiving user data like user name and log them in github as well which can be used fork repositories of other users.

   **User Profile Analysis:**
   User profile analysis uses github api to retrieve user data like repositories,their name, followers and following.
   U can also fork a user repositoriy if u logged in thorugh our Authentication system or through Github.

    
 
## Contributors

Aman Verma ([@Github Profile](https://github.com/KenKaneki001))
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aman-verma-35321026b/)

Abhishek Dorwal([@GithubProfile](https://github.com/abhidrwl))
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-dorwal-32898212b/)


## 🛠 Skills
Javascript, HTML, CSS, Django


## Contributing

GitHub Exploror is an open-source project. Contributions and feedback from the community are highly appreciated. If you encounter any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request on the project's GitHub repository.

Happy exploring! 🚀


## Acknowledgements

We would like to express our gratitude to the following individuals and communities who have contributed to the success of the GitHub Exploror project:

1. GitHub: Our project would not be possible without the incredible platform and services provided by GitHub. We appreciate their continuous efforts in fostering a thriving open-source community

2. GitHub API Developers: We acknowledge the efforts of the developers responsible for maintaining and improving the GitHub API. Their work enables us to access valuable repository and user data, making GitHub Exploror a powerful tool.

3. Django Team: The development of GitHub Exploror heavily relies on the Django library. We extend our thanks to the dedicated team behind React for providing an excellent framework for building dynamic user interfaces.






