import PromptCard from "./PromptCard";

const Profile = ({ posts, handleDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <PromptCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Profile;
