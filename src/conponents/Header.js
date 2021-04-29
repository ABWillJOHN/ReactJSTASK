import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={!showAddTask ? "green" : "red"}
        text={!showAddTask ? "Add" : "Close"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
