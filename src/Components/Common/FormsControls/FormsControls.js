import React from "react";
import styles from "./FormsControls.module.css";

//settings for FormComponent has errors(leave from area,incorrect data etc.)

export const Attribute = (Element) => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <Element {...input}{...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}