import React, { useState } from "react";
// import "./styles.css";
//import "../static/Headerstyle.css";
export default function App() {
  const [sidebarState, setSidebarState] = useState(false);
  function handleClick() {
    setSidebarState(sidebarState ? false : true);
    return "None";
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard-navbar header">
        <div className="container-fluid h-100">
          <div className="row justify-content-center h-100">
            <div className="col-12 align-self-center pl-3 navbar-head-brand">
              <a href="/">FASHOPI</a>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-body">
        <div className="wrapper">
          <div className={sidebarState ? "sidebar active" : "sidebar"}>
            <div className="sidebar-top">
              <div className="sidebar-menu">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Home</span>
                    </a>
                  </li>
                  {/* <li className="list-group-item divider" /> */}
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Aboutus</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Botiques</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Expos</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-th-large" /> <span>Malls</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-bottom">
              <div className="sidebar-menu">
                <ul className="list-group">
                  {/* <li className="list-group-item">
                    <a href="#">
                      <i className="fa fa-bolt" /> <span>Upgrade</span>
                    </a>
                  </li> */}
                  {/* <li className="list-group-item">
                    <a href="#">
                      <i className="far fa-credit-card" />{" "}
                      <span>What's New?</span>
                    </a>
                  </li> */}
                  {/* <li className="list-group-item">
                    <a href="#">
                      <i className="far fa-question-circle" /> <span>Help</span>
                    </a>
                  </li> */}
                  <li
                    className="list-group-item sidebar-toggle"
                    onClick={handleClick}
                  >
                    <a>
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                      {/* <i className="fas fa-chevron-circle-left" />{" "} */}
                      <span>Collapse</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content main">
            <div className="container h-100">
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum.
              </p>
              <p>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
