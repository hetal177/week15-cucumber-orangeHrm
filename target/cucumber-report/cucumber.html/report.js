$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("leave.feature");
formatter.feature({
  "line": 1,
  "name": "Orangehrm Leave Test",
  "description": "As a user I want to navigate to login page successfully",
  "id": "orangehrm-leave-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9265394100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should navigate to employee leave page successfully",
  "description": "",
  "id": "orangehrm-leave-test;user-should-navigate-to-employee-leave-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on leave list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify employee \"Show Leave with Status\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 311947900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 149795200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 150638700,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3090626900,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLeaveList()"
});
formatter.result({
  "duration": 21230434100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show Leave with Status",
      "offset": 17
    }
  ],
  "location": "LeaveSteps.verifyEmployeeText(String)"
});
formatter.result({
  "duration": 61882500,
  "status": "passed"
});
formatter.after({
  "duration": 3009992300,
  "status": "passed"
});
formatter.before({
  "duration": 4441521300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user should search employee successfully",
  "description": "",
  "id": "orangehrm-leave-test;user-should-search-employee-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on leave list",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter employee name \"Linda Anderson\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verify serach result of employee name \"Linda Anderson\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 216600800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 174729100,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2446959300,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLeaveList()"
});
formatter.result({
  "duration": 21750862300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Linda Anderson",
      "offset": 23
    }
  ],
  "location": "LeaveSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 156827500,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 841647600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Linda Anderson",
      "offset": 39
    }
  ],
  "location": "LeaveSteps.verifySerachResultOfEmployeeName(String)"
});
formatter.result({
  "duration": 40118387400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Linda Anderson\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-1AUVA277\u0027, ip: \u0027172.23.16.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fd72710c3f23f8b14f8c336d8130da3b, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Linda Anderson\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57138}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57138/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd72710c3f23f8b14f8c336d8130da3b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.orangehrmlive.demo.pages.LeaveListPage.verifyEmployeeName(LeaveListPage.java:52)\r\n\tat com.orangehrmlive.demo.cucumber.steps.LeaveSteps.verifySerachResultOfEmployeeName(LeaveSteps.java:56)\r\n\tat ???.Then verify serach result of employee name \"Linda Anderson\"(leave.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2422312500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Orangehrm Login Test",
  "description": "As a user I want to navigate to login page successfully",
  "id": "orangehrm-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4288948200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should navigate to login page successfully",
  "description": "",
  "id": "orangehrm-login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the \"Welcome sdzfasf\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 195764600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 188616100,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2412151600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome sdzfasf",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iShouldSeeTheText(String)"
});
formatter.result({
  "duration": 677980600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cWelcome [Paul]\u003e but was:\u003cWelcome [sdzfasf]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.orangehrmlive.demo.cucumber.steps.LoginSteps.iShouldSeeTheText(LoginSteps.java:17)\r\n\tat ???.Then I should see the \"Welcome sdzfasf\" text(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2299560700,
  "status": "passed"
});
formatter.before({
  "duration": 5659954300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify text when user logout",
  "description": "",
  "id": "orangehrm-login-test;verify-text-when-user-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on welcome admin button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify \"LOGIN Panel\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LeaveSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 186123800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LeaveSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 203792100,
  "status": "passed"
});
formatter.match({
  "location": "LeaveSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2554659400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnWelcomeAdminButton()"
});
formatter.result({
  "duration": 690042100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20614153700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 8
    }
  ],
  "location": "LoginSteps.verifyText(String)"
});
formatter.result({
  "duration": 2784400,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.orangehrmlive.demo.cucumber.steps.LoginSteps.verifyText(LoginSteps.java:29)\r\n\tat ???.Then verify \"LOGIN Panel\" text(login.feature:18)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 1114465400,
  "status": "passed"
});
});