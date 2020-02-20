<template>
  <div>
    <blockquote class="pledge">
      <p>
        &ldquo;If elected, I pledge to introduce legislation that can be passed
        by the House, Senate and signed into law by the President in the first
        quarter of 2021 that transparently funds and guarantees a Universal
        Basic Income (UBI) for the citizens of the United States of America, at
        a rate which covers basic human needs in an effort to eliminate poverty,
        while building a robust national economy.&rdquo;
      </p>
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pledge {
  margin: 0;
  font-size: 2rem;
  color: #243665;
  line-height: 1.5em;
  font-style: italic;
  /* Gradient text */
  background: -webkit-linear-gradient(
    0deg,
    hsl(0, 100%, 69%),
    hsl(203, 89%, 53%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 585px) {
  .pledge {
    font-size: 1.5rem;
  }
}
</style>
