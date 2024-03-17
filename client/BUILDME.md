src/
|-- components/ # Composants réutilisables
| |-- Button.js
| |-- NavBar.js
|-- pages/ # Dossiers spécifiques à chaque page
| |-- HomePage/
| | |-- HomePage.js
| | |-- HomePage.css
| |-- EventDetailsPage/
| | |-- EventDetailsPage.js
| | |-- EventDetailsPage.css
| |-- UserProfilePage/
| | |-- UserProfilePage.js
| | |-- UserProfilePage.css
|-- services/ # Logique de communication avec l'API
| |-- api.js
|-- App.js # Composant racine, routage entre les pages
|-- index.js # Point d'entrée de l'application
