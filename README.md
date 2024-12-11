## Welcome to DICOM API
### Installing DICOM API
These instructions assume you have git and node/npm installed, and your environment is Linux or Mac OS.
```shell
git clone https://github.com/jessethouin/dicom.git

cd dicom

npm install

npm run build

npm run start
```
To check that everything is working correctly, open your browser to http://localhost:3030/docs where you'll
find the OpenAPI documentation for the DICOM API.
### (Optional) Install and run the DICOM Viewer
Now that you've got the API up and running, you can install and start the React app.
```shell
git clone https://github.com/jessethouin/dicom-app.git

cd dicom-app

npm install

npm run build

# you may have to run the following command with sudo

npm install -g serve

serve -s build
```
Open your browser to http://localhost:3000/. Click the button labeled "UPLOAD DICOM FILE" and choose a DICOM image.
(If you don't have one, you can use the one in the DICOM API project folder located at `dicom/src/tests/IM000001.test`).
After the image loads, you can choose a DICOM tag from the dropdown to show its value.

### That's it, have fun!