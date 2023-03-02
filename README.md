# My Awesome App

¡Bienvenido a mi aplicación! Esta es una aplicación en donde el usuario puede ver la información sobre las ubicaciones (locations) del universo de “Rick and Morty”. Esta aplicación fue creada con Vite y React.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5174) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Tecnologías
▪	Vite
▪	React
▪	Axios

## Instalación
Clona este repositorio en tu computadora local.
Abre una terminal y navega a la carpeta del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:

### `npm install`

Una vez que se hayan instalado las dependencias, puedes correr la aplicación con el siguiente comando:

### `npm run dev`


## Contribuir
Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork de este repositorio.
Crea una nueva rama con tus cambios:

### `git checkout -b my-feature`

Haz tus cambios y haz un commit:

### `git commit -m "mi mensaje de commit"`

Haz un push a tu rama:

### `git push origin my-feature`

Abre un Pull Request y describe tus cambios.

## ¡Gracias por contribuir!

<br>

## Algunas Características de mi App 

Consumo de API: https://rickandmortyapi.com/documentation/#get-a-single-location, se utiliza para obtener la información de una ubicación con id aleatorio.

Creación de un componente llamado “LocationInfo” que muestra la información acerca de cada ubicación de la siguiente manera: Nombre(“Name”), tipo(“Type”), dimensión a la que pertenece(“Dimension”), la cantidad de residentes(“Population”) y el id de la dimensión(“Id”).

Creación de un input donde el usuario introducirá el id o el nombre de una ubicación y automáticamente mientras va escribiendo se desplegará una lista de ubicaciones que contengan lo requerido por el usuario y al hacer clic en una de estas ubicaciones es donde se traerá la información.

Creación de un componente llamado “ResidentCard” que va a recibir la URL del residente por props, la va a consumir y va a mostrar la siguiente información: Nombre(“name”), imagen (“image”), status: alive, dead o unknown (“Status”), lugar de origen (“Origin”), cantidad de episodios donde aparece (“Episodes where appear”) y el tipo de especie (“Species”).

<br>

## ¿Quieres ver mi app despleagada?
Visita <a href="https://rick-and-morty-t.netlify.app/" target="_blank">Rick and Morty</a>.





