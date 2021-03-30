import React, { Component } from 'react'
import styles from './Notification.module.css'

export default class Notification extends Component {
    render() {
        return (
            <div className = {styles.container}>
                <p className = {styles.text}>Contact already exists</p>
            </div>
        )
    }
}
