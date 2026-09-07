function AdminHeader({ onToggleSidebar }) {
  return (
    <header className="admin-header">

      <div className="header-brand">
        <button className="sidebar-toggle-inline" onClick={onToggleSidebar} title="Toggle sidebar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect y="3" width="16" height="2" rx="1" fill="currentColor" />
            <rect y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>

        <div className="header-logo">
          <h2>NER PLATFORM</h2>
          <span>Logistics Intelligence</span>
        </div>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search anything..." />
      </div>

      <div className="header-actions">
        <button className="notification-button">🔔</button>
        <div className="admin-profile">
          <div className="profile-avatar">A</div>
          <span>Admin</span>
          <span className="profile-arrow">▾</span>
        </div>
      </div>

    </header>
  );
}

export default AdminHeader;