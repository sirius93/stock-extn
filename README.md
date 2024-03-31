# StockExtn

## Steps
- Install Angular CLI got to [Angular official Website](https://angular.io)
- Install Node latest stable version 
  ```
   git clone https://github.com/sirius93/stock-extn.git

   npm install

   ng Build

   ```
- Chrome
  - hit (chrome://extensions/)[chrome://extensions/]
  - Enable developer mode
  - You should see `Load Unpackaged` option
  - Click and select the folder `dist/stock-extn` or the folder inside dist that has manifest.json file, whatever works for you.
  - Visit the whitelisted url `https://finance.yahoo.com/quote/*` the extn should be enabled only for this url
  - Extension will not work for other urls ( Ideally, If that does not happen, **Report**)
  - Test
 
- _**Stock Details**_ May not load the relevenet data on initil route (Known bug, tried fixing, Maybe I will have to spend more time with Angular or some fundamental changes required in project structure, But Hey, I works at least, and it's a **POC**)
- Go back to form and come back, details will show you everything.
  
      
