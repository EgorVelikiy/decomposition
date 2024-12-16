import React from "react"
import './FooterItem.css'

interface FooterItemParams {
    title: string,
    children: JSX.Element
}


export default function FooterItem(props: FooterItemParams) {
    const data: JSX.Element[] = React.Children.map(props.children, (child) => child)
    return (
        <div>
            <h3 className="footer-item-title">
                <a className="footer-item-link" href="#">
                    {props.title}
                </a>
            </h3>
            <div className="footer-item-body">
                {data}
            </div>
        </div>
    )
}