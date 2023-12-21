import { Outlet, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { getContacts } from "../contacts";

export const loader = async() => {
    const contacts = await getContacts()
    return contacts // ! contacts is an array -->
}
export default function Root() {

    const { contacts }  = useLoaderData();

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>

          {contacts?.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                    {/* // ! Client side routing allows our app to update the URL without requesting another document from the server. 
                    //!Instead, the app can immediately render new UI. Let's make it happen with <Link>. */}
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail">
            {/* // ! The child route are rendered inside the Outlet */}
            <Outlet />
        </div>
      </>
    );
  }