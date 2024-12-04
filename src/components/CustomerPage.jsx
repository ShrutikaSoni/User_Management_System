import React, { useState } from "react";
import "./CustomerPage.css"; // Add appropriate styling if needed
import Navbar from "./navbar/Navbar";
import Sidebar from "./sideBar/Sidebar";
import CustNavbar from "./cusnavbar/CustNavbar";
import CusSidebar from "./CusSidebar/CusSidebar";

// Modal component for displaying and editing data
const Modal = ({ payment, onClose, onSave, onDelete }) => {
  const [userName, setUserName] = useState(payment.userName);
  const [email, setEmail] = useState(payment.email);
  const [role, setRole] = useState(payment.role);
  const [status, setStatus] = useState(payment.status); // Track status

  const handleSave = () => {
    const updatedPayment = { ...payment, userName, email, role, status };
    onSave(updatedPayment); // Save the updated payment details
    onClose(); // Close the modal
  };

  const handleDelete = () => {
    onDelete(payment.id); // Delete the payment
    onClose(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Payment Details</h3>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
        </select>
        <br />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <br />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save Changes</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

const CustomerPage= () => {
  const [payments, setPayments] = useState([
    { id: 1, userName: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active" },
    { id: 2, userName: "Jane Smith", email: "jane.smith@example.com", role: "Customer", status: "Inactive" },
    { id: 3, userName: "Alice Brown", email: "alice.brown@example.com", role: "Customer", status: "Active" },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewPayment = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSavePayment = (updatedPayment) => {
    const updatedPayments = payments.map((payment) =>
      payment.id === updatedPayment.id ? updatedPayment : payment
    );
    setPayments(updatedPayments);
  };

  const handleDeletePayment = (paymentId) => {
    const updatedPayments = payments.filter((payment) => payment.id !== paymentId);
    setPayments(updatedPayments);
  };

  const renderPaymentsTable = () => {
    return payments.map((payment) => (
      <tr key={payment.id}>
        <td>{payment.id}</td>
        <td>{payment.userName}</td>
        <td>{payment.email}</td>
        <td>{payment.role}</td>
        <td>{payment.status}</td>
        <td>
          <button className="view-btn" onClick={() => handleViewPayment(payment)}>
            View
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <CustNavbar/>
      <CusSidebar/>

      <div className="PaymentInfo">
            <div className="payment-container">
              <h3>Existing Users</h3>
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{renderPaymentsTable()}</tbody>
              </table>
            </div>
          </div>
       
     

      {showModal && (
        <Modal
          payment={selectedPayment}
          onClose={handleCloseModal}
          onSave={handleSavePayment}
          onDelete={handleDeletePayment}
        />
      )}
    </>
  );
};

export default CustomerPage;
