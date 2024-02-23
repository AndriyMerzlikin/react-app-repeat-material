import jsonData from "../data.json";

import { UserCard } from "../UserCard/UserCard";

export const ChooseUser = () => (
  <div>
    {jsonData.map((user) => (
      <div>
        <UserCard
          firstName={user.firstName}
          shortBiography={user.shortBiography}
          publicContacts={user.publicContacts}
        />
      </div>
    ))}
  </div>
);
