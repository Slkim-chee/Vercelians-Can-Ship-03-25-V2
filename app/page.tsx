// For an initial starting point, insert your GitHub username between the double quotes here.
// Letter casing doesn't matter.
import { EmptyState } from "./components/empty-state"
import { NotFound } from "./components/not-found"
import { Profile } from "./components/profile"
import { getGithubProfile } from "./lib/get-github-profile"
import { MyV0Component } from "./components/my-v0-component"

const yourGithubUsername = "Slkim-Chee"

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const profileData = await getGithubProfile(yourGithubUsername)

  if (!profileData) {
    return <EmptyState />
  }

  if (profileData === "not-found") {
    return <NotFound username={yourGithubUsername} />
  }

  return (
    <>
      <Profile username={yourGithubUsername} geo={searchParams} />
      <div className="mt-8">
        <MyV0Component />
      </div>
    </>
  )
}

