import React from "react";
import Auxiliary from "../../hoc/auxiliary";

import cssClasses from "./foodmenu.module.css";

function foodmenu(props) {
  return (
    <Auxiliary>
      <div className={cssClasses["card-container"]}>
        <div
          className={[cssClasses["card"], cssClasses["u-clearfix"]].join(" ")}
        >
          <div className={cssClasses["card-body"]}>
            <span
              className={[
                cssClasses["card-number"],
                cssClasses["card-circle"],
                cssClasses["subtle"],
              ].join(" ")}
            >
              {props.idCategory}
            </span>
            <span
              className={[cssClasses["card-author"], cssClasses["subtle"]].join(
                " "
              )}
            >
              Dennis Kroner
            </span>
            <h2 className={cssClasses["card-title"]}>New {props.category} Recipe</h2>
            <span
              className={[
                cssClasses["card-description"],
                cssClasses["subtle"],
              ].join(" ")}
            >
              {props.description}
            </span>
            <div className={cssClasses["card-read"]}>Read</div>
            <span
              className={[
                cssClasses["card-tag"],
                cssClasses["card-circle"],
                cssClasses["subtle"],
              ].join(" ")}
            >
              C
            </span>
          </div>
          <img
            src={props.img}
            alt={props.category}
            className={cssClasses["card-media"]}
          />
        </div>
        <div className={cssClasses["card-shadow"]}></div>
      </div>
    </Auxiliary>
  );
}

export default foodmenu;
