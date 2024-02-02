import useAuth from "../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <h2 className="text-4xl">
        Welcome!{user?.displayName ? user.displayName : "Back"}{" "}
      </h2>
    </div>
  );
};

export default UserHome;
