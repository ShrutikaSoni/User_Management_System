import React, { useState } from "react";
import "./Permissions.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sideBar/Sidebar";

const Permissions = () => {
  const [settings, setSettings] = useState({
    createAccounts: true,
    resetPassword: true,
    createWorkspaces: true,
    emailVerification: "Enforced",
    deleteGraceDelay: 30,
    trackWorkspaceUsage: true,
    showHelpMessage: false,
  });

  const handleToggle = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="admin-settings-container">
        <div className="section">
          <h2>General Settings</h2>
          <div className="setting-item">
            <label>Allow creating new accounts</label>
            <div className="toggle">
              <input
                type="checkbox"
                checked={settings.createAccounts}
                onChange={() => handleToggle("createAccounts")}
              />
              <span>{settings.createAccounts ? "Enabled" : "Disabled"}</span>
            </div>
            <p>By default, any user visiting your domain can sign up for a new account.</p>
          </div>

          <div className="setting-item">
            <label>Allow resetting password</label>
            <div className="toggle">
              <input
                type="checkbox"
                checked={settings.resetPassword}
                onChange={() => handleToggle("resetPassword")}
              />
              <span>{settings.resetPassword ? "Enabled" : "Disabled"}</span>
            </div>
            <p>By default, users can request a password reset link.</p>
          </div>

          <div className="setting-item">
            <label>Allow everyone to create new workspaces</label>
            <div className="toggle">
              <input
                type="checkbox"
                checked={settings.createWorkspaces}
                onChange={() => handleToggle("createWorkspaces")}
              />
              <span>{settings.createWorkspaces ? "Enabled" : "Disabled"}</span>
            </div>
            <p>
              By default, everyone can create new workspaces. Disable this to
              allow only staff to create new workspaces.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>User</h2>
          <div className="setting-item">
            <label>Email Verification</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="No verification"
                  checked={settings.emailVerification === "No verification"}
                  onChange={handleInputChange}
                  name="emailVerification"
                />
                No verification
              </label>
              <label>
                <input
                  type="radio"
                  value="Recommended"
                  checked={settings.emailVerification === "Recommended"}
                  onChange={handleInputChange}
                  name="emailVerification"
                />
                Recommended
              </label>
              <label>
                <input
                  type="radio"
                  value="Enforced"
                  checked={settings.emailVerification === "Enforced"}
                  onChange={handleInputChange}
                  name="emailVerification"
                />
                Enforced
              </label>
            </div>
            <p>Controls whether email addresses have to be verified.</p>
          </div>

          <div className="setting-item">
            <label>Delete grace delay</label>
            <input
              type="number"
              value={settings.deleteGraceDelay}
              onChange={handleInputChange}
              name="deleteGraceDelay"
              className="number-input"
            />
            <p>
              This is the number of days without a login after which an account
              scheduled for deletion is permanently deleted.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Maintenance</h2>
          <div className="setting-item">
            <label>Track workspace usage</label>
            <div className="toggle">
              <input
                type="checkbox"
                checked={settings.trackWorkspaceUsage}
                onChange={() => handleToggle("trackWorkspaceUsage")}
              />
              <span>{settings.trackWorkspaceUsage ? "Enabled" : "Disabled"}</span>
            </div>
            <p>
              Enables a nightly job that counts row and file usage per workspace,
              displayed on the premium workspace admin page.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Permissions;
