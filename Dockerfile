# Usa la imagen oficial de Node.js como base
FROM node:20.9.0

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia los archivos necesarios (package.json y package-lock.json) para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos al directorio de trabajo en la imagen
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "index.js"]