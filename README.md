# Testing
Testing react app

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`

# Testing:
1. Unit Tests 單元測試 最常見以及容易實現 測試單個函數或類

2. Integration Tests 集成測試 測試不同代碼如何協同工作 可以測試數據庫請求

3. Automation Tests 自動化測試 測試真實生活場景 讓機器人模擬真人瀏覽點擊網站等等

# 測試工具：

1 前三的JavaScript 測試框架：Jasmine、Jest、Mocha

2 JavaScript 斷言庫：Jasmine、Jest、chai（Mocha用）

chai 斷言庫的介紹 https://www.chaijs.com/api/bdd/

3 測試運行器：Jasmine、Jest、Mocha、Karma.js(多加的，允許在瀏覽器中做測試)

4 Mocks, Stubs, and Spies(間諜、存根和模擬)：Jasmine、Jest、Sinon.js（Mocha用）

Sinon.js stubs的介紹 https://sinonjs.org/releases/v14/stubs/

5 代碼覆蓋率 (Code coverage)：istanbul、Jest、istanbul

輸出覆蓋率npm test -- --coverage

# 測試方法：

npm run test
接著按a來運行所有測試

# 單元測試
Jest介紹 https://jestjs.io/

# 異步測試 Asyncronous 可能會有異步的fetch或api調用

API推薦：（swapi）http ://swapi.py4e.com/api/people

調用API時需安裝node-fetch包

npm install node-fetch

# Jest Cheat Sheet
https://github.com/sapegin/jest-cheat-sheet

# Snapshot Testing
Enzyme
https://testing-library.com/docs/react-testing-library/migrate-from-enzyme/

有關 Enzyme ：shallow、mount、render. https://enzymejs.github.io/enzyme/docs/api/
