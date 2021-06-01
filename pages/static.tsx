import { GetStaticProps } from "next";

export default function Static({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/limaCoder');
  const user = await response.json()

  return {
    props: {
      user,
    },
    revalidate: 5,
  }
}