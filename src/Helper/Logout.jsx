import "./logout.css"

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="logout">
      <button onClick={logout}> Logout </button>
    </div>
  );
};

export default Logout;
