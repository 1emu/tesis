# TF Arnaudo-Nodar
## Setup de Ambiente
Las instrucciones sirven para un ambiente Linux con Android como destino.
Para otras plataformas chequear: https://facebook.github.io/react-native/docs/0.44/getting-started.html

1) Instalar Node version 6 superior (Actualmente estamos usando v8.9.1)
Recomiendo instalarlo usando NVM(https://github.com/creationix/nvm) ya que permite manejar distintas versiones de node.

2) Instalar react-native cli `npm install -g react-native-cli`

3) Instalar JDK 8 o superior

4) Instalar Android Studio y Android SDK httrarse que los paquetes Android SDK, Android SDK Platform y Android Virtual Device estan seleccionados.
- Luego dentro de Android Studio, ingresar a Preferences > Appearance & Behavior > System Settings > Android SDK
- En SDK Platform instalar para Android 6.0 los siguientes paquetes: Google APIs, Android SDK Platform 23,Intel x86 Atom_64 System Image, Google APIs Intel x86 Atom_64 System Image
- En SDK Tools seleccionar la version 23.0.1 de Android SDK Build-Tools
- Finalmente agregar las siguientes 3 lineas al archivo .bash_profile
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

5) Instalar el resto de las dependencias, corriendo `npm install` dentro de la carpeta del proyecto

## Correr aplicacion durante el desarrollo

1) Levantar un emulador de Android desde Android Studio o conectar un celular a travez de USB

2) En una terminal correr `react-native start`

3) En otra terminal correr `react-native run-android`. esto deberia levantar la aplicacion en el dispositivo.


## Empaquetar la aplicacion para instalar en otros celulares
Las instrucciones detalladas estan aca: https://facebook.github.io/react-native/docs/0.44/signed-apk-android.html
