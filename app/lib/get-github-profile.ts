type GithubProfile = {
  login: string
  name: string
  avatar_url: string
  bio: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  // Add other fields you need
}

export async function getGithubProfile(username: string): Promise<GithubProfile | "not-found" | null> {
  if (!username) return null

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      // Add cache options to improve performance and reduce API rate limiting
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!res.ok) {
      if (res.status === 404) {
        return "not-found"
      }
      throw new Error(`GitHub API responded with status: ${res.status}`)
    }

    // Only consume the response body once
    const profile = await res.json()
    return profile
  } catch (error) {
    console.error("Error fetching GitHub profile:", error)
    return null
  }
}
