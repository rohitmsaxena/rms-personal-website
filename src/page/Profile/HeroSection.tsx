import React from "react";
import { useResumeDownload } from "../../hooks/useResumeDownload";

export default function HeroSection() {
  const { downloadResume, isDownloading } = useResumeDownload();

  return (
    <div className="hero min-h-[70vh] bg-gradient-to-br from-base-200 to-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="avatar">
          <div className="w-64 h-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl overflow-hidden">
            {/* Replace with your actual profile image */}
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQEkgVgDwVWpdA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1615185867134?e=1748476800&v=beta&t=vqm-CRboeFGyHwO3BCZScHf2CuoLzqqQl7oQANU3IdQ"
              alt="Rohit Saxena"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600";
              }}
            />
          </div>
        </div>
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-5xl font-bold">Hi, I'm Rohit Saxena</h1>
          <div className="flex items-center mt-2">
            <div className="badge badge-accent p-3 mr-2">Open to Work</div>
            <p className="text-lg">Senior Full Stack Software Engineer</p>
          </div>
          <p className="py-6 text-xl">
            I'm passionate about building high-performance applications, cloud
            architecture, and mentoring developers. Currently focusing on
            building RAGs and learning how to leverage LLMs when building AI
            products.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/rohitsaxena42/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/rohitmsaxena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </button>
            </a>
            <button
              className={`btn btn-accent ${isDownloading ? "loading" : ""}`}
              onClick={downloadResume}
              disabled={isDownloading}
            >
              {!isDownloading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"></path>
                </svg>
              )}
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Full Stack",
              "React",
              "AWS",
              "Java",
              "Kotlin",
              "Spring Boot",
              "TypeScript",
            ].map((tag, index) => (
              <div key={index} className="badge badge-outline p-3">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
