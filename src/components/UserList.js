import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <ul className={styles.users}>
      {props.allUsers.map((user) => {
        return (
          <UserListItem username={user.userName} age={user.age} key={user.id} />
        );
      })}
    </ul>
  );
};

export default UserList;
