/* SIGNUP FUNCTION */
async function signupUser(e) {
  e.preventDefault();

  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value;
  let phone = document.getElementById("signupNumber").value.trim();

  if (!email || !password) {
    alert("Please enter your email and password!");
    return;
  }

  try {
    // Create user in Firebase Authentication
    let userInfo = await auth.createUserWithEmailAndPassword(email, password);
    let user = userInfo.user;

    // Save user info in Firestore
    await db.collection("users").doc(user.uid).set({
      name: name || "",
      email: email,
      phone: phone || "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Signup successful! Welcome ");
    window.location.href = "login.html";
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

/* LOGIN FUNCTION */
async function loginUser(e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("Please enter your email and password!");
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("Login successful! ");
    window.location.href = "index.html";
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}