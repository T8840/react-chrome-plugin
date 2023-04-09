## Installing and Running
### Procedures:
1. Check if your Node.js version is >= 18.
2. Clone this repository.
3. Change the package's name, description, and repository fields in package.json.
4. Change the name of your extension on src/manifest.json.
5. Run npm install to install the dependencies.
6. Run npm start
7. Load your extension on Chrome following:
  - Access chrome://extensions/
  - Check Developer mode
  - Click on Load unpacked extension
  - Select the build folder.
Happy hacking.

### Packing
After the development of your extension run the command

$ NODE_ENV=production npm run build

## TODO
1. chrome.storage没有生效
2. 引入taiwindcss也没有生效
