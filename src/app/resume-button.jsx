"use client";

import Image from "next/image";

const resumeHref = "/resume.pdf";

export default function ResumeButton() {
  function handleClick() {
    const resumeWindow = window.open(resumeHref, "_blank", "noopener,noreferrer");

    if (resumeWindow) {
      resumeWindow.opener = null;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = resumeHref;
    downloadLink.download = "resume.pdf";
    downloadLink.rel = "noreferrer";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  }

  return (
    <button
      className="button button-dark button-small resume-button"
      onClick={handleClick}
      type="button"
    >
      <span>Resume</span>
      <Image src="/assets/download.svg" alt="" width={18} height={18} />
    </button>
  );
}
