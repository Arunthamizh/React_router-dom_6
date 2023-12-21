import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Root() {
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
            <ul>
              <li>
                {/* // ! Client side routing allows our app to update the URL without requesting another document from the server. 
                    //!Instead, the app can immediately render new UI. Let's make it happen with <Link>. */}
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link href={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            {/* // ! The child route are rendered inside the Outlet */}
            <Outlet />
        </div>
      </>
    );
  }