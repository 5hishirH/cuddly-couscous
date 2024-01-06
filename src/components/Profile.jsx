import PromptCard from "./PromptCard";

const Profile = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PromptCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Profile;
