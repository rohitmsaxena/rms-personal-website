import { useState } from "react";

export const useResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async () => {
    try {
      setIsDownloading(true);

      // This would normally make a fetch request or use a direct URL,
      // but for this example we'll use a relative path to the public directory
      const resumeUrl = "/Rohit Saxena 2025.pdf";

      // Creating an anchor element to trigger the download
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Rohit_Saxena_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    downloadResume,
    isDownloading,
  };
};
