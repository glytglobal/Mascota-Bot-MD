# Mascota-Bot-MD
> <b>🜲 VERSION 1.0 (BETA)</b>

<p align="center"> 
<a href="https://github.com/glytglobal/"><img src="http://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color0000e6&width=435&lines=Mascota-Bot-MD+%F0%9F%98%BC;Disfruta+del+bot.+%E2%9A%A1" height="90px"></a> 
</p>

<p align="center">
<img src="https://telegra.ph/file/5d7e41b68eb51b299f0ff.jpg" alt="Myling.io" width="900"/>
</p>

<p align="center">
<a href="#"><img title="Mascota-Bot-MD" src="https://img.shields.io/badge/SI TE AGRADA EL REPOSITORIO APÓYAME CON UNA ESTRELLITA 🌟 ¡GRACIAS! -red?colorA=%255ff0000&colorB=0000e6&style=for-the-badge"></a>
</p>  

<p align="center">
<a href="#"><img title="Mascota-Bot-MD" src="https://img.shields.io/badge/COMPATIBLE CON LA VERSIÓN MULTI DISPOSITIVOS DE WHATSAPP-red?colorA=%F77F48FF&colorB=%F77F48FF&style=for-the-badge"></a>
</p>

<p align="center">   
<a href="https://github.com/glytglobal/Mascota-Bot-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/glytglobal/Mascota-Bot-MD?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/glytglobal/Mascota-Bot-MD/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/glytglobal/Mascota-Bot-MD?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/glytglobal/Mascota-Bot-MD/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/glytglobal/Mascota-Bot-MD?label=Stars&color=yellow&style=flat-square"></a>
</p>

<p align="center"> 
<a href="https://github.com/glytglobal/"><img src="http://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color0000e6&width=435&lines=¡Hey!+Mascota+%F0%9F%98%BC;Mascota-Bot-MD.+%E2%9A%A1" height="90px"></a> 
</p>

### LINKS - INFO
> AL ACCEDER A NUESTRA PAGINA WEB DE ENLACES/LINKS OFICIALES.
> TENDRA ACCESO A LA NUEVAS NOTICIAS/PODER USAR EL BOT EN LOS GRUPOS Y MAS

<a href="https://www.atom.bio/Mascota-Bot-MD">
<img src="https://img.shields.io/badge/PAGINA_WEB-FF0000?style=for-the-badge&logo=biolink&logoColor=white">
</a>

-----

## 🌟 INSTALACIONES

-----
### 🌟 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA POR TERMUX 🫰
[![blog](https://img.shields.io/badge/Instalacion-Automatica-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/shorts/ZLJYDUM6vSY)
> **NOTA:** COMANDOS PARA INSTALAR DE FORMA AUTOMATICA EN TERMUX
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/glytglobal/Mascota-Bot-MD/master/Mascota.sh | bash
```
```js
// PERSONALIZAR INSTALACIÓN AUTOMÁTICA (En caso de una Bifurcación)
// PARAMETROS EDITABLES

// REFERENCIA
"wget -O - https://raw.githubusercontent.com/glytglobal/Mascota-Bot-MD/master/Mascota.sh | bash"

// PARÁMETROS QUE PUEDE SER MODIFICADOS --> "[...]"
"wget -O - https://raw.githubusercontent.com/[usuario]/[repositorio]/[rama]/Mascota.sh | bash"
```
#### MODIFICAR ARCHIVO [`Mascota.sh`](https://github.com/glytglobal/Mascota-Bot-MD/blob/master/mascota.sh)
```js
//LÍNEAS A MODIFICAR
205 --> "git clone https://github.com/[user]/[repositorio].git"
//EJEMPLO: git clone https://github.com/glytglobal/Mascota-Bot-MD.git

209 --> "cd [repositorio]"
//EJEMPLO: cd Mascota

// UNA VEZ HECHO LOS CAMBIOS EJECUTE LOS NUEVOS COMANDOS EN TERMUX 
```
-----
### 🪄 (OPCIÓN 2) INSTALACIÓN MANUAL POR TERMUX - GITHUB 
> **NOTA:** COMANDOS PARA INSTALAR DE FORMA MANUAL
```bash
termux-setup-storage
```
```bash
apt update
```
```bash
apt upgrade
```
```bash
pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/glytglobal/Mascota-Bot-MD
```
```bash
cd Mascota
```
```bash
yarn install
```
```bash
npm install
```
```bash
npm start
```
> **ADVERTENCIA:** Si aparece (Y/I/N/O/D/Z) use la letra "y" + "ENTER" para continuar con la instalación 
------------------
### 📁 (OPCIÓN 3) INSTALACIÓN POR TERMUX - ARCHIVOS
> **NOTA:** DESCARGUE Y DESCOMPRIME EL ARCHIVO
### [`Mascota-Bot-MD ~ Archivos`](https://github.com/glytglobal/Mascota-Bot-MD/archive/refs/heads/master.zip)
[![blog](https://img.shields.io/badge/NO_TUTORIAL-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
](https://www.youtube.com/shorts/ZLJYDUM6vSY)
```bash
termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
cd storage/downloads/Mascota-Bot-MD-master/Mascota-Bot-MD
yarn install
npm install
npm start
```

> **NOTA:** Guardar los archivos en la ubicación: storage/downloads/Mascota-Bot-MD-master/Mascota-Bot-MD-master   
----
### 🜲 USAR MASCOTABOT 24/7 EN TERMUX 
> Ejecutar estos comandos dentro de la carpeta Mascota-Bot-MD
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### ⬇️ Opciones Disponibles
> **ADVERTENCIA:** Esto eliminará todo el historial que hayas establecido con PM2:
```bash 
pm2 delete index
``` 
> Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:
```bash 
pm2 logs 
``` 
> Si desea detener la ejecución de Termux use:
```bash 
pm2 stop index
``` 
> Si desea iniciar de nuevo la ejecución de Termux use:
```bash 
pm2 start index
``` 
----
### 😼 ACTUALIZAR MASCOTA-BOT-MD
> **Note** Comandos para actualizar de forma automática Mascota-Bot-MD
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/glytglobal/Mascota-Bot-MD/master/update.sh | bash 
```
#### PARA QUE NO PIERDA SU PROGRESO EN MYLINGBOT, ESTOS COMANDOS REALIZARÁN UN RESPALDO DE SU DATABASE.JSON Y SE AGREGARÁ A LA VERSIÓN MÁS RECIENTE.
> **ADVERTENCIA:** ESTOS COMANDOS SOLO FUNCIONAN PARA TERMUX, REPLIT, LINUX                           
----

#### 𝘾𝙍𝙀𝘼𝘿𝙊𝙍
<a href="https://github.com/glytglobal/">
<img src="https://telegra.ph/file/35f5a789ab08eef0067bd.jpg"/>

##### 𝘾𝙊𝙇𝘼𝘽𝙊𝙍𝘼𝘿𝙊𝙍𝙀𝙎 - 𝘼𝙂𝙍𝘼𝘿𝙀𝘾𝙄𝙈𝙄𝙀𝙉𝙏𝙊𝙎

<a href="https://github.com/glytglobal/Mascota-Bot-MD/graphs/contributors">
<img src="https://contrib.rocks/image?repo=glytglobal/Mascota-Bot-MD"/> 
</a>

# 𝘗𝘖𝘚𝘋𝘈𝘛𝘈:
> 𝙂𝙍𝘼𝘾𝙄𝘼𝙎 𝙋𝙊𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘽𝙊𝙏
