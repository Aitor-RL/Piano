# Prueba el proyecto

https://kant003.github.io/piano/


# Empaquetado web

- Tengo ofoscación
- Tengo mimificación
- Tengo compresión de imagenes
- Tree shaking
- Tengo preprocesadores de css (scss)
- Tengo frameworks de css (tailwind)
- Tengo frameworks web (react, vue)
- Uso de lenguajes que no sean javascript (typescript, jsx)
- Tengo mecanismos de optimización del codigo
- Servidor web de pruebas
- Testing
- etc etc


# Empaquetadores famosos

- webpack
- rollup
- wmr
- esbuilt
- parcel
- snowpack
- * vite


# Pasos

## Crear un proyecto node a partir de npm
npm init --yes

## Añadir la dependencia con tonejs (dependencia de produccion)
npm install tone

## Añadir el empaquetador parcel (dependecia de desarrollo)

npm install --save-dev parcel


## Construimos y arrancamos la aplicación 
npx parcel src/index.html
npx parcel build src/index.html


## Añadimos el librería react
npm install react react-dom


# Comitear a github
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/kant003/piano.git
git push origin master