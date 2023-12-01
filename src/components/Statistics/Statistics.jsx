import React from "react"
import { getRandomHexColor } from "../../helpers"
import css from "./Statistics.module.css"

function Statistics({ title, stats }) {
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statistics_list}>
            {stats.map(({ id, label, percentage }) => (
                <li key={id} className={css.statistics_item} style={{ backgroundColor: getRandomHexColor() }}>
                    <span>{label}</span>
                    <span>{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
    )
}

export default Statistics