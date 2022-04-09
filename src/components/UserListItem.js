import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return <li>{`${props.username} (${props.age} years old)`}</li>;
};
export default UserListItem;
