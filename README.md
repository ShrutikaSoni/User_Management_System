# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Overview:
This project is a secure and efficient admin dashboard designed to manage users, roles, and dynamic permissions. Administrators can view, modify, and control access to application features through a user-friendly interface. The dashboard aims to support role-based access control (RBAC), ensuring granular permission management to enhance security and operational efficiency.

#Features:
1. User Management
Components:
UserList: Table displaying users with options to add/edit/delete and toggle status.
UserForm: Form for adding or editing users (fields: Name, Email, Role, Status).
Features:
Role assignment dropdown in the form.
Status toggle button in the table.

2. Role Management
Components:
RoleList: Table displaying roles with options to add/edit/delete.
RoleForm: Form for defining a role (fields: Name, Description, Permissions).
Multi-select dropdown or checkboxes for assigning permissions.
Group permissions by category for better clarity.

3. Dynamic Permissions
   Display permissions in a grouped format.
