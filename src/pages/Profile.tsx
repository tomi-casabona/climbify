import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";
import { User } from "firebase/auth";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      <h2>Hello {user ? user.email : "Guest"}</h2>
    </>
  );
};
