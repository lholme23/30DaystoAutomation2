//Test scenario

let isValidCredentials = true;
let dashboardLoaded = true;
let apiStatus = 200;

if (isValidCredentials && dashboardLoaded && apiStatus === 2000){
    console.log("Login test Passed");
} else {
    console.log ("Login test failed");
}


let loginStatus = "failed";

if (loginStatus === "success") {
    console.log ("Login Successful");
} else {
    console.log ("Login failed");
}
    
let responseTime = 250;

if (responseTime <= 200) {
  console.log("🚀 Excellent");
} else if (responseTime <= 400) {
  console.log("⚠️ Acceptable");
} else {
  console.log("🐢 Too Slow");
}

let browser = "Safari";

switch (browser) {
  case "Chrome":
    console.log("Running tests in Chrome");
    break;
  case "Edge":
    console.log("Running tests in Edge");
    break;
  case "Safari":
    console.log("Running tests in Safari");
    break;
  default:
    console.log("Browser not supported");
}

// Simulated Login Test Scenario

let loginButtonExists = true;        // Element check
let loginSuccess = false;       // API/auth success
let pageTitle = "Dashboard";         // What loads after login

// Conditional Logic
if (loginButtonExists) {
  console.log("🟢 Login button found — starting test...");

  if (loginSuccess && pageTitle === "Dashboard") {
    console.log("✅ Login test passed — Dashboard loaded successfully!");
  } else if (loginSuccess && pageTitle !== "Dashboard") {
    console.log("⚠️ Login successful but redirected to wrong page.");
  } else {
    console.log("❌ Login failed — check credentials or API response.");
  }

} else {
  console.log("❌ Login button not found — stopping test!");
}