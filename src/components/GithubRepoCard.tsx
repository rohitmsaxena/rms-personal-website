import React, { useEffect, useState } from "react";

interface GitHubRepoCardProps {
  owner: string;
  repo: string;
}

export default function GithubRepoCard({ owner, repo }: GitHubRepoCardProps) {
  const [repoData, setRepoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        if (!response.ok) throw new Error("Failed to fetch repository data");

        const data = await response.json();
        setRepoData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepoData();
  }, [owner, repo]);

  if (loading)
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="card bg-base-200 shadow-lg p-4 rounded-lg max-w-md">
      <div className="flex items-center gap-4">
        <img
          src={repoData.owner.avatar_url}
          alt={repoData.owner.login}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{repoData.full_name}</h2>
          <a
            href={repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/*todo: maybe implement actual descriptions in the repo?*/}
      {/*<p className="mt-2 text-gray-600">*/}
      {/*  {repoData.description || "No description available."}*/}
      {/*</p>*/}

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>⭐ {repoData.stargazers_count} Stars</span>
        <span>🍴 {repoData.forks_count} Forks</span>
        <span>🐞 {repoData.open_issues_count} Issues</span>
      </div>
    </div>
  );
}
