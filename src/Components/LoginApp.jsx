import React from 'react'
import LoginContent from './AuthForms/LoginContent';

function LoginApp() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      data-name="LoginApp"
      data-file="LoginApp.jsx"
    >
      <Navbar activePage="login" />
      <main className="flex-1">
        <LoginContent />
      </main>
      <Footer />
    </div>
  );
}
export default LoginApp;