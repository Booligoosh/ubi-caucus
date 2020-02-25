<template>
  <div>
    <div class="hero">
      <div class="logo">
        <img src="img/>=.svg" alt="UBI Caucus Logo" />
        <span>
          UBI Caucus
          <span class="tagline">&mdash; Make the economy work for us</span>
        </span>
      </div>
      <blockquote>
        Working to secure a Universal Basic Income for <i>all</i> Americans.
      </blockquote>
    </div>
    <!-- <h1>Our projects</h1> -->
    <div class="projects">
      <a href="https://vote.us.openubiproject.org" class="project">
        <h2>
          Vote <span class="ubi-highlight">UBI</span>
          <span class="link-arrow">↗</span>
        </h2>
        <p>See what the candidates in your area think about UBI</p>
      </a>
      <a href="https://support.us.openubiproject.org" class="project">
        <h2>
          Support <span class="ubi-highlight">UBI</span>
          <span class="link-arrow">↗</span>
        </h2>
        <p>Find and support candidates running for congress who support UBI</p>
      </a>
      <a
        href="https://www.change.org/p/democratic-national-committee-i-support-ubi"
        class="project"
      >
        <h2>
          <span class="ubi-highlight">UBI</span> Petition
          <span class="link-arrow">↗</span>
        </h2>
        <p>
          Sign the petition to show America's support of Universal Basic Income
        </p>
      </a>
      <a href="https://shop.us.openubiproject.org/" class="project">
        <h2>
          <span class="ubi-highlight">UBI</span> Shop
          <span class="link-arrow">↗</span>
        </h2>
        <p>
          Buy some UBI Caucus merch! Profits go to the Humanity Forward Fund.
        </p>
      </a>
    </div>
    <a
      class="candidate-link"
      href="http://candidate.survey.us.openubiproject.org"
      ><b>Are you a candidate?</b> Join the UBI Caucus!</a
    >
  </div>
</template>

<style lang="scss">
/* Unscoped */
</style>

<style lang="scss" scoped>
$grid-gap: 0.5rem;

.page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // max-width: none;
  padding-top: 0;
  margin-top: 3rem;
}

.hero {
  padding: 5rem;
  border-radius: 10px 10px 0 0;
  background: #243665;
  color: white;
  flex-grow: 1;
  margin-bottom: $grid-gap;
  // margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .logo {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: 300;
    opacity: 0.8;
    img {
      height: 1em;
      margin-right: 0.7rem;
      margin-bottom: 4px;
    }
    .tagline {
      opacity: 0.5;
    }
  }

  blockquote {
    font-size: 5rem;
    margin: 0;
    // color: hsla(0, 0%, 100%, 0.5);
    i {
      color: white;
      font-weight: 600;
    }
  }
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: $grid-gap;
  border-radius: 0 0 10px 10px;
  overflow: hidden;

  .project {
    padding: 2rem;
    text-decoration: none;

    &:nth-child(1) {
      background: hsl(210, 29%, 24%);
      color: white;
    }
    &:nth-child(2) {
      background: hsl(203, 89%, 53%);
      color: white;
    }
    &:nth-child(3) {
      background: hsl(0, 100%, 69%);
      color: white;
    }
    &:nth-child(4) {
      background: hsl(210, 30%, 90%);
      color: inherit;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 0.5rem;

      .ubi-highlight {
        opacity: 0.5;
      }

      .link-arrow {
        float: right;
      }
    }
    p {
      margin: 0;
    }
  }
}

.candidate-link {
  display: block;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  opacity: 0.5;
  transition: opacity 200ms ease-in-out;
}

.candidate-link:hover {
  opacity: 1;
}

@media screen and (max-width: 1320px) {
  .hero {
    margin-top: 0;
  }
}

@media screen and (max-width: 1050px) {
  .projects {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 835px) {
  .hero blockquote {
    font-size: 3.3rem;
  }
}

@media screen and (max-width: 775px) {
  .tagline {
    display: none;
  }
}

@media screen and (max-width: 605px) {
  .hero {
    padding: 3rem;
  }
  .projects {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 540px) {
  .hero blockquote {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 450px) {
  .page {
    padding: 0;
  }
  .candidate-link {
    padding: 2rem;
    margin-top: 0;
  }
  .hero,
  .projects {
    border-radius: 0;
  }
}
@media screen and (max-width: 390px) {
  .hero {
    padding: 2rem;
    blockquote {
      font-size: 2rem;
    }
  }
}
</style>
