import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! This page will give you insight on who I am and what I do best.
        <h1>My Background</h1>
      <p>My name is Prescilla Natasha Mkhabela, but I prefer being called Natasha.</p>
      <p>I am 21 years old from Pretoria. I have 5 siblings and I am the eldest.</p>
      <h1>What I studied and Where? </h1>
      <p>I studied Software Engineering at WeThinkCode_ where I learnt programming languages like Python, Java, JavaScript, SQL, Fluter, Dart and many more. </p>
      <h1>My Coding Interests</h1>
      <p>I enjoy front-end development the most because it allows me to ecplore my creative side and I like seeing things come alive.</p>
      <h1>Why I want to be a SovTech Developer</h1>
      <p>The main reason why I would love to be a SovTech Developer is that I appreciate the kind of work that they are doing and I too want to be proud about one day contributing to the work.</p>
      <p> I am particularly interested in how AI can be leveraged to drive growth and engagement for businesses. </p>
      <p>Most importantly, I am drawn to SovTech's focus on custom software development, as I believe that each project should be tailored to the client's unique requirements. I am excited about the prospect of working on projects that have a real impact, and I am eager to contribute my skills and expertise to your team.</p>
      </p>
    </Layout>
    
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage