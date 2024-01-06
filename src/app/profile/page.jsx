"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleDelete = (post) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      showDenyButton: true,
      confirmButtonText: "No",
      confirmButtonColor: "#fde68a",
      denyButtonText: `Yes, Delete`,
      denyButtonColor: "#ef4444",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // stay signed in
      } else if (result.isDenied) {
        // logout
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE",
          });

          const filteredPosts = myPosts.filter((item) => item._id !== post._id);

          setMyPosts(filteredPosts);

          toast.success("Post successfully deleted!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <ToastContainer />
      <Profile posts={myPosts} handleDelete={handleDelete} />
    </div>
  );
};

export default MyProfile;
