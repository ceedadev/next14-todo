"use client";

import GitHubButton from "react-github-btn";

export default function GhButton() {
  return (
    <GitHubButton
      href="https://github.com/ceedadev"
      data-size="large"
      aria-label="Follow @ceedadev on GitHub"
    >
      Follow @ceedadev
    </GitHubButton>
  );
}
