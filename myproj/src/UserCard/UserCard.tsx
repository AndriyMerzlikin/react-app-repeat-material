// type FooterProps = {
//   copyright: string;
// };

// export const Footer: React.FC<FooterProps> = (props) => (
//   <footer>Footer {props.copyright}</footer>
// );

type DataProps = {
  firstName: string;
  shortBiography: string;
  publicContacts: {
    email: string;
    phone: string;
    website?: string;
  };
};

export const UserCard: React.FC<DataProps> = (props) => (
  <div>
    <h2>First name {props.firstName}</h2>
    <p>Short Biography: {props.shortBiography}</p>
    <p>Public Contacts:</p>
    <ul>
      <li>Email: {props.publicContacts.email}</li>
      <li>Phone: {props.publicContacts.phone}</li>
      <li>Address: {props.publicContacts.website}</li>
    </ul>
  </div>
);
