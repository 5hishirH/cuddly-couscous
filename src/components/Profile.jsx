import PromptCard from "./PromptCard";

const Profile = ({ posts, handleEdit, handleDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Profile;
