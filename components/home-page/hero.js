import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/felix-yusupov.jpeg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Felix</h1>
      <p>
        I blog about early 20th century Russian politics, the dangers of a
        motivated peasantry, and why Communism is the answer to a question no
        one asked.
      </p>
    </section>
  );
}

export default Hero;
