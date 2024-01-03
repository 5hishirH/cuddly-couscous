import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section>
      <div>
        <h2>{type} Post</h2>
        {type === "Create" && (
          <h3>
            Create and share amazing prompts with the world, and let your
            imagination run wild with any AI-powered platform
          </h3>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Your AI Prompt</span>
          </div>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="textarea textarea-bordered h-24"
            placeholder="Write your AI prompt here"
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">
              <span>Tag </span>
              (#product, #webdevelopment, #idea, etc)
            </span>
          </div>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#tag"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-4 mt-4">
          <Link
            href={"/"}
            className="btn btn-outline btn-secondary btn-sm rounded-full"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-success btn-sm rounded-full text-white"
          >
            {submitting ? `${type.slice(0, -1)}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
