import { Profile } from "./profile"
import MyV0Component from "../my-v0-component"

export function ProfileWithFavorites({
  username,
  geo,
}: {
  username: string
  geo: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="space-y-8">
      <Profile username={username} geo={geo} />
      <MyV0Component />
    </div>
  )
}

