function AdminHeader() {
  return (
    <header className="admin-header">

      <div className="header-search">
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="header-actions">

        <button className="notification-button">
          🔔
        </button>

        <div className="admin-profile">
          <div className="profile-avatar">
            A
          </div>

          <span>Admin</span>

          <span className="profile-arrow">
            ▼
          </span>
        </div>

      </div>

    </header>
  );
}

export default AdminHeader;