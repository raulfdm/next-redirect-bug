import React from "react";
import Link from "next/link";

const posts = [
  {
    slug: "e-o-coronavirus-hein",
    title: "Texto Sobre o corona virus",
    language: "pt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vero praesentium voluptate porro, quos tempora placeat itaque aut similique soluta debitis magnam? Vitae atque nobis quasi odit a earum cupiditate.",
  },
  {
    slug: "outro-examplo",
    title: "Outro example randomico",
    language: "pt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vero praesentium voluptate porro, quos tempora placeat itaque aut similique soluta debitis magnam? Vitae atque nobis quasi odit a earum cupiditate.",
  },
];

const backToHome = {
  pt: "Voltar ao início",
  en: "Back to home",
};

const Blog = ({ title, content, language }) => {
  return (
    <div>
      <Link href="/">
        <a>{backToHome[language]}</a>
      </Link>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      ...post,
    },
  };
}

export const getStaticPaths = () => {
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
    locale: post.language,
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Blog;
