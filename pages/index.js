import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Actions from "../components/Actions";
import About1L from "../components/About1L";

const Index = () => {
  return (
    <Layout pageTitle="1L Gala Landing Page">
      <Header />
      <Hero />
      <About />
      <Actions />
      <About1L/>
    </Layout>
  )
}

export default Index